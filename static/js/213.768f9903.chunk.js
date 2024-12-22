"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[213],{2360:(e,r,a)=>{a.d(r,{Z:()=>N});var t=a(2791),n=a(1087),s=a(6310),o=a(5758),i=a(3400);var l=a(6598),c=a(8687),h=a(2388),d=a(4272),p=a(4482);const m=(e,r)=>a=>{a((0,d.Qb)()),h.Z.post("/auth/login/",{email:e,password:r}).then((e=>{localStorage.setItem("michaellin-personal-api-token",e.data.key),a((0,d.he)()),window.location.reload()})).catch((e=>{a((0,d.UR)(e.message)),a((0,p.sc)({message:"Login failed. Please try again.",type:"error"}))}))},u=()=>e=>{e((0,d.Tz)()),h.Z.post("/auth/logout/").then((()=>{localStorage.removeItem("michaellin-personal-api-token"),e((0,d.ls)()),window.location.reload()})).catch((r=>{e((0,d.EF)(r.message)),e((0,p.sc)({message:"Logout failed. Please try again.",type:"error"}))}))};var _=a(1585),g=a(6151),x=a(1537),v=a(5289),j=a(7123),f=a(9157),w=a(2116),y=a(184);class b extends t.PureComponent{constructor(e){super(e),this.handleLogin=()=>{const{email:e,password:r}=this.state;this.props.login(e,r)},this.handleClickOpen=()=>{this.setState({open:!0})},this.handleClose=()=>{this.setState({open:!1})},this.handleEmailChange=e=>{this.setState({email:e.target.value})},this.handlePasswordChange=e=>{this.setState({password:e.target.value})},this.state={open:!1,email:"",password:""}}render(){const{open:e}=this.state;return(0,_.P)()?(0,y.jsx)(g.Z,{variant:"text",sx:{textTransform:"none","&:hover":{backgroundColor:"transparent"},margin:0,padding:0},onClick:this.props.logout,children:(0,y.jsx)("div",{className:"Authentication__button--text",children:"Logout"})}):(0,y.jsxs)("div",{children:[(0,y.jsx)(g.Z,{variant:"text",sx:{textTransform:"none","&:hover":{backgroundColor:"transparent"},margin:0,padding:0,fontVariant:"normal"},onClick:this.handleClickOpen,children:(0,y.jsx)("div",{className:"Authentication__button--text",children:"Login"})}),(0,y.jsxs)(v.Z,{open:e,onClose:this.handleClose,children:[(0,y.jsx)(w.Z,{children:"Login"}),(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(x.Z,{margin:"dense",id:"email",label:"Email Address",type:"email",onChange:this.handleEmailChange,fullWidth:!0}),(0,y.jsx)(x.Z,{margin:"dense",id:"password",label:"Password",type:"password",onChange:this.handlePasswordChange,fullWidth:!0})]}),(0,y.jsxs)(j.Z,{children:[(0,y.jsx)(g.Z,{onClick:this.handleClose,children:"Cancel"}),(0,y.jsx)(g.Z,{onClick:this.handleLogin,children:"Login"})]})]})]})}}const k=(0,c.$j)((e=>({isLoadingLogin:e.auth.isLoadingLogin,isLoadingLogout:e.auth.isLoadingLogout})),(e=>(0,l.DE)({login:m,logout:u},e)))(b);const N=function(e){return class extends t.PureComponent{render(){return(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"HeaderFooterWrapper__header",children:(0,y.jsxs)("div",{className:"HeaderFooterWrapper__header--container",children:[(0,y.jsx)("div",{className:"HeaderFooterWrapper__header--authentication",children:(0,y.jsx)(k,{})}),(0,y.jsxs)("div",{className:"HeaderFooterWrapper__header--titleMenu",children:[(0,y.jsx)("div",{children:(0,y.jsx)(n.OL,{to:"/",className:"HeaderFooterWrapper__header--name",style:{textDecoration:"none"},children:"Michael Lin"})}),(0,y.jsxs)("div",{className:"HeaderFooterWrapper__header--buttons",children:[(0,y.jsx)(n.OL,{to:"/",className:e=>{let{isActive:r}=e;return"HeaderFooterWrapper__header--button"+(r?" HeaderFooterWrapper__header--buttonActive":"")},style:{textDecoration:"none"},children:"Home"}),(0,y.jsx)(n.OL,{to:"/work",className:e=>{let{isActive:r}=e;return"HeaderFooterWrapper__header--button"+(r?" HeaderFooterWrapper__header--buttonActive":"")},style:{textDecoration:"none"},children:"Work"}),(0,y.jsx)(n.OL,{to:"/music",className:e=>{let{isActive:r}=e;return"HeaderFooterWrapper__header--button"+(r?" HeaderFooterWrapper__header--buttonActive":"")},style:{textDecoration:"none"},children:"Music"}),(0,y.jsx)(n.OL,{to:"/travel",className:e=>{let{isActive:r}=e;return"HeaderFooterWrapper__header--button"+(r?" HeaderFooterWrapper__header--buttonActive":"")},style:{textDecoration:"none"},children:"Travel"}),(0,y.jsx)(n.OL,{to:"/other",className:e=>{let{isActive:r}=e;return"HeaderFooterWrapper__header--button"+(r?" HeaderFooterWrapper__header--buttonActive":"")},style:{textDecoration:"none"},children:"Other"})]})]})]})}),(0,y.jsx)("div",{className:"HeaderFooterWrapper__wrappedComponent",children:(0,y.jsx)(e,{})}),(0,y.jsxs)("div",{className:"HeaderFooterWrapper__footer",children:[(0,y.jsxs)("div",{className:"HeaderFooterWrapper__footer--social",children:[(0,y.jsx)("div",{className:"HeaderFooterWrapper__footer--socialButton",children:(0,y.jsx)(i.Z,{href:"https://www.linkedin.com/in/michaellin986/",target:"_blank",rel:"noopener noreferrer",sx:{padding:0},children:(0,y.jsx)(s.Z,{className:"HeaderFooterWrapper__footer--socialIcon"})})}),(0,y.jsx)("div",{className:"HeaderFooterWrapper__footer--socialButton",children:(0,y.jsx)(i.Z,{href:"https://github.com/michaellin986/",target:"_blank",rel:"noopener noreferrer",sx:{padding:0},children:(0,y.jsx)(o.Z,{className:"HeaderFooterWrapper__footer--socialIcon"})})})]}),(0,y.jsx)("div",{className:"HeaderFooterWrapper__footer--copyright",children:"Copyright \xa9 "+(new Date).getFullYear()+" Michael Lin. All rights reserved."})]})]})}}}},3213:(e,r,a)=>{a.r(r),a.d(r,{default:()=>i});var t=a(2791),n=a(2360),s=a(184);class o extends t.PureComponent{render(){return(0,s.jsxs)("div",{className:"Music",children:[(0,s.jsx)("div",{className:"Music__intro",children:(0,s.jsx)("div",{className:"Music__intro--quote",children:"A window into my musical interests and activities"})}),(0,s.jsxs)("div",{className:"Music__content",children:[(0,s.jsx)("div",{className:"Music__content--section",children:"Violin"}),(0,s.jsxs)("p",{children:["Since Fall 2022, I have been the Concertmaster of the"," ",(0,s.jsx)("a",{href:"https://music.northwestern.edu/academics/ensembles/philharmonia",className:"Music__link",target:"_blank",rel:"noopener noreferrer",children:"Northwestern University Philharmonia"}),". We perform symphonic works such as Dvorak's Slavonic Dances, and Prokofiev's Symphony No. 7. In addition, I have been a part of the Northwestern Baroque Music Ensemble."]}),(0,s.jsxs)("p",{children:["Before returning to school, I played violin with various ensembles including the"," ",(0,s.jsx)("a",{href:"https://www.capitalcitysymphony.org/",className:"Music__link",target:"_blank",rel:"noopener noreferrer",children:"Capital City Symphony"})," ","in Washington D.C., the"," ",(0,s.jsx)("a",{href:"https://www.gvo.org/",className:"Music__link",target:"_blank",rel:"noopener noreferrer",children:"Greenwich Village Orchestra"})," ","in New York City, and the"," ",(0,s.jsx)("a",{href:"http://www.concordorchestra.org/",className:"Music__link",target:"_blank",rel:"noopener noreferrer",children:"Concord Chamber Orchestra"})," ","in Milwaukee. During college, I was a member of the"," ",(0,s.jsx)("a",{href:"https://music.duke.edu/ensembles/symphony-orchestra",className:"Music__link",target:"_blank",rel:"noopener noreferrer",children:"Duke Symphony Orchestra"}),", and before that I was an active member of the"," ",(0,s.jsx)("a",{href:"https://myso.org/",className:"Music__link",target:"_blank",rel:"noopener noreferrer",children:"Milwaukee Youth Symphony Orchestra"}),"."]}),(0,s.jsx)("p",{children:"In addition to playing in orchestras, I have also performed as a soloist and a chamber musician."}),(0,s.jsxs)("p",{children:["My primary teachers include Daniel Henry, Jim Schultz, Beth Rees, Yuri Anisimov, and"," ",(0,s.jsx)("a",{href:"https://ciompi.org/about/eric-pritchard/",className:"Music__link",target:"_blank",rel:"noopener noreferrer",children:"Eric Pritchard"}),"."]})]}),(0,s.jsxs)("div",{className:"Music__content",children:[(0,s.jsx)("div",{className:"Music__content--section",children:"Conducting"}),(0,s.jsxs)("p",{children:["In college, I had the privilege of studying conducting with"," ",(0,s.jsx)("a",{href:"https://scholars.duke.edu/person/verena.m",className:"Music__link",target:"_blank",rel:"noopener noreferrer",children:"Professor Verena M\xf6senbichler-Bryant"})," ","as well as conducting a chamber orchestra"," ",(0,s.jsx)("a",{href:"https://www.youtube.com/watch?v=jPhG8yzFT4U",className:"Music__link",target:"_blank",rel:"noopener noreferrer",children:"performance"}),". Before that, I had the opportunity to conduct the pit orchestra for a musical production during my senior year of high school."]})]})]})}}const i=(0,n.Z)(o)}}]);
//# sourceMappingURL=213.768f9903.chunk.js.map