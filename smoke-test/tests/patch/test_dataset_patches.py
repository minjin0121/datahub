import time
import uuid
from typing import Dict, Optional

from datahub.emitter.mce_builder import (make_dataset_urn, make_tag_urn,
                                         make_term_urn, make_user_urn)
from datahub.emitter.mcp import MetadataChangeProposalWrapper
from datahub.ingestion.graph.client import DataHubGraph, DataHubGraphConfig
from datahub.metadata.schema_classes import (AuditStampClass,
                                             DatasetLineageTypeClass,
                                             DatasetPropertiesClass,
                                             EditableSchemaFieldInfoClass,
                                             EditableSchemaMetadataClass,
                                             GlobalTagsClass,
                                             GlossaryTermAssociationClass,
                                             GlossaryTermsClass, OwnerClass,
                                             OwnershipClass,
                                             OwnershipTypeClass,
                                             TagAssociationClass,
                                             UpstreamClass,
                                             UpstreamLineageClass)
from datahub.specific.dataset import DatasetPatchBuilder


def test_dataset_ownership_patch(wait_for_healthchecks):
    dataset_urn = make_dataset_urn(
        platform="hive", name=f"SampleHiveDataset{uuid.uuid4()}", env="PROD"
    )
    owner_to_set = OwnerClass(
        owner=make_user_urn("jdoe"), type=OwnershipTypeClass.DATAOWNER
    )
    ownership_to_set = OwnershipClass(owners=[owner_to_set])

    owner_to_add = OwnerClass(
        owner=make_user_urn("gdoe"), type=OwnershipTypeClass.DATAOWNER
    )
    mcpw = MetadataChangeProposalWrapper(entityUrn=dataset_urn, aspect=ownership_to_set)
    with DataHubGraph(DataHubGraphConfig()) as graph:
        graph.emit_mcp(mcpw)
        owner = graph.get_aspect_v2(
            entity_urn=dataset_urn, aspect_type=OwnershipClass, aspect="ownership"
        )
        assert owner.owners[0].owner == make_user_urn("jdoe")

        for patch_mcp in (
            DatasetPatchBuilder(dataset_urn).add_owner(owner_to_add).build()
        ):
            graph.emit_mcp(patch_mcp)

        owner = graph.get_aspect_v2(
            entity_urn=dataset_urn, aspect_type=OwnershipClass, aspect="ownership"
        )
        assert len(owner.owners) == 2

        for patch_mcp in (
            DatasetPatchBuilder(dataset_urn).remove_owner(make_user_urn("gdoe")).build()
        ):
            graph.emit_mcp(patch_mcp)

        owner = graph.get_aspect_v2(
            entity_urn=dataset_urn, aspect_type=OwnershipClass, aspect="ownership"
        )
        assert len(owner.owners) == 1
        assert owner.owners[0].owner == make_user_urn("jdoe")


def test_dataset_upstream_lineage_patch(wait_for_healthchecks):
    dataset_urn = make_dataset_urn(
        platform="hive", name=f"SampleHiveDataset-{uuid.uuid4()}", env="PROD"
    )

    other_dataset_urn = make_dataset_urn(
        platform="hive", name=f"SampleHiveDataset2-{uuid.uuid4()}", env="PROD"
    )

    patch_dataset_urn = make_dataset_urn(
        platform="hive", name=f"SampleHiveDataset3-{uuid.uuid4()}", env="PROD"
    )

    upstream_lineage = UpstreamLineageClass(
        upstreams=[
            UpstreamClass(dataset=other_dataset_urn, type=DatasetLineageTypeClass.VIEW)
        ]
    )
    upstream_lineage_to_add = UpstreamClass(
        dataset=patch_dataset_urn, type=DatasetLineageTypeClass.VIEW
    )
    mcpw = MetadataChangeProposalWrapper(entityUrn=dataset_urn, aspect=upstream_lineage)

    with DataHubGraph(DataHubGraphConfig()) as graph:
        graph.emit_mcp(mcpw)
        upstream_lineage_read = graph.get_aspect_v2(
            entity_urn=dataset_urn,
            aspect_type=UpstreamLineageClass,
            aspect="upstreamLineage",
        )
        assert upstream_lineage_read.upstreams[0].dataset == other_dataset_urn

        for patch_mcp in (
            DatasetPatchBuilder(dataset_urn)
            .add_upstream_lineage(upstream_lineage_to_add)
            .build()
        ):
            graph.emit_mcp(patch_mcp)
            pass

        upstream_lineage_read = graph.get_aspect_v2(
            entity_urn=dataset_urn,
            aspect_type=UpstreamLineageClass,
            aspect="upstreamLineage",
        )
        assert len(upstream_lineage_read.upstreams) == 2
        assert upstream_lineage_read.upstreams[0].dataset == other_dataset_urn
        assert upstream_lineage_read.upstreams[1].dataset == patch_dataset_urn

        for patch_mcp in (
            DatasetPatchBuilder(dataset_urn)
            .remove_upstream_lineage(upstream_lineage_to_add.dataset)
            .build()
        ):
            graph.emit_mcp(patch_mcp)
            pass

        upstream_lineage_read = graph.get_aspect_v2(
            entity_urn=dataset_urn,
            aspect_type=UpstreamLineageClass,
            aspect="upstreamLineage",
        )
        assert len(upstream_lineage_read.upstreams) == 1
        assert upstream_lineage_read.upstreams[0].dataset == other_dataset_urn


