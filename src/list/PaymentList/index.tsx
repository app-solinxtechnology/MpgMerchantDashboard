import { Button } from "@material-tailwind/react";
import Pagination from "$components/pagination";
import { useMemoryClick, usePaginate } from "$myhooks";
import { merchant } from "../../utils";
import ArrowDown from "$Icons/arrow";
import {  useMemo } from "react";


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

const Content = ({  editBox ,banBox }: any) => {


  return (
    <tbody className="text-[14px]">

        <tr
          className={`border-b h-[50px] capitalize text-left`}
   
        >
   
          <td className="">
                1
          </td>

          <td>
             Cash on Delivery
          </td>

          <td>
   
    
        
              <Button
                onClick={banBox}
                placeholder={"button"}
                color="indigo"
                className="capitalize shadow-none   font-[600] "
                size="sm"
              >
                on
              </Button>
            
          </td>
          <td className="text-left min-w-[150px]">
            <Button
              onClick={editBox}
              className="capitalize font-[400] mx-1 ring-0"
              color="blue"
              size="sm"
              variant="outlined"
              placeholder={"button-dashbard"}
            >
              Edit
            </Button>
          
          </td>
        </tr>
    
    </tbody>
  );
};

const PaymentListTable = ({
banBox,
  editBox,
  deleteBox,
}: {
    banBox:()=> void;
  editBox: () => void;
  deleteBox?: () => void;
}) => {
  const columns = [
    "no",
    "Method Name",
    "OnOff Android",
    "Action",
  ];
  const [sorting, setSorting] = useMemoryClick({ column: "no", order: "asc" });

  const {
    getPaginatedData,
    goToNextPage,
    changePage,
    paginationRange,
    pageNumbersCount,
    currentPage,
    goToPreviousPage,
    setRecordPerPage,
  } = usePaginate(merchant);

  const data = useMemo(() => {
    if (sorting.order === "desc") {
      const data = getPaginatedData().reverse();
      return data;
    } else if (sorting.order == "asc") {
      const data = getPaginatedData();
      return data;
    }
  }, [sorting.order, changePage]);

  return (
    <div className="w-full bg-white p-5  rounded-md shadow-sm  cursor-pointer">
      <div className="w-full overflow-x-scroll">
        <table className="w-full">
          <Header columns={columns} sorting={sorting} sortTable={setSorting} />
          <Content entries={data} banBox={banBox} deleteBox={deleteBox} editBox={editBox} />
        </table>
      </div>
      <Pagination
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
  );
};

export default PaymentListTable;
