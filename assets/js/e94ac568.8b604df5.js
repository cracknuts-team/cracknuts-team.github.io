"use strict";(self.webpackChunkcracknuts_website=self.webpackChunkcracknuts_website||[]).push([[3466],{6658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"doc/getting_started/trace-analysis","title":"\u6ce2\u5f62\u5206\u6790","description":"\u5728\u524d\u9762\u7684\u6570\u636e\u91c7\u96c6\u7ae0\u8282\uff0c\u6210\u529f\u6267\u884c\u5b8c\u8fd0\u884c\u6a21\u5f0f\u540e\uff0c\u91c7\u96c6\u5230\u6ce2\u5f62\u6587\u4ef6\u9ed8\u8ba4\u4fdd\u5b58\u5230\u5f53\u524d\u7b14\u8bb0\u6240\u5728\u7684\u6587\u4ef6\u5939\u4e0b\uff0c\u9ed8\u8ba4\u4e3ascarr\u683c\u5f0f\uff0c\u4e0b\u9762\u5c55\u793a\u5982\u4f55\u5bf9\u66f2\u7ebf\u8fdb\u884c\u57fa\u672c\u7684\u4ea7\u770b\u4ee5\u53ca\u8bfb\u53d6\u3002","source":"@site/docs/doc/getting_started/03-trace-analysis.md","sourceDirName":"doc/getting_started","slug":"/doc/getting_started/trace-analysis","permalink":"/docs/doc/getting_started/trace-analysis","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_label":"\u6ce2\u5f62\u5206\u6790","sidebar_position":3},"sidebar":"docSidebar","previous":{"title":"\u6570\u636e\u91c7\u96c6","permalink":"/docs/doc/getting_started/trace-acquisition"},"next":{"title":"Guide","permalink":"/docs/category/guide"}}');var r=a(4848),s=a(8453);const c={sidebar_label:"\u6ce2\u5f62\u5206\u6790",sidebar_position:3},i="\u6ce2\u5f62\u5206\u6790",d={},o=[];function l(e){const t={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u6ce2\u5f62\u5206\u6790",children:"\u6ce2\u5f62\u5206\u6790"})}),"\n",(0,r.jsxs)(t.p,{children:["\u5728\u524d\u9762\u7684\u6570\u636e\u91c7\u96c6\u7ae0\u8282\uff0c\u6210\u529f\u6267\u884c\u5b8c\u8fd0\u884c\u6a21\u5f0f\u540e\uff0c\u91c7\u96c6\u5230\u6ce2\u5f62\u6587\u4ef6\u9ed8\u8ba4\u4fdd\u5b58\u5230\u5f53\u524d\u7b14\u8bb0\u6240\u5728\u7684\u6587\u4ef6\u5939\u4e0b\uff0c\u9ed8\u8ba4\u4e3a",(0,r.jsx)(t.code,{children:"scarr"}),"\u683c\u5f0f\uff0c\u4e0b\u9762\u5c55\u793a\u5982\u4f55\u5bf9\u66f2\u7ebf\u8fdb\u884c\u57fa\u672c\u7684\u4ea7\u770b\u4ee5\u53ca\u8bfb\u53d6\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u65b0\u5efa\u7b14\u8bb0\u6587\u4ef6\uff0c\u5e76\u63d2\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u6267\u884c\u540e\u5c06\u663e\u793a\u6ce2\u5f62\u5c55\u73b0\u7684\u9762\u677f\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# \u5f15\u5165\u9762\u677f\r\nimport cracknuts.jupyter as panel\r\n\r\n# \u5c55\u793a\u66f2\u7ebf\u5206\u6790\u9762\u677f\r\ntap = panel.display_trace_analysis_panel()\r\ntap\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"image-20241129164156877",src:a(2033).A+"",width:"2560",height:"1317"})}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u65b0\u7f16\u8f91\u6846\u63d2\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u6253\u5f00\u66f2\u7ebf\u6587\u4ef6\uff08\u66f2\u7ebf\u8def\u5f84\u66ff\u6362\u6210\u60a8\u5f53\u524d\u91c7\u96c6\u7684\u6ce2\u5f62\u6570\u636e\u6587\u4ef6\u8def\u5f84\uff09\uff0c\u5728\u6ce2\u5f62\u9762\u677f\u5c06\u5c55\u793a\u8be5\u6587\u4ef6\u7684\u6ce2\u5f62\u6570\u636e\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'# \u5f15\u5165\u6ce2\u5f62\u6587\u4ef6\u6570\u636e\u96c6\u5bf9\u8c61\r\nfrom cracknuts.solver.trace import ScarrTraceDataset\r\n# \u52a0\u8f7d\u6ce2\u5f62\u6587\u4ef6\r\nscarr_trace_dataset = ScarrTraceDataset.load("20241016212206.zarr")\r\n# \u5c06\u6570\u636e\u96c6\u914d\u7f6e\u5230\u6ce2\u5f62\u663e\u793a\u9762\u677f\r\ntap.set_trace_dataset(scarr_trace_dataset)\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"image-20241129165541998",src:a(5804).A+"",width:"2560",height:"1317"})}),"\n",(0,r.jsx)(t.p,{children:"\u6267\u884c\u4ee5\u4e0b\u4ee3\u7801\uff0c\u53ef\u4ee5\u83b7\u53d6\u66f2\u7ebf\u96c6\u5408\u4e2d\u7684\u6307\u5b9a\u66f2\u7ebf\uff0c\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5305\u542b\u4e86\u66f2\u7ebf\u901a\u9053\u4fe1\u606f\u3001\u7d22\u5f15\u4fe1\u606f\u3001\u66f2\u7ebf\u672c\u4f53\u3001\u6570\u636e\u4fe1\u606f\u7684\u5143\u7ec4\uff0c\u5177\u4f53\u7684\u683c\u5f0f\u8bf7\u9605\u8bfbAPI\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# \u83b7\u53d6\u6ce2\u5f62\u6570\u636e\r\nscarr_trace_dataset.data[0,0] # \u83b7\u53d6 channel 1 \u7684\u7b2c\u4e00\u6761\u66f2\u7ebf\r\nscarr_trace_dataset.data[1,:10] # \u83b7\u53d6 channel 2 \u7684\u524d10\u6761\u66f2\u7ebf\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u4e0b\u9762\u60a8\u5c31\u53ef\u4ee5\u5f00\u59cb\u60a8\u7684\u4fa7\u4fe1\u9053\u5206\u6790\u5de5\u4f5c\u4e86\u3002\u66f4\u591a\u5206\u6790\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605\u6559\u7a0b\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},2033:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-20241129164156877-345ac121e255b0cd264157f1285cdab9.png"},5804:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-20241129165541998-3199acaff718af4784a33ad07ae49ab8.png"},8453:(e,t,a)=>{a.d(t,{R:()=>c,x:()=>i});var n=a(6540);const r={},s=n.createContext(r);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);