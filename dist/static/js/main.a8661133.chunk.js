(this["webpackJsonpreact-redux-firebase-tut"]=this["webpackJsonpreact-redux-firebase-tut"]||[]).push([[0],{215:function(e,t,c){},216:function(e,t,c){},404:function(e,t,c){"use strict";c.r(t);var r=c(2),a=c.n(r),n=c(89),s=c.n(n),i=(c(215),c(21)),l=(c(216),c(23)),j=c(5),o=c(6),d=c(1);var b=function(e){var t=e.profile,c=Object(o.c)();return Object(d.jsxs)("ul",{className:"right",children:[Object(d.jsxs)("li",{children:[" ",Object(d.jsx)(l.c,{to:"/create",children:"New Project"})," "]}),Object(d.jsxs)("li",{children:[" ",Object(d.jsx)("a",{onClick:function(){return c((function(e,t,c){(0,c.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))},children:"Log Out"})," "]}),Object(d.jsxs)("li",{children:[" ",Object(d.jsx)(l.c,{to:"/",className:"btn btn-floating pink lighten-1",children:t.initials})," "]})]})};var u=function(){return Object(d.jsxs)("ul",{className:"right",children:[Object(d.jsxs)("li",{children:[" ",Object(d.jsx)(l.c,{to:"/signup",children:"Signup"})," "]}),Object(d.jsxs)("li",{children:[" ",Object(d.jsx)(l.c,{to:"/signin",children:"Login"})," "]})]})};var h=function(){var e=Object(o.d)((function(e){return e.firebase.profile})),t=Object(o.d)((function(e){return e.firebase.auth})),c=(e.firstName+" "+e.lastName).toUpperCase();console.log(e);var r=t.uid?Object(d.jsx)(b,{profile:e}):Object(d.jsx)(u,{});return Object(d.jsx)("nav",{className:"nav-wrapper grey darken-3",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(l.b,{to:"/",className:"brand-logo",children:c}),r]})})},O=c(91),x=c.n(O);var p=function(e){var t=e.project;return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"card z-depth-0 projext-summary",children:Object(d.jsxs)("div",{className:"card-content grey-text text-darken-3",children:[Object(d.jsx)("span",{className:"card-title",children:t.title}),Object(d.jsxs)("p",{children:["Posted by ",t.authorFirstName," ",t.authorLastName]}),Object(d.jsx)("p",{className:"grey-text",children:x()(t.createdAt.toDate()).calendar()})]})})})};var m=function(e){var t=e.projects;return Object(d.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(d.jsx)(l.b,{to:"/project/"+e.id,children:Object(d.jsx)(p,{project:e},e.id)},e.id)}))})};var f=function(){return Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"card z-depth-0",children:Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("span",{className:"card-title",children:"Notifications"}),Object(d.jsx)("ul",{className:"online-users",children:Object(d.jsx)("li",{children:"Notification"})})]})})})},g=c(18);var N=function(e){Object(g.useFirestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]}]);var t=Object(o.d)((function(e){return e.firestore.ordered.projects}));return Object(o.d)((function(e){return e.firebase.auth})).uid?Object(d.jsx)("div",{className:"dashboard container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col s12 m6",children:Object(d.jsx)(m,{projects:t})}),Object(d.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(d.jsx)(f,{})})]})}):Object(d.jsx)(j.a,{to:"./signin"})};var v=function(e){var t=e.match.params.id;Object(g.useFirestoreConnect)([{collection:"projects"}]);var c=Object(o.d)((function(e){return e.firestore.data.projects})),r=c?c[t]:null;return Object(o.d)((function(e){return e.firebase.auth})).uid?r?Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"container section project-details",children:Object(d.jsxs)("div",{className:"card z-depth-0",children:[Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("span",{className:"card-title",children:r.title}),Object(d.jsx)("p",{children:r.content})]}),Object(d.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(d.jsxs)("div",{children:["Posted by ",r.authorFirstName," ",r.authorLastName]}),Object(d.jsx)("div",{children:x()(r.createdAt.toDate()).calendar()})]})]})})}):Object(d.jsx)("div",{className:"container center",children:Object(d.jsx)("p",{children:" loding project "})}):Object(d.jsx)(j.a,{to:"./signin"})},S=c(15);var E=function(e){var t=Object(o.d)((function(e){return e.auth.authError})),c=Object(r.useState)(""),a=Object(S.a)(c,2),n=a[0],s=a[1],i=Object(r.useState)(""),l=Object(S.a)(i,2),b=l[0],u=l[1],h=Object(r.useState)([]),O=Object(S.a)(h,2),x=O[0],p=O[1];Object(r.useEffect)((function(){p({Email:n,Password:b})}),[n,b]);var m=Object(o.c)(),f=function(e){"email"==e.target.id?s(e.target.value):u(e.target.value)},g=Object(o.d)((function(e){return e.firebase.auth}));return g.uid?Object(d.jsx)(j.a,{to:"/"}):Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{className:"white",onSubmit:function(e){var t;e.preventDefault(),console.log(x),m((t=x,function(e,c,r){(0,r.getFirebase)().auth().signInWithEmailAndPassword(t.Email,t.Password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))})),console.log(g)},children:[Object(d.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign In"}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{type:"email",id:"email",onChange:f})]}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",id:"password",onChange:f})]}),Object(d.jsx)("div",{className:"input-field",children:Object(d.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Login"})}),Object(d.jsx)("div",{className:"center red-text",children:t?Object(d.jsx)("p",{children:t}):null})]})})};var C=function(e){var t=Object(r.useState)(""),c=Object(S.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)(""),i=Object(S.a)(s,2),l=i[0],b=i[1],u=Object(r.useState)(""),h=Object(S.a)(u,2),O=h[0],x=h[1],p=Object(r.useState)(""),m=Object(S.a)(p,2),f=m[0],g=m[1],N=Object(r.useState)([]),v=Object(S.a)(N,2),E=v[0],C=v[1];Object(r.useEffect)((function(){C({email:a,password:l,firstName:O,lastName:f})}),[a,l,O,f]);var F=Object(o.d)((function(e){return e.firebase.auth})),y=Object(o.d)((function(e){return e.auth.authError})),P=Object(o.c)(),R=function(e){"email"==e.target.id?n(e.target.value):"password"==e.target.id?b(e.target.value):"firstName"==e.target.id?x(e.target.value):g(e.target.value)};return F.uid?Object(d.jsx)(j.a,{to:"/"}):Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{className:"white",onSubmit:function(e){var t;e.preventDefault(),P((t=E,function(e,c,r){var a=r.getFirebase,n=r.getFirestore,s=a(),i=n();s.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(e){return i.collection("users").doc(e.user.uid).set({firstName:t.firstName,lastName:t.lastName,initials:t.firstName[0]+t.lastName[0]})})).then((function(){e({type:"SIGNUP_SUCCESS"})})).catch((function(t){e({type:"SIGNUP_ERROR",err:t})}))}))},children:[Object(d.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign Up"}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{type:"email",id:"email",onChange:R})]}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",id:"password",onChange:R})]}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(d.jsx)("input",{type:"text",id:"firstName",onChange:R})]}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(d.jsx)("input",{type:"text",id:"lastName",onChange:R})]}),Object(d.jsx)("div",{className:"input-field",children:Object(d.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Sign Up"})}),Object(d.jsx)("div",{className:"center red-text",children:y?Object(d.jsx)("p",{children:y}):null})]})})},F=function(e){return function(t,c,r){r.getFirebase;(0,r.getFirestore)().collection("projects").add(Object(i.a)(Object(i.a)({},e),{},{createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}};var y=Object(o.b)(null,(function(e){return{createProject:function(t){e(F(t))}}}))((function(e){var t=Object(r.useState)(""),c=Object(S.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)(""),i=Object(S.a)(s,2),l=i[0],b=i[1],u=Object(r.useState)([]),h=Object(S.a)(u,2),O=h[0],x=h[1],p=Object(o.c)(),m=Object(o.d)((function(e){return e.firebase.profile})),f=Object(o.d)((function(e){return e.firebase.auth.uid}));Object(r.useEffect)((function(){x({title:a,content:l,authorFirstName:m.firstName,authorLastName:m.lastName,authorId:f})}),[a,l,m]);var g=function(e){"title"==e.target.id?n(e.target.value):b(e.target.value)};return Object(o.d)((function(e){return e.firebase.auth})).uid?Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{className:"white",onSubmit:function(t){t.preventDefault(),p(F(O)),e.history.push("/")},children:[Object(d.jsx)("h5",{className:"grey-text text-darken-3",children:"Create a New Project"}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("input",{type:"text",id:"title",onChange:g}),Object(d.jsx)("label",{htmlFor:"title",children:"Project Title"})]}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:g}),Object(d.jsx)("label",{htmlFor:"content",children:"Project Content"})]}),Object(d.jsx)("div",{className:"input-field",children:Object(d.jsx)("button",{className:"btn pink lighten-1",children:"Create"})})]})}):Object(d.jsx)(j.a,{to:"./signin"})})),P=c(51),R=c(209),w={authError:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(i.a)(Object(i.a)({},e),{},{authError:"Login Failed"});case"LOGIN_SUCCESS":return console.log("login success"),{authError:null};case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(i.a)(Object(i.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(i.a)(Object(i.a)({},e),{},{authError:t.err.message});default:return e}},L={projects:[{id:"1",title:"Project 1",content:"blah blah blah"},{id:"2",title:"Project 2",content:"blah blah blah"},{id:"3",title:"Project 3",content:"blah blah blah"},{id:"4",title:"Project 4",content:"blah blah blah"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("created project error",t.err),e;default:return e}return e},k=c(40),A=Object(P.b)({auth:I,project:_,firestore:k.firestoreReducer,firebase:g.firebaseReducer}),U=c(32);c(405),c(402);U.a.initializeApp({apiKey:"AIzaSyANrCmF3YSnCCt6hCdYPO_kkPnsDJt0LYE",authDomain:"react-redux-firebase-41167.firebaseapp.com",projectId:"react-redux-firebase-41167",storageBucket:"react-redux-firebase-41167.appspot.com",messagingSenderId:"548443601262",appId:"1:548443601262:web:3ed7cef17a51b90e5b297f"}),U.a.firestore().settings({thimestampsInSnapshots:!0});var T=U.a,G=Object(P.d)(A,Object(P.c)(Object(P.a)(R.a.withExtraArgument({getFirestore:k.getFirestore,getFirebase:g.getFirebase})),Object(k.reduxFirestore)(U.a,T)));function D(e){var t=e.children,c=Object(o.d)((function(e){return e.firebase.auth}));return Object(g.isLoaded)(c)?t:Object(d.jsx)("div",{children:Object(d.jsx)("h5",{className:"grey-text text-darken-3 center",children:"Loading..."})})}var z={firebase:U.a,config:{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0},dispatch:G.dispatch,createFirestoreInstance:k.createFirestoreInstance};var J=function(){return Object(d.jsx)(g.ReactReduxFirebaseProvider,Object(i.a)(Object(i.a)({},z),{},{children:Object(d.jsx)(o.a,{store:G,children:Object(d.jsx)(l.a,{children:Object(d.jsx)(D,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{}),Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{exact:!0,path:"/",component:N}),Object(d.jsx)(j.b,{path:"/project/:id",component:v}),Object(d.jsx)(j.b,{path:"/signin",component:E}),Object(d.jsx)(j.b,{path:"/signup",component:C}),Object(d.jsx)(j.b,{path:"/create",component:y})]})]})})})})}))},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,406)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),r(e),a(e),n(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(J,{})}),document.getElementById("root")),B()}},[[404,1,2]]]);
//# sourceMappingURL=main.a8661133.chunk.js.map