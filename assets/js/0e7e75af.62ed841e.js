"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=n,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28395:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const o={title:"Creating Tags",slug:"/api/tutorials/creating-tags",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/creating-tags.md"},i="Creating Tags",s={unversionedId:"docs/api/tutorials/creating-tags",id:"docs/api/tutorials/creating-tags",title:"Creating Tags",description:"Why Would You Create Tags?",source:"@site/genDocs/docs/api/tutorials/creating-tags.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/creating-tags",permalink:"/docs/api/tutorials/creating-tags",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/creating-tags.md",tags:[],version:"current",frontMatter:{title:"Creating Tags",slug:"/api/tutorials/creating-tags",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/creating-tags.md"},sidebar:"overviewSidebar",previous:{title:"Creating Datasets",permalink:"/docs/api/tutorials/creating-datasets"},next:{title:"Creating Terms",permalink:"/docs/api/tutorials/creating-terms"}},l={},p=[{value:"Why Would You Create Tags?",id:"why-would-you-create-tags",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Tags With GraphQL",id:"create-tags-with-graphql",level:2},{value:"GraphQL Explorer",id:"graphql-explorer",level:3},{value:"CURL",id:"curl",level:3},{value:"Create Tags With Python SDK",id:"create-tags-with-python-sdk",level:2},{value:"Expected Outcomes",id:"expected-outcomes",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-tags"},"Creating Tags"),(0,n.kt)("h2",{id:"why-would-you-create-tags"},"Why Would You Create Tags?"),(0,n.kt)("p",null,"Tags are informal, loosely controlled labels that help in search & discovery. They can be added to datasets, dataset schemas, or containers, for an easy way to label or categorize entities \u2013 without having to associate them to a broader business glossary or vocabulary."),(0,n.kt)("p",null,"For more information about tags, refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/tags"},"About DataHub Tags"),"."),(0,n.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,n.kt)("p",null,"This guide will show you how to create a tag named ",(0,n.kt)("inlineCode",{parentName:"p"},"Deprecated"),"."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Datahub Quickstart Guide"),"."),(0,n.kt)("h2",{id:"create-tags-with-graphql"},"Create Tags With GraphQL"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please note that there are two available endpoints (",(0,n.kt)("inlineCode",{parentName:"p"},":8000"),", ",(0,n.kt)("inlineCode",{parentName:"p"},":9002"),") to access ",(0,n.kt)("inlineCode",{parentName:"p"},"graphql"),".\nFor more information about the differences between these endpoints, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/metadata-service#graphql-api"},"DataHub Metadata Service"))),(0,n.kt)("h3",{id:"graphql-explorer"},"GraphQL Explorer"),(0,n.kt)("p",null,"GraphQL Explorer is the fastest way to experiment with GraphQL without any dependancies.\nNavigate to GraphQL Explorer (",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:9002/api/graphiql"),") and run the following query."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'mutation createTag {\n    createTag(input:\n    {\n      name: "Deprecated",\n      description: "Having this tag means this column or table is deprecated."\n    })\n}\n')),(0,n.kt)("p",null,"If you see the following response, the operation was successful:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "createTag": "<tag_urn>"\n  },\n  "extensions": {}\n}\n')),(0,n.kt)("h3",{id:"curl"},"CURL"),(0,n.kt)("p",null,"With CURL, you need to provide tokens. To generate a token, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/graphql/token-management"},"Access Token Management"),".\nWith ",(0,n.kt)("inlineCode",{parentName:"p"},"accessToken"),", you can run the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation createTag { createTag(input: { name: \\"Deprecated\\", description: \\"Having this tag means this column or table is deprecated.\\" }) }", "variables":{}}\'\n')),(0,n.kt)("p",null,"Expected Response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "createTag": "<tag_urn>" }, "extensions": {} }\n')),(0,n.kt)("h2",{id:"create-tags-with-python-sdk"},"Create Tags With Python SDK"),(0,n.kt)("p",null,"The following code creates a tag named ",(0,n.kt)("inlineCode",{parentName:"p"},"Deprecated"),".\nYou can refer to the full code in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/create_tag.py"},"create_tag.py"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import logging\n\nfrom datahub.emitter.mce_builder import make_tag_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import TagPropertiesClass\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\ntag_urn = make_tag_urn("deprecated")\ntag_properties_aspect = TagPropertiesClass(\n    name="Deprecated",\n    description="Having this tag means this column or table is deprecated.",\n)\n\nevent: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n    entityUrn=tag_urn,\n    aspect=tag_properties_aspect,\n)\n\n# Create rest emitter\nrest_emitter = DatahubRestEmitter(gms_server="http://localhost:8080")\nrest_emitter.emit(event)\nlog.info(f"Created tag {tag_urn}")\n')),(0,n.kt)("p",null,"We're using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MetdataChangeProposalWrapper")," to change entities in this example.\nFor more information about the ",(0,n.kt)("inlineCode",{parentName:"p"},"MetadataChangeProposal"),", please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/advanced/mcp-mcl"},"MetadataChangeProposal & MetadataChangeLog Events")),(0,n.kt)("h2",{id:"expected-outcomes"},"Expected Outcomes"),(0,n.kt)("p",null,"You can now see ",(0,n.kt)("inlineCode",{parentName:"p"},"Deprecated")," tag has been created."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tag-created",src:a(48915).Z,width:"858",height:"421"})),(0,n.kt)("h2",{id:"whats-next"},"What's Next?"),(0,n.kt)("p",null,"Now that you created a tag, how about adding it to a dataset? Here's a guide on ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/tutorials/adding-tags"},"how to add a tag on a dataset"),"."))}u.isMDXComponent=!0},48915:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tag-created-5885a33c44634e988b9e0228fe10e28d.png"}}]);