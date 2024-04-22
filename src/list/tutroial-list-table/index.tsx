import Pagination from "$components/pagination";
import { useMemoryClick, usePaginate } from "$myhooks";
import ArrowDown from "$Icons/arrow";

import { Button } from "@material-tailwind/react";
import { useMemo, useRef } from "react";
import SmallLoader from "$Icons/smallLoader";
import { useSize } from "ahooks";

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

const Content = ({ edit, deleteBox, data }: any) => {
  return (
    <tbody className="text-[13px]">
      {data.map((item: any) => (
        <tr className={`border-b h-[50px] capitalize text-left`}>
          <td>{item.no}</td>
          <td>{item.title}</td>
          <td>
            <video controls width="300" height="300">
              <source type="video/mp4" src="/videos/community.mp4" />
            </video>
          </td>
          <td>{item.description}</td>
          <td>
            <Button
              onClick={edit}
              placeholder={"button"}
              color="blue"
              className="text-sm mx-2 capitalize"
              size="sm"
              variant="outlined"
            >
              Edit
            </Button>
            <Button
              onClick={deleteBox}
              placeholder={"button"}
              color="red"
              className="text-sm capitalize"
              size="sm"
              variant="outlined"
            >
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const TutroialListTable = ({ edit, deleteBox, data, loading }: any) => {
  const ref = useRef(null);
  const size = useSize(ref);
  const columns = ["no", "title", "Tutroial Video", "description", "Action"];
  const [sorting, setSorting] = useMemoryClick({ column: "no", order: "asc" });
  const { data: iteming }: any = { ...data };
  const { data: item = [] } = { ...iteming };
  const factory = item.map((val: any) => ({
    no: val.id,
    title: val.title,
    tutorialVideo: "",
    description: val.description,
  }));

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
  }, [sorting.order, changePage, factory, item]);

  return (
    <div
      ref={ref}
      className="w-full relative bg-white p-5 min-h-[300px]  rounded-md shadow-sm  cursor-pointer"
    >
      <div className="w-full overflow-x-scroll ">
        {loading && (
          <div
            style={size}
            className="absolute bg-[#ffffff70]  z-50 flex justify-center items-center"
          >
            <SmallLoader width={30} height={30} />
          </div>
        )}
        <table className="w-full">
          <Header columns={columns} sorting={sorting} sortTable={setSorting} />
          <Content
            loading={loading}
            edit={edit}
            deleteBox={deleteBox}
            data={value}
          />
        </table>
      </div>
        <div className="absolute bottom-0 left-0 px-4 w-full">
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

export default TutroialListTable;
