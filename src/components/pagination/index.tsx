import React from "react";
import { DOTS } from "../../hooks/usePagination";
import { useMountOnce, useQuery, useSkip } from "$myhooks";
import { useLocation, useNavigate } from "react-router-dom";

const PaginationAdvance = ({
  currentPage,
  goToNextPage,
  goToPreviousPage,
  getPaginatedData,
  changePage,
  recordPerPage,
  paginationRange,
  pageNumbersCount,
  setRecordPerPage,
}: any) => {
  const data = getPaginatedData();
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get("page")!;
  const limit = query.get("limit")!;
  const isZero = data.length === 0;
  const isRun = !!(page === "1" && limit === "5");
  const q = query.get("q")!;
  const date = query.get("date")!;
  console.log(data, "hello");
  useMountOnce(() => {
    if (page || limit) {
      changePage(Number(page));
      setRecordPerPage(Number(limit));
    }
  });

  useSkip(() => {
    if (currentPage == 0) {
      changePage(1);
    }
  }, [currentPage]);

  useSkip(() => {
    if (isZero) {
      changePage(paginationRange.length);
    }
  }, [isZero]);

  useSkip(() => {
    if (isRun) {
      changePage(1);
    }
  }, [isRun]);

  // useSkip(() => {
  //   if (currentPage !== 0) {
  //      if(date !== "null"){
  //       navigate(
  //         location.pathname + "?page=" + currentPage + "&limit=" + recordPerPage +"&date="+date +"&q="+q
  //       );
  //      }else{
  //       navigate(
  //         location.pathname + "?page=" + currentPage + "&limit=" + recordPerPage
  //       );
  //      }
  //   }
  // }, [currentPage]);

  useSkip(() => {
    if (!q && !page && !limit && !date) {
      navigate(
        location.pathname + "?page=" + currentPage + "&limit=" + recordPerPage
      );
    }
    if (!!q && !!page && !!limit && !!date) {
      navigate(
        location.pathname +
          "?page=" +
          currentPage +
          "&limit=" +
          recordPerPage +
          "&q=" +
          q +
          "&date=" +
          date
      );
    }
    if (!!q && !!page && !!limit) {
      navigate(
        location.pathname +
          "?page=" +
          currentPage +
          "&limit=" +
          recordPerPage +
          "&q=" +
          q
      );
    }
    if (!!page && !!limit) {
      navigate(
        location.pathname + "?page=" + currentPage + "&limit=" + recordPerPage
      );
    }
    if (!!q) {
      navigate(
        location.pathname +
          "?page=" +
          currentPage +
          "&limit=" +
          recordPerPage +
          "&q=" +
          q
      );
    }
    if (!!date) {
      navigate(
        location.pathname +
          "?page=" +
          currentPage +
          "&limit=" +
          recordPerPage +
          "&date=" +
          date
      );
    }
    if (!!date && !!q) {
      navigate(
        location.pathname +
          "?page=" +
          currentPage +
          "&limit=" +
          recordPerPage +
          "&q=" +
          q +
          "&date=" +
          date
      );
    }
  }, [recordPerPage]);
const handlePrevious = ()=>{
  goToPreviousPage()

}

const handleNext = ()=>{
   goToNextPage()
}

  return (
    <div className="">
      <div className="flex flex-row justify-between items-center h-[42px] border-t  bg-white">
        <div className="text-[12px] w-[50px] ">
          {currentPage} of {pageNumbersCount.length}
        </div>
        <div className="text-[12px] grow text-center">
          <div className="flex flex-row justify-center items-center  space-x-[10px]">
            <div onClick={handlePrevious}>{`<`}</div>
            {paginationRange &&
              paginationRange.length > 0 &&
              paginationRange?.map((item: any, index: React.Key) => {
                if (item === DOTS) {
                  return (
                    <button key={index} className={`paginationItem`}>
                      &#8230;
                    </button>
                  );
                }
                return (
                  <div
                    key={index}
                    className={`cursor-pointer w-[20px] h-[19px] ${
                      currentPage === item
                        ? "bg-black text-white"
                        : "bg-gray-200   text-black   "
                    }  rounded-[5px]  grid place-items-center text-[12px]`}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      const { innerText: text }: any = e?.target;

                      changePage(Number(text));
                      if (date === null) {
                        navigate(
                          location.pathname +
                            "?page=" +
                            text +
                            "&limit=" +
                            recordPerPage
                        );
                      } else if (date !== null && !q) {
                        navigate(
                          location.pathname +
                            "?page=" +
                            text +
                            "&limit=" +
                            recordPerPage +
                            "&date=" +
                            date
                        );
                      } else if (!!q && date===null) {
                        navigate(
                          location.pathname +
                            "?page=" +
                            text +
                            "&limit=" +
                            recordPerPage +
                            "&q=" +
                            q
                        );
                      } else if (date !== null && !!q) {
                        navigate(
                          location.pathname +
                            "?page=" +
                            text +
                            "&limit=" +
                            recordPerPage +
                            "&q=" +
                            q +
                            "&date=" +
                            date
                        );
                      }
                    }
                  }
                  >
                    {item}
                  </div>
                );
              })}
            <div onClick={handleNext}>{`>`}</div>
          </div>
        </div>
        <div className="text-[12px] w-[50px] mr-10">
          <select
            className="px-2 py-1"
            defaultValue={""}
            onChange={(e) => {
              setRecordPerPage(Number(e.target.value));
            }}
          >
            <option selected value={5}>
              per page
            </option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PaginationAdvance;
