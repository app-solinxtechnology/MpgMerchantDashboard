import { Button } from "@material-tailwind/react";
import Pagination from "$components/pagination";
import { useMemoryClick, usePaginate } from "$myhooks";
import { merchant } from "../../utils";
import ArrowDown from "$Icons/arrow";
import { useCallback, useMemo } from "react";
import bg from "../../images/mpg-logo.png";

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
  const [toggle, setToggle] = useMemoryClick(0);
  const [status, setStatus] = useMemoryClick(false);
  const handleToggle = (item: number) => {
    setToggle(item);
  };
  const handleStatus = useCallback(() => {
    setStatus((_prev: boolean) => !_prev);
  }, []);

  return (
    <tbody className="text-[14px]">
      {entries?.map((entry: any, mainIndex: number) => (
        <tr
          className={`border-b h-[50px] capitalize text-left`}
          key={mainIndex}
        >
          <td>{entry.no}</td>
          <td>{entry.merchantName}</td>
          <td>{entry.merchantId}</td>
          <td>{entry.CompanyName}</td>
          <td className="text-center">
            <img
              src={bg}
              alt="background"
              className="max-w-[38px] max-h-[38px] rounded-full object-cover"
            />
          </td>
          <td className="">{entry.userCount}</td>
          <td>
            {toggle === mainIndex ? (
              <Button
                onClick={() => {
                  handleToggle(mainIndex);
                  if (toggle === mainIndex) {
                    handleStatus();
                  }
                }}
                placeholder={"button"}
                color="indigo"
                className="capitalize shadow-none   font-[600] "
                size="sm"
              >
                {!status ? "on" : "off"}
              </Button>
            ) : (
              <Button
                placeholder={"button"}
                color="indigo"
                className="capitalize shadow-none   font-[600] "
                size="sm"
              >
                on
              </Button>
            )}
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

const MerchantListTable = ({
  editBox,
  deleteBox,
}: {
  editBox: () => void;
  deleteBox: () => void;
}) => {
  const columns = [
    "no",
    "merchant name",
    "merchant id",
    "company name",
    "image",
    "user count",
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
          <Content entries={data} deleteBox={deleteBox} editBox={editBox} />
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

export default MerchantListTable;
