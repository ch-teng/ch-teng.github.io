(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9054:function(e,i,t){Promise.resolve().then(t.bind(t,8838))},8838:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return G}});var a=t(7437),s=t(456),n=t(9018),o=t(6648),r=t(2265),l=t(2063),c=t(7476),d=t(5856);let p=e=>{let{word:i,onLoadOnly:t}=e,[n,o]=(0,l.H)(),p=(0,c.Y)(n,{once:t});return(0,r.useEffect)(()=>{p&&o("span",{opacity:[0,1],y:["20%","0%"]},{delay:(0,d.E)(.05),duration:1,type:"spring"})},[o,p]),(0,a.jsx)(s.E.div,{ref:n,className:"slide-text",children:i.split("").map((e,i)=>(0,a.jsx)(s.E.span,{children:e},i))})};var m=t(1871),g=t(6391),h=t(847);function u(e){let{aboveColor:i,belowColor:t}=e,n=(0,r.useRef)(null),{scrollYProgress:o}=(0,m.v)({target:n,offset:["end end","start start"]}),l=(0,g.q)(o,{damping:30}),c=(0,h.H)(l,e=>"translatex(-".concat(100*e,"vw)"));return(0,a.jsx)("div",{className:"background-wave",style:{background:i},children:(0,a.jsx)(s.E.div,{className:"wave",ref:n,style:{transform:c,background:t}})})}var f=t(2728);let y=e=>{let{imgSrc:i,imgDesc:t,cardTitle:n,description:l,sideInfo:c}=e,[d,p]=(0,r.useState)(!1),[m,g]=(0,r.useState)(!1),[h,u]=(0,r.useState)(!1),f=()=>{window.innerWidth<650?u(!0):u(!1)};return(0,r.useEffect)(()=>(window.addEventListener("resize",f),f(),()=>window.removeEventListener("resize",f)),[]),(0,a.jsxs)("div",{className:"card-layout",children:[(0,a.jsx)(s.E.div,{className:"card-deco",onClick:()=>{c&&p(!d)},variants:{initial:{x:0},hover:{x:"-10px"},showingSide:{x:"-30px"}},initial:!1,animate:h?{x:0}:d?"showingSide":c&&m?"hover":"initial",transition:{type:"spring",stiffness:100,ease:"easeOut"},onMouseEnter:()=>{g(!0)},onMouseLeave:()=>{g(!1)},children:(0,a.jsxs)(s.E.div,{className:"card-main",children:[(0,a.jsx)("div",{className:"card-img-holder",children:(0,a.jsx)(o.default,{src:i,alt:t,className:"card-img",fill:!0,sizes:"(max-width: 1200px) 80vw, 50vw"})}),(0,a.jsxs)("div",{className:"card-description text-box",children:[(0,a.jsx)("h3",{style:{textAlign:"center",margin:"0"},children:n}),l.replaceAll("*","\n")]})]})}),c&&(0,a.jsx)(s.E.div,{className:"card-description card-side-info text-box",variants:{hidden:{x:"-110px"},hover:{x:"-70px"},visible:{x:0}},initial:!1,animate:h?{x:0}:d?"visible":m?"hover":"hidden",transition:{type:"spring",stiffness:100,ease:"easeOut"},children:c.replaceAll(",","\n")})]})},x=e=>{let{companyImg:i,companyTitle:t,companyDesc:n,jobDesc:o,jobTitle:r,jobImg:l,technologies:c}=e;return(0,a.jsxs)("div",{className:"frame-holder",children:[(0,a.jsx)(f.M,{mode:"wait",children:(0,a.jsx)(s.E.div,{className:"company-card",initial:{opacity:0,y:-20},animate:{opacity:1,y:0,transition:{duration:.2,ease:"easeOut"}},exit:{opacity:0,y:-20,transition:{duration:.2,delay:.2,ease:"easeOut"}},children:(0,a.jsx)(y,{imgSrc:i,imgDesc:i,cardTitle:t,description:n})},i)}),(0,a.jsx)(f.M,{mode:"wait",children:(0,a.jsx)(s.E.div,{className:"job-card",initial:{opacity:0,x:-20},animate:{opacity:1,x:0,transition:{duration:.2,delay:.4,ease:"easeOut"}},exit:{opacity:0,x:-20,transition:{duration:.2,ease:"easeOut"}},children:(0,a.jsx)(y,{imgSrc:l,imgDesc:l,cardTitle:r,description:o,sideInfo:c})},l)})]})},v=[{title:"Full Stack Developer Co-op",company:"Priceline",date:"June 2023 - Jan 2024",companyDescription:"Priceline is a travel agency that offers discount rates for travel-related purchases such as airline tickets and hotel stays. Priceline is headquartered in Norwalk, Connecticut, United States and is wholly owned by Booking Holdings, which also owns Kayak.com, Booking.com and other sites.",companyImgSrc:"/priceline/Priceline-office.jpg",jobDescription:"During my tenure at Priceline, I spearheaded the creation of new and innovative designs for post-booking and user profiles utilizing NextJS and GraphQL. I significantly enhanced our continuous integration and continuous deployment (CI/CD) practices across all repositories, resulting in faster and cleaner deployments. Additionally, I transitioned our repository structure from a monolithic design to microservices, which greatly facilitated development processes. Through several A/B tests, I was able to clarify and improve user experience, leading to a 50% improvement in design decisions.",jobImgSrc:"/priceline/Priceline-website.png",technologies:"TypeScript, React, NextJS, NodeJS, GraphQL, SQL, Java, Jest, Mabl",logoImgSrc:"/priceline/priceline-logo.png",logoImgDesc:"Priceline Logo"},{title:"Software Developer Co-op",company:"TriNetX",date:"June 2022 - Dec 2022",logoImgSrc:"/trinetx/TriNetX-Logo-PR.jpeg",logoImgDesc:"TriNetX Logo",companyDescription:"TriNetX is a global network of healthcare organizations and life sciences companies driving real-world research to accelerate the development of new therapies. Through its self-service, HIPAA, GDPR, and LGPD-compliant platform of federated EHR, datasets, and consulting partnerships, TriNetX puts the power of real-world data into the hands of its worldwide community to improve protocol design, streamline trial operations, refine safety signals, and enrich real-world evidence generation.",companyImgSrc:"/trinetx/office.jpg",jobDescription:"At TriNetX, I led the full-stack development of a new feature on the web app, enhancing administrators' access to protected information across various healthcare networks. I initiated and fostered the creation of a peer-programming system, which was deployed company-wide in December 2022, to institutionalize crucial knowledge for both new hires and experts. Additionally, I resolved inconsistencies in repositories regarding the handling of time zones and dates, presenting my findings and fixing misrepresented data for all users. This resulted in a 10% increase in customer satisfaction.",jobImgSrc:"/trinetx/job.jpeg",technologies:"TypeScript, React, Javascript, Maven, NextJS, NodeJS, Cypress, SQL, Java, Spring Boot"},{title:"Software Developer Co-op",company:"Hasbro",date:"May 2021 - Aug 2021",logoImgSrc:"/hasbro/Hasbro_logo_symbol.png",logoImgDesc:"Hasbro Logo",companyDescription:"Hasbro is a leading toy and game company whose mission is to entertain and connect generations of fans through the wonder of storytelling and exhilaration of play. Hasbro delivers engaging brand experiences for global audiences through toys, consumer products, gaming and entertainment, with a portfolio of iconic brands including MAGIC: THE GATHERING, DUNGEONS & DRAGONS, Hasbro Gaming, NERF, TRANSFORMERS, PLAY-DOH and PEPPA PIG, as well as premier partner brands.",companyImgSrc:"/hasbro/office.jpg",jobDescription:"At Hasbro, I renovated the website https://apps.hasbro.com using the NextJS framework and translation modules. I coordinated project development through sprint structures such as Agile and SCRUM, utilizing Jira for efficient project management. Additionally, I developed a custom NodeJS script to migrate content information to the new CMS, ensuring a smooth and effective transition.",jobImgSrc:"/hasbro/website-01.jpg",technologies:"TypeScript, Javascript, React, NextJS, NodeJS, Java, Jest, HTML, CSS"},{title:"Project Developer",company:"PrepareRI",date:"June 2020 - Aug 2020",logoImgSrc:"/PrepareRI_logo.png",logoImgDesc:"PrepareRI Logo",companyDescription:"Prepare RI is an interagency program that prepares youth for college and careers by bridging K-12, postsecondary and industry forces to introduce, develop and prepare youth for the skills and learning they need after they finish high school.",companyImgSrc:"/prepareRI/office.jpg",jobDescription:"At PrepareRI, I designed a system to connect a local daycare with families during socially-distanced times. I developed the brand's presence by effectively communicating company ideas online and managing social media engagement. Additionally, I presented the brand, designs, and an advertisement campaign to company leads, laying the groundwork for future development initiatives. I also conducted user feedback sessions to refine our approach and collaborated with cross-functional teams to ensure alignment with the company's goals. My efforts contributed to a significant increase in user engagement and positive feedback from the community.",jobImgSrc:"/prepareRI/website.jpg"},{title:"Cyber Security Analyst Intern",company:"Hasbro",date:"June 2019 - Aug 2019",logoImgSrc:"/hasbro/Hasbro_logo_symbol.png",logoImgDesc:"Hasbro Logo",companyDescription:"Hasbro is a leading toy and game company whose mission is to entertain and connect generations of fans through the wonder of storytelling and exhilaration of play. Hasbro delivers engaging brand experiences for global audiences through toys, consumer products, gaming and entertainment, with a portfolio of iconic brands including MAGIC: THE GATHERING, DUNGEONS & DRAGONS, Hasbro Gaming, NERF, TRANSFORMERS, PLAY-DOH and PEPPA PIG, as well as premier partner brands.",companyImgSrc:"/hasbro/office.jpg",jobDescription:"During my cyber security internship at Hasbro, I managed permissions for the company's active global IP addresses using self-built Python scripts. I automated daily tasks for the Cyber Security team, freeing up valuable time for full-time developers. I also connected with team members to understand when to seek help and how to operate effectively in a workplace setting. Additionally, I conducted security audits to identify vulnerabilities and collaborated on the development of improved security protocols. My contributions not only streamlined operations but also enhanced the overall security posture of the organization.",jobImgSrc:"/hasbro/brands.jpg"}];function w(){let[e,i]=(0,r.useState)(v),[t,l]=(0,r.useState)(e[0]),c=t=>{l(t);let a=function(e,i){let[...t]=e,a=t.indexOf(i);return a>-1&&t.splice(a,1),t}(e,t);i([t,...a])},d=(0,r.useRef)(null),m=(0,r.useCallback)(e=>{let i=d.current;if(!i)return;let t={left:i.scrollLeft,x:e.clientX},a=e=>{let a=e.clientX-t.x;i.scrollLeft=t.left-a,h(i)},s=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",s),f(i)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",s)},[]),g=(0,r.useCallback)(e=>{let i=d.current;if(!i)return;let t=e.touches[0],a={left:i.scrollLeft,x:t.clientX},s=e=>{let t=e.touches[0].clientX-a.x;i.scrollLeft=a.left-t,h(i)},n=()=>{document.removeEventListener("touchmove",s),document.removeEventListener("touchend",n),f(i)};document.addEventListener("touchmove",s),document.addEventListener("touchend",n)},[]),h=e=>{e&&(e.style.cursor="grabbing",e.style.userSelect="none")},f=e=>{e&&(e.style.cursor="grab",e.style.removeProperty("user-select"))};return(0,a.jsxs)("div",{className:"page center-page experiences",id:"experiences",children:[(0,a.jsx)(u,{belowColor:"#25455F",aboveColor:"#0A132B"}),(0,a.jsx)(p,{word:"Experiences"}),(0,a.jsxs)("div",{className:"exp-options",children:[(0,a.jsx)(s.E.div,{onClick:()=>{i(v),l(v[0])},className:"exp-option-button job",whileHover:{scale:1.1},children:"Order from most recent"}),(0,a.jsx)(s.E.div,{className:"exp-option-button job",whileHover:{scale:1.1},children:(0,a.jsx)("a",{href:"/ChrisTengResume.pdf",download:"ChrisTengResume",children:"Download My Resume!"})})]}),(0,a.jsx)("div",{className:"center-scroller",children:(0,a.jsx)(n.t.Group,{className:"scroller",id:"scroller",as:"ul",axis:"x",onReorder:i,values:e,ref:d,onMouseDown:m,onTouchStart:g,style:{cursor:"grab"},children:e.map(e=>(0,a.jsx)(n.t.Item,{value:e,id:e.date,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},dragListener:!1,children:(0,a.jsxs)(s.E.button,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:300,damping:40},whileTap:{scale:.9},className:"job ".concat(e===t?"selected":""),onClick:()=>{c(e)},children:[(0,a.jsx)(o.default,{draggable:!1,src:e.logoImgSrc,alt:e.logoImgDesc,width:50,height:50,className:"rounded"}),(0,a.jsx)("div",{children:e.title})]})},e.date))})}),(0,a.jsx)(x,{companyImg:t.companyImgSrc,companyTitle:t.company,companyDesc:t.companyDescription,jobTitle:t.title+" ~ "+t.date,jobDesc:t.jobDescription,jobImg:t.jobImgSrc,technologies:t.technologies})]})}function b(){let e=(0,r.useRef)(null),[i,t]=(0,r.useState)(!1),n=[];for(let e=0;e<13;e++)n.push((0,a.jsx)(s.E.div,{animate:{opacity:[.8,.2,.8]},transition:{repeat:1/0,duration:Math.random()+2},className:"ray ray".concat(e)},e));let o={initial:{y:"100%"},whileInView:{y:"0%",transition:{staggerChildren:.1,type:"spring",stiffness:30}}},l=()=>{window.innerWidth<650?t(!0):t(!1)};return(0,r.useEffect)(()=>(window.addEventListener("resize",l),l(),()=>window.removeEventListener("resize",l)),[]),(0,a.jsxs)("div",{className:"background-ground",ref:e,children:[(0,a.jsx)("div",{className:"name",children:(0,a.jsx)(s.E.h1,{variants:{hidden:{opacity:1,y:"100%"},show:{opacity:1,y:0,transition:{delay:1,duration:.5}}},initial:"hidden",animate:"show",children:"Chris Teng"})}),(0,a.jsx)("div",{className:"greeting",children:(0,a.jsx)(s.E.h3,{variants:{hidden:{opacity:1,y:"-100%"},show:{opacity:1,y:0,transition:{delay:1.4,duration:.5}}},initial:"hidden",animate:"show",children:"Hi! \uD83D\uDC4B"})}),(0,a.jsx)(s.E.div,{className:"on-bg",initial:{y:"100%",opacity:0},whileInView:{y:"0%",opacity:1},transition:{duration:.5,type:"spring",stiffness:30},viewport:{root:e,once:!0},children:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.E.div,{className:"shimmer-water",initial:{},animate:{x:["0%","-50%"]},transition:{repeat:1/0,duration:20,ease:"linear"},children:(0,a.jsxs)(s.E.div,{className:"ray-motion",animate:i?{x:["-10%","40%"]}:{x:["-25%","25%"]},transition:{repeat:1/0,duration:20,ease:"easeInOut"},children:[(0,a.jsx)(s.E.div,{className:"ray-holder",initial:{x:"-20%",y:"-20%"},children:n.map(e=>e)}),(0,a.jsx)(s.E.div,{className:"ray-holder r-ray-holder",initial:{x:"-14%",y:"-10%"},children:n.map(e=>e)})]})})})}),(0,a.jsxs)(s.E.div,{className:"stagger-rock",variants:o,initial:"initial",whileInView:"whileInView",viewport:{root:e,once:!0},children:[(0,a.jsx)(s.E.div,{className:"rock-center"}),(0,a.jsx)(s.E.div,{className:"rock-left",variants:o}),(0,a.jsx)(s.E.div,{className:"rock-right",variants:o}),(0,a.jsx)(s.E.div,{className:"rock-left-back",variants:o}),(0,a.jsx)(s.E.div,{className:"rock-right-back",variants:o})]})]})}function j(){return(0,a.jsx)("div",{className:"page center-page whoami ",id:"whoami",children:(0,a.jsx)(b,{})})}let k=[{imgsrc:"/skillspng/javascript-logo-0.png",name:"JavaScript",description:"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."},{imgsrc:"/skillspng/ts-logo-256.png",name:"TypeScript",description:"JavaScript...but with types! TypeScript is a superset of JavaScript that adds static types to the language."},{imgsrc:"/skillspng/jsIconGreen.svg",name:"Node.js",description:"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used for building server-side applications."},{imgsrc:"/skillspng/next-js-logo.png",name:"Next.js",description:"Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React applications."},{imgsrc:"/skillspng/GraphQLLogoWhite.png",name:"GraphQL",description:"GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data."},{imgsrc:"/skillspng/SpringBoot-01.png",name:"Spring Boot and MVC",description:"Spring Boot is an open-source Java-based framework used to create microservices. Spring MVC is a model-view-controller framework for Java."},{imgsrc:"/skillspng/HTML5.png",name:"HTML5",description:"HTML5 is the latest version of Hypertext Markup Language, the code that describes web pages."},{imgsrc:"/skillspng/CSS3.png",name:"CSS3",description:"CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2."},{imgsrc:"/skillspng/jest-logo-png.png",name:"Jest",description:"Jest is a delightful JavaScript Testing Framework with a focus on simplicity. Side note: did you know this was the Jest logo?"},{imgsrc:"/skillspng/Cypress_Logomark_White.png",name:"Cypress",description:"Cyress is a front-end testing tool created for the modern web. It is fast, easy and reliable for anything that runs in a browser."},{imgsrc:"/skillspng/Git.png",name:"Git",description:"Git is a distributed version control system that is used to track changes in source code during software development."},{imgsrc:"/skillspng/github-mark-white.png",name:"GitHub",description:"GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere."},{imgsrc:"/skillspng/python.png",name:"Python",description:"Python is an interpreted, high-level, general-purpose programming language. It is known for its readability and its design philosophy that emphasizes code readability."},{imgsrc:"/skillspng/MongoDB.png",name:"MongoDB",description:"MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas. It is used for high volume data storage."},{imgsrc:"/skillspng/docker.png",name:"Docker",description:"Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers."},{imgsrc:"/skillspng/Postman.png",name:"Postman",description:"Postman is a collaboration platform for API development. Postman simplifies each step of building an API and streamlines collaboration so you can create better APIs faster."},{imgsrc:"/skillspng/gradle.png",name:"Gradle",description:"Gradle is an open-source build automation tool that is designed to be flexible, fast, and efficient."},{imgsrc:"/skillspng/Figma.png",name:"Figma",description:"Figma is a cloud-based design tool that is similar to Sketch in functionality and features, but with big differences that make Figma better for team collaboration."}];function N(){return(0,a.jsxs)("div",{className:"page center-page skills",id:"skills",children:[(0,a.jsx)(u,{aboveColor:"#25455F",belowColor:"#0A132B"}),(0,a.jsx)(p,{word:"Skills"}),(0,a.jsx)("div",{className:"skills-container",style:{paddingBottom:"25vh"},children:k.map((e,i)=>(0,a.jsx)("div",{className:"skill",children:(0,a.jsx)(I,{skill:e})},i))})]})}let I=e=>{let{skill:i}=e,t=(0,r.useRef)(null),{scrollYProgress:n}=(0,m.v)({target:t,offset:["end end","center center"]}),l=(0,g.q)(n,{mass:.35}),c=(0,h.H)(l,e=>"translatex(-".concat((1-e)*100,"%)")),d=(0,h.H)(l,e=>"translatex(".concat((1-e)*100,"%)"));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.E.p,{style:{transform:c,opacity:n,position:"relative"},ref:t,children:(0,a.jsx)(o.default,{src:i.imgsrc,alt:i.name,width:60,height:60})}),(0,a.jsxs)(s.E.span,{className:"skill-card",style:{transform:d,opacity:n},ref:t,children:[(0,a.jsx)("p",{className:"skill-name",children:i.name}),(0,a.jsx)("p",{className:"skill-desc",children:i.description})]})]})};function E(){let e=e=>{e.preventDefault();let i=e.currentTarget.id.replace(/.*\#/,""),t=document.getElementById(i);null==t||t.scrollIntoView({behavior:"smooth"})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"background-above-footer",children:(0,a.jsx)(u,{belowColor:"#BCF8EC",aboveColor:"#0A132B"})}),(0,a.jsxs)("footer",{className:"footer",children:[(0,a.jsxs)("ul",{className:"section list",children:[(0,a.jsx)(s.E.li,{className:"section list-item",id:"#whoami",onClick:e,whileHover:{y:-10},transition:{type:"spring",damping:10},children:"Whoami"}),(0,a.jsx)(s.E.li,{className:"section list-item",id:"#about",onClick:e,whileHover:{y:-10},transition:{type:"spring",damping:10},children:"About"}),(0,a.jsx)(s.E.li,{className:"section list-item",id:"#experiences",onClick:e,whileHover:{y:-10},transition:{type:"spring",damping:10},children:"Experiences"}),(0,a.jsx)(s.E.li,{className:"section list-item",id:"#skills",onClick:e,whileHover:{y:-10},transition:{type:"spring",damping:10},children:"Skills"})]}),(0,a.jsxs)("ul",{className:"social list",children:[(0,a.jsx)(s.E.li,{initial:{opacity:.7},whileHover:{opacity:1},className:"social list-item",children:(0,a.jsx)("a",{href:"mailto:chris.r.teng@gmail.com",target:"_blank",children:"Email"})}),(0,a.jsx)(s.E.li,{initial:{opacity:.7},whileHover:{opacity:1},className:"social list-item",children:(0,a.jsx)("a",{href:"https://github.com/ch-teng",target:"_blank",children:"Github"})}),(0,a.jsx)(s.E.li,{initial:{opacity:.7},whileHover:{opacity:1},className:"social list-item",children:(0,a.jsx)("a",{href:"https://www.linkedin.com/in/ch-teng",target:"_blank",children:"LinkedIn"})})]}),(0,a.jsx)("div",{className:"line"}),(0,a.jsx)("p",{className:"footer-text",children:"Designed lovingly by Chris Teng | \xa9 2024"})]})]})}var S=t(5282),C=t(9271);function D(e){let{imgList:i,imgWidth:t,imgHeight:n,carouselWidth:l,imgGap:c}=e,d=(0,S.c)(0);return(0,r.useEffect)(()=>{let e=-i.length*t-i.length*c;return(0,C.j)(d,[0,e],{ease:"linear",duration:20,repeat:1/0,repeatType:"loop",repeatDelay:0}).stop},[c,i.length,t,d]),(0,a.jsx)("div",{className:"carousel-holder",style:{width:l,gap:c},children:[...i,...i].map((e,i)=>(0,a.jsx)(s.E.div,{className:"carousel-card",style:{x:d},children:(0,a.jsx)(o.default,{src:e,alt:e,width:t,height:n,style:{objectFit:"cover"}})},i))})}function H(){let e=["/about-photos/1.JPG","/about-photos/2.JPG","/about-photos/3.JPG","/about-photos/4.JPG","/about-photos/5.JPG","/about-photos/6.JPG","/about-photos/7.jpg"],i=(e,i)=>Math.abs(e)*i,[[t,n],l]=(0,r.useState)([0,0]),c=t>=0?t%e.length:e.length+(t+1)%e.length-1,d=e=>{l([t+e,e])};return(0,r.useEffect)(()=>{let e=setInterval(()=>{l([t+1,1])},5e3);return()=>clearInterval(e)},[t]),(0,a.jsx)("div",{className:"photo-gal-holder",children:(0,a.jsx)(f.M,{initial:!1,custom:n,mode:"wait",children:(0,a.jsx)(s.E.div,{custom:n,variants:{enter:e=>({x:e>0?600:-600,opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e<0?600:-600,opacity:0})},initial:"enter",animate:"center",exit:"exit",className:"about-photo-gal",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(e,t)=>{let{offset:a,velocity:s}=t,n=i(a.x,s.x);n<-1e4?d(1):n>1e4&&d(-1)},children:(0,a.jsx)(o.default,{src:e[c],alt:"about image",fill:!0,sizes:"(max-width: 650) 100vw, (max-width: 1600px) 70vw, 30vw",draggable:!1})},t)})})}function L(){let e=["/posters/arcane1.jpg","/posters/EEAAO.jpg","/posters/loki.jpg","/posters/TedLasso.jpg","/posters/spiderverse.jpg","/posters/arcane2.jpg"],[i,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(0),l=()=>{window.innerWidth<650?(t(!0),o(window.innerWidth)):t(!1)};return(0,r.useEffect)(()=>(window.addEventListener("resize",l),l(),()=>window.removeEventListener("resize",l)),[]),(0,a.jsxs)("div",{className:"page about center-page",id:"about",children:[(0,a.jsx)("div",{className:"spacer"}),(0,a.jsx)(p,{word:"About"}),(0,a.jsxs)("div",{className:"frame-holder",children:[(0,a.jsx)(s.E.div,{initial:{x:-300,opacity:0},whileInView:{x:0,opacity:1},transition:{stiffness:200,duration:.5},viewport:i?{amount:.1}:{amount:.25},children:(0,a.jsx)(H,{})}),(0,a.jsxs)("div",{className:"frame-subsection card-layout",children:[(0,a.jsx)("div",{className:"about-professional",children:(0,a.jsx)(s.E.div,{className:"about-description",style:{textAlign:"center"},initial:{x:300,opacity:0},whileInView:{x:0,opacity:1},transition:{stiffness:200,duration:.5},viewport:i?{amount:.2}:{amount:.5},children:"Hi! I'm Chris, a professional software engineer with a passion for full stack web development and design. I've had the pleasure of working at several industry standard institutions and have gained a wealth of experience in the field. I graduated from Northeastern University with degrees in Computer Science and Business Administration, concentrating in Marketing. I'm always looking for new opportunities to learn and grow, so feel free to reach out to me!"})}),(0,a.jsx)("div",{className:"about-personal",children:(0,a.jsx)(s.E.div,{className:"about-description",style:{textAlign:"center"},initial:{x:300,opacity:0},whileInView:{x:0,opacity:1},transition:{stiffness:200,duration:.5},viewport:i?{amount:.2}:{amount:.5},children:"I have a passion for creating—making a few of my own designs like this website as well as a few minimalist posters of some of my favorite tv shows and movies. Some hobbies of mine include working out, playing video games, watching movies, and knitting! I love trying new things and am always looking for new experiences. Ask me about anything: I'll tell you all I know about it, and I'll hope you'll do the same!"})}),(0,a.jsx)(s.E.div,{initial:{x:300,opacity:0},whileInView:{x:0,opacity:1},transition:{stiffness:200,duration:.5},viewport:i?{amount:.1}:{amount:.5},children:i?(0,a.jsx)(D,{imgList:e,imgWidth:n/4,imgHeight:n/4*17/11,carouselWidth:n,imgGap:20}):(0,a.jsx)(D,{imgList:e,imgWidth:165,imgHeight:255,carouselWidth:700,imgGap:20})})]})]})]})}var A=t(3241),P=t(5730);let T=e=>{let{onClick:i}=e,[t,n]=(0,A.oO)(),[c,p]=(0,l.H)(),m=e=>{e.preventDefault();let t=e.currentTarget.className.replace(/.*\#/,""),a=document.getElementById(t);null==a||a.scrollIntoView({behavior:"smooth"}),i()};return(0,r.useEffect)(()=>{t?(async()=>await p([["li",{x:["25rem"]},{type:"spring",delay:(0,d.E)(.3),at:"-.1"}]]))():(async()=>{await p([["li",{x:"-20rem"},{delay:(0,d.E)(.2,{from:"last"}),at:"<"}]]),n()})()},[p,t,n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.E.div,{className:"menuCover",initial:{opacity:0},animate:{opacity:.5},exit:{opacity:0},ref:c,transition:{duration:t?.3:.7,ease:"easeInOut"},onClick:i},"menuCover"),(0,a.jsx)("a",{href:"https://github.com/ch-teng",target:"_blank",children:(0,a.jsx)(s.E.div,{className:"socials github",initial:{opacity:0,x:"-4rem"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-4rem"},transition:{duration:.5,ease:"easeInOut"},children:(0,a.jsx)(o.default,{src:"/skillspng/github-mark-white.png",alt:"github logo",height:40,width:40})})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/ch-teng",target:"_blank",children:(0,a.jsx)(s.E.div,{className:"socials linkedin",initial:{opacity:0,x:"-9rem"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-9rem"},transition:{duration:.5,ease:"easeInOut"},children:(0,a.jsx)(o.default,{src:"/In-White-48.png",alt:"LinkedIn logo",height:32,width:32})})}),(0,a.jsx)("a",{href:"mailto:chris.r.teng@gmail.com",target:"_blank",children:(0,a.jsx)(s.E.div,{className:"socials email",initial:{opacity:0,x:"-14rem"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-14rem"},transition:{duration:.5,ease:"easeInOut"},children:(0,a.jsx)(o.default,{src:"/email-01.png",alt:"LinkedIn logo",height:50,width:50})})}),(0,a.jsx)(s.E.ul,{initial:{left:"-50rem"},animate:{left:"-15rem"},exit:{left:"-50rem"},transition:{duration:.5,ease:"backInOut",type:"spring",delay:t?0:.7},ref:c,className:"menu",children:(0,a.jsxs)(P.A,{transition:{type:"spring",stiffness:700},children:[(0,a.jsx)(s.E.li,{whileHover:{scale:1.3},whileTap:{scale:1},className:"#whoami",onMouseDown:m,children:"whoami"}),(0,a.jsx)(s.E.li,{whileHover:{scale:1.3},whileTap:{scale:1},className:"#about",onMouseDown:m,children:"About"}),(0,a.jsx)(s.E.li,{whileHover:{scale:1.3},whileTap:{scale:1},className:"#experiences",onMouseDown:m,children:"Experiences"}),(0,a.jsx)(s.E.li,{whileHover:{scale:1.3},whileTap:{scale:1},className:"#skills",onMouseDown:m,children:"Skills"})]})},"menu")]})};function J(){let[e,i]=(0,r.useState)(!1),[t,n]=(0,l.H)(),o=()=>{i(!e),n("#top",{rotate:e?"0deg":"135deg",y:e?"0rem":".35rem"}),n("#bot",{rotate:e?"0deg":"-135deg",y:e?"0rem":"-.35rem"})};return(0,a.jsxs)("div",{ref:t,children:[(0,a.jsxs)("button",{className:"hamburger",onClick:o,children:[(0,a.jsx)(s.E.div,{className:"hamburg 1",id:"top",initial:{y:0,rotate:0},transition:{duration:.5,ease:"backInOut"},layout:!0}),(0,a.jsx)(f.M,{initial:!1,children:!e&&(0,a.jsx)(s.E.div,{className:"hamburg 2",initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{duration:.1,ease:"backInOut"}})}),(0,a.jsx)(s.E.div,{className:"hamburg 3",id:"bot",initial:{y:0,rotate:0},transition:{duration:.5,ease:"backInOut"},layout:!0})]}),(0,a.jsx)(f.M,{children:e&&(0,a.jsx)(T,{onClick:()=>o()})})]})}function G(){return(0,a.jsxs)("body",{children:[(0,a.jsx)(J,{}),(0,a.jsx)(j,{}),(0,a.jsx)(L,{}),(0,a.jsx)(w,{}),(0,a.jsx)(N,{}),(0,a.jsx)(E,{})]})}}},function(e){e.O(0,[988,971,23,744],function(){return e(e.s=9054)}),_N_E=e.O()}]);