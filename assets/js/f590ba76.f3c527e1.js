"use strict";(self.webpackChunkcracknuts_website=self.webpackChunkcracknuts_website||[]).push([[9311],{5555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"doc/getting-started/environment_setup","title":"\u73af\u5883\u914d\u7f6e","description":"\u672c\u7ae0\u8282\u9700\u8981\u60a8\u5df2\u7ecf\u6709\u4e86Cracker\u8bbe\u5907\uff0c\u672c\u7ae0\u8282\u4ee5Cracker-S1\u8bbe\u5907\u4e3a\u4f8b\u8fdb\u884c\u4ecb\u7ecd\u3002CrackNuts\u4fa7\u4fe1\u9053\u91c7\u96c6\u5206\u6790\u4e00\u4f53\u5316\u65b9\u6848\u4e2d\uff0c\u4e0a\u4f4d\u673a\u4ee5Python\u7684SDK\u5f62\u5f0f\u4f9b\u7528\u6237\u4f7f\u7528\uff0c\u7528\u6237\u53ef\u4f7f\u7528Jupyter\u4f5c\u4e3a\u7f16\u7a0bIDE\uff0c\u5bf9\u8bbe\u5907\u8fdb\u884c\u63a7\u5236\u3001\u6570\u636e\u91c7\u96c6\u4ee5\u53ca\u540e\u7eed\u7684\u6570\u636e\u5206\u6790\u3002","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/doc/getting-started/environment_setup.md","sourceDirName":"doc/getting-started","slug":"/doc/getting-started/environment_setup","permalink":"/docs/doc/getting-started/environment_setup","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"\u73af\u5883\u914d\u7f6e","sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"\u4e0a\u4f4d\u673a\u8f6f\u4ef6\u5b89\u88c5","permalink":"/docs/doc/getting-started/host_sdk_installation"},"next":{"title":"\u529f\u8017\u91c7\u96c6","permalink":"/docs/doc/getting-started/trace-acquisition"}}');var r=t(4848),i=t(8453);const c={sidebar_label:"\u73af\u5883\u914d\u7f6e",sidebar_position:2},d="\u73af\u5883\u914d\u7f6e",o={},a=[{value:"\u8bbe\u5907\u7ed3\u6784",id:"\u8bbe\u5907\u7ed3\u6784",level:2},{value:"\u8bbe\u5907\u8fde\u63a5",id:"\u8bbe\u5907\u8fde\u63a5",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u73af\u5883\u914d\u7f6e",children:"\u73af\u5883\u914d\u7f6e"})}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u7ae0\u8282\u9700\u8981\u60a8\u5df2\u7ecf\u6709\u4e86",(0,r.jsx)(n.code,{children:"Cracker"}),"\u8bbe\u5907\uff0c\u672c\u7ae0\u8282\u4ee5",(0,r.jsx)(n.code,{children:"Cracker-S1"}),"\u8bbe\u5907\u4e3a\u4f8b\u8fdb\u884c\u4ecb\u7ecd\u3002",(0,r.jsx)(n.code,{children:"CrackNuts"}),"\u4fa7\u4fe1\u9053\u91c7\u96c6\u5206\u6790\u4e00\u4f53\u5316\u65b9\u6848\u4e2d\uff0c\u4e0a\u4f4d\u673a\u4ee5",(0,r.jsx)(n.code,{children:"Python"}),"\u7684SDK\u5f62\u5f0f\u4f9b\u7528\u6237\u4f7f\u7528\uff0c\u7528\u6237\u53ef\u4f7f\u7528",(0,r.jsx)(n.code,{children:"Jupyter"}),"\u4f5c\u4e3a\u7f16\u7a0bIDE\uff0c\u5bf9\u8bbe\u5907\u8fdb\u884c\u63a7\u5236\u3001\u6570\u636e\u91c7\u96c6\u4ee5\u53ca\u540e\u7eed\u7684\u6570\u636e\u5206\u6790\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u4f4d\u673a\u4e0e",(0,r.jsx)(n.code,{children:"Cracker"}),"\u8bbe\u5907\u901a\u8fc7\u4ee5\u592a\u7f51\u7edc\u8fdb\u884c\u8fde\u63a5\uff0c\u60a8\u53ef\u4ee5\u628a",(0,r.jsx)(n.code,{children:"Cracker"}),"\u76f4\u63a5\u63a5\u5165\u73b0\u6709\u4ee5\u592a\u7f51\u6216\u8005\u4e0e\u4e4b\u76f4\u8fde\uff0c\u5982\u56fe\u6240\u793a\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"alt text",src:t(7782).A+"",width:"533",height:"268"})}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u91c7\u7528\u76f4\u8fde\u65b9\u5f0f\u8fdb\u884c\u8bf4\u660e\uff0c\u8fde\u63a5\u73b0\u6709\u7f51\u7edc\u7684\u65b9\u5f0f\u8bf7\u53c2\u8003\u4e0a\u4f4d\u673a\u624b\u518c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u5907\u7ed3\u6784",children:"\u8bbe\u5907\u7ed3\u6784"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u9700\u8981\u4e86\u89e3\u7684\u8bbe\u5907\u60c5\u51b5\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"alt text",src:t(7135).A+"",width:"2086",height:"1248"})}),"\n",(0,r.jsxs)(n.p,{children:["\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u8bf7\u53c2\u770b",(0,r.jsx)(n.code,{children:"Cracker-S1"}),"\u7528\u6237\u624b\u518c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u5907\u8fde\u63a5",children:"\u8bbe\u5907\u8fde\u63a5"}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u51fa\u5382\u65f6\uff0c",(0,r.jsx)(n.code,{children:"Cracker-S1"}),"\u914d\u7f6e\u7684IP\u5730\u5740\u662f",(0,r.jsx)(n.code,{children:"192.168.0.10/24"}),"\u3002\u5f53\u60a8\u901a\u8fc7\u76f4\u8fde\u65b9\u5f0f\u4e0e\u8bbe\u5907\u8fdb\u884c\u8fde\u63a5\u65f6\uff0c\u9700\u8981\u5c06\u4e0a\u4f4d\u673a\u4e3b\u673a\u7684\u4ee5\u592a\u7f51\u7f51\u5361IP\u4fee\u6539\u4e3a",(0,r.jsx)(n.code,{children:"192.168.0.0/24"}),"\u7f51\u6bb5\u4e2d\u7684\u5176\u4ed6IP\u5730\u5740\u3002\u5982\u5728Windows\u4e0b\u7684\u914d\u7f6e\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"alt text",src:t(1528).A+"",width:"466",height:"580"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Windows \u4e0b\u53ef\u4ee5\u901a\u8fc7\u63a7\u5236\u9762\u677f\u8fdb\u5165IP\u5730\u5740\u4fee\u6539\u7a97\u53e3 ",(0,r.jsx)(n.code,{children:"\u63a7\u5236\u9762\u677f\\\u7f51\u7edc\u548c Internet\\\u7f51\u7edc\u8fde\u63a5"}),"\uff0c\u7136\u540e\u9009\u62e9\u60a8\u7684\u6709\u7ebf\u7f51\u5361\u5373\u53ef\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u4f60\u7684\u4e0a\u4f4d\u673a\u7535\u8111\u914d\u7f6e\u597dIP\u540e\uff0c\u53ef\u901a\u8fc7",(0,r.jsx)(n.code,{children:"PING"}),"\u547d\u4ee4\u9a8c\u8bc1\u7f51\u7edc\u901a\u8baf\u662f\u5426\u6b63\u5e38\uff0c\u4f8b\u5982\u5728Windows\u4e0b\u5982\u4e0b\u663e\u793a\u5373\u8868\u793a\u7f51\u7edc\u901a\u8baf\u6b63\u5e38\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ping 192.168.0.10\r\n\r\n\u6b63\u5728 Ping 192.168.0.10 \u5177\u6709 32 \u5b57\u8282\u7684\u6570\u636e:\r\n\u6765\u81ea 192.168.0.10 \u7684\u56de\u590d: \u5b57\u8282=32 \u65f6\u95f4=1ms TTL=64\r\n\u6765\u81ea 192.168.0.10 \u7684\u56de\u590d: \u5b57\u8282=32 \u65f6\u95f4=1ms TTL=64\r\n\u6765\u81ea 192.168.0.10 \u7684\u56de\u590d: \u5b57\u8282=32 \u65f6\u95f4=1ms TTL=64\r\n\u6765\u81ea 192.168.0.10 \u7684\u56de\u590d: \u5b57\u8282=32 \u65f6\u95f4=1ms TTL=64\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u901a\u8baf\u9a8c\u8bc1\u6ca1\u6709\u95ee\u9898\u540e\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528\u4e0a\u4f4d\u673a\u8fdb\u884c\u8fde\u63a5\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u5982\u679c\u60a8\u9700\u8981\u5c06\u8bbe\u5907\u8fde\u63a5\u5230\u5df2\u6709\u7684\u4ee5\u592a\u7f51\u7edc\u4e2d\uff0c\u53ef\u53c2\u8003\u7528\u6237\u624b\u518c\u90e8\u5206\u5bf9\u8bbe\u5907\u8fdb\u884cIP\u4fee\u6539"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},7135:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1741761623131-14fbc9924bc03d59c78de8b240a46614.png"},1528:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1741763108316-3b756d21c5999b947b3a89b81a60f33e.png"},7782:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1742955081196-946925283f4f9b3bd9ea0a6841822610.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(6540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);