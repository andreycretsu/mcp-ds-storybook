import{d as me,r as T,e as t,f as i,j as l,g as r,p as k,t as z,q as be,k as xe,o as n}from"./vue.esm-bundler-DSUVpXdV.js";import{I as M}from"./Icon-zozczuu3.js";import{C as ye}from"./Control-CnyJMiHS.js";import{_ as ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";const he=["tabindex","aria-disabled"],ve={key:0,class:"left-slot"},Se={class:"content"},Te={class:"label-container"},ke={class:"label"},ze={key:0,class:"icon-container info-icon"},Me={class:"small-icon"},De={key:0,class:"description"},ae=me({__name:"ControlTile",props:{label:{type:String,required:!0},description:{type:String,default:""},size:{type:String,default:"L"},type:{type:String,default:"Fixed"},disabled:{type:Boolean,default:!1},leftSlot:{type:String,default:"none"},icon:{type:String,default:""},controlType:{type:String,default:"checkbox"},info:{type:Boolean,default:!1}},setup(e){const o=e,s=T(!1),a=T(!1);function ie(){o.disabled||(s.value=!s.value)}function le(){a.value=!0}function re(){a.value=!1}const ce=t(()=>o.icon?`fa-solid fa-${o.icon}`:""),de=t(()=>o.size==="L"?"M":"S"),pe=t(()=>["checkbox","toggle","radio"].includes(o.controlType)?o.controlType:"checkbox"),fe=t(()=>o.disabled?"disabled":a.value?"hover":"default"),v=t(()=>o.leftSlot==="control"),S=t(()=>o.leftSlot==="icon"),ue=t(()=>v.value||S.value);return(Ce,Ie)=>(n(),i("div",{class:xe(["control-tile",[e.size?`size-${e.size}`:"",e.type?`type-${e.type}`:"",{"state-active":s.value,"state-disabled":e.disabled,hover:a.value},e.leftSlot==="control"?"leftslot-control":e.leftSlot==="icon"?"leftslot-icon":"",e.leftSlot==="control"&&e.controlType==="toggle"?"leftslot-toggle":""]]),onMouseenter:le,onMouseleave:re,onClick:ie,tabindex:e.disabled?-1:0,"aria-disabled":e.disabled},[ue.value?(n(),i("div",ve,[v.value?(n(),k(ye,{key:0,type:pe.value,size:de.value,state:fe.value,active:s.value},null,8,["type","size","state","active"])):S.value?(n(),k(M,{key:1,icon:ce.value,size:e.size==="L"?"md":"sm"},null,8,["icon","size"])):l("",!0)])):l("",!0),r("div",Se,[r("div",Te,[r("span",ke,z(e.label),1),e.info?(n(),i("div",ze,[r("div",Me,[be(M,{icon:"fa-solid fa-circle-info",size:"xs"})])])):l("",!0)]),e.description?(n(),i("div",De,z(e.description),1)):l("",!0)])],42,he))}}),Fe=ge(ae,[["__scopeId","data-v-57cae5e7"]]);ae.__docgenInfo={exportName:"default",displayName:"ControlTile",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'L'"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'Fixed'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"leftSlot",type:{name:"string"},defaultValue:{func:!1,value:"'none'"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"controlType",type:{name:"string"},defaultValue:{func:!1,value:"'checkbox'"}},{name:"info",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/andrey.cretsu/test mcp project/src/components/ControlTile.vue"]};const we={title:"Components/ControlTile",component:Fe,tags:["autodocs"],argTypes:{size:{control:"select",options:["L","M"],description:"Size variant from MCP server"},type:{control:"select",options:["Fixed","Hug"],description:"Type variant from MCP server"},leftSlot:{control:"select",options:["none","icon","control"],description:"What to show in the left slot",defaultValue:"none"},icon:{control:"text",description:"FontAwesome icon name",if:{arg:"leftSlot",eq:"icon"}},controlType:{control:"select",options:["checkbox","toggle","radio"],description:"Type of control",if:{arg:"leftSlot",eq:"control"},defaultValue:"checkbox"},disabled:{control:"boolean",description:"Disable state from MCP server",defaultValue:!1},info:{control:"boolean",description:"Show info icon",defaultValue:!1},label:{control:"text",description:"Tile label"},description:{control:"text",description:"Tile description"}}},c={args:{label:"Large Tile",description:"Description text",size:"L",type:"Fixed",leftSlot:"none",info:!1,disabled:!1,icon:"",controlType:"checkbox"}},d={args:{label:"Medium Tile",description:"Description text",size:"M",type:"Fixed",leftSlot:"none",info:!1,disabled:!1,icon:"",controlType:"checkbox"}},p={args:{label:"Fixed Width",description:"Description text",size:"M",type:"Fixed",controlType:"checkbox",icon:"",info:!1,disabled:!1}},f={args:{label:"Hug Content",description:"Description text",size:"M",type:"Hug",controlType:"checkbox",icon:"",info:!1,disabled:!1}},u={args:{label:"Default State",description:"Description text",size:"M",type:"Fixed",controlType:"checkbox",icon:"",info:!1,disabled:!1}},m={args:{label:"Hover State",description:"Description text",size:"M",type:"Fixed",controlType:"checkbox",icon:"",info:!1,disabled:!1},parameters:{pseudo:{hover:!0}}},b={args:{label:"Disabled State",description:"Description text",size:"M",type:"Fixed",controlType:"checkbox",icon:"",info:!1,disabled:!0}},x={args:{label:"With Icon",description:"Description text",size:"M",type:"Fixed",leftSlot:"icon",icon:"star",info:!1,disabled:!1,controlType:"checkbox"}},y={args:{label:"With Control",description:"Description text",size:"M",type:"Fixed",leftSlot:"control",controlType:"checkbox",info:!1,disabled:!1,icon:""}},g={parameters:{visual:"empty"},args:{label:"With Info Icon",description:"Description text",size:"M",type:"Fixed",controlType:"checkbox",info:!0,disabled:!1,icon:""}},h={parameters:{visual:"icon"},args:{label:"Complex Example",description:"With icon, info icon, and active state",size:"L",type:"Fixed",controlType:"checkbox",info:!0,disabled:!1,icon:"star"}};var D,F,C;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Large Tile',
    description: 'Description text',
    size: 'L',
    type: 'Fixed',
    leftSlot: 'none',
    info: false,
    disabled: false,
    icon: '',
    controlType: 'checkbox'
  }
}`,...(C=(F=c.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var I,W,L;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Medium Tile',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    leftSlot: 'none',
    info: false,
    disabled: false,
    icon: '',
    controlType: 'checkbox'
  }
}`,...(L=(W=d.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var V,H,w;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Fixed Width',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    icon: '',
    info: false,
    disabled: false
  }
}`,...(w=(H=p.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var B,q,E;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Hug Content',
    description: 'Description text',
    size: 'M',
    type: 'Hug',
    controlType: 'checkbox',
    icon: '',
    info: false,
    disabled: false
  }
}`,...(E=(q=f.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var N,P,$;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Default State',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    icon: '',
    info: false,
    disabled: false
  }
}`,...($=(P=u.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var j,A,O;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Hover State',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    icon: '',
    info: false,
    disabled: false
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(O=(A=m.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var U,G,J;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Disabled State',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    icon: '',
    info: false,
    disabled: true
  }
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,R;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'With Icon',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    leftSlot: 'icon',
    icon: 'star',
    info: false,
    disabled: false,
    controlType: 'checkbox'
  }
}`,...(R=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'With Control',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    leftSlot: 'control',
    controlType: 'checkbox',
    info: false,
    disabled: false,
    icon: ''
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,oe;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    visual: 'empty'
  },
  args: {
    label: 'With Info Icon',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    info: true,
    disabled: false,
    icon: ''
  }
}`,...(oe=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,ne,se;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    visual: 'icon'
  },
  args: {
    label: 'Complex Example',
    description: 'With icon, info icon, and active state',
    size: 'L',
    type: 'Fixed',
    controlType: 'checkbox',
    info: true,
    disabled: false,
    icon: 'star'
  }
}`,...(se=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Be=["Large","Medium","Fixed","Hug","Default","Hover","Disabled","WithIcon","WithControl","WithInfoIcon","Complex"];export{h as Complex,u as Default,b as Disabled,p as Fixed,m as Hover,f as Hug,c as Large,d as Medium,y as WithControl,x as WithIcon,g as WithInfoIcon,Be as __namedExportsOrder,we as default};
