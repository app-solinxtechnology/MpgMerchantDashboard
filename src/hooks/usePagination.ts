import  { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "./useQuery";

export const DOTS = "...";

export type IpaginateType = ReturnType<typeof usePaginate>

const usePaginate = (item:any  ) => {
    
  const navigate = useNavigate();
  const query = useQuery();
  const q = query.get('q');
  const date = query.get('date');

    const data:any = [...Array(item).keys()]
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [recordPerPage, setRecordPerPage] = useState<number>(5);
    const [siblingCount,] = useState<number>(1);
    const [buttonCount,] = useState<number>(3);
    let totalPageCount: any = Math.ceil(data.length / recordPerPage);
    let pageNumbersCount = [...Array(totalPageCount + 1).keys()].slice(1);

  
  function goToNextPage(): void {
   if(currentPage !== totalPageCount)setCurrentPage((page) =>{
      let pageItem = page + 1
      if (date === null) {
        navigate(
          location.pathname +
            "?page=" +
            pageItem +
            "&limit=" +
            recordPerPage
        );
      } else if (date !== null && !q) {
        navigate(
          location.pathname +
            "?page=" +
            pageItem +
            "&limit=" +
            recordPerPage +
            "&date=" +
            date
        );
      } else if (!!q && date===null) {
        navigate(
          location.pathname +
            "?page=" +
            pageItem +
            "&limit=" +
            recordPerPage +
            "&q=" +
            q
        );
      } else if (date !== null && !!q) {
        navigate(
          location.pathname +
            "?page=" +
            pageItem +
            "&limit=" +
            recordPerPage +
            "&q=" +
            q +
            "&date=" +
            date
        );
      }
      return pageItem
   });
  }
  function goToPreviousPage(): void {
    if(currentPage !== 1)   setCurrentPage((page) => {
       const pageItem = page - 1;
       if (date === null) {
        navigate(
          location.pathname +
            "?page=" +
            pageItem +
            "&limit=" +
            recordPerPage
        );
      } else if (date !== null && !q) {
        navigate(
          location.pathname +
            "?page=" +
            pageItem +
            "&limit=" +
            recordPerPage +
            "&date=" +
            date
        );
      } else if (!!q && date===null) {
        navigate(
          location.pathname +
            "?page=" +
            pageItem +
            "&limit=" +
            recordPerPage +
            "&q=" +
            q
        );
      } else if (date !== null && !!q) {
        navigate(
          location.pathname +
            "?page=" +
            pageItem +
            "&limit=" +
            recordPerPage +
            "&q=" +
            q +
            "&date=" +
            date
        );
      }
       return pageItem
    });
  }



  function changePage(event: number): void {
    const pageNumber = Number(event);
    setCurrentPage(pageNumber);
  }
 
  //rowperPagecalculate

  const getPaginatedData = (): [] => {
    // not yet implemented

    const startIndex = currentPage * recordPerPage - recordPerPage;

    const endIndex = startIndex + recordPerPage;

    return data.slice(startIndex, endIndex);
  };

//   const getPaginationGroup = (): number[] => {
//     let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;

//     return new Array(pageLimit)
//       .fill(undefined)
//       .map((_, idx) => start + idx + 1);
//   };
  const range = (start: any, end: any) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, index) => index + start);

  };
  const paginationRange = useMemo(() => {
    const totalPageNumbers = buttonCount + 2 + siblingCount;
    if (totalPageNumbers >= totalPageCount) {
      range(1, totalPageCount);
      return pageNumbersCount
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex <= totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;


     // left
    if (!shouldShowLeftDots && shouldShowRightDots) {

      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    //right
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );

      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalPageCount, siblingCount, currentPage, buttonCount]);

  return {
    currentPage,
    recordPerPage,
    goToNextPage,
    goToPreviousPage,
    changePage,
    getPaginatedData,
    paginationRange,
    pageNumbersCount,
    setRecordPerPage,
  };
};

export default usePaginate;