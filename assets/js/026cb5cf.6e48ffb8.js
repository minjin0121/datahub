"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8152],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),p=i,m=u["".concat(d,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18277:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={title:"Updating DataHub",sidebar_label:"Updating DataHub",slug:"/how/updating-datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/updating-datahub.md"},d="Updating DataHub",s={unversionedId:"docs/how/updating-datahub",id:"docs/how/updating-datahub",isDocsHomePage:!1,title:"Updating DataHub",description:"This file documents any backwards-incompatible changes in DataHub and assists people when migrating to a new version.",source:"@site/genDocs/docs/how/updating-datahub.md",sourceDirName:"docs/how",slug:"/how/updating-datahub",permalink:"/docs/how/updating-datahub",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/updating-datahub.md",tags:[],version:"current",frontMatter:{title:"Updating DataHub",sidebar_label:"Updating DataHub",slug:"/how/updating-datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/updating-datahub.md"},sidebar:"overviewSidebar",previous:{title:"Taking backup of DataHub",permalink:"/docs/how/backup-datahub"},next:{title:"Metadata Events",permalink:"/docs/what/mxe"}},c=[{value:"Next",id:"next",children:[{value:"Breaking Changes",id:"breaking-changes",children:[],level:3},{value:"Potential Downtime",id:"potential-downtime",children:[],level:3},{value:"Deprecations",id:"deprecations",children:[],level:3},{value:"Other notable Changes",id:"other-notable-changes",children:[],level:3}],level:2},{value:"<code>v0.8.40</code>",id:"v0840",children:[{value:"Breaking Changes",id:"breaking-changes-1",children:[],level:3},{value:"Potential Downtime",id:"potential-downtime-1",children:[],level:3},{value:"Deprecations",id:"deprecations-1",children:[],level:3},{value:"Other notable Changes",id:"other-notable-changes-1",children:[],level:3}],level:2},{value:"<code>v0.8.39</code>",id:"v0839",children:[{value:"Breaking Changes",id:"breaking-changes-2",children:[],level:3},{value:"Potential Downtime",id:"potential-downtime-2",children:[],level:3},{value:"Deprecations",id:"deprecations-2",children:[],level:3},{value:"Other notable Changes",id:"other-notable-changes-2",children:[],level:3}],level:2},{value:"<code>v0.8.38</code>",id:"v0838",children:[{value:"Breaking Changes",id:"breaking-changes-3",children:[],level:3},{value:"Potential Downtime",id:"potential-downtime-3",children:[],level:3},{value:"Deprecations",id:"deprecations-3",children:[],level:3},{value:"Other notable Changes",id:"other-notable-changes-3",children:[],level:3}],level:2},{value:"<code>v0.8.36</code>",id:"v0836",children:[{value:"Breaking Changes",id:"breaking-changes-4",children:[],level:3},{value:"Potential Downtime",id:"potential-downtime-4",children:[],level:3},{value:"Deprecations",id:"deprecations-4",children:[],level:3},{value:"Other notable Changes",id:"other-notable-changes-4",children:[],level:3}],level:2},{value:"<code>v0.8.35</code>",id:"v0835",children:[{value:"Breaking Changes",id:"breaking-changes-5",children:[],level:3},{value:"Potential Downtime",id:"potential-downtime-5",children:[],level:3},{value:"Deprecations",id:"deprecations-5",children:[],level:3},{value:"Other notable Changes",id:"other-notable-changes-5",children:[],level:3}],level:2},{value:"<code>v0.8.34</code>",id:"v0834",children:[{value:"Breaking Changes",id:"breaking-changes-6",children:[],level:3},{value:"Potential Downtime",id:"potential-downtime-6",children:[],level:3},{value:"Deprecations",id:"deprecations-6",children:[],level:3},{value:"Other notable Changes",id:"other-notable-changes-6",children:[],level:3}],level:2}],h={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updating-datahub"},"Updating DataHub"),(0,r.kt)("p",null,"This file documents any backwards-incompatible changes in DataHub and assists people when migrating to a new version."),(0,r.kt)("h2",{id:"next"},"Next"),(0,r.kt)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"should_overwrite")," flag in ",(0,r.kt)("inlineCode",{parentName:"li"},"csv-enricher")," has been replaced with ",(0,r.kt)("inlineCode",{parentName:"li"},"write_semantics")," to match the format used for other sources. See the ",(0,r.kt)("a",{parentName:"li",href:"/docs/generated/ingestion/sources/csv/"},"documentation")," for more details")),(0,r.kt)("h3",{id:"potential-downtime"},"Potential Downtime"),(0,r.kt)("h3",{id:"deprecations"},"Deprecations"),(0,r.kt)("h3",{id:"other-notable-changes"},"Other notable Changes"),(0,r.kt)("h2",{id:"v0840"},(0,r.kt)("inlineCode",{parentName:"h2"},"v0.8.40")),(0,r.kt)("h3",{id:"breaking-changes-1"},"Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"#5240 ",(0,r.kt)("inlineCode",{parentName:"li"},"lineage_client_project_id")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"bigquery")," source is removed. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"storage_project_id")," instead.")),(0,r.kt)("h3",{id:"potential-downtime-1"},"Potential Downtime"),(0,r.kt)("h3",{id:"deprecations-1"},"Deprecations"),(0,r.kt)("h3",{id:"other-notable-changes-1"},"Other notable Changes"),(0,r.kt)("h2",{id:"v0839"},(0,r.kt)("inlineCode",{parentName:"h2"},"v0.8.39")),(0,r.kt)("h3",{id:"breaking-changes-2"},"Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Refactored the ",(0,r.kt)("inlineCode",{parentName:"li"},"health")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Dataset")," GraphQL Type to be of type ",(0,r.kt)("strong",{parentName:"li"},"list of HealthStatus")," (was type ",(0,r.kt)("strong",{parentName:"li"},"HealthStatus"),"). See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/pull/5222/files"},"this PR")," for more details.")),(0,r.kt)("h3",{id:"potential-downtime-2"},"Potential Downtime"),(0,r.kt)("h3",{id:"deprecations-2"},"Deprecations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"#5208 ",(0,r.kt)("inlineCode",{parentName:"li"},"GMS_HOST")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"GMS_PORT")," environment variables being set in various containers are deprecated in favour of ",(0,r.kt)("inlineCode",{parentName:"li"},"DATAHUB_GMS_HOST")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"DATAHUB_GMS_PORT"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KAFKA_TOPIC_NAME")," environment variable in ",(0,r.kt)("strong",{parentName:"li"},"datahub-mae-consumer")," and ",(0,r.kt)("strong",{parentName:"li"},"datahub-gms")," is now deprecated. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_AUDIT_EVENT_NAME")," instead."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KAFKA_MCE_TOPIC_NAME")," environment variable in ",(0,r.kt)("strong",{parentName:"li"},"datahub-mce-consumer")," and ",(0,r.kt)("strong",{parentName:"li"},"datahub-gms")," is now deprecated. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_EVENT_NAME")," instead."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KAFKA_FMCE_TOPIC_NAME")," environment variable in ",(0,r.kt)("strong",{parentName:"li"},"datahub-mce-consumer")," and ",(0,r.kt)("strong",{parentName:"li"},"datahub-gms")," is now deprecated. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"FAILED_METADATA_CHANGE_EVENT_NAME")," instead.")),(0,r.kt)("h3",{id:"other-notable-changes-2"},"Other notable Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"#5132 Profile tables in ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake")," source only if they have been updated since configured (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),") number of day(s). Update the config ",(0,r.kt)("inlineCode",{parentName:"li"},"profiling.profile_if_updated_since_days")," as per your profiling schedule or set it to ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," if you want older behaviour.")),(0,r.kt)("h2",{id:"v0838"},(0,r.kt)("inlineCode",{parentName:"h2"},"v0.8.38")),(0,r.kt)("h3",{id:"breaking-changes-3"},"Breaking Changes"),(0,r.kt)("h3",{id:"potential-downtime-3"},"Potential Downtime"),(0,r.kt)("h3",{id:"deprecations-3"},"Deprecations"),(0,r.kt)("h3",{id:"other-notable-changes-3"},"Other notable Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create & Revoke Access Tokens via the UI"),(0,r.kt)("li",{parentName:"ul"},"Create and Manage new users via the UI "),(0,r.kt)("li",{parentName:"ul"},"Improvements to Business Glossary UI"),(0,r.kt)("li",{parentName:"ul"},"FIX - Do not require reindexing to migrate to using the UI business glossary ")),(0,r.kt)("h2",{id:"v0836"},(0,r.kt)("inlineCode",{parentName:"h2"},"v0.8.36")),(0,r.kt)("h3",{id:"breaking-changes-4"},"Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In this release we introduce a brand new Business Glossary experience. With this new experience comes some new ways of indexing data in order to make viewing and traversing the different levels of your Glossary possible. Therefore, you will have to ",(0,r.kt)("a",{parentName:"li",href:"/docs/how/restore-indices/"},"restore your indices")," in order for the new Glossary experience to work for users that already have existing Glossaries. If this is your first time using DataHub Glossaries, you're all set!")),(0,r.kt)("h3",{id:"potential-downtime-4"},"Potential Downtime"),(0,r.kt)("h3",{id:"deprecations-4"},"Deprecations"),(0,r.kt)("h3",{id:"other-notable-changes-4"},"Other notable Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"#4961 Dropped profiling is not reported by default as that caused a lot of spurious logging in some cases. Set ",(0,r.kt)("inlineCode",{parentName:"li"},"profiling.report_dropped_profiles")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," if you want older behaviour.")),(0,r.kt)("h2",{id:"v0835"},(0,r.kt)("inlineCode",{parentName:"h2"},"v0.8.35")),(0,r.kt)("h3",{id:"breaking-changes-5"},"Breaking Changes"),(0,r.kt)("h3",{id:"potential-downtime-5"},"Potential Downtime"),(0,r.kt)("h3",{id:"deprecations-5"},"Deprecations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"#4875 Lookml view file contents will no longer be populated in custom_properties, instead view definitions will be always available in the View Definitions tab.")),(0,r.kt)("h3",{id:"other-notable-changes-5"},"Other notable Changes"),(0,r.kt)("h2",{id:"v0834"},(0,r.kt)("inlineCode",{parentName:"h2"},"v0.8.34")),(0,r.kt)("h3",{id:"breaking-changes-6"},"Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"#4644 Remove ",(0,r.kt)("inlineCode",{parentName:"li"},"database")," option from ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake")," source which was deprecated since ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.8.5")),(0,r.kt)("li",{parentName:"ul"},"#4595 Rename confusing config ",(0,r.kt)("inlineCode",{parentName:"li"},"report_upstream_lineage")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream_lineage_in_report")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake")," connector which was added in ",(0,r.kt)("inlineCode",{parentName:"li"},"0.8.32"))),(0,r.kt)("h3",{id:"potential-downtime-6"},"Potential Downtime"),(0,r.kt)("h3",{id:"deprecations-6"},"Deprecations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"#4644 ",(0,r.kt)("inlineCode",{parentName:"li"},"host_port")," option of ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake-usage")," sources deprecated as the name was confusing. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"account_id")," option instead.")),(0,r.kt)("h3",{id:"other-notable-changes-6"},"Other notable Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"#4760 ",(0,r.kt)("inlineCode",{parentName:"li"},"check_role_grants")," option was added in ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake")," to disable checking roles in ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake")," as some people were reporting long run times when checking roles.")))}u.isMDXComponent=!0}}]);