def test_dataset_tags_patch(wait_for_healthchecks):
    dataset_urn = make_dataset_urn(
        platform="hive", name=f"SampleHiveDataset-{uuid.uuid4()}", env="PROD"
    )

    tag_urn = make_tag_urn(tag=f"testTag-{uuid.uuid4()}")

    tag_association = TagAssociationClass(tag=tag_urn, context="test")
    global_tags = GlobalTagsClass(tags=[tag_association])
    mcpw = MetadataChangeProposalWrapper(entityUrn=dataset_urn, aspect=global_tags)

    with DataHubGraph(DataHubGraphConfig()) as graph:
        graph.emit_mcp(mcpw)
        tags_read = graph.get_aspect_v2(
            entity_urn=dataset_urn,
            aspect_type=GlobalTagsClass,
            aspect="globalTags",
        )
        assert tags_read.tags[0].tag == tag_urn
        assert tags_read.tags[0].context == "test"

        new_tag = TagAssociationClass(tag=make_tag_urn(f"test-{uuid.uuid4()}"))
        for patch_mcp in DatasetPatchBuilder(dataset_urn).add_tag(new_tag).build():
            graph.emit_mcp(patch_mcp)
            pass

        tags_read = graph.get_aspect_v2(
            entity_urn=dataset_urn,
            aspect_type=GlobalTagsClass,
            aspect="globalTags",
        )
        assert tags_read.tags[0].tag == tag_urn
        assert tags_read.tags[0].context == "test"
        assert tags_read.tags[1].tag == new_tag.tag
        assert tags_read.tags[1].context is None

        for patch_mcp in DatasetPatchBuilder(dataset_urn).remove_tag(tag_urn).build():
            graph.emit_mcp(patch_mcp)
            pass

        tags_read = graph.get_aspect_v2(
            entity_urn=dataset_urn,
            aspect_type=GlobalTagsClass,
            aspect="globalTags",
        )
        assert len(tags_read.tags) == 1
        assert tags_read.tags[0].tag == new_tag.tag


def test_dataset_terms_patch(wait_for_healthchecks):
    def get_terms(graph, dataset_urn):
        return graph.get_aspect_v2(
            entity_urn=dataset_urn,
            aspect_type=GlossaryTermsClass,
            aspect="glossaryTerms",
        )

    dataset_urn = make_dataset_urn(
        platform="hive", name=f"SampleHiveDataset-{uuid.uuid4()}", env="PROD"
    )

    term_urn = make_term_urn(term=f"testTerm-{uuid.uuid4()}")

    term_association = GlossaryTermAssociationClass(urn=term_urn, context="test")
    global_terms = GlossaryTermsClass(
        terms=[term_association],
        auditStamp=AuditStampClass(
            time=int(time.time() * 1000.0), actor=make_user_urn("tester")
        ),
    )
    mcpw = MetadataChangeProposalWrapper(entityUrn=dataset_urn, aspect=global_terms)

    with DataHubGraph(DataHubGraphConfig()) as graph:
        graph.emit_mcp(mcpw)
        terms_read = get_terms(graph, dataset_urn)
        assert terms_read.terms[0].urn == term_urn
        assert terms_read.terms[0].context == "test"

        new_term = GlossaryTermAssociationClass(
            urn=make_term_urn(f"test-{uuid.uuid4()}")
        )
        for patch_mcp in DatasetPatchBuilder(dataset_urn).add_term(new_term).build():
            graph.emit_mcp(patch_mcp)
            pass

        terms_read = get_terms(graph, dataset_urn)

        assert terms_read.terms[0].urn == term_urn
        assert terms_read.terms[0].context == "test"
        assert terms_read.terms[1].urn == new_term.urn
        assert terms_read.terms[1].context is None

        for patch_mcp in DatasetPatchBuilder(dataset_urn).remove_term(term_urn).build():
            graph.emit_mcp(patch_mcp)
            pass

        terms_read = get_terms(graph, dataset_urn)
        assert len(terms_read.terms) == 1
        assert terms_read.terms[0].urn == new_term.urn


