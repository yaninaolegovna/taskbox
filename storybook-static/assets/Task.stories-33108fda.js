import{r as U}from"./index-76fb7be0.js";import{P as i}from"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";var w={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=U,G=Symbol.for("react.element"),Y=Symbol.for("react.fragment"),X=Object.prototype.hasOwnProperty,J=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function F(r,s,a){var t,o={},k=null,f=null;a!==void 0&&(k=""+a),s.key!==void 0&&(k=""+s.key),s.ref!==void 0&&(f=s.ref);for(t in s)X.call(s,t)&&!W.hasOwnProperty(t)&&(o[t]=s[t]);if(r&&r.defaultProps)for(t in s=r.defaultProps,s)o[t]===void 0&&(o[t]=s[t]);return{$$typeof:G,type:r,key:k,ref:f,props:o,_owner:J.current}}h.Fragment=Y;h.jsx=F;h.jsxs=F;w.exports=h;var e=w.exports;function c({task:{id:r,title:s,state:a},onArchiveTask:t,onPinTask:o}){return e.jsxs("div",{className:`list-item ${a}`,children:[e.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${r}`,className:"checkbox",children:[e.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${r}`,checked:a==="TASK_ARCHIVED"||a==="TASK_PROGRESS"}),e.jsx("span",{className:"checkbox-custom",onClick:()=>t(r)})]}),e.jsx("label",{htmlFor:"title","aria-label":s,className:"title",children:e.jsx("input",{type:"text",value:s,readOnly:!0,name:"title",placeholder:"Input title"})}),a==="TASK_PRIORITY"&&e.jsx("div",{className:"high-priority",children:"High Priority"}),a!=="TASK_ARCHIVED"&&a!=="TASK_PROGRESS"&&e.jsx("button",{className:"pin-button",onClick:()=>o(r),id:`pinTask-${r}`,"aria-label":`pinTask-${r}`,children:e.jsx("span",{className:"icon-star"})},`pinTask-${r}`),a==="TASK_OVERDUE"&&e.jsx("span",{className:"overdue-message",children:"Task is overdue!!!"})]})}c.propTypes={task:i.shape({id:i.string.isRequired,title:i.string.isRequired,state:i.string.isRequired}),onArchiveTask:i.func,onPinTask:i.func};c.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1}}};const te={component:c,title:"Task",tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.jsx(r,{})})]},n={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}},story:{name:"Default"}},l={args:{task:{...n.args.task,state:"TASK_PINNED"}},story:{name:"Pinned"}},d={args:{task:{...n.args.task,state:"TASK_ARCHIVED"}},story:{name:"Archived"}},m={args:{task:{...n.args.task,state:"TASK_PRIORITY"}},story:{name:"Priority"}},u={args:{task:{...n.args.task,state:"TASK_PROGRESS"}},story:{name:"Progress"}},g={args:{task:{...n.args.task,state:"TASK_OVERDUE"}},story:{name:"Overdue"}},p=()=>e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:"Default"}),e.jsx(z,{...n.args}),e.jsx(x,{}),e.jsx(y,{children:"Pinned"}),e.jsx(M,{...l.args}),e.jsx(x,{}),e.jsx(y,{children:"Archived"}),e.jsx(Q,{...d.args})]}),z=r=>e.jsx(c,{...r}),M=r=>e.jsx(c,{...r}),Q=r=>e.jsx(c,{...r}),Z=({children:r})=>e.jsx("h3",{style:{margin:"10px 0",color:"white"},children:r}),y=({children:r})=>e.jsx("h3",{style:{marginTop:"20px",marginBottom:"10px",color:"white"},children:r}),x=()=>e.jsx("hr",{style:{margin:"10px 0",height:"0",border:"none",borderTop:"2px dashed #fff"}});p.__docgenInfo={description:"",methods:[],displayName:"AllStates"};var S,T,_;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  },
  story: {
    name: 'Default'
  }
}`,...(_=(T=n.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var A,v,P;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  },
  story: {
    name: 'Pinned'
  }
}`,...(P=(v=l.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var j,R,E;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  },
  story: {
    name: 'Archived'
  }
}`,...(E=(R=d.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var D,O,b;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PRIORITY'
    }
  },
  story: {
    name: 'Priority'
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var I,N,K;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PROGRESS'
    }
  },
  story: {
    name: 'Progress'
  }
}`,...(K=(N=u.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var C,L,q;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_OVERDUE'
    }
  },
  story: {
    name: 'Overdue'
  }
}`,...(q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var H,$,V;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`() => <>\r
    <Label>Default</Label>\r
    <DefaultComponent {...Default.args} />\r
\r
    <StyledHr />\r
\r
    <StyledLabel>Pinned</StyledLabel>\r
    <PinnedComponent {...Pinned.args} />\r
\r
    <StyledHr />\r
\r
    <StyledLabel>Archived</StyledLabel>\r
    <ArchivedComponent {...Archived.args} />\r
  </>`,...(V=($=p.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};const ae=["Default","Pinned","Archived","Priority","Progress","Overdue","AllStates"];export{p as AllStates,d as Archived,n as Default,g as Overdue,l as Pinned,m as Priority,u as Progress,ae as __namedExportsOrder,te as default};
