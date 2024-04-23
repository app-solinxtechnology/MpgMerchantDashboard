import{c as $,r as f,j as e,S as G,a as d,R as K,B as Q,C as Y,D as J,u as U,b as W,E as B}from"./index-ZNH9tNY-.js";import{u as C}from"./useRequest-huTtaaM1.js";import{u as X,P as Z,A as q,a as E,b as ee,c as ae}from"./index-V_4-HIdj.js";import{a as se}from"./index-7I9RxiaU.js";import{u as P}from"./useMemoryClick-HP8xgs_v.js";import{v as i}from"./v4-yQnnJER4.js";import{z as v,t as M,l as A}from"./zod-70u2vrAP.js";import{M as R,I as D}from"./intex-vVS9QQR_.js";import{u as te,a as S}from"./index.esm-qzCJJm_s.js";import"./isObjectLike-S4Xuhf35.js";import"./index-WeNPHJXi.js";const O=$(t=>({Field:{},handleField:s=>t({Field:s})})),ne=({sorting:t,column:s,sortTable:a})=>{const o=t.column===s&&t.order==="desc";return e.jsx("td",{className:"font-[500] min-w-[95px]",onClick:()=>{a(o?{column:s,order:"asc"}:{column:s,order:"desc"})},children:e.jsx("div",{className:" ",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("p",{children:[" ",s]}),e.jsxs("div",{className:"w-full text-right opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out",children:[e.jsx("span",{className:"inline-block ",children:e.jsx(q,{})}),e.jsx("span",{className:`mr-2 inline-block transition-all ease-in-out duration-300 ${o?"rotate-[180deg] opacity-100":"opacity-0"}`,children:e.jsx(q,{})})]})]})})},s)},oe=({columns:t,sorting:s,sortTable:a})=>e.jsx("thead",{className:"capitalize",children:e.jsx("tr",{className:"  border-b text-left whitespace-nowrap  h-[50px] text-[15px] font-[500]",children:t.map(o=>e.jsx(ne,{sorting:s,sortTable:a,column:o},o))})}),le=({entries:t,editBox:s,deleteBox:a})=>{const{handleField:o}=O(n=>n);return e.jsx("tbody",{className:"text-[14px]",children:t==null?void 0:t.map((n,l)=>e.jsxs("tr",{className:"border-b h-[80px] capitalize text-left",children:[e.jsx("td",{children:n.no}),e.jsx("td",{children:n.name}),e.jsx("td",{children:n.amount}),e.jsxs("td",{className:"text-left min-w-[230px]",children:[e.jsx(d.Button,{onClick:()=>{o(n),setTimeout(()=>{s()},200)},className:"capitalize font-[400] mx-1 ring-0",color:"blue",size:"sm",variant:"outlined",placeholder:"button-dashbard",children:"Edit"}),e.jsx(d.Button,{onClick:()=>{a(n.id)},className:"capitalize font-[400]  mx-1 right-0 ",color:"red",size:"sm",variant:"outlined",placeholder:"button-dashbard",children:"Delete"})]})]},l))})},ie=({data:t,editBox:s,deleteBox:a,loading:o})=>{const n=["no","Package name","Package Amount","Action"],[l,r]=P({column:"no",order:"asc"}),m=f.useRef(null),u=se(m),{data:c}={...t},{data:j}={...c},{result:g=[],total:h=0}={...j},p=g.map((w,_)=>({no:_+1,id:w.package_id,name:w.package_name,amount:w.amount}));console.log(p,"fact");const{recordPerPage:k,getPaginatedData:y,goToNextPage:b,changePage:N,paginationRange:x,pageNumbersCount:T,currentPage:I,goToPreviousPage:L,setRecordPerPage:V}=X(h),z=f.useMemo(()=>{if(l.order==="desc")return p.reverse();if(l.order=="asc")return p},[l.order,N]);return e.jsxs("div",{ref:m,className:"w-full min-h-[300px] relative  px-5 pt-5 pb-10 bg-white    rounded-md shadow-sm  cursor-pointer",children:[e.jsxs("div",{className:"w-full overflow-x-scroll",children:[o&&e.jsxs("div",{style:u,className:"absolute bg-[#ffffff50]  top-0 left-0 w-full h-full z-[60] flex justify-center items-center",children:[" ",e.jsx(G,{width:24,height:24}),e.jsx("div",{className:"absolute top-0 left-0 w-full bg-[#ffffff50] z-50  blur-[20px] h-full  flex justify-center items-center"})]}),z.length==0&&!o&&e.jsx("div",{style:u,className:"absolute top-0 left-0 w-full  h-full  flex justify-center items-center",children:e.jsx("p",{children:"Not Found"})}),e.jsxs("table",{className:"w-full",children:[e.jsx(oe,{columns:n,sorting:l,sortTable:r}),z.length!==0&&e.jsx(le,{entries:z,editBox:s,deleteBox:a})]})]}),e.jsx("div",{className:"absolute w-full bottom-0 left-0 px-4 ",children:e.jsx(Z,{recordPerPage:k,currentPage:I,getPaginatedData:y,goToNextPage:b,goToPreviousPage:L,changePage:N,paginationRange:x,pageNumbersCount:T,setRecordPerPage:V})})]})},F=(t,s)=>{var a,o,n;return((o=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:o.message)||((n=t==null?void 0:t.response)==null?void 0:n.message)||s};i(),i(),i(),i(),i(),i(),i(),i();i(),i(),i(),i(),i(),i(),i(),i(),i(),i(),i(),i();const H=K.memo(({className:t,label:s,password:a=!1,name:o,type:n,message:l,control:r,...m})=>{const{field:u}=te({name:o,control:r});return e.jsxs("div",{className:"mb-1 grow",children:[e.jsxs("div",{children:[s&&e.jsx("label",{className:` ${l&&"text-red-600"} text-[14px]  inline-block mb-1 `,children:s}),e.jsx("div",{className:`flex h-10 w-full rounded-md outline-none ${l&&"border border-red-500"}  border-input bg-[#efefef] grow px-3 py-2 text-sm ${t}`,children:e.jsx("input",{onKeyDown:c=>{(c.which!=8&&c.which!=0&&c.which<48||c.which>57)&&c.preventDefault()},...u,type:"text",className:"outline-none w-full h-full bg-[#efefef]",...m})})]}),l&&e.jsx("p",{className:"text-xs  text-red-500",children:l})]})}),ce=v.object({packageType:v.string().min(1,{message:"package name is required"}),amount:v.string().min(1,{message:"amount is requird"})}),re=({handleEditOpen:t,editOpen:s,handleEditClose:a,refresh:o})=>{var k,y;const{Field:n}=O(b=>b),{loading:l,runAsync:r}=C(Q,{manual:!0}),{control:m,handleSubmit:u,reset:c,setValue:j,clearErrors:g,formState:{errors:h}}=S({resolver:M(ce),defaultValues:{amount:""+n.amount,packageType:n.name}});f.useEffect(()=>{j("packageType",n.name),j("amount",""+n.amount)},[n]);const p=b=>{A(r({package_id:n.id,package_name:b.packageType,amount:b.amount}),{loading:"verifying",error:N=>F(N),success:()=>(setTimeout(()=>{o()},100),c(),a(),"Package update success")})};return e.jsx(R,{handleOpen:t,open:s,size:"xs",children:e.jsxs(d.DialogBody,{placeholder:"dashboard-dialogbody",children:[e.jsx("p",{className:"text-xl mb-3 text-black",children:"Edit Package"}),e.jsxs("form",{onSubmit:u(p),children:[e.jsxs("div",{className:" mt-5",children:[e.jsx(D,{message:(k=h.packageType)==null?void 0:k.message,label:"Package name",name:"packageType",control:m}),e.jsx(H,{message:(y=h.amount)==null?void 0:y.message,label:"Amount",name:"amount",control:m})]}),e.jsx("div",{className:" mt-7",children:e.jsxs("div",{className:"w-full flex justify-center",children:[e.jsx(d.Button,{onClick:()=>{g(),setTimeout(()=>{a()},200)},placeholder:"button",className:"bg-white text-black capitalize font-[500] mr-3",children:"Cancel"}),e.jsx(d.Button,{type:"submit",loading:l,disabled:l,placeholder:"button",className:"bg-primary capitalize font-[500]",children:"update"})]})})]})]})})},de=v.object({packageType:v.string().min(1,{message:"package name is required"}),amount:v.string().min(1,{message:"amount is requird"})}),me=({handleOpen:t,open:s,handleClose:a,refresh:o})=>{var g,h;const{loading:n,runAsync:l}=C(Y,{manual:!0}),{control:r,handleSubmit:m,reset:u,formState:{errors:c}}=S({resolver:M(de),defaultValues:{amount:"",packageType:""}}),j=p=>{A(l({package_name:p.packageType,amount:p.amount}),{loading:"verifying",error:k=>F(k),success:()=>(setTimeout(()=>{o()},100),u(),a(),"Package create success")})};return e.jsx(R,{handleOpen:t,open:s,size:"xs",children:e.jsxs(d.DialogBody,{placeholder:"dashboard-dialogbody",children:[e.jsx("p",{className:"text-xl mb-3 text-black",children:"Create Package"}),e.jsxs("form",{onSubmit:m(j),children:[e.jsxs("div",{className:" mt-5",children:[e.jsx("div",{className:"",children:e.jsx(D,{message:(g=c.packageType)==null?void 0:g.message,label:"Package name",name:"packageType",control:r})}),e.jsx(H,{label:"Amount",message:(h=c.amount)==null?void 0:h.message,name:"amount",control:r})]}),e.jsx("div",{className:" mt-7",children:e.jsxs("div",{className:"w-full flex justify-center",children:[e.jsx(d.Button,{onClick:()=>{u(),a()},placeholder:"button",className:"bg-white text-black capitalize font-[500] mr-3",children:"Cancel"}),e.jsx(d.Button,{loading:n,disabled:n,type:"submit",placeholder:"button",className:"bg-primary capitalize font-[500]",children:"Create"})]})})]})]})})};function ue({isDelete:t,deleteOpen:s,handleDeleteOpen:a,refresh:o}){const{loading:n,runAsync:l}=C(J,{manual:!0});return e.jsx(e.Fragment,{children:e.jsxs(d.Dialog,{size:"xs",open:s,handler:a,placeholder:"dialog",children:[e.jsx(d.DialogHeader,{placeholder:"dialogHeader",children:"Delete This Package"}),e.jsx(d.DialogBody,{placeholder:"dialogBody",className:"",children:"Are You sure want to delete this Package?"}),e.jsxs(d.DialogFooter,{placeholder:"dialogfooter",children:[e.jsx(d.Button,{placeholder:"button",variant:"text",color:"red",onClick:a,className:"font-[500] capitalize mr-1",children:e.jsx("span",{children:"Cancel"})}),e.jsx(d.Button,{placeholder:"button",loading:n,disabled:n,color:"red",className:"font-[500] capitalize",onClick:()=>{A(l({package_id:t}),{loading:"Verifying",error:r=>F(r),success:()=>(o(),a(),"Delete Successful")})},children:e.jsx("span",{children:"Delete"})})]})]})})}const pe=({handleOpen:t})=>{const s=U(),a=W(),n=E().get("limit"),{control:l,handleSubmit:r,reset:m}=S({mode:"all",defaultValues:{user:""}}),u=c=>{s(a.pathname+"?q="+c.user)};return e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsxs("form",{onSubmit:r(u),className:" flex items-center  gap-3",children:[e.jsx(D,{className:"max-w-[250px] ",label:"Search ",placeholder:"Package name",name:"user",control:l}),e.jsx(d.Button,{type:"submit",placeholder:"search",className:"capitalize mt-6 shadow-none rounded-md",color:"blue",children:"Search"}),e.jsx(d.Button,{onClick:()=>{m();const c=n||"5";s(a.pathname+"?page=1&limit="+c)},placeholder:"search",className:"capitalize mt-6 shadow-none rounded-md",color:"black",children:"Reset"})]}),e.jsx(d.Button,{onClick:t,placeholder:"create-button",className:"capitalize  rounded-md shadow-none mt-6",variant:"outlined",children:"Create"})]})},xe=({data:t,loading:s,refresh:a})=>{const[o,n]=P(!1),[l,r]=P(!1),[m,u]=P(!1),[c,j]=P(""),g=f.useCallback(()=>{n(x=>!x)},[]),h=f.useCallback(x=>{j(T=>x),r(T=>!T)},[c]),p=f.useCallback(()=>{u(x=>!x)},[]),k=f.useMemo(()=>e.jsx(re,{refresh:a,editOpen:m,handleEditOpen:p,handleEditClose:p}),[m]),y=f.useMemo(()=>e.jsx(ue,{refresh:a,isDelete:c,deleteOpen:l,handleDeleteOpen:h}),[l]),b=f.useMemo(()=>e.jsx(me,{open:o,handleOpen:g,refresh:a,handleClose:g}),[o]),N=f.useMemo(()=>e.jsx(pe,{handleOpen:g}),[]);return e.jsxs("div",{children:[N,b,k,y,e.jsx(ie,{data:t,loading:s,deleteBox:h,editBox:p})]})},ge=()=>{const t=E(),s=t.get("page"),a=t.get("limit"),o=t.get("q"),{loading:n,data:l,refresh:r,runAsync:m}=C(()=>!s&&!a?B({page:"1",limit:"5",q:o}):s&&a&&o?B({limit:a,page:s,q:o}):a?B({limit:a,page:s,q:o}):B({limit:a,page:s}),{manual:!0});return ee(()=>{m()}),ae(()=>{(a&&s||o)&&r()},[s,a,o]),e.jsx("div",{className:"p-6",children:e.jsx(xe,{loading:n,data:l,refresh:r})})},he=()=>e.jsx("div",{children:e.jsx(ge,{})}),Ce=()=>e.jsx("div",{children:e.jsx(he,{})});export{Ce as default};
