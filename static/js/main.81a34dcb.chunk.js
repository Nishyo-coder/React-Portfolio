(this["webpackJsonp00-practice-app"]=this["webpackJsonp00-practice-app"]||[]).push([[0],{14:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(15),c=n.n(a),o=n(4),r=n(0);var s=function(e){var t=e.currentPage,n=e.handlePageChange;return Object(r.jsxs)("ul",{className:"nav nav-tabs",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Shanisha Mitchell"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#about",onClick:function(){return n("About")},className:"About"===t?"nav-link active":"nav-link",children:"About"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#portfolio",onClick:function(){return n("Portfolio")},className:"Portfolio"===t?"nav-link active":"nav-link",children:"Portfolio"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#resume",onClick:function(){return n("Resume")},className:"Resume"===t?"nav-link active":"nav-link",children:"Resume"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#contact",onClick:function(){return n("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})})]})},l=n(3),d=n(31);n(13);var h=function(){var e=[Object(l.a)({image:"/images/storybookweddings.png",title:"StoryBookWeddings",text:"JDS Consultants created a future social media application that currently allows users to browse through posted weddings to find inspiration. We also want users to post their own own wedding experience so that they and others can not only find inspiration, but share their beautiful day.",link:"https://storybook-weddings.herokuapp.com/"},"link","https://github.com/Nishyo-coder/Wedding-Profile"),Object(l.a)({image:"/images/NishCodes.png.png",title:"Nish Codes Now",text:"This new portfolio is under a new repo, still with a cleaner and more responsive application that my first go at my portfolio. The media responsiveness has been updated along with cleaning up the Navbar.",link:"https://nishyo-coder.github.io/My-Portfolio/"},"link","https://github.com/Nishyo-coder/My-Portfolio"),Object(l.a)({image:"/images/Notetaker.png",title:"Note Taker App",text:"I built the back end, connect to the front end code so a small business owner is able to write and save notes and organize their thoughts and keep track of tasks.",link:"https://floating-wildwood-69708.herokuapp.com/"},"link","https://github.com/Nishyo-coder/NoteTaker"),Object(l.a)({image:"/images/Covid Safety Image.png",title:"Safer In the Know",text:"My team created a centralized application to gather important pandemic, health-related details and country-related news in order to deliver them to people in a user-friendly manner.",link:"https://nishyo-coder.github.io/Project-One-Pandemic-Travel/"},"link","https://github.com/Nishyo-coder/Project-One-Pandemic-Travel"),Object(l.a)({image:"/Users/BelmontOST/React-Portfolio/public/images/Readmesample.png",title:"ReadMe",text:"As a new developer, I created a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package].The application will be invoked by using a command line interface.",link:"https://drive.google.com/drive/u/0/folders/1v0rulICqsLHiWyfzDpIceyfsumWM58vE"},"link","https://github.com/Nishyo-coder/Readme-App"),Object(l.a)({image:"/images/Scheduler.png",title:"Scheduler",text:"A simple calendar application that allows a user to save events for each hour of the day by modifying starter code.",link:"https://nishyo-coder.github.io/Daily-Planner/"},"link","https://github.com/Nishyo-coder/Daily-Planner")];return Object(r.jsx)("div",{children:e.map((function(e,t){return Object(r.jsxs)(d.a,{style:{width:"18rem"},children:[Object(r.jsx)(d.a.Img,Object(l.a)({variant:"top",src:"holder.js/100px180"},"src",e.image)),Object(r.jsxs)(d.a.Body,{children:[Object(r.jsx)(d.a.Title,{children:e.title}),Object(r.jsx)(d.a.Text,{children:e.text}),Object(r.jsx)(d.a.Link,{href:e.link,children:"Launch"}),Object(r.jsx)(d.a.Link,{href:e.link,children:"Github"})]})]},t)}))})};function j(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Portfolio Page"}),Object(r.jsx)(h,{})]})}n(14);function p(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:"public/images/nish.jpeg",alt:""}),Object(r.jsx)("h1",{children:"Hi, I'm Shanisha"}),Object(r.jsx)("h2",{children:" I'm a non-profit manager and web developer focused on technology advocacy to help develop platforms to assist kids from low socioeconomic areas."})]})}function b(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Resume"}),Object(r.jsxs)("p",{children:["View my credentials here:",Object(r.jsx)("a",{href:"https://drive.google.com/file/d/1KE4GyMcIU67_HFo69bO8iHZG__buAjbm/view?usp=sharing",children:"RESUME"})]})]})}var u=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(""),s=Object(o.a)(c,2),l=s[0],d=s[1],h=Object(i.useState)(""),j=Object(o.a)(h,2),p=j[0],b=j[1],u=Object(i.useState)(""),m=Object(o.a)(u,2),g=m[0],x=m[1],O=function(e){var t=e.target,n=t.name,i=t.value;"email"===n?d(i):"Name"===n?a(i):b(i)};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{className:"form",children:[Object(r.jsx)("input",{value:n,name:"Name",onChange:O,type:"text",placeholder:"Name"}),Object(r.jsx)("input",{value:l,name:"email",onChange:O,type:"email",placeholder:"email"}),Object(r.jsx)("input",{value:p,name:"message",onChange:O,type:"textarea",placeholder:"Message"}),Object(r.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),l&&n&&p?(a(""),b(""),d("")):x("Fields cannot be empty")},children:"Submit"})]}),g&&Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"error-text",children:g})})]})};function m(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Contact"}),Object(r.jsx)(u,{})]})}var g,x,O,f=n(6),v=n(7),k=v.a.div(g||(g=Object(f.a)(["\n  padding: 50px 30px;\n  background: #C9B4B4;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  \n   \n  @media (max-width: 1000px) {\n    padding: 70px 30px;\n  }\n"]))),y=(v.a.div(x||(x=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, \n                         minmax(185px, 1fr));\n  grid-gap: 20px;\n   \n  @media (max-width: 1000px) {\n    grid-template-columns: repeat(auto-fill, \n                           minmax(200px, 1fr));\n  }\n"]))),v.a.a(O||(O=Object(f.a)(["\n  color: #fff;\n  margin-bottom: 20px;\n  font-size: 18px;\n  text-decoration: none;\n   \n  &:hover {\n      color: green;\n      transition: 200ms ease-in;\n  }\n"])))),w=n(5),N=function(){return Object(r.jsxs)(k,{children:[Object(r.jsx)("h1",{style:{color:"black",textAlign:"center",marginTop:"-50px"},children:"Nish Codes Now"}),Object(r.jsx)(y,{href:"https://www.linkedin.com/in/shanisha-mitchell-380279186/",children:Object(r.jsx)(w.b,{})}),Object(r.jsx)(y,{href:"https://github.com/Nishyo-coder",children:Object(r.jsx)(w.a,{})})]})};function C(){var e=Object(i.useState)("About"),t=Object(o.a)(e,2),n=t[0],a=t[1],c=function(e){return a(e)};return Object(r.jsxs)("div",{children:[Object(r.jsx)(s,{currentPage:n,handlePageChange:c}),Object(r.jsx)(N,{currentPage:n,handlePageChange:c}),"Portfolio"===n?Object(r.jsx)(j,{}):"About"===n?Object(r.jsx)(p,{}):"Resume"===n?Object(r.jsx)(b,{}):Object(r.jsx)(m,{})]})}var P=function(){return Object(r.jsx)(C,{})};c.a.render(Object(r.jsx)(P,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.81a34dcb.chunk.js.map