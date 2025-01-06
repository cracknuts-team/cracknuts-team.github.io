"use strict";(self.webpackChunkcracknuts_website=self.webpackChunkcracknuts_website||[]).push([[9021],{2494:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>t,frontMatter:()=>r,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"doc/development/communication-protocol","title":"CNP \u901a\u4fe1\u534f\u8bae","description":"Cracker\u548c\u4e0a\u4f4d\u673a\u901a\u8fc7IP\u7f51\u7edc\u901a\u4fe1\uff0c\u5728TCP\u4e4b\u4e0a\u6784\u5efaCNP\u534f\u8bae\uff0c\u5b9e\u73b0\u8bbe\u5907\u914d\u7f6e\u548c\u6570\u636e\u91c7\u96c6\u529f\u80fd\u3002","source":"@site/docs/doc/development/communication-protocol.md","sourceDirName":"doc/development","slug":"/doc/development/communication-protocol","permalink":"/en/docs/doc/development/communication-protocol","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"CNP Protocol","sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"Open Source","permalink":"/en/docs/doc/development/opensource"}}');var i=d(4848),l=d(8453);const r={sidebar_label:"CNP Protocol",sidebar_position:2},c="CNP \u901a\u4fe1\u534f\u8bae",h={},x=[{value:"\u534f\u8bae\u5e27\u683c\u5f0f",id:"\u534f\u8bae\u5e27\u683c\u5f0f",level:2},{value:"\u6570\u636e\u683c\u5f0f",id:"\u6570\u636e\u683c\u5f0f",level:2},{value:"\u6307\u4ee4\u6c47\u603b",id:"\u6307\u4ee4\u6c47\u603b",level:2},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",level:2},{value:"\u8bbe\u5907\u4fe1\u606f",id:"\u8bbe\u5907\u4fe1\u606f",level:3},{value:"\u83b7\u53d6\u8bbe\u5907 ID",id:"\u83b7\u53d6\u8bbe\u5907-id",level:3},{value:"\u83b7\u53d6\u540d\u79f0",id:"\u83b7\u53d6\u540d\u79f0",level:3},{value:"\u83b7\u53d6\u7248\u672c",id:"\u83b7\u53d6\u7248\u672c",level:3},{value:"\u8bfb\u53d6\u5bc4\u5b58\u5668",id:"\u8bfb\u53d6\u5bc4\u5b58\u5668",level:3},{value:"\u5199\u5165\u5bc4\u5b58\u5668",id:"\u5199\u5165\u5bc4\u5b58\u5668",level:3},{value:"SCART",id:"scart",level:2},{value:"\u6a21\u62df\u4f7f\u80fd",id:"\u6a21\u62df\u4f7f\u80fd",level:3},{value:"\u6a21\u62df\u8026\u5408",id:"\u6a21\u62df\u8026\u5408",level:3},{value:"\u6a21\u62df\u504f\u7f6e",id:"\u6a21\u62df\u504f\u7f6e",level:3}];function j(n){const e={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"cnp-\u901a\u4fe1\u534f\u8bae",children:"CNP \u901a\u4fe1\u534f\u8bae"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Cracker"}),"\u548c",(0,i.jsx)(e.code,{children:"\u4e0a\u4f4d\u673a"}),"\u901a\u8fc7",(0,i.jsx)(e.code,{children:"IP"}),"\u7f51\u7edc\u901a\u4fe1\uff0c\u5728",(0,i.jsx)(e.code,{children:"TCP"}),"\u4e4b\u4e0a\u6784\u5efa",(0,i.jsx)(e.code,{children:"CNP"}),"\u534f\u8bae\uff0c\u5b9e\u73b0\u8bbe\u5907\u914d\u7f6e\u548c\u6570\u636e\u91c7\u96c6\u529f\u80fd\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u534f\u8bae\u5e27\u683c\u5f0f",children:"\u534f\u8bae\u5e27\u683c\u5f0f"}),"\n",(0,i.jsxs)(e.p,{children:["\u534f\u8bae\u603b\u4f53\u5305\u542b\u4e24\u90e8\u5206\uff1a",(0,i.jsx)(e.code,{children:"\u5934"}),"\u548c",(0,i.jsx)(e.code,{children:"\u8d1f\u8f7d"}),"\uff0c\u5e76\u6839\u636e\u6570\u636e\u65b9\u5411\u5206\u6210",(0,i.jsx)(e.code,{children:"\u8bf7\u6c42"}),"\u548c",(0,i.jsx)(e.code,{children:"\u54cd\u5e94"}),"\u4e24\u79cd\u7c7b\u578b\u3002\u5176\u4e2d",(0,i.jsx)(e.code,{children:"\u5934"}),"\u4e2d\u5305\u542b\u534f\u8bae\u7684\u534f\u8bae\u9b54\u6570\uff0c\u7248\u672c\uff0c\u65b9\u5411\uff0c\u6307\u4ee4\u7801\uff0c\u8d1f\u8f7d\u957f\u5ea6\u7b49\u4fe1\u606f\uff0c\u8d1f\u8f7d\u4fe1\u606f\u4e3a\u5177\u4f53\u6d88\u606f\u5185\u5bb9\uff0c\u5177\u4f53\u5165\u4e0b\uff1a"]}),"\n",(0,i.jsx)(e.p,{children:"Request"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\r\n\u2502--------------Request Header---------------\u2502-------\u2502\r\n\u2502Magic \u2502Version\u2502Direction\u2502Command\u2502RFU\u2502Length\u2502PayLoad\u2502\r\n\u2502-------------------------------------------\u2502-------\u2502\r\n\u2502 4B   \u2502  2B   \u2502   1B    \u2502   2B  \u25022B \u2502  4B  \u2502$Length\u2502\r\n\u2502-------------------------------------------\u2502-------\u2502\r\n\u2502'CRAK'\u2502   1   \u2502   'S'   \u2502       \u2502   \u2502      \u2502       \u2502\r\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,i.jsx)(e.p,{children:"Response"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\r\n\u2502--------------Response Header---------\u2502-------\u2502\r\n\u2502Magic \u2502Version\u2502Direction\u2502Status\u2502Length\u2502PayLoad\u2502\r\n\u2502--------------------------------------\u2502-------\u2502\r\n\u2502 4B   \u2502  2B   \u2502   1B    \u2502  2B  \u2502  4B  \u2502$Length\u2502\r\n\u2502--------------------------------------\u2502-------\u2502\r\n\u2502'CRAK'\u2502   1   \u2502   'R'   \u2502      \u2502      \u2502       \u2502\r\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5b57\u6bb5\u540d\u79f0"}),(0,i.jsx)(e.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Magic"}),(0,i.jsx)(e.td,{children:"\u662f"}),(0,i.jsx)(e.td,{children:"\u534f\u8bae\u9b54\u6570\uff0c\u56fa\u5b9a\u503c CRAK"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Version"}),(0,i.jsx)(e.td,{children:"\u662f"}),(0,i.jsx)(e.td,{children:"\u534f\u8bae\u7248\u672c"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Direction"}),(0,i.jsx)(e.td,{children:"\u662f"}),(0,i.jsx)(e.td,{children:"\u6570\u636e\u65b9\u5411\uff0c\u53d1\u9001\u65b9\u4e3a S\uff0c\u63a5\u6536\u65b9\u54cd\u5e94\u6570\u636e\u65f6\u4e3a R"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Command"}),(0,i.jsx)(e.td,{children:"\u53d1\u9001\u65b9\u5fc5\u987b"}),(0,i.jsx)(e.td,{children:"\u6307\u4ee4\u4ee3\u7801"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Status"}),(0,i.jsx)(e.td,{children:"\u54cd\u5e94\u65b9\u5fc5\u987b"}),(0,i.jsx)(e.td,{children:"\u8868\u793a\u547d\u4ee4\u6267\u884c\u7ed3\u679c \u9ed8\u8ba4 0\uff1a\u6b63\u5e38\uff0c\u5176\u4ed6\uff1a\u9519\u8bef"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"RFU"}),(0,i.jsx)(e.td,{children:"\u5426"}),(0,i.jsx)(e.td,{children:"\u5907\u7528\u5b57\u6bb5"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Length"}),(0,i.jsx)(e.td,{children:"\u662f"}),(0,i.jsx)(e.td,{children:"\u8bf7\u6c42\u6216\u54cd\u5e94\u8d1f\u8f7d\u7684\u5b57\u8282\u957f\u5ea6"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u6570\u636e\u683c\u5f0f",children:"\u6570\u636e\u683c\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"\u534f\u8bae\u4e2d\u53d1\u9001\u7684\u6570\u636e\u5305\u542b\u6570\u503c\u7b49\u591a\u5b57\u8282\u6570\u636e\u65f6\uff0c\u91c7\u7528\u6253\u7aef\u8fdb\u884c\u4f20\u8f93\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u6307\u4ee4\u6c47\u603b",children:"\u6307\u4ee4\u6c47\u603b"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5206\u7ec4"}),(0,i.jsx)(e.th,{children:"\u6307\u4ee4\u7801"}),(0,i.jsx)(e.th,{children:"\u540d\u79f0"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"}),(0,i.jsx)(e.th,{children:"Device S1 \u652f\u6301\u60c5\u51b5"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Device info"}),(0,i.jsx)(e.td,{children:"0x0001"}),(0,i.jsx)(e.td,{children:"GET_ID"}),(0,i.jsx)(e.td,{children:"\u83b7\u53d6\u8bbe\u5907 ID"}),(0,i.jsx)(e.td,{children:"Y"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Device info"}),(0,i.jsx)(e.td,{children:"0x0002"}),(0,i.jsx)(e.td,{children:"GET_NAME"}),(0,i.jsx)(e.td,{children:"\u83b7\u53d6\u540d\u79f0"}),(0,i.jsx)(e.td,{children:"Y"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Device info"}),(0,i.jsx)(e.td,{children:"0x0003"}),(0,i.jsx)(e.td,{children:"GET_VERSION"}),(0,i.jsx)(e.td,{children:"\u83b7\u53d6\u7248\u672c\u4fe1\u606f"}),(0,i.jsx)(e.td,{children:"N"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Device info"}),(0,i.jsx)(e.td,{children:"0x0004"}),(0,i.jsx)(e.td,{children:"READ_REGISTER"}),(0,i.jsx)(e.td,{children:"\u8bfb\u53d6\u5bc4\u5b58\u5668"}),(0,i.jsx)(e.td,{children:"Y"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Device info"}),(0,i.jsx)(e.td,{children:"0x0005"}),(0,i.jsx)(e.td,{children:"WRITE_REGISTER"}),(0,i.jsx)(e.td,{children:"\u5199\u5165\u5bc4\u5b58\u5668"}),(0,i.jsx)(e.td,{children:"Y"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Scrat"}),(0,i.jsx)(e.td,{children:"0x0100"}),(0,i.jsx)(e.td,{children:"SCRAT_ANALOG_CHANNEL_ENABLE"}),(0,i.jsx)(e.td,{children:"\u6a21\u62df\u901a\u9053\u4f7f\u80fd"}),(0,i.jsx)(e.td,{children:"Y"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Scrat"}),(0,i.jsx)(e.td,{children:"0x0101"}),(0,i.jsx)(e.td,{children:"SCRAT_ANALOG_CHANNEL_ENABLE"}),(0,i.jsx)(e.td,{children:"\u6a21\u62df\u901a\u9053\u4f7f\u80fd"}),(0,i.jsx)(e.td,{children:"Y"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u6307\u4ee4",children:"\u6307\u4ee4"}),"\n",(0,i.jsx)(e.h3,{id:"\u8bbe\u5907\u4fe1\u606f",children:"\u8bbe\u5907\u4fe1\u606f"}),"\n",(0,i.jsx)(e.h3,{id:"\u83b7\u53d6\u8bbe\u5907-id",children:"\u83b7\u53d6\u8bbe\u5907 ID"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u540d\u79f0"}),(0,i.jsx)(e.th,{children:"\u6307\u4ee4\u7801"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"}),(0,i.jsx)(e.th,{children:"\u8bf7\u6c42\u8d1f\u8f7d\u957f\u5ea6"}),(0,i.jsx)(e.th,{children:"\u54cd\u5e94\u8d1f\u8f7d\u957f\u5ea6\u5b57\u8282"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"GET_ID"}),(0,i.jsx)(e.td,{children:"0x0001"}),(0,i.jsx)(e.td,{children:"\u83b7\u53d6\u8bbe\u5907 ID"}),(0,i.jsx)(e.td,{children:"\u65e0"}),(0,i.jsx)(e.td,{children:"4"})]})})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u540d\u79f0\uff1aGET_ID"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6307\u4ee4\u7801\uff1a0x0001"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63cf\u8ff0\uff1a\u83b7\u53d6\u8bbe\u5907 ID"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8bf7\u6c42\u8d1f\u8f7d"}),"\n",(0,i.jsx)(e.p,{children:"\u65e0"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u54cd\u5e94\u8d1f\u8f7d"}),"\n",(0,i.jsx)(e.p,{children:"\u8bbe\u5907 ID \u4fe1\u606f\u5b57\u7b26"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u83b7\u53d6\u540d\u79f0",children:"\u83b7\u53d6\u540d\u79f0"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u540d\u79f0\uff1aGET_NAME"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6307\u4ee4\u7801\uff1a0x0002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63cf\u8ff0\uff1a\u83b7\u53d6\u8bbe\u5907\u540d\u79f0"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8bf7\u6c42\u8d1f\u8f7d"}),"\n",(0,i.jsx)(e.p,{children:"\u65e0"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u54cd\u5e94\u8d1f\u8f7d"}),"\n",(0,i.jsx)(e.p,{children:"\u8bbe\u5907\u540d\u79f0\u4fe1\u606f\u5b57\u7b26"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u83b7\u53d6\u7248\u672c",children:"\u83b7\u53d6\u7248\u672c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u540d\u79f0\uff1aGET_VERSION"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6307\u4ee4\u7801\uff1a0x0003"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63cf\u8ff0\uff1a\u83b7\u53d6\u7248\u672c\u4fe1\u606f"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8bf7\u6c42\u8d1f\u8f7d"}),"\n",(0,i.jsx)(e.p,{children:"\u65e0"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u54cd\u5e94\u8d1f\u8f7d"}),"\n",(0,i.jsx)(e.p,{children:"\u8bbe\u5907\u7248\u672c\u4fe1\u606f\u5b57\u7b26"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u8bfb\u53d6\u5bc4\u5b58\u5668",children:"\u8bfb\u53d6\u5bc4\u5b58\u5668"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u540d\u79f0\uff1aREAD_REGISTER"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6307\u4ee4\u7801\uff1a0x0004"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63cf\u8ff0\uff1a\u8bfb\u53d6\u5bc4\u5b58\u5668"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8bf7\u6c42\u8d1f\u8f7d"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5b57\u8282\u5e8f\u522b\u540d"}),(0,i.jsx)(e.th,{children:"\u957f\u5ea6"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"base_address"}),(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"\u5bc4\u5b58\u5668\u57fa\u5740"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"offset"}),(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"\u5bc4\u5b58\u5668\u504f\u79fb"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u54cd\u5e94\u8d1f\u8f7d"}),"\n",(0,i.jsx)(e.p,{children:"\u8bbe\u5907\u5bc4\u5b58\u5668\u503c"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5199\u5165\u5bc4\u5b58\u5668",children:"\u5199\u5165\u5bc4\u5b58\u5668"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u540d\u79f0\uff1aWRITE_REGISTER"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6307\u4ee4\u7801\uff1a0x0005"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63cf\u8ff0\uff1a\u5199\u5165\u5bc4\u5b58\u5668"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8bf7\u6c42\u8d1f\u8f7d"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5b57\u8282\u5e8f\u522b\u540d"}),(0,i.jsx)(e.th,{children:"\u957f\u5ea6"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"base_address"}),(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"\u5bc4\u5b58\u5668\u57fa\u5740"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"offset"}),(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"\u5bc4\u5b58\u5668\u504f\u79fb"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"data"}),(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"\u8981\u5199\u5165\u5bc4\u5b58\u5668\u6570\u636e"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u54cd\u5e94\u8d1f\u8f7d"}),"\n",(0,i.jsx)(e.p,{children:"\u8bbe\u5907\u5bc4\u5b58\u5668\u503c"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"scart",children:"SCART"}),"\n",(0,i.jsx)(e.h3,{id:"\u6a21\u62df\u4f7f\u80fd",children:"\u6a21\u62df\u4f7f\u80fd"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u540d\u79f0\uff1aSCRAT_ANALOG_CHANNEL_ENABLE"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6307\u4ee4\u7801\uff1a0x0100"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63cf\u8ff0\uff1a\u6a21\u62df\u901a\u9053\u4f7f\u80fd"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8bf7\u6c42\u8d1f\u8f7d"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5b57\u8282\u5e8f\u522b\u540d"}),(0,i.jsx)(e.th,{children:"\u957f\u5ea6"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"enable"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsxs)(e.td,{children:["Channel \u7684\u6bcf\u4e00\u4e2a\u6bd4\u7279\u5bf9\u5e94\u4e00\u4e2a\u901a\u9053\uff0c",(0,i.jsx)(e.br,{}),'bit 0\u5bf9\u5e94\u7b2c\u4e00\u4e2a\u901a\u9053\uff0cbit 1\u5bf9\u5e94\u7b2c\u4e8c\u4e2a\u901a\u9053\uff0c\u4f9d\u6b64\u7c7b\u63a8\uff0c"1"\u4e3a\u4f7f\u80fd\uff0c"0"\u4e3a\u5173\u95ed']})]})})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u54cd\u5e94\u8d1f\u8f7d"}),"\n",(0,i.jsx)(e.p,{children:"\u65e0"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6a21\u62df\u8026\u5408",children:"\u6a21\u62df\u8026\u5408"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u540d\u79f0\uff1aSCRAT_ANALOG_COUPLING"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6307\u4ee4\u7801\uff1a0x0102"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63cf\u8ff0\uff1a\u6a21\u62df\u8026\u5408"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8bf7\u6c42\u8d1f\u8f7d"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5b57\u8282\u5e8f\u522b\u540d"}),(0,i.jsx)(e.th,{children:"\u957f\u5ea6"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"coupling"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsxs)(e.td,{children:["Coupling \u7684\u6bcf\u4e00\u4e2a\u6bd4\u7279\u5bf9\u5e94\u4e00\u4e2a\u901a\u9053\uff0c",(0,i.jsx)(e.br,{}),'bit 0\u5bf9\u5e94\u7b2c\u4e00\u4e2a\u901a\u9053\uff0cbit 1\u5bf9\u5e94\u7b2c\u4e8c\u4e2a\u901a\u9053\uff0c\u4f9d\u6b64\u7c7b\u63a8\uff0c"1"\u4e3a\u76f4\u6d41\uff0c"0"\u4e3a\u4ea4\u6d41\u3002']})]})})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u54cd\u5e94\u8d1f\u8f7d"}),"\n",(0,i.jsx)(e.p,{children:"\u65e0"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6a21\u62df\u504f\u7f6e",children:"\u6a21\u62df\u504f\u7f6e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u540d\u79f0\uff1aSCRAT_ANALOG_VOLTAGE"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6307\u4ee4\u7801\uff1a0x0103"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63cf\u8ff0\uff1a\u6a21\u62df\u504f\u7f6e"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8bf7\u6c42\u8d1f\u8f7d"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5b57\u8282\u5e8f\u522b\u540d"}),(0,i.jsx)(e.th,{children:"\u957f\u5ea6"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"channel"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"\u901a\u9053\u53f7"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"voltage"}),(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"\u6709\u7b26\u53f732\u4f4d\u6574\u6570\uff0c\u5355\u4f4d\u4e3a mV"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u54cd\u5e94\u8d1f\u8f7d"}),"\n",(0,i.jsx)(e.p,{children:"\u65e0"}),"\n"]}),"\n"]})]})}function t(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(j,{...n})}):j(n)}},8453:(n,e,d)=>{d.d(e,{R:()=>r,x:()=>c});var s=d(6540);const i={},l=s.createContext(i);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);