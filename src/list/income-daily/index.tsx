
import Pagination from "$components/pagination";
import { useMemoryClick, usePaginate } from "$myhooks";

import ArrowDown from "$Icons/arrow";
import {  useRef } from "react";
import { useSize } from "ahooks";
import SmallLoader from "$Icons/smallLoader";


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
      <tr className="  border-b text-left whitespace-nowrap  h-[50px] text-[14px] font-[700]">
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

const Content = ({ entries }: any) => {
//   const navigate = useNavigate();
  return (
    <tbody className="text-[13px]">
    
        <tr
          className={`border-b h-[50px] capitalize text-left`}
      
        >
          <td>{1}</td>
          <td>{entries?.total_users}</td>
          <td>{entries?.daily_income} Ks</td>
        </tr>
    
    </tbody>
  );
};

const DailyIncomeListTable = ({loading,data}:any) => {
  const columns = [
    "No",
    "Total Users",
    "daily Incomes",
  ];
  const [sorting, setSorting] = useMemoryClick({ column: "no", order: "asc" });
  
  const ref = useRef(null);
  const size = useSize(ref);
  


 const {data:initialItem}:any = {...data}
 const {data:value}:any = {...initialItem}

 console.log(value)

 const {
  getPaginatedData,
  goToNextPage,
  changePage,
  paginationRange,
  pageNumbersCount,
  currentPage,
  recordPerPage,
  goToPreviousPage,
  setRecordPerPage,
} = usePaginate(1);

  // const value = useMemo(() => {
  //   if (sorting.order === "desc") {
  //     const data = getPaginatedData().reverse();
  //     return data;
  //   } else if (sorting.order == "asc") {
  //     const data = getPaginatedData();
  //     return data;
  //   }
  // }, [sorting.order, changePage]);

  return (
    <div ref={ref} className="w-full bg-white  px-5 pt-5 overflow-x-scroll  pb-10 relative min-h-[160px] rounded-md shadow-sm  cursor-pointer">
      <div className="w-full overflow-x-scroll ">
      {loading && (
          <div
            style={size}
            className="absolute bg-[#ffffff50]   top-0 left-0 w-full h-full z-[60] flex justify-center items-center"
          >
            <SmallLoader width={24} height={24} />
            <div className="absolute top-0 left-0 w-full bg-[#ffffff50] z-50  blur-[20px] h-full  flex justify-center items-center"></div>
          </div>
        )}
        {!value && !loading && (
          <div
          
            className="absolute top-0 left-0 w-full  h-[180px]  flex justify-center items-center"
          >
            <p>No Data</p>
          </div>
        )}
        <table className="w-full h-full">
          <Header columns={columns} sorting={sorting} sortTable={setSorting} />
          { value && <Content entries={value} />}
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

export default DailyIncomeListTable;
