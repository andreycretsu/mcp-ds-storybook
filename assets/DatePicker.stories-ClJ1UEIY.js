import{d as Ue,r as p,e as A,s as Oe,u as B,f as y,g as r,v as Qe,x as Re,l as je,j as Ve,F as I,y as E,t as v,q as N,k as P,o as x}from"./vue.esm-bundler-DSUVpXdV.js";import{I as U}from"./Icon-zozczuu3.js";import{_ as Be}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Ke={class:"datepicker__search"},He={class:"datepicker__search-container"},Ge=["placeholder"],Je={class:"datepicker__content"},Xe={key:0,class:"datepicker__sidebar"},Ze={class:"datepicker__quick-actions"},et=["onClick"],tt={class:"datepicker__calendar-container"},at={class:"datepicker__calendar-header"},nt={class:"datepicker__month-year"},ot={class:"datepicker__nav-arrows"},st={class:"datepicker__week-headers"},rt={class:"datepicker__calendar-grid"},lt=["onClick"],it={class:"datepicker__footer"},ct={class:"datepicker__footer-text"},K=36,ke=Ue({__name:"DatePicker",props:{startDate:{default:null},endDate:{default:null},searchLabel:{default:"When..."},footerText:{default:"136.0 hours, 28.0 days"},minDate:{},maxDate:{},showSidebar:{type:Boolean,default:!1}},emits:["update:startDate","update:endDate","quick-action"],setup(z,{emit:u}){const O=z,f=u,be=[{key:"today",label:"Today"},{key:"tomorrow",label:"Tomorrow"},{key:"this-week",label:"This week"},{key:"next-week",label:"Next week"},{key:"this-month",label:"This month"},{key:"next-month",label:"Next month"},{key:"this-year",label:"This year"},{key:"next-year",label:"Next year"}],Se=["Mo","Tu","We","Th","Fr","Sa","Su"],c=p(new Date),l=p(O.startDate),i=p(O.endDate),Q=p(null),R=p(),k=p(""),W=p(!1),w=p([]),_e=A(()=>c.value.getFullYear()),Te=A(()=>c.value.toLocaleDateString("en-US",{month:"long"})),Me=A(()=>{const a=[];for(const e of w.value)a.push(...e.dates);return a}),Fe=()=>{const a=new Date,e=new Date(a.getFullYear(),a.getMonth()-6,1),t=new Date(a.getFullYear(),a.getMonth()+6,0),n=[],o=new Date(e);for(;o<=t;)n.push({year:o.getFullYear(),month:o.getMonth(),day:o.getDate(),isCurrentMonth:!0}),o.setDate(o.getDate()+1);const s=n[0],m=(new Date(s.year,s.month,s.day).getDay()+6)%7;for(let g=m-1;g>=0;g--){const h=new Date(s.year,s.month,s.day-(g+1));n.unshift({year:h.getFullYear(),month:h.getMonth(),day:h.getDate(),isCurrentMonth:!0})}const d=Math.ceil(n.length/7)*7,D=n[n.length-1];for(let g=n.length;g<d;g++){const h=new Date(D.year,D.month,D.day+(g-n.length+1));n.push({year:h.getFullYear(),month:h.getMonth(),day:h.getDate(),isCurrentMonth:!0})}w.value=[{year:a.getFullYear(),month:a.getMonth(),dates:n,monthName:a.toLocaleDateString("en-US",{month:"long"}),yearNumber:a.getFullYear()}]},Le=a=>{const e=a.target,t=e.scrollTop,n=e.clientHeight,o=t+n/2,m=Math.floor(o/K)*7+3;if(w.value[0]&&w.value[0].dates[m]){const d=w.value[0].dates[m];c.value=new Date(d.year,d.month,1)}},b=async()=>{await B();const a=R.value;if(!a||!w.value[0])return;const e=c.value.getFullYear(),t=c.value.getMonth(),n=w.value[0].dates.findIndex(o=>o.year===e&&o.month===t);if(n!==-1){const s=Math.floor(n/7)*K;a.scrollTop=s}},Ye=()=>{c.value=new Date(c.value.getFullYear(),c.value.getMonth()-1,1),b()},Ce=()=>{c.value=new Date(c.value.getFullYear(),c.value.getMonth()+1,1),b()},qe=a=>{const e=new Date(a.year,a.month,a.day);j(a)||(c.value=new Date(a.year,a.month,1)),l.value?i.value?(l.value=e,i.value=null,W.value=!0):(e>=l.value?i.value=e:(i.value=l.value,l.value=e),W.value=!1):(l.value=e,i.value=null,W.value=!0),f("update:startDate",l.value),f("update:endDate",i.value)},$e=a=>{const e=new Date(a.year,a.month,a.day);return l.value&&!i.value?e.getTime()===l.value.getTime():l.value&&i.value?e.getTime()>=l.value.getTime()&&e.getTime()<=i.value.getTime():!1},ze=a=>{if(!l.value||!i.value)return!1;const e=new Date(a.year,a.month,a.day);return e.getTime()>l.value.getTime()&&e.getTime()<i.value.getTime()},We=a=>l.value?new Date(a.year,a.month,a.day).getTime()===l.value.getTime():!1,Ae=a=>i.value?new Date(a.year,a.month,a.day).getTime()===i.value.getTime():!1,Ie=a=>{const e=new Date;return e.getFullYear()===a.year&&e.getMonth()===a.month&&e.getDate()===a.day},j=a=>{const e=c.value.getFullYear(),t=c.value.getMonth();return a.year===e&&a.month===t},Ee=a=>{Q.value=a.key,f("quick-action",a.key);const e=new Date;let t=new Date(e);switch(a.key){case"today":t=e;break;case"tomorrow":t.setDate(e.getDate()+1);break;case"this-week":const n=(e.getDay()+6)%7;t.setDate(e.getDate()-n);break}l.value=t,i.value=null,c.value=new Date(t.getFullYear(),t.getMonth(),1),f("update:startDate",l.value),f("update:endDate",i.value),b()},Ne=()=>{},Pe=()=>{},V=()=>{const a=k.value.toLowerCase().trim();if(!a)return;const e=new Date;let t=null,n=null;if(a==="today")t=new Date(e),n=new Date(e);else if(a==="tomorrow")t=new Date(e),t.setDate(e.getDate()+1),n=new Date(t);else if(a==="yesterday")t=new Date(e),t.setDate(e.getDate()-1),n=new Date(t);else if(a.match(/^(the day after tomorrow|day after tomorrow)$/))t=new Date(e),t.setDate(e.getDate()+2),n=new Date(t);else if(a.match(/^(the day before yesterday|day before yesterday)$/))t=new Date(e),t.setDate(e.getDate()-2),n=new Date(t);else if(a.match(/^(this week|current week)$/)){const o=(e.getDay()+6)%7;t=new Date(e),t.setDate(e.getDate()-o),n=new Date(t),n.setDate(t.getDate()+6)}else if(a.match(/^(next week|following week)$/)){const o=(e.getDay()+6)%7;t=new Date(e),t.setDate(e.getDate()-o+7),n=new Date(t),n.setDate(t.getDate()+6)}else if(a.match(/^(last week|previous week|past week)$/)){const o=(e.getDay()+6)%7;t=new Date(e),t.setDate(e.getDate()-o-7),n=new Date(t),n.setDate(t.getDate()+6)}else if(a.match(/^(rest of (this )?week|remainder of (this )?week)$/)){t=new Date(e);const o=(e.getDay()+6)%7;n=new Date(e),n.setDate(e.getDate()+(6-o))}else if(a.match(/^(this month|current month)$/))t=new Date(e.getFullYear(),e.getMonth(),1),n=new Date(e.getFullYear(),e.getMonth()+1,0);else if(a.match(/^(next month|following month)$/))t=new Date(e.getFullYear(),e.getMonth()+1,1),n=new Date(e.getFullYear(),e.getMonth()+2,0);else if(a.match(/^(last month|previous month|past month)$/))t=new Date(e.getFullYear(),e.getMonth()-1,1),n=new Date(e.getFullYear(),e.getMonth(),0);else if(a.match(/^(rest of (this )?month|remainder of (this )?month)$/))t=new Date(e),n=new Date(e.getFullYear(),e.getMonth()+1,0);else if(a.match(/^(this quarter|current quarter|q[1-4])$/)){const o=Math.floor(e.getMonth()/3);t=new Date(e.getFullYear(),o*3,1),n=new Date(e.getFullYear(),o*3+3,0)}else if(a.match(/^(next quarter|following quarter)$/)){const o=Math.floor(e.getMonth()/3)+1,s=o>3?e.getFullYear()+1:e.getFullYear(),m=o>3?0:o;t=new Date(s,m*3,1),n=new Date(s,m*3+3,0)}else if(a.match(/^(this year|current year)$/))t=new Date(e.getFullYear(),0,1),n=new Date(e.getFullYear(),11,31);else if(a.match(/^(next year|following year)$/))t=new Date(e.getFullYear()+1,0,1),n=new Date(e.getFullYear()+1,11,31);else if(a.match(/^(last year|previous year|past year)$/))t=new Date(e.getFullYear()-1,0,1),n=new Date(e.getFullYear()-1,11,31);else if(a.match(/^(this weekend|coming weekend)$/)){const o=(e.getDay()+6)%7,s=o<=5?5-o:6;t=new Date(e),t.setDate(e.getDate()+s),n=new Date(t),n.setDate(t.getDate()+1)}else if(a.match(/^(next weekend|following weekend)$/)){const o=(e.getDay()+6)%7,s=o<=5?5-o+7:13;t=new Date(e),t.setDate(e.getDate()+s),n=new Date(t),n.setDate(t.getDate()+1)}else if(a.match(/^(last weekend|previous weekend|past weekend)$/)){const o=(e.getDay()+6)%7,s=o<=5?o+2:o-5;t=new Date(e),t.setDate(e.getDate()-s),n=new Date(t),n.setDate(t.getDate()+1)}else if(a.match(/^(couple of days|few days|several days)$/))t=new Date(e),n=new Date(e),n.setDate(e.getDate()+3);else if(a.match(/^(couple of weeks|few weeks|several weeks)$/))t=new Date(e),n=new Date(e),n.setDate(e.getDate()+14);else if(a.match(/^(couple of months|few months|several months)$/))t=new Date(e),n=new Date(e),n.setMonth(e.getMonth()+3);else if(a.match(/^(a week from now|one week from now|1 week from now)$/))t=new Date(e),t.setDate(e.getDate()+7),n=new Date(t);else if(a.match(/^(a month from now|one month from now|1 month from now)$/))t=new Date(e),t.setMonth(e.getMonth()+1),n=new Date(t);else if(a.match(/^(end of (this )?week|eow)$/)){const o=(e.getDay()+6)%7;t=new Date(e),t.setDate(e.getDate()+(4-o)),n=new Date(t)}else if(a.match(/^(end of (this )?month|eom)$/))t=new Date(e.getFullYear(),e.getMonth()+1,0),n=new Date(t);else if(a.match(/^(beginning of (next )?week|start of (next )?week|bow)$/)){const o=(e.getDay()+6)%7;t=new Date(e),t.setDate(e.getDate()-o+7),n=new Date(t)}else if(a.match(/^(beginning of (next )?month|start of (next )?month|bom)$/))t=new Date(e.getFullYear(),e.getMonth()+1,1),n=new Date(t);else{const o=[{regex:/(?:next|in|for the next)\s+(\d+)\s+days?/,unit:"day",multiplier:1},{regex:/(?:next|in|for the next)\s+(\d+)\s+weeks?/,unit:"week",multiplier:1},{regex:/(?:next|in|for the next)\s+(\d+)\s+months?/,unit:"month",multiplier:1},{regex:/(\d+)\s+days?\s+(?:from\s+now|ahead|forward)/,unit:"day",multiplier:1},{regex:/(\d+)\s+weeks?\s+(?:from\s+now|ahead|forward)/,unit:"week",multiplier:1},{regex:/(\d+)\s+months?\s+(?:from\s+now|ahead|forward)/,unit:"month",multiplier:1},{regex:/(\d+)\s+days?\s+(?:ago|back|before)/,unit:"day",multiplier:-1},{regex:/(\d+)\s+weeks?\s+(?:ago|back|before)/,unit:"week",multiplier:-1},{regex:/(\d+)\s+months?\s+(?:ago|back|before)/,unit:"month",multiplier:-1},{regex:/(?:past|last|previous)\s+(\d+)\s+days?/,unit:"day",multiplier:-1},{regex:/(?:past|last|previous)\s+(\d+)\s+weeks?/,unit:"week",multiplier:-1},{regex:/(?:past|last|previous)\s+(\d+)\s+months?/,unit:"month",multiplier:-1},{regex:/(?:over the )?(?:next|coming)\s+(\d+)\s+days?/,unit:"day",multiplier:1,isRange:!0},{regex:/(?:over the )?(?:next|coming)\s+(\d+)\s+weeks?/,unit:"week",multiplier:1,isRange:!0},{regex:/(?:over the )?(?:next|coming)\s+(\d+)\s+months?/,unit:"month",multiplier:1,isRange:!0}];for(const s of o){const m=a.match(s.regex);if(m){const d=parseInt(m[1]),D=s.multiplier;if(s.unit==="day")s.isRange?(t=new Date(e),n=new Date(e),n.setDate(e.getDate()+d*D)):(t=new Date(e),t.setDate(e.getDate()+d*D),n=new Date(t));else if(s.unit==="week")if(D>0){const g=(e.getDay()+6)%7,h=g===0?7:7-g;t=new Date(e),t.setDate(e.getDate()+h),n=new Date(t),n.setDate(t.getDate()+d*7-1)}else t=new Date(e),t.setDate(e.getDate()+d*7*D),n=new Date(t),n.setDate(t.getDate()+6);else s.unit==="month"&&(t=new Date(e),t.setMonth(e.getMonth()+d*D),t.setDate(1),n=new Date(t.getFullYear(),t.getMonth()+d,0));break}}}if(t&&n){l.value=t,i.value=n,c.value=new Date(t.getFullYear(),t.getMonth(),1),f("update:startDate",l.value),f("update:endDate",i.value),b();const o=t.toLocaleDateString("en-US",{month:"short",day:"numeric"}),s=n.toLocaleDateString("en-US",{month:"short",day:"numeric"});t.getTime()===n.getTime()?k.value=o:k.value=`${o} - ${s}`}};return Oe(()=>{Fe(),B(()=>{b()})}),(a,e)=>(x(),y("div",{class:P(["datepicker",{"datepicker--with-sidebar":a.showSidebar}])},[r("div",Ke,[r("div",He,[Qe(r("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>k.value=t),type:"text",class:"datepicker__search-input",placeholder:a.searchLabel,onKeydown:je(V,["enter"]),onBlur:V},null,40,Ge),[[Re,k.value]])])]),r("div",Je,[a.showSidebar?(x(),y("div",Xe,[r("div",Ze,[(x(),y(I,null,E(be,t=>r("button",{key:t.key,class:P(["datepicker__quick-action",{"datepicker__quick-action--active":Q.value===t.key}]),onClick:n=>Ee(t)},v(t.label),11,et)),64))]),e[1]||(e[1]=r("div",{class:"datepicker__sidebar-gradient"},null,-1))])):Ve("",!0),r("div",tt,[r("div",at,[r("div",nt,[r("button",{class:"datepicker__month-btn",onClick:Ne},v(Te.value),1),r("button",{class:"datepicker__year-btn",onClick:Pe},v(_e.value),1)]),r("div",ot,[r("button",{class:"datepicker__nav-arrow",onClick:Ye},[N(U,{icon:"fa-solid fa-chevron-up",size:"xs"})]),r("button",{class:"datepicker__nav-arrow",onClick:Ce},[N(U,{icon:"fa-solid fa-chevron-down",size:"xs"})])])]),r("div",st,[(x(),y(I,null,E(Se,t=>r("div",{key:t,class:"datepicker__week-header"},v(t),1)),64))]),r("div",{class:"datepicker__calendar-scroll",onScroll:Le,ref_key:"scrollContainer",ref:R},[r("div",rt,[(x(!0),y(I,null,E(Me.value,(t,n)=>(x(),y("button",{key:`${t.year}-${t.month}-${t.day}-${n}`,class:P(["datepicker__date-cell",{"datepicker__date-cell--other-month":!j(t),"datepicker__date-cell--selected":$e(t),"datepicker__date-cell--in-range":ze(t),"datepicker__date-cell--start":We(t),"datepicker__date-cell--end":Ae(t),"datepicker__date-cell--today":Ie(t)}]),onClick:o=>qe(t)},v(t.day),11,lt))),128))])],544)])]),r("div",it,[r("span",ct,v(a.footerText),1),N(U,{icon:"fa-solid fa-circle-exclamation",size:"xs",class:"datepicker__footer-icon"})])],2))}}),$=Be(ke,[["__scopeId","data-v-19f8deff"]]);ke.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"startDate",description:"Selected start date",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"endDate",description:"Selected end date",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"searchLabel",description:"Search field label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'When...'"}},{name:"footerText",description:"Footer text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'136.0 hours, 28.0 days'"}},{name:"minDate",description:"Minimum selectable date",required:!1,type:{name:"Date"}},{name:"maxDate",description:"Maximum selectable date",required:!1,type:{name:"Date"}},{name:"showSidebar",description:"Show sidebar with quick actions",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:startDate",type:{names:["union"],elements:[{name:"Date"},{name:"null"}]}},{name:"update:endDate",type:{names:["union"],elements:[{name:"Date"},{name:"null"}]}},{name:"quick-action",type:{names:["string"]}}],sourceFiles:["/Users/andrey.cretsu/test mcp project/src/components/DatePicker.vue"]};const gt={title:"Components/DatePicker",component:$,parameters:{layout:"centered",docs:{description:{component:"A comprehensive date picker with infinite scrolling, quick actions, and calendar navigation."}}},argTypes:{startDate:{control:"date",description:"Selected start date"},endDate:{control:"date",description:"Selected end date"},searchLabel:{control:"text",description:"Search field label"},footerText:{control:"text",description:"Footer text"},minDate:{control:"date",description:"Minimum selectable date"},maxDate:{control:"date",description:"Maximum selectable date"},showSidebar:{control:"boolean",description:"Show sidebar with quick actions"}},args:{searchLabel:"When...",footerText:"136.0 hours, 28.0 days",showSidebar:!1,startDate:null,endDate:null}},S={args:{startDate:null,endDate:null}},_={args:{startDate:new Date,endDate:null}},T={args:{startDate:null,endDate:null,showSidebar:!1,searchLabel:"Select date...",footerText:"Compact mode"}},M={args:{searchLabel:"Select date...",footerText:"Custom footer text",startDate:null,endDate:null}},F={args:{searchLabel:"Date range...",footerText:"7 days selected",startDate:new Date(2024,0,15),endDate:new Date(2024,0,22),minDate:new Date(2024,0,1),maxDate:new Date(2024,11,31)}},L={args:{searchLabel:"Leave dates...",footerText:"5 working days, 40.0 hours",startDate:new Date(2025,4,15),endDate:null}},Y={render:z=>({components:{DatePicker:$},setup(){return{args:z}},data(){return{selectedStartDate:null,selectedEndDate:null,lastQuickAction:null}},methods:{onStartDateUpdate(u){this.selectedStartDate=u,console.log("Start date selected:",u)},onEndDateUpdate(u){this.selectedEndDate=u,console.log("End date selected:",u)},onQuickAction(u){this.lastQuickAction=u,console.log("Quick action:",u)}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <DatePicker 
          v-bind="args"
          @update:startDate="onStartDateUpdate"
          @update:endDate="onEndDateUpdate"
          @quick-action="onQuickAction"
        />
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 16px; background: #f8f9fa; border-radius: 8px; min-width: 300px;">
          <div style="font-size: 14px; font-weight: 600; color: #333;">Status:</div>
          <div style="font-size: 12px; color: #666;">
            Start Date: {{ selectedStartDate ? selectedStartDate.toLocaleDateString() : 'None' }}
          </div>
          <div style="font-size: 12px; color: #666;">
            End Date: {{ selectedEndDate ? selectedEndDate.toLocaleDateString() : 'None' }}
          </div>
          <div style="font-size: 12px; color: #666;">
            Last Quick Action: {{ lastQuickAction || 'None' }}
          </div>
        </div>
      </div>
    `}),args:{searchLabel:"When...",footerText:"136.0 hours, 28.0 days",startDate:null,endDate:null}},C={render:()=>({components:{DatePicker:$},template:`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 800px;">
        <div style="text-align: center;">
          <h2 style="margin: 0 0 8px; font-size: 18px; color: #333;">DatePicker Features</h2>
          <p style="margin: 0; font-size: 14px; color: #666;">
            Infinite scrolling calendar with quick actions and precise Figma styling
          </p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <h3 style="margin: 0; font-size: 14px; color: #333;">With Sidebar</h3>
            <DatePicker searchLabel="When..." footerText="136.0 hours, 28.0 days" :showSidebar="true" />
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <h3 style="margin: 0; font-size: 14px; color: #333;">Compact Mode (Default)</h3>
            <DatePicker 
              searchLabel="Select date..." 
              footerText="Compact layout"
              :showSidebar="false"
              :startDate="new Date(2025, 0, 15)"
              :endDate="null"
            />
          </div>
        </div>
        
        <div style="padding: 16px; background: #f8f9fa; border-radius: 8px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; font-weight: 600; color: #333;">Key Features:</h4>
          <ul style="margin: 0; padding-left: 16px; font-size: 12px; color: #666; line-height: 1.5;">
            <li><strong>Infinite Scrolling:</strong> Smooth mouse wheel and touch scrolling through months</li>
            <li><strong>Quick Actions:</strong> Sidebar with predefined date ranges (Today, Tomorrow, This week, etc.)</li>
            <li><strong>Arrow Navigation:</strong> Up/down arrows for month navigation</li>
            <li><strong>Date Selection:</strong> Click to select dates with visual feedback</li>
            <li><strong>Today Indicator:</strong> Current date is highlighted</li>
            <li><strong>Month Context:</strong> Previous/next month dates shown in muted colors</li>
            <li><strong>Figma Accurate:</strong> Exact dimensions, colors, and typography from design</li>
          </ul>
        </div>
      </div>
    `})},q={render:()=>({components:{DatePicker:$},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <div style="text-align: center;">
          <h3 style="margin: 0 0 8px; font-size: 16px; color: #333;">Leave Request Scenario</h3>
          <p style="margin: 0; font-size: 12px; color: #666;">
            Simulating a leave request form with calculated time off
          </p>
        </div>
        
        <DatePicker 
          searchLabel="Select leave dates..."
          footerText="114.21 available days"
          :startDate="new Date(2025, 4, 16)"
          :endDate="null"
        />
        
        <div style="padding: 12px; background: #e8f4f8; border-radius: 6px; max-width: 300px; text-align: center;">
          <div style="font-size: 12px; color: #0066cc; font-weight: 500;">
            💡 Tip: Use mouse wheel to scroll through months infinitely
          </div>
        </div>
      </div>
    `})};var H,G,J;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    startDate: null,
    endDate: null
  }
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Z,ee;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    startDate: new Date(),
    endDate: null
  }
}`,...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    startDate: null,
    endDate: null,
    showSidebar: false,
    searchLabel: 'Select date...',
    footerText: 'Compact mode'
  }
}`,...(ne=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,se,re;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    searchLabel: 'Select date...',
    footerText: 'Custom footer text',
    startDate: null,
    endDate: null
  }
}`,...(re=(se=M.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var le,ie,ce;F.parameters={...F.parameters,docs:{...(le=F.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    searchLabel: 'Date range...',
    footerText: '7 days selected',
    startDate: new Date(2024, 0, 15),
    endDate: new Date(2024, 0, 22),
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2024, 11, 31)
  }
}`,...(ce=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,me;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    searchLabel: 'Leave dates...',
    footerText: '5 working days, 40.0 hours',
    startDate: new Date(2025, 4, 15),
    // May 15, 2025
    endDate: null
  }
}`,...(me=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,De,he;Y.parameters={...Y.parameters,docs:{...(ge=Y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DatePicker
    },
    setup() {
      return {
        args
      };
    },
    data() {
      return {
        selectedStartDate: null,
        selectedEndDate: null,
        lastQuickAction: null
      };
    },
    methods: {
      onStartDateUpdate(date: Date | null) {
        this.selectedStartDate = date;
        console.log('Start date selected:', date);
      },
      onEndDateUpdate(date: Date | null) {
        this.selectedEndDate = date;
        console.log('End date selected:', date);
      },
      onQuickAction(action: string) {
        this.lastQuickAction = action;
        console.log('Quick action:', action);
      }
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <DatePicker 
          v-bind="args"
          @update:startDate="onStartDateUpdate"
          @update:endDate="onEndDateUpdate"
          @quick-action="onQuickAction"
        />
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 16px; background: #f8f9fa; border-radius: 8px; min-width: 300px;">
          <div style="font-size: 14px; font-weight: 600; color: #333;">Status:</div>
          <div style="font-size: 12px; color: #666;">
            Start Date: {{ selectedStartDate ? selectedStartDate.toLocaleDateString() : 'None' }}
          </div>
          <div style="font-size: 12px; color: #666;">
            End Date: {{ selectedEndDate ? selectedEndDate.toLocaleDateString() : 'None' }}
          </div>
          <div style="font-size: 12px; color: #666;">
            Last Quick Action: {{ lastQuickAction || 'None' }}
          </div>
        </div>
      </div>
    \`
  }),
  args: {
    searchLabel: 'When...',
    footerText: '136.0 hours, 28.0 days',
    startDate: null,
    endDate: null
  }
}`,...(he=(De=Y.parameters)==null?void 0:De.docs)==null?void 0:he.source}}};var pe,fe,we;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePicker
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 800px;">
        <div style="text-align: center;">
          <h2 style="margin: 0 0 8px; font-size: 18px; color: #333;">DatePicker Features</h2>
          <p style="margin: 0; font-size: 14px; color: #666;">
            Infinite scrolling calendar with quick actions and precise Figma styling
          </p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <h3 style="margin: 0; font-size: 14px; color: #333;">With Sidebar</h3>
            <DatePicker searchLabel="When..." footerText="136.0 hours, 28.0 days" :showSidebar="true" />
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <h3 style="margin: 0; font-size: 14px; color: #333;">Compact Mode (Default)</h3>
            <DatePicker 
              searchLabel="Select date..." 
              footerText="Compact layout"
              :showSidebar="false"
              :startDate="new Date(2025, 0, 15)"
              :endDate="null"
            />
          </div>
        </div>
        
        <div style="padding: 16px; background: #f8f9fa; border-radius: 8px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; font-weight: 600; color: #333;">Key Features:</h4>
          <ul style="margin: 0; padding-left: 16px; font-size: 12px; color: #666; line-height: 1.5;">
            <li><strong>Infinite Scrolling:</strong> Smooth mouse wheel and touch scrolling through months</li>
            <li><strong>Quick Actions:</strong> Sidebar with predefined date ranges (Today, Tomorrow, This week, etc.)</li>
            <li><strong>Arrow Navigation:</strong> Up/down arrows for month navigation</li>
            <li><strong>Date Selection:</strong> Click to select dates with visual feedback</li>
            <li><strong>Today Indicator:</strong> Current date is highlighted</li>
            <li><strong>Month Context:</strong> Previous/next month dates shown in muted colors</li>
            <li><strong>Figma Accurate:</strong> Exact dimensions, colors, and typography from design</li>
          </ul>
        </div>
      </div>
    \`
  })
}`,...(we=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:we.source}}};var ye,ve,xe;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePicker
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <div style="text-align: center;">
          <h3 style="margin: 0 0 8px; font-size: 16px; color: #333;">Leave Request Scenario</h3>
          <p style="margin: 0; font-size: 12px; color: #666;">
            Simulating a leave request form with calculated time off
          </p>
        </div>
        
        <DatePicker 
          searchLabel="Select leave dates..."
          footerText="114.21 available days"
          :startDate="new Date(2025, 4, 16)"
          :endDate="null"
        />
        
        <div style="padding: 12px; background: #e8f4f8; border-radius: 6px; max-width: 300px; text-align: center;">
          <div style="font-size: 12px; color: #0066cc; font-weight: 500;">
            💡 Tip: Use mouse wheel to scroll through months infinitely
          </div>
        </div>
      </div>
    \`
  })
}`,...(xe=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};const Dt=["Default","WithSelectedDate","WithoutSidebar","CustomLabels","DateRange","LeaveRequestDemo","InteractiveDemo","FeaturesShowcase","DateRangeDemo"];export{M as CustomLabels,F as DateRange,q as DateRangeDemo,S as Default,C as FeaturesShowcase,Y as InteractiveDemo,L as LeaveRequestDemo,_ as WithSelectedDate,T as WithoutSidebar,Dt as __namedExportsOrder,gt as default};
