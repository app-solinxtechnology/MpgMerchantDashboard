import{r as d,j as e,u as g,a as c}from"./index-RTcrJTtN.js";import{I as N}from"./intex-yw1bxWau.js";import{a as b}from"./index.esm-gxvAo-Bb.js";import{u as m}from"./useMemoryClick-f1HGAU4R.js";import{C as v}from"./Create-5kEqV27a.js";import{u as w,P as M,A as i}from"./index-e7YC-jXP.js";import{D as C}from"./index-JtI0AH6f.js";import"./index-kW5jgzg5.js";import"./v4-yQnnJER4.js";const y=({sorting:a,column:s,sortTable:r})=>{const t=a.column===s&&a.order==="desc";return e.jsx("td",{className:"font-[500] min-w-[95px]",onClick:()=>{r(t?{column:s,order:"asc"}:{column:s,order:"desc"})},children:e.jsx("div",{className:" ",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("p",{children:[" ",s]}),e.jsxs("div",{className:"w-full text-right opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out",children:[e.jsx("span",{className:"inline-block ",children:e.jsx(i,{})}),e.jsx("span",{className:`mr-2 inline-block transition-all ease-in-out duration-300 ${t?"rotate-[180deg] opacity-100":"opacity-0"}`,children:e.jsx(i,{})})]})]})})},s)},P=({columns:a,sorting:s,sortTable:r})=>e.jsx("thead",{className:"capitalize",children:e.jsx("tr",{className:"  border-b text-left whitespace-nowrap  h-[50px] text-[14px] font-[700]",children:a.map(t=>e.jsx(y,{sorting:s,sortTable:r,column:t},t))})}),k=({entries:a})=>e.jsx("tbody",{className:"text-[13px]",children:a==null?void 0:a.map((s,r)=>e.jsxs("tr",{className:"border-b h-[50px] capitalize text-left",children:[e.jsx("td",{children:s.no}),e.jsx("td",{children:"20240123"}),e.jsx("td",{children:"Customer"}),e.jsx("td",{className:"",children:"12345678"}),e.jsx("td",{className:"",children:"Food MM"}),e.jsx("td",{children:"KBZ"}),e.jsx("td",{className:"",children:"8000MMK"}),e.jsx("td",{children:"'- 400MMK (5%)"}),e.jsx("td",{children:"7600MMK"}),e.jsx("td",{children:"Mg Mg"})]},r))}),D=()=>{const a=["no","Date","name","Transaction Id","Merchant","Payment Method","Total Amount","Trasaction Fee","Actual Amount","Reveiver"],[s,r]=m({column:"no",order:"asc"}),{getPaginatedData:t,goToNextPage:o,changePage:n,paginationRange:l,pageNumbersCount:x,currentPage:h,goToPreviousPage:u,setRecordPerPage:p}=w(C),j=d.useMemo(()=>{if(s.order==="desc")return t().reverse();if(s.order=="asc")return t()},[s.order,n]);return e.jsxs("div",{className:"w-full bg-white p-5  rounded-md shadow-sm  cursor-pointer",children:[e.jsx("div",{className:"w-full overflow-x-scroll ",children:e.jsxs("table",{className:"w-full",children:[e.jsx(P,{columns:a,sorting:s,sortTable:r}),e.jsx(k,{entries:j})]})}),e.jsx(M,{currentPage:h,getPaginatedData:t,goToNextPage:o,goToPreviousPage:u,changePage:n,paginationRange:l,pageNumbersCount:x,setRecordPerPage:p})]})},E=()=>{const a=g(),{control:s}=b({mode:"all",defaultValues:{user:""}}),[r,t]=m(!1),o=d.useCallback(()=>{t(l=>!l)},[]),n=()=>{t(!1)};return e.jsxs("div",{className:"p-6",children:[e.jsx(v,{handleOpen:o,handleClose:n,open:r}),e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsxs("div",{className:" flex items-center  gap-3",children:[e.jsx(N,{className:"max-w-[250px] ",label:"Search ",name:"user",control:s}),e.jsxs(c.Button,{placeholder:"search",className:"capitalize mt-6 shadow-none rounded-md",color:"blue",children:["Search"," "]})]}),e.jsx(c.Button,{onClick:()=>a(-1),placeholder:"search",variant:"outlined",className:"capitalize mt-6 shadow-none rounded-md",color:"black",children:"Back"})]}),e.jsx(D,{})]})};export{E as default};
