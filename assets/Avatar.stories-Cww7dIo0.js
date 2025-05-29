import{A as e}from"./Avatar-jVLt57s2.js";import"./vue.esm-bundler-DSUVpXdV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Y={title:"Components/Avatar",component:e,parameters:{layout:"centered",docs:{description:{component:"A flexible avatar component with multiple sizes, initials, unassigned state, and optional indicators. Supports all sizes from 12px to 152px with exact Figma specifications."}}},argTypes:{initials:{control:"text",description:"Avatar initials (1-2 characters)"},size:{control:"select",options:[12,16,20,24,32,36,40,48,64,72,152],description:"Size in pixels"},whiteBorder:{control:"boolean",description:"Show white border around avatar"},unassigned:{control:"boolean",description:"Show unassigned state (ghost icon)"},showBadge:{control:"boolean",description:"Show badge indicator"},showStatus:{control:"boolean",description:"Show status indicator"}},tags:["autodocs"]},i={args:{initials:"A",size:24,whiteBorder:!1,unassigned:!1,showBadge:!1,showStatus:!1}},n={render:()=>({components:{Avatar:e},template:`
      <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="12" />
          <span style="font-size: 10px; color: #666;">12px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="16" />
          <span style="font-size: 10px; color: #666;">16px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="20" />
          <span style="font-size: 10px; color: #666;">20px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="24" />
          <span style="font-size: 10px; color: #666;">24px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="32" />
          <span style="font-size: 10px; color: #666;">32px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="36" />
          <span style="font-size: 10px; color: #666;">36px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="40" />
          <span style="font-size: 10px; color: #666;">40px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="48" />
          <span style="font-size: 10px; color: #666;">48px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="64" />
          <span style="font-size: 10px; color: #666;">64px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="72" />
          <span style="font-size: 10px; color: #666;">72px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="152" />
          <span style="font-size: 10px; color: #666;">152px</span>
        </div>
      </div>
    `})},s={render:()=>({components:{Avatar:e},template:`
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="12" />
          <span style="font-size: 10px; color: #666;">Badge S</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="12" />
          <span style="font-size: 10px; color: #666;">Badge M</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="16" />
          <span style="font-size: 10px; color: #666;">Badge L</span>
        </div>
      </div>
    `})},a={render:()=>({components:{Avatar:e},template:`
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="12" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">12px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="16" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">16px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="24" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">24px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="32" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">32px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="48" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">48px</span>
        </div>
      </div>
    `})},t={render:()=>({components:{Avatar:e},template:`
      <div style="display: flex; align-items: center; gap: 24px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <Avatar initials="A" :size="24" :showBadge="true" />
          <span style="font-size: 10px; color: #666;">Badge</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <Avatar initials="A" :size="24" :showStatus="true" />
          <span style="font-size: 10px; color: #666;">Status</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <Avatar initials="A" :size="24" :showBadge="true" :showStatus="true" />
          <span style="font-size: 10px; color: #666;">Both</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <Avatar initials="A" :size="48" :showBadge="true" :showStatus="true" />
          <span style="font-size: 10px; color: #666;">Large</span>
        </div>
      </div>
    `})},l={render:()=>({components:{Avatar:e},template:`
      <div style="display: flex; align-items: center; gap: 16px; background: #333; padding: 20px; border-radius: 8px;">
        <Avatar initials="A" :size="24" :whiteBorder="true" />
        <Avatar initials="AB" :size="32" :whiteBorder="true" />
        <Avatar initials="JD" :size="40" :whiteBorder="true" :showBadge="true" />
        <Avatar :size="32" :whiteBorder="true" :unassigned="true" />
        <Avatar initials="MK" :size="48" :whiteBorder="true" :showBadge="true" :showStatus="true" />
      </div>
    `}),parameters:{backgrounds:{default:"dark"}}},r={render:()=>({components:{Avatar:e},template:`
      <div style="display: flex; align-items: center; gap: 16px;">
        <Avatar initials="A" :size="32" />
        <Avatar initials="AB" :size="32" />
        <Avatar initials="JD" :size="32" />
        <Avatar initials="MK" :size="32" />
        <Avatar initials="XY" :size="32" />
      </div>
    `})},o={args:{initials:"A",size:32,whiteBorder:!1,unassigned:!1,showBadge:!1,showStatus:!1}};var p,d,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    initials: 'A',
    size: 24,
    whiteBorder: false,
    unassigned: false,
    showBadge: false,
    showStatus: false
  }
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var x,v,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="12" />
          <span style="font-size: 10px; color: #666;">12px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="16" />
          <span style="font-size: 10px; color: #666;">16px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="20" />
          <span style="font-size: 10px; color: #666;">20px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="24" />
          <span style="font-size: 10px; color: #666;">24px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="32" />
          <span style="font-size: 10px; color: #666;">32px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="36" />
          <span style="font-size: 10px; color: #666;">36px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="40" />
          <span style="font-size: 10px; color: #666;">40px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="48" />
          <span style="font-size: 10px; color: #666;">48px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="64" />
          <span style="font-size: 10px; color: #666;">64px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="72" />
          <span style="font-size: 10px; color: #666;">72px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="152" />
          <span style="font-size: 10px; color: #666;">152px</span>
        </div>
      </div>
    \`
  })
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,m,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="12" />
          <span style="font-size: 10px; color: #666;">Badge S</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="12" />
          <span style="font-size: 10px; color: #666;">Badge M</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="16" />
          <span style="font-size: 10px; color: #666;">Badge L</span>
        </div>
      </div>
    \`
  })
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var u,A,z;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="12" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">12px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="16" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">16px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="24" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">24px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="32" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">32px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="48" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">48px</span>
        </div>
      </div>
    \`
  })
}`,...(z=(A=a.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var h,w,B;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 24px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <Avatar initials="A" :size="24" :showBadge="true" />
          <span style="font-size: 10px; color: #666;">Badge</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <Avatar initials="A" :size="24" :showStatus="true" />
          <span style="font-size: 10px; color: #666;">Status</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <Avatar initials="A" :size="24" :showBadge="true" :showStatus="true" />
          <span style="font-size: 10px; color: #666;">Both</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <Avatar initials="A" :size="48" :showBadge="true" :showStatus="true" />
          <span style="font-size: 10px; color: #666;">Large</span>
        </div>
      </div>
    \`
  })
}`,...(B=(w=t.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var S,b,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 16px; background: #333; padding: 20px; border-radius: 8px;">
        <Avatar initials="A" :size="24" :whiteBorder="true" />
        <Avatar initials="AB" :size="32" :whiteBorder="true" />
        <Avatar initials="JD" :size="40" :whiteBorder="true" :showBadge="true" />
        <Avatar :size="32" :whiteBorder="true" :unassigned="true" />
        <Avatar initials="MK" :size="48" :whiteBorder="true" :showBadge="true" :showStatus="true" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(D=(b=l.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var k,I,M;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 16px;">
        <Avatar initials="A" :size="32" />
        <Avatar initials="AB" :size="32" />
        <Avatar initials="JD" :size="32" />
        <Avatar initials="MK" :size="32" />
        <Avatar initials="XY" :size="32" />
      </div>
    \`
  })
}`,...(M=(I=r.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var W,J,K;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    initials: 'A',
    size: 32,
    whiteBorder: false,
    unassigned: false,
    showBadge: false,
    showStatus: false
  }
}`,...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const _=["Default","AllSizes","BadgeSizes","UnassignedStates","WithIndicators","WithWhiteBorder","DifferentInitials","InteractiveDemo"];export{n as AllSizes,s as BadgeSizes,i as Default,r as DifferentInitials,o as InteractiveDemo,a as UnassignedStates,t as WithIndicators,l as WithWhiteBorder,_ as __namedExportsOrder,Y as default};
