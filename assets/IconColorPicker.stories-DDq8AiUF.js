import{d as w,e as J,f as u,g as m,F as X,y as Y,o as p,l as U,k as S,m as se,n as re,p as te,r as t,q as g}from"./vue.esm-bundler-DSUVpXdV.js";import{S as ce}from"./SearchInput-Dly0ztap.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as Z}from"./ColorSwatch-D-JkN4Vc.js";const de={class:"icon-grid-container"},ie={class:"icon-grid",ref:"iconGrid"},me=["onClick","aria-label","onKeydown"],ee=w({__name:"IconGrid",props:{icons:{default:()=>[]},searchQuery:{default:""},selectedIcon:{default:null},iconColor:{default:"#476887"}},emits:["icon-selected"],setup(a,{emit:s}){const n=a,c=s,r=J(()=>n.searchQuery?n.icons.filter(d=>d.name.toLowerCase().includes(n.searchQuery.toLowerCase())):n.icons),l=d=>{c("icon-selected",d)};return(d,e)=>(p(),u("div",de,[m("div",ie,[(p(!0),u(X,null,Y(r.value,o=>{var h;return p(),u("div",{key:o.name,class:S(["icon-cell",{selected:((h=d.selectedIcon)==null?void 0:h.name)===o.name}]),onClick:v=>l(o),role:"button",tabindex:"0","aria-label":`Select ${o.name} icon`,onKeydown:[U(v=>l(o),["enter"]),U(se(v=>l(o),["prevent"]),["space"])]},[m("i",{class:S(`fa-solid fa-${o.name}`),style:re({color:d.iconColor})},null,6)],42,me)}),128))],512)]))}}),pe=_(ee,[["__scopeId","data-v-99b1caf0"]]);ee.__docgenInfo={exportName:"default",displayName:"IconGrid",description:"",tags:{},props:[{name:"icons",required:!0,type:{name:"Array",elements:[{name:"Icon"}]},defaultValue:{func:!1,value:"() => []"}},{name:"searchQuery",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"selectedIcon",required:!1,type:{name:"union",elements:[{name:"Icon"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"iconColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#476887'"}}],events:[{name:"icon-selected",type:{names:["Icon"]}}],sourceFiles:["/Users/andrey.cretsu/test mcp project/src/components/IconGrid.vue"]};const ue={class:"color-palette"},ae=w({__name:"ColorPalette",props:{colors:{default:()=>[]},selectedColor:{default:null},size:{default:"medium"}},emits:["color-selected"],setup(a,{emit:s}){const n=a,c=s,r=l=>{c("color-selected",l)};return(l,d)=>(p(),u("div",ue,[(p(!0),u(X,null,Y(l.colors,e=>(p(),te(Z,{key:e,color:e,"is-selected":l.selectedColor===e,size:n.size,onColorSelected:r},null,8,["color","is-selected","size"]))),128))]))}}),fe=_(ae,[["__scopeId","data-v-2b564cf8"]]);ae.__docgenInfo={exportName:"default",displayName:"ColorPalette",description:"",tags:{},props:[{name:"colors",required:!0,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"selectedColor",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}}],events:[{name:"color-selected",type:{names:["string"]}}],sourceFiles:["/Users/andrey.cretsu/test mcp project/src/components/ColorPalette.vue"]};const ge={class:"hex-color-input"},he={class:"input-frame"},ve=["value","placeholder"],oe=w({__name:"HexColorInput",props:{modelValue:{default:""},placeholder:{default:"#9B74B7"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","color-change"],setup(a,{emit:s}){const n=a,c=s,r=e=>/^#[0-9A-F]{6}$/i.test(e),l=e=>{let o=e.target.value;o.length>0&&!o.startsWith("#")&&(o="#"+o),o=o.toUpperCase(),c("update:modelValue",o),r(o)&&c("color-change",o)},d=()=>{let e=n.modelValue;e&&!e.startsWith("#")&&(e="#"+e),e&&e.length===4&&(e="#"+e.slice(1).split("").map(o=>o+o).join("")),e&&r(e)&&(c("update:modelValue",e.toUpperCase()),c("color-change",e.toUpperCase()))};return J(()=>({"hex-input":!0,valid:r(n.modelValue),invalid:n.modelValue.length>0&&!r(n.modelValue)})),(e,o)=>(p(),u("div",ge,[m("div",he,[m("input",{type:"text",value:e.modelValue,onInput:l,onBlur:d,placeholder:e.placeholder,class:"hex-input",maxlength:"7"},null,40,ve),o[0]||(o[0]=m("div",{class:"eyedropper-icon"},[m("i",{class:"fa-solid fa-eye-dropper-full"})],-1))])]))}}),be=_(oe,[["__scopeId","data-v-a3d259fc"]]);oe.__docgenInfo={exportName:"default",displayName:"HexColorInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#9B74B7'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"color-change",type:{names:["string"]}}],sourceFiles:["/Users/andrey.cretsu/test mcp project/src/components/HexColorInput.vue"]};const ye={class:"icon-color-picker"},xe={class:"footer"},Ve={class:"custom-color-section"},le=w({__name:"IconColorPicker",props:{modelValue:{default:null},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","icon-selected","color-selected"],setup(a,{emit:s}){const n=s,c=t(""),r=t(null),l=t("#476887"),d=t("#9B74B7"),e=t("#9B74B7"),o=t([{name:"house"},{name:"circle-user"},{name:"image"},{name:"file"},{name:"camera"},{name:"calendar"},{name:"cloud"},{name:"alarm-clock"},{name:"truck"},{name:"thumbs-up"},{name:"face-smile"},{name:"headphones"},{name:"bell"},{name:"user"},{name:"comment"},{name:"envelope"},{name:"magnifying-glass"},{name:"check"},{name:"download"},{name:"font-awesome"},{name:"arrow-right"},{name:"arrow-left"},{name:"arrow-up"},{name:"arrow-down"},{name:"chevron-right"},{name:"chevron-left"},{name:"chevron-up"},{name:"chevron-down"},{name:"caret-right"},{name:"caret-left"},{name:"caret-up"},{name:"caret-down"},{name:"angles-right"},{name:"angles-left"},{name:"angles-up"},{name:"angles-down"},{name:"plus"},{name:"minus"},{name:"xmark"},{name:"check"},{name:"pencil"},{name:"trash"},{name:"gear"},{name:"ellipsis"},{name:"ellipsis-vertical"},{name:"bars"},{name:"grip"},{name:"grip-vertical"},{name:"play"},{name:"pause"},{name:"stop"},{name:"forward"},{name:"backward"},{name:"volume-high"},{name:"volume-low"},{name:"volume-xmark"},{name:"music"},{name:"video"},{name:"film"},{name:"camera-retro"},{name:"microphone"},{name:"microphone-slash"},{name:"phone"},{name:"phone-slash"},{name:"message"},{name:"comments"},{name:"at"},{name:"hashtag"},{name:"quote-left"},{name:"quote-right"},{name:"folder"},{name:"folder-open"},{name:"file-text"},{name:"file-pdf"},{name:"file-image"},{name:"file-video"},{name:"file-audio"},{name:"file-code"},{name:"file-archive"},{name:"clipboard"},{name:"clipboard-check"},{name:"clipboard-list"},{name:"share"},{name:"share-nodes"},{name:"link"},{name:"unlink"},{name:"heart"},{name:"thumbs-up"},{name:"thumbs-down"},{name:"star"},{name:"bookmark"},{name:"circle-check"},{name:"circle-xmark"},{name:"circle-info"},{name:"circle-exclamation"},{name:"triangle-exclamation"},{name:"circle-question"},{name:"shield-check"},{name:"shield-xmark"},{name:"clock"},{name:"calendar-days"},{name:"calendar-week"},{name:"calendar-plus"},{name:"calendar-minus"},{name:"hourglass"},{name:"stopwatch"},{name:"location-dot"},{name:"location-pin"},{name:"map"},{name:"map-pin"},{name:"compass"},{name:"globe"},{name:"cart-shopping"},{name:"cart-plus"},{name:"cart-arrow-down"},{name:"bag-shopping"},{name:"credit-card"},{name:"money-bill"},{name:"coins"},{name:"receipt"},{name:"tag"},{name:"tags"},{name:"laptop"},{name:"desktop"},{name:"mobile"},{name:"tablet"},{name:"wifi"},{name:"bluetooth"},{name:"usb"},{name:"battery-full"},{name:"battery-half"},{name:"battery-empty"},{name:"plug"},{name:"power-off"},{name:"lock"},{name:"lock-open"},{name:"key"},{name:"eye"},{name:"eye-slash"},{name:"user-secret"},{name:"fingerprint"},{name:"sun"},{name:"moon"},{name:"cloud"},{name:"cloud-rain"},{name:"cloud-snow"},{name:"bolt"},{name:"rainbow"},{name:"temperature-high"},{name:"temperature-low"},{name:"tree"},{name:"leaf"},{name:"snowflake"},{name:"car"},{name:"truck"},{name:"bicycle"},{name:"motorcycle"},{name:"bus"},{name:"train"},{name:"plane"},{name:"ship"},{name:"rocket"},{name:"helicopter"},{name:"heart-pulse"},{name:"stethoscope"},{name:"pills"},{name:"syringe"},{name:"bandage"},{name:"user-doctor"},{name:"hospital"},{name:"ambulance"},{name:"futbol"},{name:"basketball"},{name:"baseball"},{name:"tennis-ball"},{name:"running"},{name:"swimmer"},{name:"bicycle"},{name:"dumbbell"},{name:"trophy"},{name:"medal"},{name:"utensils"},{name:"mug-hot"},{name:"wine-glass"},{name:"martini-glass"},{name:"pizza-slice"},{name:"hamburger"},{name:"ice-cream"},{name:"cake-candles"},{name:"apple-whole"},{name:"carrot"},{name:"graduation-cap"},{name:"book"},{name:"book-open"},{name:"pencil"},{name:"pen"},{name:"highlighter"},{name:"chalkboard"},{name:"calculator"},{name:"microscope"},{name:"flask"},{name:"gamepad"},{name:"dice"},{name:"chess"},{name:"puzzle-piece"},{name:"masks-theater"},{name:"guitar"},{name:"microphone-lines"},{name:"headphones-simple"},{name:"ticket"},{name:"gift"},{name:"magic-wand-sparkles"},{name:"sparkles"},{name:"fire"},{name:"snowman"},{name:"ghost"},{name:"skull"},{name:"poo"},{name:"robot"},{name:"alien"},{name:"hand"},{name:"handshake"},{name:"thumbs-up"},{name:"peace"},{name:"yin-yang"}]),h=t(["#476887","#2CDE6D","#E3B212","#E42E2E","#0072E5","#0ECAE4","#7201E5","#E40097"]),v=i=>{r.value=i,n("icon-selected",i.name),P()},D=i=>{l.value=i,n("color-selected",i),P()},ne=i=>{e.value=i,l.value=i,n("color-selected",i),P()},P=()=>{r.value&&l.value&&n("update:modelValue",{icon:r.value.name,color:l.value})};return(i,b)=>(p(),u("div",ye,[g(ce,{modelValue:c.value,"onUpdate:modelValue":b[0]||(b[0]=E=>c.value=E),placeholder:"Search"},null,8,["modelValue"]),g(pe,{icons:o.value,"search-query":c.value,"selected-icon":r.value,"icon-color":l.value,onIconSelected:v},null,8,["icons","search-query","selected-icon","icon-color"]),m("div",xe,[g(fe,{colors:h.value,"selected-color":l.value,onColorSelected:D},null,8,["colors","selected-color"]),m("div",Ve,[g(be,{modelValue:d.value,"onUpdate:modelValue":b[1]||(b[1]=E=>d.value=E),onColorChange:ne},null,8,["modelValue"]),g(Z,{color:e.value,"is-selected":l.value===e.value,onColorSelected:D},null,8,["color","is-selected"])])])]))}}),f=_(le,[["__scopeId","data-v-0425dd5b"]]);le.__docgenInfo={exportName:"default",displayName:"IconColorPicker",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"{ icon: string; color: string }"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"{ icon: string; color: string }"},{name:"null"}]}},{name:"icon-selected",type:{names:["string"]}},{name:"color-selected",type:{names:["string"]}}],sourceFiles:["/Users/andrey.cretsu/test mcp project/src/components/IconColorPicker.vue"]};const _e={title:"Components/IconColorPicker",component:f,parameters:{layout:"centered",docs:{description:{component:"A comprehensive icon and color picker component with search functionality, based on FontAwesome 6 Pro icons. Features a searchable grid of icons, predefined color palette, and custom color input with hex values."}}},argTypes:{modelValue:{description:"The selected icon and color value",control:{type:"object"}},disabled:{description:"Disable the entire picker",control:{type:"boolean"}},"onUpdate:modelValue":{description:"Emitted when the selected icon/color combination changes",action:"update:modelValue"},"onIcon-selected":{description:"Emitted when an icon is selected",action:"icon-selected"},"onColor-selected":{description:"Emitted when a color is selected",action:"color-selected"}},tags:["autodocs"]},y={args:{modelValue:null,disabled:!1},render:a=>({components:{IconColorPicker:f},setup(){const s=t(a.modelValue);return{args:a,modelValue:s}},template:`
      <IconColorPicker 
        v-model="modelValue"
        :disabled="args.disabled"
        @update:modelValue="args['onUpdate:modelValue']"
        @icon-selected="args['onIcon-selected']"
        @color-selected="args['onColor-selected']"
      />
    `})},x={args:{modelValue:{icon:"heart",color:"#E42E2E"},disabled:!1},render:a=>({components:{IconColorPicker:f},setup(){const s=t(a.modelValue);return{args:a,modelValue:s}},template:`
      <IconColorPicker 
        v-model="modelValue"
        :disabled="args.disabled"
        @update:modelValue="args['onUpdate:modelValue']"
        @icon-selected="args['onIcon-selected']"
        @color-selected="args['onColor-selected']"
      />
    `}),parameters:{docs:{description:{story:"IconColorPicker with a pre-selected heart icon and red color from the palette."}}}},V={args:{modelValue:{icon:"wand-magic-sparkles",color:"#9B74B7"},disabled:!1},render:a=>({components:{IconColorPicker:f},setup(){const s=t(a.modelValue);return{args:a,modelValue:s}},template:`
      <IconColorPicker 
        v-model="modelValue"
        :disabled="args.disabled"
        @update:modelValue="args['onUpdate:modelValue']"
        @icon-selected="args['onIcon-selected']"
        @color-selected="args['onColor-selected']"
      />
    `}),parameters:{docs:{description:{story:"IconColorPicker with a magic wand icon and custom purple color entered via hex input."}}}},k={args:{modelValue:{icon:"gear",color:"#476887"},disabled:!0},render:a=>({components:{IconColorPicker:f},setup(){const s=t(a.modelValue);return{args:a,modelValue:s}},template:`
      <IconColorPicker 
        v-model="modelValue"
        :disabled="args.disabled"
        @update:modelValue="args['onUpdate:modelValue']"
        @icon-selected="args['onIcon-selected']"
        @color-selected="args['onColor-selected']"
      />
    `}),parameters:{docs:{description:{story:"IconColorPicker in disabled state. All interactions are prevented."}}}},C={args:{modelValue:null,disabled:!1},render:a=>({components:{IconColorPicker:f},setup(){const s=t(a.modelValue),n=t(null);return{args:a,modelValue:s,selectedData:n,handleUpdate:r=>{var l;s.value=r,n.value=r,(l=a["onUpdate:modelValue"])==null||l.call(a,r)}}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
        <IconColorPicker 
          v-model="modelValue"
          :disabled="args.disabled"
          @update:modelValue="handleUpdate"
          @icon-selected="args['onIcon-selected']"
          @color-selected="args['onColor-selected']"
        />
        
        <div v-if="selectedData" style="
          display: flex; 
          align-items: center; 
          gap: 12px; 
          padding: 12px 16px; 
          background: #f8f9fa; 
          border-radius: 8px;
          border: 1px solid #e9ecef;
          font-family: 'Inter', sans-serif;
        ">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i :class="'fa-solid fa-' + selectedData.icon" :style="{ color: selectedData.color, fontSize: '20px' }"></i>
            <span style="font-weight: 500; color: #495057;">{{ selectedData.icon }}</span>
          </div>
          <div style="
            width: 24px; 
            height: 24px; 
            border-radius: 50%; 
            border: 2px solid #fff;
            box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
          " :style="{ backgroundColor: selectedData.color }"></div>
          <code style="
            background: #e9ecef; 
            padding: 2px 6px; 
            border-radius: 4px; 
            font-size: 12px;
            color: #495057;
          ">{{ selectedData.color }}</code>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"Interactive playground showing the selected icon and color in real-time. Try searching for icons, clicking different icons, selecting colors from the palette, or entering custom hex values."}}}},I={render:()=>({components:{IconColorPicker:f},setup(){return{examples:t([{icon:"house",color:"#476887",label:"Home"},{icon:"user",color:"#2CDE6D",label:"User"},{icon:"heart",color:"#E42E2E",label:"Favorite"},{icon:"star",color:"#E3B212",label:"Rating"},{icon:"bell",color:"#0072E5",label:"Notification"}])}},template:`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h3 style="margin: 0; font-family: 'Inter', sans-serif; color: #212529;">Icon & Color Combinations</h3>
        
        <div style="display: flex; flex-wrap: wrap; gap: 16px;">
          <div 
            v-for="example in examples" 
            :key="example.icon"
            style="
              display: flex; 
              flex-direction: column; 
              align-items: center; 
              gap: 8px;
              padding: 16px;
              background: #ffffff;
              border: 1px solid #e9ecef;
              border-radius: 8px;
              min-width: 80px;
            "
          >
            <i 
              :class="'fa-solid fa-' + example.icon" 
              :style="{ color: example.color, fontSize: '24px' }"
            ></i>
            <span style="font-size: 12px; color: #6c757d; font-family: 'Inter', sans-serif;">
              {{ example.label }}
            </span>
            <code style="
              font-size: 10px; 
              background: #f8f9fa; 
              padding: 2px 4px; 
              border-radius: 3px;
              color: #495057;
            ">
              {{ example.color }}
            </code>
          </div>
        </div>
        
        <div style="margin-top: 20px;">
          <IconColorPicker />
        </div>
      </div>
    `}),parameters:{layout:"padded",docs:{description:{story:"Design system showcase demonstrating various icon and color combinations that can be created with the IconColorPicker component."}}}};var B,z,q;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    disabled: false
  },
  render: args => ({
    components: {
      IconColorPicker
    },
    setup() {
      const modelValue = ref(args.modelValue);
      return {
        args,
        modelValue
      };
    },
    template: \`
      <IconColorPicker 
        v-model="modelValue"
        :disabled="args.disabled"
        @update:modelValue="args['onUpdate:modelValue']"
        @icon-selected="args['onIcon-selected']"
        @color-selected="args['onColor-selected']"
      />
    \`
  })
}`,...(q=(z=y.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var $,F,N;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    modelValue: {
      icon: 'heart',
      color: '#E42E2E'
    },
    disabled: false
  },
  render: args => ({
    components: {
      IconColorPicker
    },
    setup() {
      const modelValue = ref(args.modelValue);
      return {
        args,
        modelValue
      };
    },
    template: \`
      <IconColorPicker 
        v-model="modelValue"
        :disabled="args.disabled"
        @update:modelValue="args['onUpdate:modelValue']"
        @icon-selected="args['onIcon-selected']"
        @color-selected="args['onColor-selected']"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'IconColorPicker with a pre-selected heart icon and red color from the palette.'
      }
    }
  }
}`,...(N=(F=x.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var A,H,j;V.parameters={...V.parameters,docs:{...(A=V.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    modelValue: {
      icon: 'wand-magic-sparkles',
      color: '#9B74B7'
    },
    disabled: false
  },
  render: args => ({
    components: {
      IconColorPicker
    },
    setup() {
      const modelValue = ref(args.modelValue);
      return {
        args,
        modelValue
      };
    },
    template: \`
      <IconColorPicker 
        v-model="modelValue"
        :disabled="args.disabled"
        @update:modelValue="args['onUpdate:modelValue']"
        @icon-selected="args['onIcon-selected']"
        @color-selected="args['onColor-selected']"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'IconColorPicker with a magic wand icon and custom purple color entered via hex input.'
      }
    }
  }
}`,...(j=(H=V.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var G,Q,T;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    modelValue: {
      icon: 'gear',
      color: '#476887'
    },
    disabled: true
  },
  render: args => ({
    components: {
      IconColorPicker
    },
    setup() {
      const modelValue = ref(args.modelValue);
      return {
        args,
        modelValue
      };
    },
    template: \`
      <IconColorPicker 
        v-model="modelValue"
        :disabled="args.disabled"
        @update:modelValue="args['onUpdate:modelValue']"
        @icon-selected="args['onIcon-selected']"
        @color-selected="args['onColor-selected']"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'IconColorPicker in disabled state. All interactions are prevented.'
      }
    }
  }
}`,...(T=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:T.source}}};var W,K,L;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    disabled: false
  },
  render: args => ({
    components: {
      IconColorPicker
    },
    setup() {
      const modelValue = ref(args.modelValue);
      const selectedData = ref<{
        icon: string;
        color: string;
      } | null>(null);
      const handleUpdate = (value: {
        icon: string;
        color: string;
      } | null) => {
        modelValue.value = value;
        selectedData.value = value;
        args['onUpdate:modelValue']?.(value);
      };
      return {
        args,
        modelValue,
        selectedData,
        handleUpdate
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
        <IconColorPicker 
          v-model="modelValue"
          :disabled="args.disabled"
          @update:modelValue="handleUpdate"
          @icon-selected="args['onIcon-selected']"
          @color-selected="args['onColor-selected']"
        />
        
        <div v-if="selectedData" style="
          display: flex; 
          align-items: center; 
          gap: 12px; 
          padding: 12px 16px; 
          background: #f8f9fa; 
          border-radius: 8px;
          border: 1px solid #e9ecef;
          font-family: 'Inter', sans-serif;
        ">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i :class="'fa-solid fa-' + selectedData.icon" :style="{ color: selectedData.color, fontSize: '20px' }"></i>
            <span style="font-weight: 500; color: #495057;">{{ selectedData.icon }}</span>
          </div>
          <div style="
            width: 24px; 
            height: 24px; 
            border-radius: 50%; 
            border: 2px solid #fff;
            box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
          " :style="{ backgroundColor: selectedData.color }"></div>
          <code style="
            background: #e9ecef; 
            padding: 2px 6px; 
            border-radius: 4px; 
            font-size: 12px;
            color: #495057;
          ">{{ selectedData.color }}</code>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground showing the selected icon and color in real-time. Try searching for icons, clicking different icons, selecting colors from the palette, or entering custom hex values.'
      }
    }
  }
}`,...(L=(K=C.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var M,R,O;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      IconColorPicker
    },
    setup() {
      const examples = ref([{
        icon: 'house',
        color: '#476887',
        label: 'Home'
      }, {
        icon: 'user',
        color: '#2CDE6D',
        label: 'User'
      }, {
        icon: 'heart',
        color: '#E42E2E',
        label: 'Favorite'
      }, {
        icon: 'star',
        color: '#E3B212',
        label: 'Rating'
      }, {
        icon: 'bell',
        color: '#0072E5',
        label: 'Notification'
      }]);
      return {
        examples
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h3 style="margin: 0; font-family: 'Inter', sans-serif; color: #212529;">Icon & Color Combinations</h3>
        
        <div style="display: flex; flex-wrap: wrap; gap: 16px;">
          <div 
            v-for="example in examples" 
            :key="example.icon"
            style="
              display: flex; 
              flex-direction: column; 
              align-items: center; 
              gap: 8px;
              padding: 16px;
              background: #ffffff;
              border: 1px solid #e9ecef;
              border-radius: 8px;
              min-width: 80px;
            "
          >
            <i 
              :class="'fa-solid fa-' + example.icon" 
              :style="{ color: example.color, fontSize: '24px' }"
            ></i>
            <span style="font-size: 12px; color: #6c757d; font-family: 'Inter', sans-serif;">
              {{ example.label }}
            </span>
            <code style="
              font-size: 10px; 
              background: #f8f9fa; 
              padding: 2px 4px; 
              border-radius: 3px;
              color: #495057;
            ">
              {{ example.color }}
            </code>
          </div>
        </div>
        
        <div style="margin-top: 20px;">
          <IconColorPicker />
        </div>
      </div>
    \`
  }),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Design system showcase demonstrating various icon and color combinations that can be created with the IconColorPicker component.'
      }
    }
  }
}`,...(O=(R=I.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const Pe=["Default","WithSelection","CustomColor","Disabled","Playground","DesignShowcase"];export{V as CustomColor,y as Default,I as DesignShowcase,k as Disabled,C as Playground,x as WithSelection,Pe as __namedExportsOrder,_e as default};
