"use strict";(self.webpackChunkcracknuts_website=self.webpackChunkcracknuts_website||[]).push([[3565],{3656:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"doc/getting-started/trace-analysis","title":"\u6ce2\u5f62\u5206\u6790","description":"\u5728\u524d\u9762\u7684\u6570\u636e\u91c7\u96c6\u7ae0\u8282\uff0c\u6210\u529f\u6267\u884c\u5b8c\u8fd0\u884c\u6a21\u5f0f\u540e\uff0c\u91c7\u96c6\u5230\u6ce2\u5f62\u6587\u4ef6\u9ed8\u8ba4\u4fdd\u5b58\u5230\u5f53\u524d\u7b14\u8bb0\u6240\u5728\u7684\u6587\u4ef6\u5939\u4e0b\uff0c\u9ed8\u8ba4\u4e3ascarr\u683c\u5f0f\uff0c\u4e0b\u9762\u5c55\u793a\u5982\u4f55\u5bf9\u66f2\u7ebf\u8fdb\u884c\u57fa\u672c\u7684\u4ea7\u770b\u4ee5\u53ca\u8bfb\u53d6\u3002","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/doc/getting-started/trace-analysis.md","sourceDirName":"doc/getting-started","slug":"/doc/getting-started/trace-analysis","permalink":"/docs/doc/getting-started/trace-analysis","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_label":"\u6ce2\u5f62\u5206\u6790","sidebar_position":4},"sidebar":"docSidebar","previous":{"title":"\u6570\u636e\u91c7\u96c6","permalink":"/docs/doc/getting-started/trace-acquisition"},"next":{"title":"\u865a\u62df\u73af\u5883","permalink":"/docs/doc/getting-started/virtual-environment"}}');var s=n(4848),r=n(8453);const c={sidebar_label:"\u6ce2\u5f62\u5206\u6790",sidebar_position:4},d="\u6ce2\u5f62\u5206\u6790",a={},i=[];function f(A){const e={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,r.R)(),...A.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u6ce2\u5f62\u5206\u6790",children:"\u6ce2\u5f62\u5206\u6790"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u524d\u9762\u7684\u6570\u636e\u91c7\u96c6\u7ae0\u8282\uff0c\u6210\u529f\u6267\u884c\u5b8c\u8fd0\u884c\u6a21\u5f0f\u540e\uff0c\u91c7\u96c6\u5230\u6ce2\u5f62\u6587\u4ef6\u9ed8\u8ba4\u4fdd\u5b58\u5230\u5f53\u524d\u7b14\u8bb0\u6240\u5728\u7684\u6587\u4ef6\u5939\u4e0b\uff0c\u9ed8\u8ba4\u4e3a",(0,s.jsx)(e.code,{children:"scarr"}),"\u683c\u5f0f\uff0c\u4e0b\u9762\u5c55\u793a\u5982\u4f55\u5bf9\u66f2\u7ebf\u8fdb\u884c\u57fa\u672c\u7684\u4ea7\u770b\u4ee5\u53ca\u8bfb\u53d6\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u65b0\u5efa\u7b14\u8bb0\u6587\u4ef6\uff0c\u5e76\u63d2\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u6267\u884c\u540e\u5c06\u663e\u793a\u6ce2\u5f62\u5c55\u73b0\u7684\u9762\u677f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"# \u663e\u793a\u66f2\u7ebf\u5206\u6790\u9762\u677f\r\ntap = cn.panel_trace()\r\ntap\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20241205113537674",src:n(5649).A+"",width:"1977",height:"479"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u65b0\u7f16\u8f91\u6846\u63d2\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u6253\u5f00\u66f2\u7ebf\u6587\u4ef6\uff08\u66f2\u7ebf\u8def\u5f84\u66ff\u6362\u6210\u60a8\u5f53\u524d\u91c7\u96c6\u7684\u6ce2\u5f62\u6570\u636e\u6587\u4ef6\u8def\u5f84\uff09\uff0c\u5728\u6ce2\u5f62\u9762\u677f\u5c06\u5c55\u793a\u8be5\u6587\u4ef6\u7684\u6ce2\u5f62\u6570\u636e\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'# \u5f15\u5165\u6ce2\u5f62\u6587\u4ef6\u6570\u636e\u96c6\u5bf9\u8c61\r\nfrom cracknuts.trace.trace import ScarrTraceDataset\r\n# \u52a0\u8f7d\u6ce2\u5f62\u6587\u4ef6\r\nscarr_trace_dataset = ScarrTraceDataset.load("dataset/20241205111924.zarr")\r\n# \u5c06\u6570\u636e\u96c6\u914d\u7f6e\u5230\u6ce2\u5f62\u663e\u793a\u9762\u677f\r\ntap.set_trace_dataset(scarr_trace_dataset)\r\n# \u663e\u793a\u7b2c\u4e8c\u901a\u9053\u7684\u524d\u5341\u6761\u66f2\u7ebf\r\ntap.show_trace[1, :10] \n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20241205113757049",src:n(8427).A+"",width:"1975",height:"647"})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u4ee3\u7801\uff0c\u53ef\u4ee5\u83b7\u53d6\u66f2\u7ebf\u96c6\u5408\u4e2d\u7684\u6307\u5b9a\u66f2\u7ebf\uff0c\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5305\u542b\u4e86\u66f2\u7ebf\u901a\u9053\u4fe1\u606f\u3001\u7d22\u5f15\u4fe1\u606f\u3001\u66f2\u7ebf\u672c\u4f53\u3001\u6570\u636e\u4fe1\u606f\u7684\u5143\u7ec4\uff0c\u5177\u4f53\u7684\u683c\u5f0f\u8bf7\u9605\u8bfbAPI\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"# \u83b7\u53d6\u6ce2\u5f62\u6570\u636e\r\nscarr_trace_dataset.data[0,0] # \u83b7\u53d6 channel 1 \u7684\u7b2c\u4e00\u6761\u66f2\u7ebf\r\nscarr_trace_dataset.data[1,:10] # \u83b7\u53d6 channel 2 \u7684\u524d10\u6761\u66f2\u7ebf\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u60a8\u5c31\u53ef\u4ee5\u5f00\u59cb\u60a8\u7684\u4fa7\u4fe1\u9053\u5206\u6790\u5de5\u4f5c\u4e86\u3002\u66f4\u591a\u5206\u6790\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605\u6559\u7a0b\u3002"})]})}function u(A={}){const{wrapper:e}={...(0,r.R)(),...A.components};return e?(0,s.jsx)(e,{...A,children:(0,s.jsx)(f,{...A})}):f(A)}},5649:(A,e,n)=>{n.d(e,{A:()=>t});const t="data:image/png;base64,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"},8427:(A,e,n)=>{n.d(e,{A:()=>t});const t=n.p+"assets/images/image-20241205113757049-2aeb3ac0e91e05b618917baa10579bf2.png"},8453:(A,e,n)=>{n.d(e,{R:()=>c,x:()=>d});var t=n(6540);const s={},r=t.createContext(s);function c(A){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function d(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(s):A.components||s:c(A.components),t.createElement(r.Provider,{value:e},A.children)}}}]);