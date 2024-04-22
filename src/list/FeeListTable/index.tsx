
import Pagination from "$components/pagination";
import { useMemoryClick, usePaginate } from "$myhooks";
import { DailyList } from "../../utils";
import ArrowDown from "$Icons/arrow";
import { useMemo } from "react";
import kpay from '../../images/kpay.png'
import wave from '../../images/wave.png'
import CB from '../../images/wave.png'
import aya from '../../images/aya-pay.png'
import uab from '../../images/uab-pay.png'
import { Button } from "@material-tailwind/react";



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

const Content = ({ edit,deleteBox }: any) => {
//   const navigate = useNavigate();
  return (
    <tbody className="text-[13px]">
         <tr className="text-center">
            <td>1</td>
              <td className="">
                <div className="py-2">
                  <div className="flex justify-center mb-2">
                    <img src={kpay} alt="mpg-kpay" width={50} height={50} />
                  </div>
                  <p>KBZPay</p>
                </div>
              </td>
              <td className="bg-[#f4f4f4]"> 
                <div className="py-5">
                  <p className="mb-5">10k-50k</p>
                  <p className="mb-5">50k-100k</p>
                  <p>100k-200k</p>
                </div>
              </td>
              <td className="bg-[#f4f4f4]">
              <div className="py-5">
                  <p className="mb-5">5%</p>
                  <p className="mb-5">5%</p>
                  <p>5%</p>
                </div>
              </td>
              <td className="bg-[#f4f4f4]">
              <div className="py-5">
                  <p className="mb-5">10%</p>
                  <p className="mb-5">5%</p>
                  <p>10%</p>
                </div>
              </td>
              <td>
                   
                        <Button onClick={edit} placeholder={"button"} color="blue" variant="outlined" size="sm" className="capitalize mx-2 font-[500]">Edit</Button>
                    
                        <Button onClick={deleteBox} placeholder={"button"} color="red" variant="outlined" size="sm" className="capitalize  font-[500]">Delete</Button>
                 
              </td>
            </tr>
            <tr className="text-center">
                <td>2</td>
              <td className="bg-[#F5F9FE]">
                <div className="py-2">
                  <div className="flex justify-center mb-2">
                    <img src={wave} alt="mpg-kpay" width={50} height={50} />
                  </div>
                  <p>WavePay</p>
                </div>
              </td>
              <td className="bg-[#E0E7FC]"> 
                <div className="py-5">
                  <p className="mb-5">10k-50k</p>
                  <p className="mb-5">50k-100k</p>
                  <p>100k-200k</p>
                </div>
              </td>
              <td className="bg-[#E0E7FC]">
              <div className="py-5">
                  <p className="mb-5">5%</p>
                  <p className="mb-5">5%</p>
                  <p>5%</p>
                </div>
              </td>
              <td className="bg-[#E0E7FC]">
              <div className="py-5">
                  <p className="mb-5">10%</p>
                  <p className="mb-5">5%</p>
                  <p>10%</p>
                </div>
              </td>
              <td>
                   
                   <Button onClick={edit} placeholder={"button"} color="blue" variant="outlined" size="sm" className="capitalize mx-2 font-[500]">Edit</Button>
               
                   <Button onClick={deleteBox} placeholder={"button"} color="red" variant="outlined" size="sm" className="capitalize  font-[500]">Delete</Button>
            
         </td>
            </tr>
            <tr className="text-center">
                <td>3</td>
              <td className="">
                <div className="py-2">
                  <div className="flex justify-center mb-2">
                    <img src={CB} alt="mpg-kpay" width={50} height={50} />
                  </div>
                  <p>CB Pay</p>
                </div>
              </td>
              <td className="bg-[#f4f4f4]"> 
                <div className="py-5">
                  <p className="mb-5">10k-50k</p>
                  <p className="mb-5">50k-100k</p>
                  <p>100k-200k</p>
                </div>
              </td>
              <td className="bg-[#f4f4f4]">
              <div className="py-5">
                  <p className="mb-5">5%</p>
                  <p className="mb-5">5%</p>
                  <p>5%</p>
                </div>
              </td>
              <td className="bg-[#f4f4f4]">
              <div className="py-5">
                  <p className="mb-5">10%</p>
                  <p className="mb-5">5%</p>
                  <p>10%</p>
                </div>
              </td>
              <td>
                   
                   <Button onClick={edit} placeholder={"button"} color="blue" variant="outlined" size="sm" className="capitalize mx-2 font-[500]">Edit</Button>
               
                   <Button onClick={deleteBox} placeholder={"button"} color="red" variant="outlined" size="sm" className="capitalize  font-[500]">Delete</Button>
            
         </td>
            </tr>
            <tr className="text-center">
                <td>4</td>
              <td className="bg-[#F5F9FE]">
                <div className="py-2">
                  <div className="flex justify-center mb-2">
                    <img src={aya} alt="mpg-kpay" width={50} height={50} />
                  </div>
                  <p className="uppercase">AYA PAY</p>
                </div>
              </td>
              <td className="bg-[#E0E7FC]"> 
                <div className="py-5">
                  <p className="mb-5">10k-50k</p>
                  <p className="mb-5">50k-100k</p>
                  <p>100k-200k</p>
                </div>
              </td>
              <td className="bg-[#E0E7FC]">
              <div className="py-5">
                  <p className="mb-5">5%</p>
                  <p className="mb-5">5%</p>
                  <p>5%</p>
                </div>
              </td>
              <td className="bg-[#E0E7FC]">
              <div className="py-5">
                  <p className="mb-5">10%</p>
                  <p className="mb-5">5%</p>
                  <p>10%</p>
                </div>
              </td>
              <td>
                   
                   <Button placeholder={"button"} color="blue" variant="outlined" size="sm" className="capitalize mx-2 font-[500]">Edit</Button>
               
                   <Button placeholder={"button"} color="red" variant="outlined" size="sm" className="capitalize  font-[500]">Delete</Button>
            
         </td>
            </tr>
            <tr className="text-center">
                <td>5</td>
              <td className="">
                <div className="py-2">
                  <div className="flex justify-center mb-2">
                    <img src={uab} alt="mpg-kpay" width={50} height={50} />
                  </div>
                  <p>KBZPay</p>
                </div>
              </td>
              <td className="bg-[#f4f4f4]"> 
                <div className="py-5">
                  <p className="mb-5">10k-50k</p>
                  <p className="mb-5">50k-100k</p>
                  <p>100k-200k</p>
                </div>
              </td>
              <td className="bg-[#f4f4f4]">
              <div className="py-5">
                  <p className="mb-5">5%</p>
                  <p className="mb-5">5%</p>
                  <p>5%</p>
                </div>
              </td>
              <td className="bg-[#f4f4f4]">
              <div className="py-5">
                  <p className="mb-5">10%</p>
                  <p className="mb-5">5%</p>
                  <p>10%</p>
                </div>
              </td>
              <td>
                   
                   <Button placeholder={"button"} color="blue" variant="outlined" size="sm" className="capitalize mx-2 font-[500]">Edit</Button>
               
                   <Button placeholder={"button"} color="red" variant="outlined" size="sm" className="capitalize  font-[500]">Delete</Button>
            
         </td>
            </tr>
    </tbody>
  );
};

const FeeListTable = ({edit,deleteBox}:any) => {
  const columns = [
    "No",
    "Payment",
    "Amount",
    "Cash in",
    "Cash out",
    "Action"
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
  } = usePaginate(DailyList);

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
      <div className="w-full overflow-x-scroll ">
        <table className="w-full">
          <Header columns={columns} sorting={sorting} sortTable={setSorting} />
          <Content deleteBox={deleteBox} edit={edit} entries={data} />
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

export default FeeListTable;
