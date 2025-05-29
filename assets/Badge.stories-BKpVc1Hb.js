import{d as de,e as m,f as u,g as b,j as z,p as pe,n as ce,k as y,t as L,o as B}from"./vue.esm-bundler-DSUVpXdV.js";import{A as ge}from"./Avatar-jVLt57s2.js";import{_ as he}from"./_plugin-vue_export-helper-DlAUqK2U.js";const me={class:"badge__body"},Be={class:"badge__label"},oe=de({__name:"Badge",props:{label:{},size:{default:"M"},emphasis:{default:"Low"},color:{default:"Green"},showIcon:{type:Boolean,default:!1},icon:{default:"circle-small"},showAvatar:{type:Boolean,default:!1},avatarInitials:{default:"A"},unassigned:{type:Boolean,default:!1},showAvatarBadge:{type:Boolean,default:!1},showStatus:{type:Boolean,default:!1}},setup(ie){const w=ie,re=m(()=>"fa-solid"),ne=m(()=>{switch(w.size){case"L":return"14px";case"M":return"10px";case"S":return"8px";default:return"10px"}}),te=m(()=>{switch(w.size){case"L":return 16;case"M":return 12;case"S":return 12;default:return 12}});return(e,we)=>(B(),u("div",{class:y(["badge",`badge--size-${e.size}`,`badge--emphasis-${e.emphasis}`,`badge--color-${e.color}`])},[b("div",me,[e.showIcon&&!e.showAvatar?(B(),u("i",{key:0,class:y(["badge__icon",re.value]),style:ce({fontSize:ne.value})},L(e.icon),7)):z("",!0),e.showAvatar&&!e.showIcon?(B(),pe(ge,{key:1,initials:e.avatarInitials,size:te.value,unassigned:e.unassigned,showBadge:e.showAvatarBadge,showStatus:e.showStatus},null,8,["initials","size","unassigned","showBadge","showStatus"])):z("",!0),b("span",Be,L(e.label),1)])],2))}}),a=he(oe,[["__scopeId","data-v-d51904b4"]]);oe.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"label",description:"Badge text content",required:!0,type:{name:"string"}},{name:"size",description:"Size variant",required:!1,type:{name:"union",elements:[{name:'"S"'},{name:'"M"'},{name:'"L"'}]},defaultValue:{func:!1,value:"'M'"}},{name:"emphasis",description:"Emphasis level",required:!1,type:{name:"union",elements:[{name:'"Low"'},{name:'"High"'}]},defaultValue:{func:!1,value:"'Low'"}},{name:"color",description:"Color variant",required:!1,type:{name:"union",elements:[{name:'"Green"'},{name:'"Blue"'},{name:'"Yellow"'},{name:'"Red"'},{name:'"Cyan"'},{name:'"Violet"'},{name:'"Rose"'},{name:'"White"'},{name:'"Grey"'}]},defaultValue:{func:!1,value:"'Green'"}},{name:"showIcon",description:"Show icon instead of avatar",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",description:"FontAwesome icon name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'circle-small'"}},{name:"showAvatar",description:"Show avatar instead of icon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"avatarInitials",description:"Avatar initials (1-2 characters)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'A'"}},{name:"unassigned",description:"Show unassigned state (ghost icon)",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showAvatarBadge",description:"Show avatar badge indicator",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showStatus",description:"Show status indicator",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/andrey.cretsu/test mcp project/src/components/Badge.vue"]};const ye={title:"Components/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:"A versatile badge component with multiple size, emphasis, and color variants. Supports icons, avatars, and status indicators."}}},argTypes:{label:{control:"text",description:"Badge text content"},size:{control:"select",options:["S","M","L"],description:"Size variant"},emphasis:{control:"select",options:["Low","High"],description:"Emphasis level"},color:{control:"select",options:["Green","Blue","Yellow","Red","Cyan","Violet","Rose","White","Grey"],description:"Color variant"},showIcon:{control:"boolean",description:"Show icon instead of avatar"},icon:{control:"text",description:"FontAwesome icon name"},showAvatar:{control:"boolean",description:"Show avatar instead of icon"},avatarInitials:{control:"text",description:"Avatar initials (1-2 characters)"},unassigned:{control:"boolean",description:"Show unassigned state (ghost icon)"},showAvatarBadge:{control:"boolean",description:"Show avatar badge indicator"},showStatus:{control:"boolean",description:"Show status indicator"}},tags:["autodocs"]},s={args:{label:"Badge",size:"M",emphasis:"Low",color:"Green"}},l={args:{label:"Badge",size:"M",emphasis:"Low",color:"Blue",showIcon:!0,icon:"circle-small"}},o={args:{label:"Badge",size:"M",emphasis:"Low",color:"Green",showAvatar:!0,avatarInitials:"A"}},i={args:{label:"Badge",size:"M",emphasis:"Low",color:"Grey",showAvatar:!0,unassigned:!0}},r={args:{label:"Badge",size:"L",emphasis:"Low",color:"Green",showAvatar:!0,avatarInitials:"A",showAvatarBadge:!0,showStatus:!0}},n={args:{label:"Badge",size:"M",emphasis:"High",color:"Blue"}},t={render:()=>({components:{Badge:a},template:`
      <div style="display: flex; align-items: center; gap: 16px;">
        <Badge label="Small" size="S" color="Green" />
        <Badge label="Medium" size="M" color="Blue" />
        <Badge label="Large" size="L" color="Red" />
      </div>
    `})},d={render:()=>({components:{Badge:a},template:`
      <div style="display: flex; flex-wrap: wrap; gap: 8px; max-width: 600px;">
        <Badge label="Green" color="Green" emphasis="Low" />
        <Badge label="Blue" color="Blue" emphasis="Low" />
        <Badge label="Yellow" color="Yellow" emphasis="Low" />
        <Badge label="Red" color="Red" emphasis="Low" />
        <Badge label="Cyan" color="Cyan" emphasis="Low" />
        <Badge label="Violet" color="Violet" emphasis="Low" />
        <Badge label="Rose" color="Rose" emphasis="Low" />
        <Badge label="White" color="White" emphasis="Low" />
        <Badge label="Grey" color="Grey" emphasis="Low" />
      </div>
    `})},p={render:()=>({components:{Badge:a},template:`
      <div style="display: flex; flex-wrap: wrap; gap: 8px; max-width: 600px;">
        <Badge label="Green" color="Green" emphasis="High" />
        <Badge label="Blue" color="Blue" emphasis="High" />
        <Badge label="Yellow" color="Yellow" emphasis="High" />
        <Badge label="Red" color="Red" emphasis="High" />
        <Badge label="Cyan" color="Cyan" emphasis="High" />
        <Badge label="Violet" color="Violet" emphasis="High" />
        <Badge label="Rose" color="Rose" emphasis="High" />
        <Badge label="Grey" color="Grey" emphasis="High" />
      </div>
    `})},c={render:()=>({components:{Badge:a},template:`
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 800px;">
        <!-- Size L -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Large (24px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="L" color="Green" emphasis="Low" />
            <Badge label="Blue" size="L" color="Blue" emphasis="Low" />
            <Badge label="Yellow" size="L" color="Yellow" emphasis="Low" />
            <Badge label="Red" size="L" color="Red" emphasis="Low" />
            <Badge label="Cyan" size="L" color="Cyan" emphasis="Low" />
            <Badge label="Violet" size="L" color="Violet" emphasis="Low" />
            <Badge label="Rose" size="L" color="Rose" emphasis="Low" />
            <Badge label="White" size="L" color="White" emphasis="Low" />
            <Badge label="Grey" size="L" color="Grey" emphasis="Low" />
          </div>
        </div>
        
        <!-- Size M -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Medium (20px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="M" color="Green" emphasis="Low" />
            <Badge label="Blue" size="M" color="Blue" emphasis="Low" />
            <Badge label="Yellow" size="M" color="Yellow" emphasis="Low" />
            <Badge label="Red" size="M" color="Red" emphasis="Low" />
            <Badge label="Cyan" size="M" color="Cyan" emphasis="Low" />
            <Badge label="Violet" size="M" color="Violet" emphasis="Low" />
            <Badge label="Rose" size="M" color="Rose" emphasis="Low" />
            <Badge label="White" size="M" color="White" emphasis="Low" />
            <Badge label="Grey" size="M" color="Grey" emphasis="Low" />
          </div>
        </div>
        
        <!-- Size S -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Small (16px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="S" color="Green" emphasis="Low" />
            <Badge label="Blue" size="S" color="Blue" emphasis="Low" />
            <Badge label="Yellow" size="S" color="Yellow" emphasis="Low" />
            <Badge label="Red" size="S" color="Red" emphasis="Low" />
            <Badge label="Cyan" size="S" color="Cyan" emphasis="Low" />
            <Badge label="Violet" size="S" color="Violet" emphasis="Low" />
            <Badge label="Rose" size="S" color="Rose" emphasis="Low" />
            <Badge label="White" size="S" color="White" emphasis="Low" />
            <Badge label="Grey" size="S" color="Grey" emphasis="Low" />
          </div>
        </div>
      </div>
    `})},g={render:()=>({components:{Badge:a},template:`
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 800px;">
        <!-- Size L -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Large (24px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="L" color="Green" emphasis="High" />
            <Badge label="Blue" size="L" color="Blue" emphasis="High" />
            <Badge label="Yellow" size="L" color="Yellow" emphasis="High" />
            <Badge label="Red" size="L" color="Red" emphasis="High" />
            <Badge label="Cyan" size="L" color="Cyan" emphasis="High" />
            <Badge label="Violet" size="L" color="Violet" emphasis="High" />
            <Badge label="Rose" size="L" color="Rose" emphasis="High" />
            <Badge label="Grey" size="L" color="Grey" emphasis="High" />
          </div>
        </div>
        
        <!-- Size M -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Medium (20px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="M" color="Green" emphasis="High" />
            <Badge label="Blue" size="M" color="Blue" emphasis="High" />
            <Badge label="Yellow" size="M" color="Yellow" emphasis="High" />
            <Badge label="Red" size="M" color="Red" emphasis="High" />
            <Badge label="Cyan" size="M" color="Cyan" emphasis="High" />
            <Badge label="Violet" size="M" color="Violet" emphasis="High" />
            <Badge label="Rose" size="M" color="Rose" emphasis="High" />
            <Badge label="Grey" size="M" color="Grey" emphasis="High" />
          </div>
        </div>
        
        <!-- Size S -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Small (16px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="S" color="Green" emphasis="High" />
            <Badge label="Blue" size="S" color="Blue" emphasis="High" />
            <Badge label="Yellow" size="S" color="Yellow" emphasis="High" />
            <Badge label="Red" size="S" color="Red" emphasis="High" />
            <Badge label="Cyan" size="S" color="Cyan" emphasis="High" />
            <Badge label="Violet" size="S" color="Violet" emphasis="High" />
            <Badge label="Rose" size="S" color="Rose" emphasis="High" />
            <Badge label="Grey" size="S" color="Grey" emphasis="High" />
          </div>
        </div>
      </div>
    `})},h={args:{label:"Badge",size:"M",emphasis:"Low",color:"Green",showIcon:!1,icon:"circle-small",showAvatar:!1,avatarInitials:"A",unassigned:!1,showAvatarBadge:!1,showStatus:!1}};var v,f,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Badge',
    size: 'M',
    emphasis: 'Low',
    color: 'Green'
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,G,H;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Badge',
    size: 'M',
    emphasis: 'Low',
    color: 'Blue',
    showIcon: true,
    icon: 'circle-small'
  }
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var R,M,V;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Badge',
    size: 'M',
    emphasis: 'Low',
    color: 'Green',
    showAvatar: true,
    avatarInitials: 'A'
  }
}`,...(V=(M=o.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var C,A,Y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Badge',
    size: 'M',
    emphasis: 'Low',
    color: 'Grey',
    showAvatar: true,
    unassigned: true
  }
}`,...(Y=(A=i.parameters)==null?void 0:A.docs)==null?void 0:Y.source}}};var I,W,_;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Badge',
    size: 'L',
    emphasis: 'Low',
    color: 'Green',
    showAvatar: true,
    avatarInitials: 'A',
    showAvatarBadge: true,
    showStatus: true
  }
}`,...(_=(W=r.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,k,E;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Badge',
    size: 'M',
    emphasis: 'High',
    color: 'Blue'
  }
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var D,N,F;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 16px;">
        <Badge label="Small" size="S" color="Green" />
        <Badge label="Medium" size="M" color="Blue" />
        <Badge label="Large" size="L" color="Red" />
      </div>
    \`
  })
}`,...(F=(N=t.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var U,$,j;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display: flex; flex-wrap: wrap; gap: 8px; max-width: 600px;">
        <Badge label="Green" color="Green" emphasis="Low" />
        <Badge label="Blue" color="Blue" emphasis="Low" />
        <Badge label="Yellow" color="Yellow" emphasis="Low" />
        <Badge label="Red" color="Red" emphasis="Low" />
        <Badge label="Cyan" color="Cyan" emphasis="Low" />
        <Badge label="Violet" color="Violet" emphasis="Low" />
        <Badge label="Rose" color="Rose" emphasis="Low" />
        <Badge label="White" color="White" emphasis="Low" />
        <Badge label="Grey" color="Grey" emphasis="Low" />
      </div>
    \`
  })
}`,...(j=($=d.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var O,T,J;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display: flex; flex-wrap: wrap; gap: 8px; max-width: 600px;">
        <Badge label="Green" color="Green" emphasis="High" />
        <Badge label="Blue" color="Blue" emphasis="High" />
        <Badge label="Yellow" color="Yellow" emphasis="High" />
        <Badge label="Red" color="Red" emphasis="High" />
        <Badge label="Cyan" color="Cyan" emphasis="High" />
        <Badge label="Violet" color="Violet" emphasis="High" />
        <Badge label="Rose" color="Rose" emphasis="High" />
        <Badge label="Grey" color="Grey" emphasis="High" />
      </div>
    \`
  })
}`,...(J=(T=p.parameters)==null?void 0:T.docs)==null?void 0:J.source}}};var K,P,Q;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 800px;">
        <!-- Size L -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Large (24px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="L" color="Green" emphasis="Low" />
            <Badge label="Blue" size="L" color="Blue" emphasis="Low" />
            <Badge label="Yellow" size="L" color="Yellow" emphasis="Low" />
            <Badge label="Red" size="L" color="Red" emphasis="Low" />
            <Badge label="Cyan" size="L" color="Cyan" emphasis="Low" />
            <Badge label="Violet" size="L" color="Violet" emphasis="Low" />
            <Badge label="Rose" size="L" color="Rose" emphasis="Low" />
            <Badge label="White" size="L" color="White" emphasis="Low" />
            <Badge label="Grey" size="L" color="Grey" emphasis="Low" />
          </div>
        </div>
        
        <!-- Size M -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Medium (20px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="M" color="Green" emphasis="Low" />
            <Badge label="Blue" size="M" color="Blue" emphasis="Low" />
            <Badge label="Yellow" size="M" color="Yellow" emphasis="Low" />
            <Badge label="Red" size="M" color="Red" emphasis="Low" />
            <Badge label="Cyan" size="M" color="Cyan" emphasis="Low" />
            <Badge label="Violet" size="M" color="Violet" emphasis="Low" />
            <Badge label="Rose" size="M" color="Rose" emphasis="Low" />
            <Badge label="White" size="M" color="White" emphasis="Low" />
            <Badge label="Grey" size="M" color="Grey" emphasis="Low" />
          </div>
        </div>
        
        <!-- Size S -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Small (16px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="S" color="Green" emphasis="Low" />
            <Badge label="Blue" size="S" color="Blue" emphasis="Low" />
            <Badge label="Yellow" size="S" color="Yellow" emphasis="Low" />
            <Badge label="Red" size="S" color="Red" emphasis="Low" />
            <Badge label="Cyan" size="S" color="Cyan" emphasis="Low" />
            <Badge label="Violet" size="S" color="Violet" emphasis="Low" />
            <Badge label="Rose" size="S" color="Rose" emphasis="Low" />
            <Badge label="White" size="S" color="White" emphasis="Low" />
            <Badge label="Grey" size="S" color="Grey" emphasis="Low" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(Q=(P=c.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Z,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 800px;">
        <!-- Size L -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Large (24px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="L" color="Green" emphasis="High" />
            <Badge label="Blue" size="L" color="Blue" emphasis="High" />
            <Badge label="Yellow" size="L" color="Yellow" emphasis="High" />
            <Badge label="Red" size="L" color="Red" emphasis="High" />
            <Badge label="Cyan" size="L" color="Cyan" emphasis="High" />
            <Badge label="Violet" size="L" color="Violet" emphasis="High" />
            <Badge label="Rose" size="L" color="Rose" emphasis="High" />
            <Badge label="Grey" size="L" color="Grey" emphasis="High" />
          </div>
        </div>
        
        <!-- Size M -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Medium (20px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="M" color="Green" emphasis="High" />
            <Badge label="Blue" size="M" color="Blue" emphasis="High" />
            <Badge label="Yellow" size="M" color="Yellow" emphasis="High" />
            <Badge label="Red" size="M" color="Red" emphasis="High" />
            <Badge label="Cyan" size="M" color="Cyan" emphasis="High" />
            <Badge label="Violet" size="M" color="Violet" emphasis="High" />
            <Badge label="Rose" size="M" color="Rose" emphasis="High" />
            <Badge label="Grey" size="M" color="Grey" emphasis="High" />
          </div>
        </div>
        
        <!-- Size S -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Small (16px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="S" color="Green" emphasis="High" />
            <Badge label="Blue" size="S" color="Blue" emphasis="High" />
            <Badge label="Yellow" size="S" color="Yellow" emphasis="High" />
            <Badge label="Red" size="S" color="Red" emphasis="High" />
            <Badge label="Cyan" size="S" color="Cyan" emphasis="High" />
            <Badge label="Violet" size="S" color="Violet" emphasis="High" />
            <Badge label="Rose" size="S" color="Rose" emphasis="High" />
            <Badge label="Grey" size="S" color="Grey" emphasis="High" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,se,le;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Badge',
    size: 'M',
    emphasis: 'Low',
    color: 'Green',
    showIcon: false,
    icon: 'circle-small',
    showAvatar: false,
    avatarInitials: 'A',
    unassigned: false,
    showAvatarBadge: false,
    showStatus: false
  }
}`,...(le=(se=h.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const Le=["Default","WithIcon","WithAvatar","WithAvatarUnassigned","WithAvatarAndIndicators","HighEmphasis","SizeVariants","ColorVariantsLow","ColorVariantsHigh","CompleteMatrixLow","CompleteMatrixHigh","InteractiveDemo"];export{p as ColorVariantsHigh,d as ColorVariantsLow,g as CompleteMatrixHigh,c as CompleteMatrixLow,s as Default,n as HighEmphasis,h as InteractiveDemo,t as SizeVariants,o as WithAvatar,r as WithAvatarAndIndicators,i as WithAvatarUnassigned,l as WithIcon,Le as __namedExportsOrder,ye as default};
