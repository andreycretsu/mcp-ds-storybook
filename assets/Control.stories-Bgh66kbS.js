import{r as u}from"./vue.esm-bundler-DSUVpXdV.js";import{C as Y}from"./Control-CnyJMiHS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const re={title:"Components/Control",component:Y,tags:["autodocs"],argTypes:{type:{control:"select",options:["checkbox","toggle","radio"],description:"Type of control"},size:{control:"select",options:["M","S"],description:"Size of control"},state:{control:"select",options:["default","hover","disabled"],description:"Visual state"},active:{control:"boolean",description:"Active (checked/on/selected)"}}};function e(m){const Z=u(m.active??!1),$=u(!1);return{components:{Control:Y},setup(){return{args:m,active:Z,hover:$}},template:`
      <Control
        v-bind="args"
        :active="active"
        :state="hover ? 'hover' : args.state"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        @click="active = !active"
        style="cursor: pointer;"
      />
    `}}const a={args:{type:"checkbox",size:"M",state:"default",active:!1},render:e},t={args:{type:"checkbox",size:"M",state:"default",active:!0},render:e},r={args:{type:"checkbox",size:"M",state:"hover",active:!1}},s={args:{type:"checkbox",size:"M",state:"disabled",active:!1}},o={args:{type:"toggle",size:"M",state:"default",active:!1},render:e},c={args:{type:"toggle",size:"M",state:"default",active:!0},render:e},n={args:{type:"toggle",size:"M",state:"hover",active:!1}},i={args:{type:"toggle",size:"M",state:"disabled",active:!1}},d={args:{type:"radio",size:"M",state:"default",active:!1},render:e},l={args:{type:"radio",size:"M",state:"default",active:!0},render:e},p={args:{type:"radio",size:"M",state:"hover",active:!1}},g={args:{type:"radio",size:"M",state:"disabled",active:!1}};var v,f,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    size: 'M',
    state: 'default',
    active: false
  },
  render: interactiveTemplate
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,y,z;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    size: 'M',
    state: 'default',
    active: true
  },
  render: interactiveTemplate
}`,...(z=(y=t.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var M,k,x;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    size: 'M',
    state: 'hover',
    active: false
  }
}`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var T,S,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    size: 'M',
    state: 'disabled',
    active: false
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var R,A,D;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'toggle',
    size: 'M',
    state: 'default',
    active: false
  },
  render: interactiveTemplate
}`,...(D=(A=o.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,_,E;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: 'toggle',
    size: 'M',
    state: 'default',
    active: true
  },
  render: interactiveTemplate
}`,...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var O,V,j;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'toggle',
    size: 'M',
    state: 'hover',
    active: false
  }
}`,...(j=(V=n.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,w,B;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'toggle',
    size: 'M',
    state: 'disabled',
    active: false
  }
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var F,G,I;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    size: 'M',
    state: 'default',
    active: false
  },
  render: interactiveTemplate
}`,...(I=(G=d.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var J,K,L;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    size: 'M',
    state: 'default',
    active: true
  },
  render: interactiveTemplate
}`,...(L=(K=l.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,P,Q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    size: 'M',
    state: 'hover',
    active: false
  }
}`,...(Q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,W,X;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    size: 'M',
    state: 'disabled',
    active: false
  }
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const se=["Checkbox","CheckboxActive","CheckboxHover","CheckboxDisabled","Toggle","ToggleActive","ToggleHover","ToggleDisabled","Radio","RadioActive","RadioHover","RadioDisabled"];export{a as Checkbox,t as CheckboxActive,s as CheckboxDisabled,r as CheckboxHover,d as Radio,l as RadioActive,g as RadioDisabled,p as RadioHover,o as Toggle,c as ToggleActive,i as ToggleDisabled,n as ToggleHover,se as __namedExportsOrder,re as default};
