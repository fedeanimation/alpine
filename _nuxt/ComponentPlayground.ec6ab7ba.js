import{u as m}from"./asyncData.5e0c6607.js";import{M as c,I as p,d as i,a9 as u,r as l,N as e,k as d}from"./entry.19d54410.js";import f from"./Ellipsis.58a04a7a.js";import _ from"./ComponentPlaygroundData.dc0cc7c3.js";import"./TabsHeader.829e346d.js";import"./ComponentPlaygroundProps.aa5e984d.js";import"./ProseH4.69292611.js";import"./ProseCodeInline.34c6e4ed.js";import"./Badge.571c86be.js";import"./MDCSlot.7ad3bccf.js";import"./slot.a35fe12d.js";import"./ProseP.f1dc8760.js";import"./index.13d9351b.js";import"./ComponentPlaygroundSlots.vue.7843274f.js";import"./ComponentPlaygroundTokens.vue.f2485b58.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=d(g,[["__scopeId","data-v-51227037"]]);export{V as default};
