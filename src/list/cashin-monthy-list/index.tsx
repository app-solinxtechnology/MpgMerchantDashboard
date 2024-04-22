import Pagination from "$components/pagination";
import { useMemoryClick, usePaginate } from "$myhooks";
import ArrowDown from "$Icons/arrow";
import { useMemo, useRef } from "react";
import SmallLoader from "$Icons/smallLoader";
import { useSize } from "ahooks";
import moment from "moment";

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
  // const navigate = useNavigate();
  return (
    <tbody className="text-[13px]">
      {entries?.map((entry: any, mainIndex: number) => (
        <tr
          className={`border-b h-[70px] capitalize text-left`}
          key={mainIndex}
        >
          <td>{entry.no}</td>
          <td className="min-w-[160px]">{moment(entry.transactionDate).format('lll')}</td>
          <td className="min-w-[160px]">{entry.transactionId}</td>
          <td className="min-w-[150px]">{entry.fullname || "Delete user account"}</td>
          <td className="min-w-[180px]" >{entry.merchantName}</td>
          <td className="min-w-[130px]" >{entry.packageName}</td>
          <td>{entry.amount}</td>
          <td>{entry.actualAmount}</td>
          <td >{entry.transactionFees}</td>
          <td>{entry.actualAmount}</td>
          <td>{entry.paymentChannelName}</td>
          <td>{entry.transaction_status}</td>
          {/* <td>
            <Button
              onClick={() => navigate("/dashboard/cash-in-order/Monthly/detail")}
              variant="outlined"
              className="capitalize font-[400] button-item  "
              color="blue"
              size="sm"
              placeholder={"button"}
            >
              view
            </Button>
          </td> */}
        </tr>
      ))}
    </tbody>
  );
};

const CashInMonthlyListTable = ({loading,data}:{
  loading:boolean,
  data:any
}) => {
  const columns = [
    "no",
    "Date",
    "Transaction Id",
    "name",
    "Connected Merchants",
    "Package",
    "Amount",
    "Actual Amount",
    "Transaction Fee",
    "Total",
    "Payment Method",
    "Payment Status",

  ];
  const [sorting, setSorting] = useMemoryClick({ column: "no", order: "asc" });

  const ref = useRef(null);
  const size = useSize(ref);

  const { data: iteming }: any = { ...data };
  const { data: item }: any = { ...iteming };
  const { result = [] ,total=0 }: any = { ...item };

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

  const factory =  result.map((item:any,index:number)=>({
    no : index +1 ,
    transactionId : item.transaction_id,
    fullname : item.fullname,
    merchantName : item.merchant_name,
    packageName : item.package_name,
    merchantUserId : item.merchant_user_id,
    paymentChannelName : item.payment_channel_name,
    amount : item.amount,
    transactionFees: item.transaction_fees,
    transactionPercentage: item.transaction_percentage,
    actualAmount : item.actual_amount,
    transaction_status: item.transaction_status,
    transactionDate : item.transaction_date,
 }));


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
    <div ref={ref} className="w-full bg-white px-5 pt-5 pb-10 relative min-h-[300px]  rounded-md shadow-sm  cursor-pointer">
      <div className="w-full overflow-x-scroll min-h-[300px]  ">
      {loading && (
          <div
            style={size}
            className="absolute bg-[#ffffff50]  top-0 left-0 w-full h-full z-[60] flex justify-center items-center"
          >
            <SmallLoader width={24} height={24} />
            <div className="absolute top-0 left-0 w-full bg-[#ffffff50] z-50  blur-[20px] h-full  flex justify-center items-center"></div>
          </div>
        )}
        {value!.length == 0 && !loading && (
          <div
            style={size}
            className="absolute top-0 left-0 w-full  h-full  flex justify-center items-center"
          >
            <p>No Data</p>
          </div>
        )}
        <table className="w-full">
          <Header columns={columns} sorting={sorting} sortTable={setSorting} />
          {!(value!.length === 0) && <Content entries={value} />}
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

export default CashInMonthlyListTable;