def get_field_info(
    graph: DataHubGraph, dataset_urn: str, field_path: str
) -> Optional[EditableSchemaFieldInfoClass]:
    schema_metadata = graph.get_aspect(
        entity_urn=dataset_urn,
        aspect_type=EditableSchemaMetadataClass,
    )
    assert schema_metadata
    field_info = [
        f for f in schema_metadata.editableSchemaFieldInfo if f.fieldPath == field_path
    ]
    if len(field_info):
        return field_info[0]
    else:
        return None


def test_field_terms_patch(wait_for_healthchecks):

    dataset_urn = make_dataset_urn(
        platform="hive", name=f"SampleHiveDataset-{uuid.uuid4()}", env="PROD"
    )

    field_path = "foo.bar"

    editable_field = EditableSchemaMetadataClass(
        [
            EditableSchemaFieldInfoClass(
                fieldPath=field_path, description="This is a test field"
            )
        ]
    )
    mcpw = MetadataChangeProposalWrapper(entityUrn=dataset_urn, aspect=editable_field)

    with DataHubGraph(DataHubGraphConfig()) as graph:
        graph.emit_mcp(mcpw)
        field_info = get_field_info(graph, dataset_urn, field_path)
        assert field_info
        assert field_info.description == "This is a test field"

        new_term = GlossaryTermAssociationClass(
            urn=make_term_urn(f"test-{uuid.uuid4()}")
        )
        for patch_mcp in (
            DatasetPatchBuilder(dataset_urn)
            .for_field(field_path)
            .add_term(new_term)
            .parent()
            .build()
        ):
            graph.emit_mcp(patch_mcp)
            pass

        field_info = get_field_info(graph, dataset_urn, field_path)

        assert field_info
        assert field_info.description == "This is a test field"
        assert len(field_info.glossaryTerms.terms) == 1
        assert field_info.glossaryTerms.terms[0].urn == new_term.urn

        for patch_mcp in (
            DatasetPatchBuilder(dataset_urn)
            .for_field(field_path)
            .remove_term(new_term.urn)
            .parent()
            .build()
        ):
            graph.emit_mcp(patch_mcp)
            pass

        field_info = get_field_info(graph, dataset_urn, field_path)

        assert field_info
        assert field_info.description == "This is a test field"
        assert len(field_info.glossaryTerms.terms) == 0


def test_field_tags_patch(wait_for_healthchecks):

    dataset_urn = make_dataset_urn(
        platform="hive", name=f"SampleHiveDataset-{uuid.uuid4()}", env="PROD"
    )

    field_path = "foo.bar"

    editable_field = EditableSchemaMetadataClass(
        [
            EditableSchemaFieldInfoClass(
                fieldPath=field_path, description="This is a test field"
            )
        ]
    )
    mcpw = MetadataChangeProposalWrapper(entityUrn=dataset_urn, aspect=editable_field)

    with DataHubGraph(DataHubGraphConfig()) as graph:
        graph.emit_mcp(mcpw)
        field_info = get_field_info(graph, dataset_urn, field_path)
        assert field_info
        assert field_info.description == "This is a test field"

        new_tag_urn = make_tag_urn(tag=f"testTag-{uuid.uuid4()}")

        new_tag = TagAssociationClass(tag=new_tag_urn, context="test")

        for patch_mcp in (
            DatasetPatchBuilder(dataset_urn)
            .for_field(field_path)
            .add_tag(new_tag)
            .parent()
            .build()
        ):
            graph.emit_mcp(patch_mcp)
            pass

        field_info = get_field_info(graph, dataset_urn, field_path)

        assert field_info
        assert field_info.description == "This is a test field"
        assert len(field_info.globalTags.tags) == 1
        assert field_info.globalTags.tags[0].tag == new_tag.tag

        # Add the same tag again and verify that it doesn't get added
        for patch_mcp in (
            DatasetPatchBuilder(dataset_urn)
            .for_field(field_path)
            .add_tag(new_tag)
            .parent()
            .build()
        ):
            graph.emit_mcp(patch_mcp)
            pass

        field_info = get_field_info(graph, dataset_urn, field_path)

        assert field_info
        assert field_info.description == "This is a test field"
        assert len(field_info.globalTags.tags) == 1
        assert field_info.globalTags.tags[0].tag == new_tag.tag

        for patch_mcp in (
            DatasetPatchBuilder(dataset_urn)
            .for_field(field_path)
            .remove_tag(new_tag.tag)
            .parent()
            .build()
        ):
            graph.emit_mcp(patch_mcp)
            pass

        field_info = get_field_info(graph, dataset_urn, field_path)

        assert field_info
        assert field_info.description == "This is a test field"
        assert len(field_info.globalTags.tags) == 0


