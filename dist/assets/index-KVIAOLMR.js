import{r as j,j as e,S as _,u as L,b as A,a as g,G as m}from"./index-D48r8r3j.js";import{u as F}from"./useRequest-2FXbrLHu.js";import{u as T,P as B,A as b,a as N,b as D,c as H}from"./index-Ki45TJWi.js";import{I}from"./InputFiled-a1RovQQJ.js";import{a as M}from"./index-R7o8NJjg.js";import{u as E}from"./useMemoryClick-04DI5YfE.js";import{P as O}from"./index-rLfOd18Z.js";import{a as G}from"./index.esm-T7r_Jc6u.js";import"./isObjectLike-dOELDCJ_.js";import"./index-6bBF3xpd.js";const Q=({sorting:a,column:s,sortTable:t})=>{const r=a.column===s&&a.order==="desc";return e.jsx("td",{className:"font-[500] min-w-[90px]",onClick:()=>{t(r?{column:s,order:"asc"}:{column:s,order:"desc"})},children:e.jsx("div",{className:" ",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("p",{children:[" ",s]}),e.jsxs("div",{className:"w-full text-right opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out",children:[e.jsx("span",{className:"inline-block ",children:e.jsx(b,{})}),e.jsx("span",{className:`mr-2 inline-block transition-all ease-in-out duration-300 ${r?"rotate-[180deg] opacity-100":"opacity-0"}`,children:e.jsx(b,{})})]})]})})},s)},U=({columns:a,sorting:s,sortTable:t})=>e.jsx("thead",{className:"capitalize",children:e.jsx("tr",{className:"  border-b text-left  h-[50px] text-[15px] font-[500]",children:a.map(r=>e.jsx(Q,{sorting:s,sortTable:t,column:r},r))})}),V=({entries:a})=>e.jsx("tbody",{className:"text-[14px]",children:a==null?void 0:a.map((s,t)=>e.jsxs("tr",{className:"border-b h-[70px]",children:[e.jsx("td",{children:t+1}),e.jsx("td",{children:s.profile_picture==="undefined"||!s.profile_picture||s.profile_picture==="null"?e.jsx(O,{width:36,height:36}):e.jsx("img",{src:s.profile_picture,className:"w-[36px] h-[36px] object-cover rounded-full"})}),e.jsx("td",{children:s.fullname}),e.jsx("td",{children:s.email})]},t))}),$=({data:a,loading:s,blockBox:t})=>{const r=["no","profile_picture","fullname","email"],[l,n]=E({column:"no",order:"asc"}),i=j.useRef(null),c=M(i),{data:u}={...a},{data:f}={...u},{result:d=[],total:w=0}={...f};console.log(a);const x=d.map((o,R)=>({id:o.id,no:R+1,fullname:o.fullname,email:o.email,profile_picture:o.profile_picture,status:o.status})),{getPaginatedData:v,goToNextPage:y,changePage:h,recordPerPage:P,paginationRange:C,pageNumbersCount:S,currentPage:k,goToPreviousPage:q,setRecordPerPage:z}=T(w),p=j.useMemo(()=>{if(l.order==="desc")return x.reverse();if(l.order=="asc")return x},[l.order,h]);return e.jsxs("div",{ref:i,className:"w-full min-h-[300px] relative bg-white px-5 pt-5 pb-10  rounded-md shadow-sm  cursor-pointer",children:[e.jsxs("div",{className:"w-full h-full overflow-x-scroll",children:[s&&e.jsxs("div",{style:c,className:"absolute bg-[#ffffff50]  top-0 left-0 w-full h-full z-[60] flex justify-center items-center",children:[" ",e.jsx(_,{width:24,height:24}),e.jsx("div",{className:"absolute top-0 left-0 w-full bg-[#ffffff50] z-50  blur-[20px] h-full  flex justify-center items-center"})]}),p.length==0&&!s&&e.jsx("div",{style:c,className:"absolute top-0 left-0 w-full  h-full  flex justify-center items-center",children:e.jsx("p",{children:"Not Found"})}),e.jsxs("table",{className:"w-full ",children:[e.jsx(U,{columns:r,sorting:l,sortTable:n}),p.length!==0&&e.jsx(V,{entries:p,handleBlockOpen:t,columns:r})]})]}),e.jsx("div",{className:"absolute w-full bottom-0 left-0 px-4 ",children:e.jsx(B,{recordPerPage:P,currentPage:k,getPaginatedData:v,goToNextPage:y,goToPreviousPage:q,changePage:h,paginationRange:C,pageNumbersCount:S,setRecordPerPage:z})})]})},J=({loading:a,data:s})=>{const{control:t,handleSubmit:r,reset:l}=G({mode:"all",defaultValues:{user:""}}),n=L(),i=A(),u=N().get("limit"),f=d=>{n(i.pathname+"?q="+d.user)};return e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-between items-center mb-3",children:e.jsx("div",{className:"flex justify-between items-center mb-3",children:e.jsxs("form",{onSubmit:r(f),className:" flex items-center  gap-3",children:[e.jsx(I,{placeholder:"name",className:"max-w-[250px] ",label:"Search user",name:"user",control:t}),e.jsx(g.Button,{type:"submit",placeholder:"search",className:"capitalize mt-6 shadow-none rounded-md",color:"blue",children:"Search"}),e.jsx(g.Button,{onClick:()=>{l();const d=u||"5";n(i.pathname+"?page=1&limit="+d)},placeholder:"search",className:"capitalize mt-6 shadow-none rounded-md",color:"black",children:"Reset"})]})})}),e.jsx($,{loading:a,data:s})]})},K=()=>{const a=N(),s=a.get("page"),t=a.get("limit"),r=a.get("q"),{loading:l,data:n,refresh:i,runAsync:c}=F(()=>!s&&!t?m({page:"1",limit:"5",q:r}):s&&t&&r?m({limit:t,page:s,q:r}):t?m({limit:t,page:s,q:r}):m({limit:t,page:s}),{manual:!0});return D(()=>{c()}),H(()=>{(t&&s||r)&&i()},[s,t,r]),e.jsx("div",{className:"p-6",children:e.jsx(J,{loading:l,data:n})})},W=()=>e.jsx("div",{children:e.jsx(K,{})}),oe=()=>e.jsx("div",{children:e.jsx(W,{})});export{oe as default};
