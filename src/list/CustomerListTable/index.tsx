import Pagination from "$components/pagination";
import { useMemoryClick, usePaginate } from "$myhooks";
import ArrowDown from "$Icons/arrow";
import { useMemo, useRef } from "react";
import { useSize } from "ahooks";
import SmallLoader from "$Icons/smallLoader";
import Profile from "$Icons/profile";

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
      className="font-[500] min-w-[90px]"
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
      <tr className="  border-b text-left  h-[50px] text-[15px] font-[500]">
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

const Content = ({ entries  }: any) => {
  return (
    <tbody className="text-[14px]">
      {entries?.map((entry: any, mainIndex: number) => (
        <tr className={`border-b h-[70px]`} key={mainIndex}>
          <td>{mainIndex + 1}</td>
          <td>
            {entry.profile_picture === "undefined" || !entry.profile_picture || entry.profile_picture === "null" ? (
              <Profile width={36} height={36} />
            ) : (
              <img
                src={entry.profile_picture}
                className="w-[36px] h-[36px] object-cover rounded-full"
              />
            )}
          </td>
          <td>{entry.fullname}</td>
          <td>{entry.email}</td>
       
          {/* <td>
            {entry.status === "unverified" ? (
              <td className="text-left min-w-[250px]  ">
                <Button
                  className="capitalize font-[400] mx-1 ring-0 "
                  color="gray"
                  size="sm"
                  variant="outlined"
                  placeholder={"button-dashbard"}
                >
                  Unverified
                </Button>
              </td>
            ) : entry.status === "banned" ? (
              <td className="text-left min-w-[250px]  ">
                <Button
                  onClick={() => {
                    handleBlockOpen(entry.id, "unblock");
                  }}
                  className="capitalize font-[400] mx-1 ring-0 "
                  color="gray"
                  size="sm"
                  variant="outlined"
                  placeholder={"button-dashbard"}
                >
                  Banned
                </Button>
              </td>
            ) : (
              <td className="text-left min-w-[250px]  ">
                <Button
                  onClick={() => {
                    handleBlockOpen(entry.id, "block");
                  }}
                  className="capitalize font-[400] mx-1 ring-0 "
                  color="gray"
                  size="sm"
                  variant="outlined"
                  placeholder={"button-dashbard"}
                >
                  Block
                </Button>
              </td>
            )}
          </td> */}
        </tr>
      ))}
    </tbody>
  );
};

const CustomerListTable = ({
  data,
  loading,
  blockBox,
}: {
  data: any;
  loading: boolean;
  blockBox?: (id: number, type: string) => void;
}) => {
  const columns = ["no","profile_picture", "fullname", "email"];
  const [sorting, setSorting] = useMemoryClick({ column: "no", order: "asc" });

  const ref = useRef(null);
  const size = useSize(ref);
  const { data: iteming }: any = { ...data };
  const { data: item }: any = { ...iteming };
  const { result = [], total = 0 }: any = { ...item };
  console.log(data)

  const factory = result.map((val: any, index: number) => ({
    id: val.id,
    no: index + 1,
    fullname: val.fullname,
    email: val.email,
    profile_picture: val.profile_picture,
    status: val.status,
  }));

  const {
    getPaginatedData,
    goToNextPage,
    changePage,
    recordPerPage,
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
    <div
      ref={ref}
      className="w-full min-h-[300px] relative bg-white px-5 pt-5 pb-10  rounded-md shadow-sm  cursor-pointer"
    >
      <div className="w-full h-full overflow-x-scroll">
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
        {value.length == 0 && !loading && (
          <div
            style={size}
            className="absolute top-0 left-0 w-full  h-full  flex justify-center items-center"
          >
            <p>Not Found</p>
          </div>
        )}
        <table className="w-full ">
          <Header columns={columns} sorting={sorting} sortTable={setSorting} />
          {!(value.length === 0) && (
            <Content
              entries={value}
              handleBlockOpen={blockBox}
              columns={columns}
            />
          )}
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

export default CustomerListTable;
