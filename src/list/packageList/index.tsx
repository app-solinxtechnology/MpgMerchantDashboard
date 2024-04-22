import { Button } from "@material-tailwind/react";
import Pagination from "$components/pagination";
import { useMemoryClick, usePaginate } from "$myhooks";
import ArrowDown from "$Icons/arrow";
import { useMemo, useRef } from "react";
import { useSize } from "ahooks";
import SmallLoader from "$Icons/smallLoader";
import { useGetField } from "$machine/useGetField";

interface HeaderProps {
  columns: string[];
  sorting: any;
  sortTable: any;
}

const HeaderCell = ({
  sorting,
  column,
  sortTable,
}: {
  sorting: any;
  column: any;
  sortTable: (value: any) => void;
}) => {
  const isDescSorting = sorting.column === column && sorting.order === "desc";

  return (
    <td
      className="font-[500] min-w-[95px]"
      key={column}
      onClick={() => {
        if (isDescSorting) {
          sortTable({ column, order: "asc" });
        } else {
          sortTable({ column, order: "desc" });
        }
      }}
    >
      <div className=" ">
        <div className="flex items-center justify-between">
          <p> {column}</p>
          <div className="w-full text-right opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
            <span className="inline-block ">
              <ArrowDown />
            </span>

            <span
              className={`mr-2 inline-block transition-all ease-in-out duration-300 ${
                isDescSorting ? "rotate-[180deg] opacity-100" : "opacity-0"
              }`}
            >
              <ArrowDown />
            </span>
          </div>
          {/* {isAscSorting && (
            <span className="rotate-[180deg] mr-2 inline-block">
              <ArrowDown />
            </span>
          )} */}
        </div>
      </div>
    </td>
  );
};

const Header = ({ columns, sorting, sortTable }: HeaderProps) => {
  return (
    <thead className="capitalize">
      <tr className="  border-b text-left whitespace-nowrap  h-[50px] text-[15px] font-[500]">
        {columns.map((column) => (
          <HeaderCell
            key={column}
            sorting={sorting}
            sortTable={sortTable}
            column={column}
          />
        ))}
      </tr>
    </thead>
  );
};

const Content = ({ entries, editBox, deleteBox }: any) => {
  const {handleField} = useGetField((store)=>store)
  return (
    <tbody className="text-[14px]">
      {entries?.map((entry: any, mainIndex: number) => (
        <tr
          className={`border-b h-[80px] capitalize text-left`}
          key={mainIndex}
        >
          <td>{entry.no}</td>
        
          <td>{entry.name}</td>
          <td>{entry.amount}</td>

          <td className="text-left min-w-[230px]">
            <Button
              onClick={()=>{
                  handleField(entry)
                 setTimeout(()=>{
                   editBox()
                 },200)
              }}
              className="capitalize font-[400] mx-1 ring-0"
              color="blue"
              size="sm"
              variant="outlined"
              placeholder={"button-dashbard"}
            >
              Edit
            </Button>
            <Button
              onClick={()=>{
                 deleteBox(entry.id)
              }}
              className="capitalize font-[400]  mx-1 right-0 "
              color="red"
              size="sm"
              variant="outlined"
              placeholder={"button-dashbard"}
            >
              Delete
            </Button>
      
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const PackageListTable = ({
  data,
  editBox,
  deleteBox,
  loading
}: {
  data:any,
   loading:boolean
  editBox: () => void;
  deleteBox: () => void;
}) => {
  const columns = ["no", "Package name", "Package Amount", "Action"];
  const [sorting, setSorting] = useMemoryClick({ column: "no", order: "asc" });
  const ref = useRef(null);
  const size = useSize(ref);
  const { data: iteming }: any = { ...data };
  const { data: item }: any = { ...iteming };
  const { result = [], total = 0 }: any = { ...item };

 const factory = result.map((item:any,index:number)=>({
  no : index +1,
     id: item.package_id,
     name : item.package_name,
     amount:item.amount,
 })) 
console.log(factory,"fact")
  const {
    recordPerPage,
    getPaginatedData,
    goToNextPage,
    changePage,
    paginationRange,
    pageNumbersCount,
    currentPage,
    goToPreviousPage,
    setRecordPerPage,
  } = usePaginate(total);

  const value = useMemo(() => {
    if (sorting.order === "desc") {
      const data = factory.reverse();
      return data;
    } else if (sorting.order == "asc") {
      const data = factory;
      return data;
    }
  }, [sorting.order, changePage]);

  return (
    <div ref={ref} className="w-full min-h-[300px] relative  px-5 pt-5 pb-10 bg-white    rounded-md shadow-sm  cursor-pointer">
      <div className="w-full overflow-x-scroll">
      {loading && (
          <div
            style={size}
            className="absolute bg-[#ffffff50]  top-0 left-0 w-full h-full z-[60] flex justify-center items-center"
          >
            {" "}
            <SmallLoader width={24} height={24} />
            <div className="absolute top-0 left-0 w-full bg-[#ffffff50] z-50  blur-[20px] h-full  flex justify-center items-center"></div>
          </div>
        )}
        {value!.length == 0 && !loading && (
          <div
            style={size}
            className="absolute top-0 left-0 w-full  h-full  flex justify-center items-center"
          >
            <p>Not Found</p>
          </div>
        )}
        <table className="w-full">
          <Header columns={columns} sorting={sorting} sortTable={setSorting} />
         { !(value!.length === 0) &&  <Content entries={value} editBox={editBox} deleteBox={deleteBox} />}
        </table>
      </div>
      <div className="absolute w-full bottom-0 left-0 px-4 ">
        <Pagination
          recordPerPage={recordPerPage}
          currentPage={currentPage}
          getPaginatedData={getPaginatedData}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          changePage={changePage}
          paginationRange={paginationRange}
          pageNumbersCount={pageNumbersCount}
          setRecordPerPage={setRecordPerPage}
        />
      </div>
    </div>
  );
};

export default PackageListTable;