def get_custom_properties(
    graph: DataHubGraph, dataset_urn: str
) -> Optional[Dict[str, str]]:
    dataset_properties = graph.get_aspect(
        entity_urn=dataset_urn,
        aspect_type=DatasetPropertiesClass,
    )
    assert dataset_properties
    return dataset_properties.customProperties


def test_custom_properties_patch(wait_for_healthchecks):

    dataset_urn = make_dataset_urn(
        platform="hive", name=f"SampleHiveDataset-{uuid.uuid4()}", env="PROD"
    )

    base_property_map = {"base_property": "base_property_value"}

    orig_dataset_properties = DatasetPropertiesClass(
        customProperties=base_property_map,
        name="test dataset",
        description="base description",
    )
    mcpw = MetadataChangeProposalWrapper(
        entityUrn=dataset_urn, aspect=orig_dataset_properties
    )

    with DataHubGraph(DataHubGraphConfig()) as graph:
        graph.emit(mcpw)
        # assert custom properties looks as expected
        custom_properties = get_custom_properties(graph, dataset_urn)
        assert custom_properties
        for k, v in base_property_map.items():
            assert custom_properties[k] == v

        new_properties = {
            "test_property": "test_value",
            "test_property1": "test_value1",
        }

        dataset_patch_builder = DatasetPatchBuilder(
            dataset_urn
        )
        for k, v in new_properties.items():
            dataset_patch_builder.add_custom_property(k, v)

        for patch_mcp in dataset_patch_builder.build():
            graph.emit_mcp(patch_mcp)

        custom_properties = get_custom_properties(graph, dataset_urn)

        assert custom_properties is not None
        for k, v in new_properties.items():
            assert custom_properties[k] == v

        # ensure exising properties were not touched
        for k, v in base_property_map.items():
            assert custom_properties[k] == v

        # Remove property
        for patch_mcp in (
            DatasetPatchBuilder(dataset_urn)
            .remove_custom_property("test_property")
            .build()
        ):
            graph.emit_mcp(patch_mcp)

        custom_properties = get_custom_properties(graph, dataset_urn)

        assert custom_properties is not None
        assert "test_property" not in custom_properties
        assert custom_properties["test_property1"] == "test_value1"

        # ensure exising properties were not touched
        for k, v in base_property_map.items():
            assert custom_properties[k] == v

        # Replace custom properties
        for patch_mcp in (
            DatasetPatchBuilder(dataset_urn)
            .set_custom_properties(new_properties)
            .build()
        ):
            graph.emit_mcp(patch_mcp)

        custom_properties = get_custom_properties(graph, dataset_urn)

        assert custom_properties is not None
        for k in base_property_map:
            assert k not in custom_properties
        for k, v in new_properties.items():
            assert custom_properties[k] == v

        dataset_properties: Optional[DatasetPropertiesClass] = graph.get_aspect(
            dataset_urn, DatasetPropertiesClass
        )

        assert dataset_properties
        assert dataset_properties.name == orig_dataset_properties.name
        assert dataset_properties.description == orig_dataset_properties.description

        # Patch custom properties along with name
        for patch_mcp in (
            DatasetPatchBuilder(dataset_urn)
            .set_description("This is a new description")
            .add_custom_property("test_description_property", "test_description_value")
            .build()
        ):
            graph.emit_mcp(patch_mcp)

        dataset_properties: Optional[DatasetPropertiesClass] = graph.get_aspect(
            dataset_urn, DatasetPropertiesClass
        )

        assert dataset_properties
        assert dataset_properties.name == orig_dataset_properties.name
        assert dataset_properties.description == "This is a new description"

        custom_properties = get_custom_properties(graph, dataset_urn)

        assert custom_properties is not None
        for k, v in new_properties.items():
            assert custom_properties[k] == v

        assert (
            custom_properties["test_description_property"] == "test_description_value"
        )
