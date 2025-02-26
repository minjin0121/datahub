from datetime import datetime, timezone
from typing import Dict, Optional

import pydantic
from pydantic import Field

from datahub.configuration.common import AllowDenyPattern
from datahub.configuration.source_common import DatasetSourceConfigMixin
from datahub.configuration.validate_field_rename import pydantic_renamed_field
from datahub.ingestion.source.state.stale_entity_removal_handler import (
    StatefulStaleMetadataRemovalConfig,
)
from datahub.ingestion.source.state.stateful_ingestion_base import (
    StatefulIngestionConfigBase,
)
from datahub.ingestion.source.usage.usage_common import BaseUsageConfig


class UnityCatalogSourceConfig(
    StatefulIngestionConfigBase, BaseUsageConfig, DatasetSourceConfigMixin
):
    token: str = pydantic.Field(description="Databricks personal access token")
    workspace_url: str = pydantic.Field(
        description="Databricks workspace url. e.g. https://my-workspace.cloud.databricks.com"
    )
    workspace_name: Optional[str] = pydantic.Field(
        default=None,
        description="Name of the workspace. Default to deployment name present in workspace_url",
    )

    metastore_id_pattern: AllowDenyPattern = Field(
        default=AllowDenyPattern.allow_all(),
        description="Regex patterns for metastore id to filter in ingestion.",
    )

    catalog_pattern: AllowDenyPattern = Field(
        default=AllowDenyPattern.allow_all(),
        description="Regex patterns for catalogs to filter in ingestion. Specify regex to match the full `metastore.catalog` name.",
    )

    schema_pattern: AllowDenyPattern = Field(
        default=AllowDenyPattern.allow_all(),
        description="Regex patterns for schemas to filter in ingestion. Specify regex to the full `metastore.catalog.schema` name. e.g. to match all tables in schema analytics, use the regex `^mymetastore\\.mycatalog\\.analytics$`.",
    )

    table_pattern: AllowDenyPattern = Field(
        default=AllowDenyPattern.allow_all(),
        description="Regex patterns for tables to filter in ingestion. Specify regex to match the entire table name in `catalog.schema.table` format. e.g. to match all tables starting with customer in Customer catalog and public schema, use the regex `Customer\\.public\\.customer.*`.",
    )
    domain: Dict[str, AllowDenyPattern] = Field(
        default=dict(),
        description='Attach domains to catalogs, schemas or tables during ingestion using regex patterns. Domain key can be a guid like *urn:li:domain:ec428203-ce86-4db3-985d-5a8ee6df32ba* or a string like "Marketing".) If you provide strings, then datahub will attempt to resolve this name to a guid, and will error out if this fails. There can be multiple domain keys specified.',
    )

    include_table_lineage: Optional[bool] = pydantic.Field(
        default=True,
        description="Option to enable/disable lineage generation.",
    )

    include_ownership: bool = pydantic.Field(
        default=False,
        description="Option to enable/disable ownership generation for metastores, catalogs, schemas, and tables.",
    )

    _rename_table_ownership = pydantic_renamed_field(
        "include_table_ownership", "include_ownership"
    )

    include_column_lineage: Optional[bool] = pydantic.Field(
        default=True,
        description="Option to enable/disable lineage generation. Currently we have to call a rest call per column to get column level lineage due to the Databrick api which can slow down ingestion. ",
    )

    include_usage_statistics: bool = Field(
        default=True,
        description="Generate usage statistics.",
    )

    stateful_ingestion: Optional[StatefulStaleMetadataRemovalConfig] = pydantic.Field(
        default=None, description="Unity Catalog Stateful Ingestion Config."
    )

    @pydantic.validator("start_time")
    def within_thirty_days(cls, v: datetime) -> datetime:
        if (datetime.now(timezone.utc) - v).days > 30:
            raise ValueError("Query history is only maintained for 30 days.")
        return v

    @pydantic.validator("workspace_url")
    def workspace_url_should_start_with_http_scheme(cls, workspace_url: str) -> str:
        if not workspace_url.lower().startswith(("http://", "https://")):
            raise ValueError(
                "Workspace URL must start with http scheme. e.g. https://my-workspace.cloud.databricks.com"
            )
        return workspace_url
