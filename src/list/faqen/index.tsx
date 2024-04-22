import { Button } from "@material-tailwind/react";
import Pagination from "$components/pagination";
import { useMemoryClick, usePaginate } from "$myhooks";
import ArrowDown from "$Icons/arrow";
import {  useMemo, useRef } from "react";
// import bg from "../../images/mpg-logo.png";
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



  return (
    <tbody className="text-[14px]">
      {entries?.map((entry: any, mainIndex: number) => (
        <tr
          className={`border-b h-[80px] capitalize text-left`}
          key={mainIndex}
        >
          <td>{entry.no}</td>
          <td className="min-w-[150px]">{entry.question_en}</td>
          <td className="min-w-[150px]">{entry.answer_en}</td>
          <td className="min-w-[150px]">{entry.question_mm}</td>
          <td className="min-w-[150px]">
                {entry.answer_mm}
          </td>
          <td >{entry.status}</td>
         
     
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
            <Button
              onClick={deleteBox}
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

const FaqEnListTable = ({
  editBox,
  deleteBox,
  loading,
  data,
}: {
  editBox: () => void;
  deleteBox: () => void;
  loading: boolean;
  data: any;
}) => {
  const ref = useRef(null);
  const size = useSize(ref);
  const { data: iteming }: any = { ...data };
  const { data: item = [] } = { ...iteming };
  const factory = item.map((val: any) => ({
    no: val.id,
    question_en: val.question_en,
    answer_en: val.answer_en,
    question_mm: val.question_mm,
    answer_mm: val.answer_mm,
    status: val.status,
  }));
  const columns = [
    "no",
    "question_en",
    "answer_en",
    "question_mm",
    "answer_mm",
    "status",
    "action",
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
  } = usePaginate(factory);

  const value = useMemo(() => {
    if (sorting.order === "desc") {
      const data = getPaginatedData().reverse();
      return data;
    } else if (sorting.order == "asc") {
      const data = getPaginatedData();
      return data;
    }
  }, [sorting.order, changePage]);

  return (
    <div ref={ref} className="w-full min-h-[300px] relative bg-white p-5  rounded-md shadow-sm  cursor-pointer">
      <div className="w-full overflow-x-scroll">
      {loading && (
          <div
            style={size}
            className="absolute bg-[#ffffff40] top-0 left-0  z-50 flex justify-center items-center"
          >
            <SmallLoader width={30} height={30} />
          </div>
        )}
        <table className="w-full">
          <Header columns={columns} sorting={sorting} sortTable={setSorting} />
          <Content entries={value} deleteBox={deleteBox} editBox={editBox} />
        </table>
      </div>
     <div className="absolute w-full bottom-0 left-0 px-4 ">
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
    </div>
  );
};

export default FaqEnListTable;
