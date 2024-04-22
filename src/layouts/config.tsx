import Package from "$Icons/Package";
import CashIn from "$Icons/cash-in";
import CashOut from "$Icons/cash-out";
import Day from "$Icons/day";
import Home from "$Icons/home";
import Income from "$Icons/income";
import Time from "$Icons/time";
import Year from "$Icons/year";

export const navConfig: any = [
  {
    title: "Dashboard",
    icon: <Home width={22} height={22} />,
    link: "/dashboard",
  },

  {
    title: "Package",
    icon: <Package width={22} height={22}/>,
    link: "/dashboard/package",
  },

  {
    title: "Buy",
    icon: <CashIn width={22} height={22} />,
    link: "/dashboard/cash-in-order",
    childrens: [
      {
        subTitle: "Buy Daily",
        title: "Daily ",
        icon: <Day width={19} height={19} />,
        link: "/dashboard/cash-in-order/daily",
      },
      {
        subTitle: "Buy Monthly",
        title: "Monthly ",
        icon: <Time width={19} height={19} />,
        link: "/dashboard/cash-in-order/Monthly",
      },
      {
        subTitle: "Buy Yearly",
        title: "Yearly",
        icon: <Year width={19} height={19} />,
        link: "/dashboard/cash-in-order/yearly",
      },
    ],
  },

  {
    title: "Sell",
    icon: <CashOut width={22} height={22} />,
    link: "/dashboard/cash-out-order",
    childrens: [
      {
        subTitle: "Sell Daily",
        title: "Daily ",
        icon: <Day width={19} height={19} />,
        link: "/dashboard/cash-out-order/daily",
      },
      {
        subTitle: "Sell Monthly",
        title: "Monthly ",
        icon: <Time width={19} height={19} />,
        link: "/dashboard/cash-out-order/Monthly",
      },
      {
        subTitle: "Sell Yearly",
        title: "Yearly",
        icon: <Year width={19} height={19} />,
        link: "/dashboard/cash-out-order/yearly",
      },
    ],
  },
  {
    title : "Income",
    icon:<Income width={22} height={22}/>,
    link:"/dashboard/inome",
    childrens:[
      {
        subTitle: "Income Daily",
        title: "Daily",
        icon: <Day width={19} height={19} />,
        link: "/dashboard/income/daily",
      },
      {
        subTitle: "Income Monthly",
        title: "Monthly",
        icon: <Time width={19} height={19} />,
        link: "/dashboard/income/Monthly",
      },
      {
        subTitle: "Income Yearly",
        title: "Yearly",
        icon: <Year width={19} height={19} />,
        link: "/dashboard/income/yearly",
      },
    ]
  },



];
