import{d as de,e as me,f as s,o as n,g as o,j as t,p as k,k as y,t as B,F as pe,y as he,A as ge,q as fe}from"./vue.esm-bundler-DSUVpXdV.js";import{I as v}from"./Icon-zozczuu3.js";import{_ as ye}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ve={class:"snackbar__body"},we={key:0,class:"snackbar__icon"},xe={key:0,class:"snackbar__loader"},be={class:"snackbar__message"},ke={class:"snackbar__actions"},Be=["onClick"],se=de({__name:"SnackBar",props:{message:{},variant:{default:"neutral"},showIcon:{type:Boolean,default:!1},showCloseButton:{type:Boolean,default:!0},actions:{default:()=>[]}},emits:["close","action"],setup(oe,{emit:te}){const re=oe,x=te,ie=me(()=>{switch(re.variant){case"neutral":return"fa-solid fa-circle-dashed";case"success":return"fa-solid fa-circle-check";case"attention":return"fa-solid fa-triangle-exclamation";case"critical":return"fa-solid fa-circle-exclamation";case"information":return"fa-solid fa-circle-info";case"loader":return"";default:return"fa-solid fa-circle-dashed"}}),ce=()=>{x("close")},le=e=>{e.handler(),x("action",e)};return(e,b)=>(n(),s("div",{class:y(["snackbar",[`snackbar--${e.variant}`]])},[o("div",ve,[e.showIcon?(n(),s("div",we,[e.variant==="loader"?(n(),s("div",xe,b[0]||(b[0]=[o("div",{class:"snackbar__loader-circle"},null,-1)]))):(n(),k(v,{key:1,icon:ie.value,size:"sm",class:y("snackbar__icon-component")},null,8,["icon"]))])):t("",!0),o("span",be,B(e.message),1)]),o("div",ke,[e.actions&&e.actions.length>0?(n(!0),s(pe,{key:0},he(e.actions,(a,ue)=>(n(),s("button",{key:ue,class:y(["snackbar__action-btn",`snackbar__action-btn--${a.emphasis||"low"}`,`snackbar__action-btn--${a.color||"white"}`]),onClick:Ie=>le(a)},[a.icon?(n(),k(v,{key:0,icon:a.icon,size:"xs",class:"snackbar__action-icon"},null,8,["icon"])):t("",!0),ge(" "+B(a.label),1)],10,Be))),128)):t("",!0),e.showCloseButton?(n(),s("button",{key:1,class:"snackbar__close",onClick:ce,"aria-label":"Close notification"},[fe(v,{icon:"fa-solid fa-xmark",size:"xs"})])):t("",!0)])],2))}}),w=ye(se,[["__scopeId","data-v-d7090766"]]);se.__docgenInfo={exportName:"default",displayName:"SnackBar",description:"",tags:{},props:[{name:"message",description:"Notification message",required:!0,type:{name:"string"}},{name:"variant",description:"Visual variant",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"success"'},{name:'"attention"'},{name:'"critical"'},{name:'"information"'},{name:'"loader"'}]},defaultValue:{func:!1,value:"'neutral'"}},{name:"showIcon",description:"Show icon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showCloseButton",description:"Show close button",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"actions",description:"Action buttons",required:!1,type:{name:"Array",elements:[{name:"SnackBarAction"}]},defaultValue:{func:!1,value:"() => []"}}],events:[{name:"close"},{name:"action",type:{names:["SnackBarAction"]}}],sourceFiles:["/Users/andrey.cretsu/test mcp project/src/components/SnackBar.vue"]};const Ae={title:"Components/SnackBar",component:w,parameters:{layout:"centered",docs:{description:{component:"A notification/toast component with multiple variants, optional icons, and customizable actions. Matches Figma design exactly."}}},argTypes:{message:{control:"text",description:"Notification message text"},variant:{control:"select",options:["neutral","success","attention","critical","information","loader"],description:"Visual variant with different icon colors"},showIcon:{control:"boolean",description:"Show variant-specific icon"},showCloseButton:{control:"boolean",description:"Show close button"},actions:{control:"object",description:"Array of action buttons"}},tags:["autodocs"]},r={args:{message:"Are you sure you want to delete this? This action cannot be undone.",variant:"neutral",showIcon:!1,showCloseButton:!0,actions:[]}},i={args:{message:"Are you sure you want to delete this? This action cannot be undone.",variant:"neutral",showIcon:!0,showCloseButton:!0,actions:[]}},c={args:{message:"File successfully uploaded and processed.",variant:"success",showIcon:!0,showCloseButton:!0,actions:[]}},l={args:{message:"Please review your changes before continuing.",variant:"attention",showIcon:!0,showCloseButton:!0,actions:[]}},u={args:{message:"Unable to save changes. Please try again.",variant:"critical",showIcon:!0,showCloseButton:!0,actions:[]}},d={args:{message:"New features are now available in your dashboard.",variant:"information",showIcon:!0,showCloseButton:!0,actions:[]}},m={args:{message:"Processing your request, please wait...",variant:"loader",showIcon:!0,showCloseButton:!1,actions:[]}},p={args:{message:"Are you sure you want to delete this? This action cannot be undone.",variant:"neutral",showIcon:!1,showCloseButton:!0,actions:[{label:"Delete",emphasis:"low",color:"white",handler:()=>console.log("Delete clicked")},{label:"Archive",emphasis:"high",color:"blue",handler:()=>console.log("Archive clicked")}]}},h={render:()=>({components:{SnackBar:w},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; min-width: 500px;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Neutral</h3>
          <SnackBar 
            message="Are you sure you want to delete this? This action cannot be undone."
            variant="neutral"
            :showIcon="false"
          />
          <SnackBar 
            message="Are you sure you want to delete this? This action cannot be undone."
            variant="neutral"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Success</h3>
          <SnackBar 
            message="File successfully uploaded and processed."
            variant="success"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Attention</h3>
          <SnackBar 
            message="Please review your changes before continuing."
            variant="attention"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Critical</h3>
          <SnackBar 
            message="Unable to save changes. Please try again."
            variant="critical"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Information</h3>
          <SnackBar 
            message="New features are now available in your dashboard."
            variant="information"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Loader</h3>
          <SnackBar 
            message="Processing your request, please wait..."
            variant="loader"
            :showIcon="true"
            :showCloseButton="false"
          />
        </div>
      </div>
    `})},g={render:()=>({components:{SnackBar:w},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; min-width: 500px;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Short Message</h3>
          <SnackBar 
            message="Success!"
            variant="success"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Medium Message</h3>
          <SnackBar 
            message="Your changes have been saved successfully."
            variant="success"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Long Message</h3>
          <SnackBar 
            message="Are you sure you want to delete this item? This action cannot be undone and will permanently remove all associated data."
            variant="critical"
            :showIcon="true"
          />
        </div>
      </div>
    `})},f={args:{message:"Are you sure you want to delete this? This action cannot be undone.",variant:"neutral",showIcon:!0,showCloseButton:!0,actions:[{label:"Cancel",emphasis:"low",color:"white",handler:()=>alert("Cancel clicked!")},{label:"Delete",emphasis:"high",color:"blue",handler:()=>alert("Delete clicked!")}]}};var I,S,C;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    message: 'Are you sure you want to delete this? This action cannot be undone.',
    variant: 'neutral',
    showIcon: false,
    showCloseButton: true,
    actions: []
  }
}`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var _,A,z;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    message: 'Are you sure you want to delete this? This action cannot be undone.',
    variant: 'neutral',
    showIcon: true,
    showCloseButton: true,
    actions: []
  }
}`,...(z=(A=i.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var T,N,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: 'File successfully uploaded and processed.',
    variant: 'success',
    showIcon: true,
    showCloseButton: true,
    actions: []
  }
}`,...(D=(N=c.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var P,V,M;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    message: 'Please review your changes before continuing.',
    variant: 'attention',
    showIcon: true,
    showCloseButton: true,
    actions: []
  }
}`,...(M=(V=l.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var q,L,F;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    message: 'Unable to save changes. Please try again.',
    variant: 'critical',
    showIcon: true,
    showCloseButton: true,
    actions: []
  }
}`,...(F=(L=u.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var U,W,$;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    message: 'New features are now available in your dashboard.',
    variant: 'information',
    showIcon: true,
    showCloseButton: true,
    actions: []
  }
}`,...($=(W=d.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var j,E,Y;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    message: 'Processing your request, please wait...',
    variant: 'loader',
    showIcon: true,
    showCloseButton: false,
    actions: []
  }
}`,...(Y=(E=m.parameters)==null?void 0:E.docs)==null?void 0:Y.source}}};var O,G,H;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    message: 'Are you sure you want to delete this? This action cannot be undone.',
    variant: 'neutral',
    showIcon: false,
    showCloseButton: true,
    actions: [{
      label: 'Delete',
      emphasis: 'low' as const,
      color: 'white' as const,
      handler: () => console.log('Delete clicked')
    }, {
      label: 'Archive',
      emphasis: 'high' as const,
      color: 'blue' as const,
      handler: () => console.log('Archive clicked')
    }]
  }
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SnackBar
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; min-width: 500px;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Neutral</h3>
          <SnackBar 
            message="Are you sure you want to delete this? This action cannot be undone."
            variant="neutral"
            :showIcon="false"
          />
          <SnackBar 
            message="Are you sure you want to delete this? This action cannot be undone."
            variant="neutral"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Success</h3>
          <SnackBar 
            message="File successfully uploaded and processed."
            variant="success"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Attention</h3>
          <SnackBar 
            message="Please review your changes before continuing."
            variant="attention"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Critical</h3>
          <SnackBar 
            message="Unable to save changes. Please try again."
            variant="critical"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Information</h3>
          <SnackBar 
            message="New features are now available in your dashboard."
            variant="information"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Loader</h3>
          <SnackBar 
            message="Processing your request, please wait..."
            variant="loader"
            :showIcon="true"
            :showCloseButton="false"
          />
        </div>
      </div>
    \`
  })
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,X,Z;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SnackBar
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; min-width: 500px;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Short Message</h3>
          <SnackBar 
            message="Success!"
            variant="success"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Medium Message</h3>
          <SnackBar 
            message="Your changes have been saved successfully."
            variant="success"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Long Message</h3>
          <SnackBar 
            message="Are you sure you want to delete this item? This action cannot be undone and will permanently remove all associated data."
            variant="critical"
            :showIcon="true"
          />
        </div>
      </div>
    \`
  })
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    message: 'Are you sure you want to delete this? This action cannot be undone.',
    variant: 'neutral',
    showIcon: true,
    showCloseButton: true,
    actions: [{
      label: 'Cancel',
      emphasis: 'low' as const,
      color: 'white' as const,
      handler: () => alert('Cancel clicked!')
    }, {
      label: 'Delete',
      emphasis: 'high' as const,
      color: 'blue' as const,
      handler: () => alert('Delete clicked!')
    }]
  }
}`,...(ae=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const ze=["Default","WithIcon","Success","Attention","Critical","Information","Loader","WithActions","AllVariants","MessageLengths","InteractiveDemo"];export{h as AllVariants,l as Attention,u as Critical,r as Default,d as Information,f as InteractiveDemo,m as Loader,g as MessageLengths,c as Success,p as WithActions,i as WithIcon,ze as __namedExportsOrder,Ae as default};
