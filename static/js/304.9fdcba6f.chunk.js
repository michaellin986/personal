"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[304],{2360:(e,t,r)=>{r.d(t,{Z:()=>C});var s=r(2791),n=r(1087),a=r(6310),i=r(5758),o=r(3400);var d=r(6598),c=r(8687),l=r(2388),h=r(4272),u=r(4482);const m=(e,t)=>r=>{r((0,h.Qb)()),l.Z.post("/auth/login/",{email:e,password:t}).then((e=>{localStorage.setItem("michaellin-personal-api-token",e.data.key),r((0,h.he)()),window.location.reload()})).catch((e=>{r((0,h.UR)(e.message)),r((0,u.sc)({message:"Login failed. Please try again.",type:"error"}))}))},p=()=>e=>{e((0,h.Tz)()),l.Z.post("/auth/logout/").then((()=>{localStorage.removeItem("michaellin-personal-api-token"),e((0,h.ls)()),window.location.reload()})).catch((t=>{e((0,h.EF)(t.message)),e((0,u.sc)({message:"Logout failed. Please try again.",type:"error"}))}))};var x=r(1585),_=r(6151),b=r(1537),j=r(5289),g=r(7123),v=r(9157),N=r(2116),Z=r(184);class B extends s.PureComponent{constructor(e){super(e),this.handleLogin=()=>{const{email:e,password:t}=this.state;this.props.login(e,t)},this.handleClickOpen=()=>{this.setState({open:!0})},this.handleClose=()=>{this.setState({open:!1})},this.handleEmailChange=e=>{this.setState({email:e.target.value})},this.handlePasswordChange=e=>{this.setState({password:e.target.value})},this.state={open:!1,email:"",password:""}}render(){const{open:e}=this.state;return(0,x.P)()?(0,Z.jsx)(_.Z,{variant:"text",sx:{textTransform:"none","&:hover":{backgroundColor:"transparent"},margin:0,padding:0},onClick:this.props.logout,children:(0,Z.jsx)("div",{className:"Authentication__button--text",children:"Logout"})}):(0,Z.jsxs)("div",{children:[(0,Z.jsx)(_.Z,{variant:"text",sx:{textTransform:"none","&:hover":{backgroundColor:"transparent"},margin:0,padding:0,fontVariant:"normal"},onClick:this.handleClickOpen,children:(0,Z.jsx)("div",{className:"Authentication__button--text",children:"Login"})}),(0,Z.jsxs)(j.Z,{open:e,onClose:this.handleClose,children:[(0,Z.jsx)(N.Z,{children:"Login"}),(0,Z.jsxs)(v.Z,{children:[(0,Z.jsx)(b.Z,{margin:"dense",id:"email",label:"Email Address",type:"email",onChange:this.handleEmailChange,fullWidth:!0}),(0,Z.jsx)(b.Z,{margin:"dense",id:"password",label:"Password",type:"password",onChange:this.handlePasswordChange,fullWidth:!0})]}),(0,Z.jsxs)(g.Z,{children:[(0,Z.jsx)(_.Z,{onClick:this.handleClose,children:"Cancel"}),(0,Z.jsx)(_.Z,{onClick:this.handleLogin,children:"Login"})]})]})]})}}const f=(0,c.$j)((e=>({isLoadingLogin:e.auth.isLoadingLogin,isLoadingLogout:e.auth.isLoadingLogout})),(e=>(0,d.DE)({login:m,logout:p},e)))(B);const C=function(e){return class extends s.PureComponent{render(){return(0,Z.jsxs)("div",{children:[(0,Z.jsx)("div",{className:"HeaderFooterWrapper__header",children:(0,Z.jsxs)("div",{className:"HeaderFooterWrapper__header--container",children:[(0,Z.jsx)("div",{className:"HeaderFooterWrapper__header--authentication",children:(0,Z.jsx)(f,{})}),(0,Z.jsxs)("div",{className:"HeaderFooterWrapper__header--titleMenu",children:[(0,Z.jsx)("div",{children:(0,Z.jsx)(n.OL,{to:"/",className:"HeaderFooterWrapper__header--name",style:{textDecoration:"none"},children:"Michael Lin"})}),(0,Z.jsxs)("div",{className:"HeaderFooterWrapper__header--buttons",children:[(0,Z.jsx)(n.OL,{to:"/",className:e=>{let{isActive:t}=e;return"HeaderFooterWrapper__header--button"+(t?" HeaderFooterWrapper__header--buttonActive":"")},style:{textDecoration:"none"},children:"Home"}),(0,Z.jsx)(n.OL,{to:"/work",className:e=>{let{isActive:t}=e;return"HeaderFooterWrapper__header--button"+(t?" HeaderFooterWrapper__header--buttonActive":"")},style:{textDecoration:"none"},children:"Work"}),(0,Z.jsx)(n.OL,{to:"/music",className:e=>{let{isActive:t}=e;return"HeaderFooterWrapper__header--button"+(t?" HeaderFooterWrapper__header--buttonActive":"")},style:{textDecoration:"none"},children:"Music"}),(0,Z.jsx)(n.OL,{to:"/travel",className:e=>{let{isActive:t}=e;return"HeaderFooterWrapper__header--button"+(t?" HeaderFooterWrapper__header--buttonActive":"")},style:{textDecoration:"none"},children:"Travel"}),(0,Z.jsx)(n.OL,{to:"/other",className:e=>{let{isActive:t}=e;return"HeaderFooterWrapper__header--button"+(t?" HeaderFooterWrapper__header--buttonActive":"")},style:{textDecoration:"none"},children:"Other"})]})]})]})}),(0,Z.jsx)("div",{className:"HeaderFooterWrapper__wrappedComponent",children:(0,Z.jsx)(e,{})}),(0,Z.jsxs)("div",{className:"HeaderFooterWrapper__footer",children:[(0,Z.jsxs)("div",{className:"HeaderFooterWrapper__footer--social",children:[(0,Z.jsx)("div",{className:"HeaderFooterWrapper__footer--socialButton",children:(0,Z.jsx)(o.Z,{href:"https://www.linkedin.com/in/michaellin986/",target:"_blank",rel:"noopener noreferrer",sx:{padding:0},children:(0,Z.jsx)(a.Z,{className:"HeaderFooterWrapper__footer--socialIcon"})})}),(0,Z.jsx)("div",{className:"HeaderFooterWrapper__footer--socialButton",children:(0,Z.jsx)(o.Z,{href:"https://github.com/michaellin986/",target:"_blank",rel:"noopener noreferrer",sx:{padding:0},children:(0,Z.jsx)(i.Z,{className:"HeaderFooterWrapper__footer--socialIcon"})})})]}),(0,Z.jsx)("div",{className:"HeaderFooterWrapper__footer--copyright",children:"Copyright \xa9 "+(new Date).getFullYear()+" Michael Lin. All rights reserved."})]})]})}}}},3304:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var s=r(2791),n=r(9836),a=r(3382),i=r(3994),o=r(9281),d=r(6890),c=r(5855),l=r(5527),h=r(6151),u=r(763),m=r.n(u),p=r(2360),x=r(184);const _=["{|0\u27e9, |1\u27e9}","{|+\u27e9, |\u2212\u27e9}"];class b extends s.PureComponent{constructor(e){super(e),this.generateBits=()=>{const e=Array.from({length:20},(()=>Math.floor(2*Math.random()).toString())),t=e[e.length-1];this.setState({currentBit:t,bits:m().dropRight(e)})},this.chooseEncoder=()=>{const e=_[Math.floor(2*Math.random())];this.setState({currentEncoder:e})},this.chooseDecoder=()=>{const e=_[Math.floor(2*Math.random())];this.setState({currentDecoder:e})},this.encode=()=>{const{currentBit:e}=this.state;this.setState({currentBitEncoded:e})},this.decode=()=>{const{currentEncoder:e,currentDecoder:t,currentBitEncoded:r}=this.state;e===t?this.setState({currentBitDecoded:r}):this.setState({currentBitDecoded:Math.floor(2*Math.random()).toString()})},this.record=()=>{const{bits:e,dataTransmitted:t}=this.state,r={encoder:this.state.currentEncoder,decoder:this.state.currentDecoder,bitEncoded:this.state.currentBitEncoded,bitDecoded:this.state.currentBitDecoded},s=e[e.length-1];this.setState({currentBit:s,bits:m().dropRight(e),dataTransmitted:[...t,r],currentBitEncoded:"",currentBitDecoded:"",currentEncoder:"",currentDecoder:""})},this.state={bits:[],dataTransmitted:[],currentBit:"",currentBitEncoded:"",currentBitDecoded:"",currentEncoder:"",currentDecoder:""}}componentDidMount(){this.generateBits()}render(){const{bits:e,currentBit:t,currentBitEncoded:r,currentBitDecoded:s,currentEncoder:u,currentDecoder:m,dataTransmitted:p}=this.state;return(0,x.jsxs)("div",{className:"Quantum",children:[(0,x.jsx)("div",{className:"Quantum__title",children:"BB84 quantum key distribution"}),(0,x.jsxs)("div",{className:"Quantum__intro",children:[(0,x.jsxs)("p",{children:["The module below simulates the"," ",(0,x.jsx)("a",{href:"https://en.wikipedia.org/wiki/BB84",className:"Work__link",target:"_blank",rel:"noopener noreferrer",children:"BB84 quantum key distribution protocol"}),". The current version does not include an eavesdropper, but it will be added in the future."]}),(0,x.jsx)("p",{children:"The protocol is as follows: Alice and Bob share a quantum channel. Alice chooses a basis (a set of two orthonormal vectors, either the standard basis or the Hadamard basis) and encodes a bit (0 or 1) in a qubit in that basis. She then sends the qubit to Bob through the quantum channel. Bob chooses a basis (again, either the standard basis or the Hadamard basis) and measures the qubit in that basis upon receiving the qubit. Alice and Bob will then compare their basis choices. If the two bases are the same, Bob can decode the bit with certainty. If the two bases are different, Bob discard the qubit because 50% of the time the bit will be incorrectly decoded. The process repeats."}),(0,x.jsx)("p",{children:"Whatever bits that are not discarded in the end will be the shared private key."})]}),(0,x.jsxs)("div",{className:"Quantum__simulation",children:[(0,x.jsxs)("div",{className:"Quantum__subtitle",children:["Remaining bits: ",e]}),(0,x.jsxs)("div",{className:"Quantum__controllers",children:[(0,x.jsxs)("div",{className:"Quantum__controllers--players",children:[(0,x.jsxs)("div",{className:"Quantum__controller",children:[(0,x.jsx)("div",{className:"Quantum__controller--title",children:"Alice (sender)"}),(0,x.jsx)(h.Z,{className:"Quantum__controller--button",disabled:!!u,onClick:this.chooseEncoder,variant:"contained",size:"small",children:"Choose basis (encoder)"}),(0,x.jsx)(h.Z,{className:"Quantum__controller--button",disabled:!u||!!r,onClick:this.encode,variant:"contained",size:"small",children:"Encode and transmit"}),(0,x.jsxs)("div",{className:"Quantum__controller--results",children:[(0,x.jsxs)("div",{children:["Encoding basis: ",u]}),(0,x.jsxs)("div",{children:["Bit encoded: ",r]})]})]}),(0,x.jsx)("div",{className:"Quantum__controller",children:(0,x.jsxs)("div",{className:"Quantum__controller--title",children:["Current bit: ",t]})}),(0,x.jsxs)("div",{className:"Quantum__controller",children:[(0,x.jsx)("div",{className:"Quantum__controller--title",children:"Bob (receiver)"}),(0,x.jsx)(h.Z,{className:"Quantum__controller--button",disabled:!u||!r||!!m,onClick:this.chooseDecoder,variant:"contained",size:"small",children:"Choose basis (decoder)"}),(0,x.jsx)(h.Z,{className:"Quantum__controller--button",disabled:!u||!r||!m||!!s,onClick:this.decode,variant:"contained",size:"small",children:"Receive and decode"}),(0,x.jsxs)("div",{className:"Quantum__controller--results",children:[(0,x.jsxs)("div",{children:["Decoding basis: ",m]}),(0,x.jsxs)("div",{children:["Probability:"," ",u&&m?u===m?"100%":"50%":null]}),(0,x.jsxs)("div",{children:["Bit decoded: ",s]})]})]})]}),(0,x.jsx)("div",{className:"Quantum__controller",children:(0,x.jsx)(h.Z,{className:"Quantum__controller--button",disabled:!u||!r||!m||!s,onClick:this.record,variant:"contained",size:"small",children:"Record"})})]}),(0,x.jsx)(o.Z,{component:l.Z,children:(0,x.jsxs)(n.Z,{size:"small",children:[(0,x.jsx)(d.Z,{children:(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(i.Z,{align:"center",children:"Encoding basis"}),(0,x.jsx)(i.Z,{align:"center",children:"Bit encoded"}),(0,x.jsx)(i.Z,{align:"center",children:"Decoding basis"}),(0,x.jsx)(i.Z,{align:"center",children:"Bit decoded"}),(0,x.jsx)(i.Z,{align:"center",children:"Keep"})]})}),(0,x.jsx)(a.Z,{children:p.map((e=>(0,x.jsxs)(c.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,x.jsx)(i.Z,{align:"center",children:e.encoder}),(0,x.jsx)(i.Z,{align:"center",children:e.bitEncoded}),(0,x.jsx)(i.Z,{align:"center",children:e.decoder}),(0,x.jsx)(i.Z,{align:"center",children:e.bitDecoded}),(0,x.jsx)(i.Z,{align:"center",children:e.encoder===e.decoder?"Yes":"No"})]},e.bitEncoded)))})]})})]})]})}}const j=(0,p.Z)(b)}}]);
//# sourceMappingURL=304.9fdcba6f.chunk.js.map