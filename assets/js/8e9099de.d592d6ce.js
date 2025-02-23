"use strict";(self.webpackChunkharry_tech_doc=self.webpackChunkharry_tech_doc||[]).push([[1810],{2727:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"CTF/2024/lab6-nt213","title":"Lab 6 CTF NT213.ANTT","description":"All the chal is web-related","source":"@site/docs/CTF/2024/lab6-nt213.md","sourceDirName":"CTF/2024","slug":"/CTF/2024/lab6-nt213","permalink":"/HarryLee-Tech-Doc/docs/CTF/2024/lab6-nt213","draft":false,"unlisted":false,"editUrl":"https://github.com/HarryLee02/HarryLee-Tech-Doc/tree/main/docs/CTF/2024/lab6-nt213.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"2024","permalink":"/HarryLee-Tech-Doc/docs/category/2024"},"next":{"title":"ATTT2022.1","permalink":"/HarryLee-Tech-Doc/docs/category/attt20221"}}');var s=n(4848),a=n(8453);const i={sidebar_position:1},o="Lab 6 CTF NT213.ANTT",c={},d=[{value:"Slot Machine - 4 points",id:"slot-machine---4-points",level:2},{value:"Mark Editor - 2 points",id:"mark-editor---2-points",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"lab-6-ctf-nt213antt",children:"Lab 6 CTF NT213.ANTT"})}),"\n",(0,s.jsx)(r.p,{children:"All the chal is web-related"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"picture",src:n(4343).A+"",width:"1283",height:"309"})}),"\n",(0,s.jsx)(r.h2,{id:"slot-machine---4-points",children:"Slot Machine - 4 points"}),"\n",(0,s.jsx)(r.p,{children:"There is a link that contains the leaked codes for this chal"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://pastebin.com/uWc0GjUd",children:"source code"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",metastring:'title="chal.py" showLineNumbers',children:'import random\r\nfrom tqdm import tqdm\r\n\r\nflag = "NT213.ATTT.2{Luck-can-not-help-u-find-the-flag-:)))}"\r\nseed = random.randint(100_000, 999_999)\r\noutput = ""\r\n \r\nseed_str = str(seed)\r\nreal_seed = 0\r\nfor char in seed_str:\r\n    real_seed = real_seed + ord(char)**2\r\n    real_seed = real_seed + seed\r\n    real_seed = real_seed % 16\r\n \r\nprevious_char = "\\0"\r\nfor char in flag:\r\n    a =  ord(char) % 94 + 33 + real_seed % 94 + 33\r\n    a = a % 94 + 33\r\n    output += chr(a)\r\n    previous_char = chr(ord(char) % 94 + 33)\r\n \r\nprint(output)\n'})}),"\n",(0,s.jsx)(r.p,{children:"To solve this, you need to get the seed, other wise, bruteforcing is the best you can do. Since this is a web class, we need to see what the web is doing, is there any hint."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"string",src:n(7030).A+"",width:"1733",height:"806"})}),"\n",(0,s.jsx)(r.p,{children:"A .txt file is returned, which contains the seed for the encrypted flag."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",metastring:'title="calculateLuckyString.txt" showLineNumbers',children:'0:{"_value":{"seed":564490,"output":"]cA@B=Pccc=A,b{?%n|CrZ@}Bn@$npsS@rctS."}}\n'})}),"\n",(0,s.jsx)(r.p,{children:"Now we need to reverse the function used for encryption."}),"\n",(0,s.jsx)(r.p,{children:"I run the slot machine couples of time to get the lower seed number so that I dont need to find the multiplication for 94, as in the encryption function."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",metastring:'title="solve.py" showLineNumbers',children:"output = 'agEDFATgggAE0f!C)r\\\"Gv^D#FrD(rtwWDvgxW2'\r\n# output = 'CvF'\r\n\r\nseed = 156260\r\nseed_str = str(156260)\r\nreal_seed = 0\r\nfor char in seed_str:\r\n    real_seed = real_seed + ord(char)**2\r\n    real_seed = real_seed + seed\r\n    real_seed = real_seed % 16 \r\n    # Reverse the transformation \r\nflag = \"\"\r\nfor char in output:\r\n    a = ord(char)-33-33-33+94# not > 94\r\n    a = a - real_seed % 94\r\n    if a <33:\r\n        a += 94\r\n    print(a)\r\n    flag += chr(a)\r\nprint(flag)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"mark-editor---2-points",children:"Mark Editor - 2 points"})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},7030:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/calculateLuckyString-e08860448a66ebf772fd73a23a67fc8c.png"},4343:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/ctf-lab-6-495f3beaea5fadc662a695741d4f2c5a.png"},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(6540);const s={},a=t.createContext(s);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);