import{r,j as e,a as t}from"./index-ZNH9tNY-.js";import{u as C,P as k,A as y}from"./index-V_4-HIdj.js";import{u}from"./useMemoryClick-HP8xgs_v.js";import{m as M}from"./index-JtI0AH6f.js";import{M as w,I as g}from"./intex-vVS9QQR_.js";import{a as v}from"./index.esm-qzCJJm_s.js";import"./v4-yQnnJER4.js";import"./index-WeNPHJXi.js";const B=({sorting:a,column:s,sortTable:n})=>{const l=a.column===s&&a.order==="desc";return e.jsx("td",{className:"font-[500] min-w-[95px]",onClick:()=>{n(l?{column:s,order:"asc"}:{column:s,order:"desc"})},children:e.jsx("div",{className:" ",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("p",{children:[" ",s]}),e.jsxs("div",{className:"w-full text-right opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out",children:[e.jsx("span",{className:"inline-block ",children:e.jsx(y,{})}),e.jsx("span",{className:`mr-2 inline-block transition-all ease-in-out duration-300 ${l?"rotate-[180deg] opacity-100":"opacity-0"}`,children:e.jsx(y,{})})]})]})})},s)},P=({columns:a,sorting:s,sortTable:n})=>e.jsx("thead",{className:"capitalize",children:e.jsx("tr",{className:"  border-b text-left whitespace-nowrap  h-[50px] text-[15px] font-[500]",children:a.map(l=>e.jsx(B,{sorting:s,sortTable:n,column:l},l))})}),z=({editBox:a,banBox:s})=>e.jsx("tbody",{className:"text-[14px]",children:e.jsxs("tr",{className:"border-b h-[50px] capitalize text-left",children:[e.jsx("td",{className:"",children:"1"}),e.jsx("td",{children:"Cash on Delivery"}),e.jsx("td",{children:e.jsx(t.Button,{onClick:s,placeholder:"button",color:"indigo",className:"capitalize shadow-none   font-[600] ",size:"sm",children:"on"})}),e.jsx("td",{className:"text-left min-w-[150px]",children:e.jsx(t.Button,{onClick:a,className:"capitalize font-[400] mx-1 ring-0",color:"blue",size:"sm",variant:"outlined",placeholder:"button-dashbard",children:"Edit"})})]})}),O=({banBox:a,editBox:s,deleteBox:n})=>{const l=["no","Method Name","OnOff Android","Action"],[c,x]=u({column:"no",order:"asc"}),{getPaginatedData:i,goToNextPage:h,changePage:d,paginationRange:p,pageNumbersCount:m,currentPage:j,goToPreviousPage:f,setRecordPerPage:b}=C(M),N=r.useMemo(()=>{if(c.order==="desc")return i().reverse();if(c.order=="asc")return i()},[c.order,d]);return e.jsxs("div",{className:"w-full bg-white p-5  rounded-md shadow-sm  cursor-pointer",children:[e.jsx("div",{className:"w-full overflow-x-scroll",children:e.jsxs("table",{className:"w-full",children:[e.jsx(P,{columns:l,sorting:c,sortTable:x}),e.jsx(z,{entries:N,banBox:a,deleteBox:n,editBox:s})]})}),e.jsx(k,{currentPage:j,getPaginatedData:i,goToNextPage:h,goToPreviousPage:f,changePage:d,paginationRange:p,pageNumbersCount:m,setRecordPerPage:b})]})},D=({handleOpen:a,open:s,handleClose:n})=>{const{control:l}=v({mode:"all",defaultValues:{action:"",methodName:""}});return e.jsx(w,{handleOpen:a,open:s,size:"xs",children:e.jsxs(t.DialogBody,{placeholder:"dashboard-dialogbody",children:[e.jsx("p",{className:"text-xl mb-3 text-black",children:"Add New Merchant"}),e.jsx("p",{className:"mb-3 text-black",children:"Make create to Merchant here. Click save when you're done."}),e.jsxs("form",{children:[e.jsxs("div",{className:"",children:[e.jsx(g,{label:"Merchant Name",name:"methodName",control:l}),e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"text-sm mb-1",children:"OnOff Android:"}),e.jsx("div",{className:"bg-[#efefef] py-3 px-2 text-sm rounded-md",children:e.jsxs("select",{className:"bg-transparent w-full h-full outline-none",name:"action",children:[e.jsx("option",{value:"on",selected:!0,children:"on"}),e.jsx("option",{value:"",children:"off"})]})})]})]}),e.jsx("div",{className:" mt-4",children:e.jsxs("div",{className:"w-full flex justify-center",children:[e.jsx(t.Button,{onClick:n,placeholder:"button",className:"bg-white text-black capitalize font-[500] mr-3",children:"Cancel"}),e.jsx(t.Button,{placeholder:"button",className:"bg-primary capitalize font-[500]",children:"Create"})]})})]})]})})};function A({banOpen:a,handleBanOpen:s}){return e.jsx(e.Fragment,{children:e.jsxs(t.Dialog,{size:"xs",open:a,handler:s,placeholder:"dialog",children:[e.jsx(t.DialogHeader,{placeholder:"dialogHeader",children:"Close"}),e.jsx(t.DialogBody,{placeholder:"dialogBody",className:"",children:"Are You sure want to Close this payment?"}),e.jsxs(t.DialogFooter,{placeholder:"dialogfooter",children:[e.jsx(t.Button,{placeholder:"button",color:"gray",onClick:s,className:"font-[500] capitalize mr-1",children:e.jsx("span",{children:"Cancel"})}),e.jsx(t.Button,{placeholder:"button",color:"blue",className:"font-[500] capitalize",onClick:s,children:e.jsx("span",{children:"OK"})})]})]})})}const E=({handleEditOpen:a,editOpen:s,handleEditClose:n})=>{const{control:l}=v({mode:"all",defaultValues:{action:"",methodName:""}});return e.jsx(w,{handleOpen:a,open:s,size:"xs",children:e.jsxs(t.DialogBody,{placeholder:"dashboard-dialogbody",children:[e.jsx("p",{className:"text-xl mb-3 text-black",children:"Edit Payment Method"}),e.jsx("p",{className:"mb-3 text-black",children:"Make Edit to Payment Method here. Click save when you're done."}),e.jsxs("form",{children:[e.jsxs("div",{className:"",children:[e.jsx(g,{label:"Merchant Name",name:"methodName",control:l}),e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"text-sm mb-1",children:"OnOff Android:"}),e.jsx("div",{className:"bg-[#efefef] py-3 px-2 text-sm rounded-md",children:e.jsxs("select",{className:"bg-transparent w-full h-full outline-none",name:"action",children:[e.jsx("option",{value:"on",selected:!0,children:"on"}),e.jsx("option",{value:"",children:"off"})]})})]})]}),e.jsx("div",{className:" mt-4",children:e.jsxs("div",{className:"w-full flex justify-center",children:[e.jsx(t.Button,{onClick:n,placeholder:"button",className:"bg-white text-black capitalize font-[500] mr-3",children:"Cancel"}),e.jsx(t.Button,{onClick:n,placeholder:"button",className:"bg-primary capitalize font-[500]",children:"Save"})]})})]})]})})},H=()=>{const{control:a}=v({mode:"all",defaultValues:{user:""}}),[s,n]=u(!1),[l,c]=u(!1),[x,i]=u(!1),h=r.useCallback(()=>{n(o=>!o)},[]),d=r.useCallback(()=>{i(o=>!o)},[]),p=()=>{n(!1)},m=r.useCallback(()=>{c(o=>!o)},[]),j=r.useMemo(()=>e.jsx(A,{banOpen:x,handleBanOpen:d}),[x]),f=r.useMemo(()=>e.jsx(E,{editOpen:l,handleEditClose:m,handleEditOpen:m}),[l]),b=r.useMemo(()=>e.jsx(D,{handleOpen:h,handleClose:p,open:s}),[s]),N=r.useMemo(()=>e.jsxs("div",{className:"flex justify-between items-center mt-3 mb-3",children:[e.jsxs("div",{className:" flex items-center  gap-3",children:[e.jsx(g,{className:"max-w-[250px] ",label:"Search",name:"user",control:a}),e.jsx(t.Button,{placeholder:"search",className:"capitalize mt-6 shadow-none rounded-md",color:"blue",children:"Search"})]}),e.jsx(t.Button,{onClick:h,placeholder:"create-button",className:"capitalize  rounded-md shadow-none mt-6",variant:"outlined",children:"Create"})]}),[]);return e.jsxs("div",{children:[N,b,j,f,e.jsx(O,{banBox:d,editBox:m})]})},S=()=>e.jsx("div",{className:"p-6",children:e.jsx(H,{})}),F=()=>e.jsx("div",{children:e.jsx(S,{})}),q=()=>e.jsx("div",{children:e.jsx(F,{})});export{q as default};
