import{r as v}from"./vue.esm-bundler-DSUVpXdV.js";import{C as r}from"./ColorSwatch-D-JkN4Vc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={title:"Atomic Components/ColorSwatch",component:r,parameters:{layout:"centered",docs:{description:{component:"A reusable color swatch component with selection states, hover effects, and keyboard accessibility. Available in multiple sizes."}}},argTypes:{color:{description:"The color value to display",control:{type:"color"}},isSelected:{description:"Whether this color swatch is currently selected",control:{type:"boolean"}},size:{description:"Size variant of the color swatch",control:{type:"select"},options:["small","medium","large"]}}},c={args:{color:"#476887",isSelected:!1,size:"medium"},render:e=>({components:{ColorSwatch:r},setup(){return{args:e,handleColorSelected:o=>{console.log("Color selected:",o)}}},template:`
      <ColorSwatch 
        :color="args.color"
        :is-selected="args.isSelected"
        :size="args.size"
        @color-selected="handleColorSelected"
      />
    `})},s={args:{color:"#2cde6d",isSelected:!0,size:"medium"},render:e=>({components:{ColorSwatch:r},setup(){return{args:e,handleColorSelected:o=>{console.log("Color selected:",o)}}},template:`
      <ColorSwatch 
        :color="args.color"
        :is-selected="args.isSelected"
        :size="args.size"
        @color-selected="handleColorSelected"
      />
    `})},t={render:()=>({components:{ColorSwatch:r},setup(){return{colors:["#e42e2e","#ff8c00","#2cde6d","#476887","#9b74b7"],handleColorSelected:o=>{console.log("Color selected:",o)}}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 12px; width: 60px;">Small:</span>
          <ColorSwatch 
            v-for="color in colors"
            :key="'small-' + color"
            :color="color"
            size="small"
            @color-selected="handleColorSelected"
          />
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 12px; width: 60px;">Medium:</span>
          <ColorSwatch 
            v-for="color in colors"
            :key="'medium-' + color"
            :color="color"
            size="medium"
            @color-selected="handleColorSelected"
          />
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 12px; width: 60px;">Large:</span>
          <ColorSwatch 
            v-for="color in colors"
            :key="'large-' + color"
            :color="color"
            size="large"
            @color-selected="handleColorSelected"
          />
        </div>
      </div>
    `})},a={render:()=>({components:{ColorSwatch:r},setup(){const e=["#e42e2e","#ff8c00","#ffeb3b","#2cde6d","#00bcd4","#476887","#9b74b7"],l=v("#476887");return{colors:e,selectedColor:l,handleColorSelected:x=>{l.value=x}}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <p style="font-size: 14px; margin: 0;">Selected: {{ selectedColor }}</p>
        <div style="display: flex; gap: 4px;">
          <ColorSwatch 
            v-for="color in colors"
            :key="color"
            :color="color"
            :is-selected="selectedColor === color"
            @color-selected="handleColorSelected"
          />
        </div>
      </div>
    `})};var d,n,i;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    color: '#476887',
    isSelected: false,
    size: 'medium'
  },
  render: args => ({
    components: {
      ColorSwatch
    },
    setup() {
      const handleColorSelected = (color: string) => {
        console.log('Color selected:', color);
      };
      return {
        args,
        handleColorSelected
      };
    },
    template: \`
      <ColorSwatch 
        :color="args.color"
        :is-selected="args.isSelected"
        :size="args.size"
        @color-selected="handleColorSelected"
      />
    \`
  })
}`,...(i=(n=c.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,m,S;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: '#2cde6d',
    isSelected: true,
    size: 'medium'
  },
  render: args => ({
    components: {
      ColorSwatch
    },
    setup() {
      const handleColorSelected = (color: string) => {
        console.log('Color selected:', color);
      };
      return {
        args,
        handleColorSelected
      };
    },
    template: \`
      <ColorSwatch 
        :color="args.color"
        :is-selected="args.isSelected"
        :size="args.size"
        @color-selected="handleColorSelected"
      />
    \`
  })
}`,...(S=(m=s.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var g,h,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorSwatch
    },
    setup() {
      const colors = ['#e42e2e', '#ff8c00', '#2cde6d', '#476887', '#9b74b7'];
      const handleColorSelected = (color: string) => {
        console.log('Color selected:', color);
      };
      return {
        colors,
        handleColorSelected
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 12px; width: 60px;">Small:</span>
          <ColorSwatch 
            v-for="color in colors"
            :key="'small-' + color"
            :color="color"
            size="small"
            @color-selected="handleColorSelected"
          />
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 12px; width: 60px;">Medium:</span>
          <ColorSwatch 
            v-for="color in colors"
            :key="'medium-' + color"
            :color="color"
            size="medium"
            @color-selected="handleColorSelected"
          />
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 12px; width: 60px;">Large:</span>
          <ColorSwatch 
            v-for="color in colors"
            :key="'large-' + color"
            :color="color"
            size="large"
            @color-selected="handleColorSelected"
          />
        </div>
      </div>
    \`
  })
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var f,u,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorSwatch
    },
    setup() {
      const colors = ['#e42e2e', '#ff8c00', '#ffeb3b', '#2cde6d', '#00bcd4', '#476887', '#9b74b7'];
      const selectedColor = ref('#476887');
      const handleColorSelected = (color: string) => {
        selectedColor.value = color;
      };
      return {
        colors,
        selectedColor,
        handleColorSelected
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <p style="font-size: 14px; margin: 0;">Selected: {{ selectedColor }}</p>
        <div style="display: flex; gap: 4px;">
          <ColorSwatch 
            v-for="color in colors"
            :key="color"
            :color="color"
            :is-selected="selectedColor === color"
            @color-selected="handleColorSelected"
          />
        </div>
      </div>
    \`
  })
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const A=["Default","Selected","AllSizes","InteractiveDemo"];export{t as AllSizes,c as Default,a as InteractiveDemo,s as Selected,A as __namedExportsOrder,k as default};
