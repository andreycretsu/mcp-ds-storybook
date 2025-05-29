import{r as o}from"./vue.esm-bundler-DSUVpXdV.js";import{S as r}from"./SearchInput-Dly0ztap.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={title:"Atomic Components/SearchInput",component:r,parameters:{layout:"centered",docs:{description:{component:"A reusable search input component with magnifying glass icon. Designed for filtering and search functionality across the design system."}}},argTypes:{modelValue:{description:"The current search query value",control:{type:"text"}},placeholder:{description:"Placeholder text shown when input is empty",control:{type:"text"}},disabled:{description:"Whether the input is disabled",control:{type:"boolean"}}}},s={args:{modelValue:"",placeholder:"Search",disabled:!1},render:e=>({components:{SearchInput:r},setup(){const a=o(e.modelValue);return{args:e,searchValue:a}},template:`
      <div style="width: 300px;">
        <SearchInput 
          v-model="searchValue"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">
          Current value: "{{ searchValue }}"
        </p>
      </div>
    `})},l={args:{modelValue:"icons",placeholder:"Search",disabled:!1},render:e=>({components:{SearchInput:r},setup(){const a=o(e.modelValue);return{args:e,searchValue:a}},template:`
      <div style="width: 300px;">
        <SearchInput 
          v-model="searchValue"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
      </div>
    `})},d={args:{modelValue:"",placeholder:"Search disabled",disabled:!0},render:e=>({components:{SearchInput:r},setup(){const a=o(e.modelValue);return{args:e,searchValue:a}},template:`
      <div style="width: 300px;">
        <SearchInput 
          v-model="searchValue"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
      </div>
    `})},t={args:{modelValue:"",placeholder:"Find components...",disabled:!1},render:e=>({components:{SearchInput:r},setup(){const a=o(e.modelValue);return{args:e,searchValue:a}},template:`
      <div style="width: 300px;">
        <SearchInput 
          v-model="searchValue"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
      </div>
    `})};var c,p,n;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: 'Search',
    disabled: false
  },
  render: args => ({
    components: {
      SearchInput
    },
    setup() {
      const searchValue = ref(args.modelValue);
      return {
        args,
        searchValue
      };
    },
    template: \`
      <div style="width: 300px;">
        <SearchInput 
          v-model="searchValue"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">
          Current value: "{{ searchValue }}"
        </p>
      </div>
    \`
  })
}`,...(n=(p=s.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var u,i,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    modelValue: 'icons',
    placeholder: 'Search',
    disabled: false
  },
  render: args => ({
    components: {
      SearchInput
    },
    setup() {
      const searchValue = ref(args.modelValue);
      return {
        args,
        searchValue
      };
    },
    template: \`
      <div style="width: 300px;">
        <SearchInput 
          v-model="searchValue"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
      </div>
    \`
  })
}`,...(h=(i=l.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var m,g,V;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: 'Search disabled',
    disabled: true
  },
  render: args => ({
    components: {
      SearchInput
    },
    setup() {
      const searchValue = ref(args.modelValue);
      return {
        args,
        searchValue
      };
    },
    template: \`
      <div style="width: 300px;">
        <SearchInput 
          v-model="searchValue"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
      </div>
    \`
  })
}`,...(V=(g=d.parameters)==null?void 0:g.docs)==null?void 0:V.source}}};var b,v,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: 'Find components...',
    disabled: false
  },
  render: args => ({
    components: {
      SearchInput
    },
    setup() {
      const searchValue = ref(args.modelValue);
      return {
        args,
        searchValue
      };
    },
    template: \`
      <div style="width: 300px;">
        <SearchInput 
          v-model="searchValue"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
      </div>
    \`
  })
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const w=["Default","WithValue","Disabled","CustomPlaceholder"];export{t as CustomPlaceholder,s as Default,d as Disabled,l as WithValue,w as __namedExportsOrder,I as default};
