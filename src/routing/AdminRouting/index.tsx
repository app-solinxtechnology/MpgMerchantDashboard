import { useRoutes, Navigate, Outlet } from "react-router-dom";
import {
  CashInDailyPage,
  CashInMonthlyPage,
  CashInYearPage,
  CashOutDailyPage,
  CashOutMonthlyPage,
  CashOutYearPage,
  DailyIncomePage,
  DashbaordPage,
  DashboardLayout,
  DetailCashInDailyPage,
  DetailCashInMonthlyPage,
  DetailCashInYearlyPage,
  DetailCashOutDailyPage,
  DetailCashOutMonthlyPage,
  DetailCashOutYearlyPage,
  LoginPage,
  MerchantPage,
  MonthlyIncomePage,
  PackagePage,

  YearlyIncomePage,
} from "../Element";
import React from "react";
import AuthProtect from "$components/AuthProtect";
import RedirectPage from "$components/RedirectPage";

export const routes = [
  { path: "/", element: <Navigate to="/login" /> },
  {
    path: "/login", element: <RedirectPage>
      <LoginPage />
    </RedirectPage>
  },
  {
    path: "/dashboard",
    element: <AuthProtect>
      <DashboardLayout />
    </AuthProtect>,
    children: [
      {
        path: "",
        element: <DashbaordPage />,
      },

      // { path: "user", element: <UserListPage /> },
      // {
      //   path: "admin",
      //   element: <Outlet />,
      //   children: [
      //     { path: "", element: <AdminPage /> },
      //     { path: "permission", element: <PermissionPage /> },
      //   ],
      // },
      { path: "merchant", element: <MerchantPage /> },
      {
        path: "cash-in-order",
        element: <Outlet />,
        children: [
          {
            path: "daily",
            element: <Outlet />,
            children: [
              { path: "", element: <CashInDailyPage /> },
              {
                path: "detail",
                element: <DetailCashInDailyPage />,
              },
            ],
          },
          {
            path: "Monthly",
            element: <Outlet />,
            children: [
              {
                path: "",
                element: <CashInMonthlyPage />,
              },
              {
                path: "detail",
                element: <DetailCashInMonthlyPage />,
              },
            ],
          },
          {
            path: "yearly",
            element: <Outlet />,
            children: [
              {
                path: "",
                element: <CashInYearPage />,
              },
              {
                path: "detail",
                element: <DetailCashInYearlyPage />
              },
            ],
          },
        ],
      },
      {
        path: "cash-out-order",
        element: <Outlet />,
        children: [
          {
            path: "daily",
            element: <Outlet />,
            children: [
              { path: "", element: <CashOutDailyPage /> },
              {
                path: "detail",
                element: <DetailCashOutDailyPage />,
              },
            ],
          },
          {
            path: "Monthly",
            element: <Outlet />,
            children: [
              {
                path: "",
                element: <CashOutMonthlyPage />,
              },
              {
                path: "detail",
                element: <DetailCashOutMonthlyPage />,
              },
            ],
          },
          {
            path: "yearly",
            element: <Outlet />,
            children: [
              {
                path: "",
                element: <CashOutYearPage />,
              },
              {
                path: "detail",
                element: <DetailCashOutYearlyPage />,
              },
            ],
          },
        ],
      },
      {
        path: "income",
        element: <Outlet />,
        children: [
          {
            path: "daily",
            element: <DailyIncomePage />,
          },
          {
            path: "monthly",
            element: <MonthlyIncomePage />,
          },
          {
            path: "yearly",
            element: <YearlyIncomePage />,
          },
        ]
      },
      // {
      //   path: "fee",
      //   element: <FeePage />
      // },
      // {
      //   path: "tutroial",
      //   element: <TutroialPage />
      // },
      // {
      //   path: "payment",
      //   element: <PaymentMethodPage />
      // },
      // {
      //   path: "privacy",
      //   element: <PrivacyPage />
      // },
      // {
      //   path: "faq",
      //   element: <FaqPage />
      // },
      {
        path: "package",
        element: <PackagePage />
      },
    ],
  },
];

const AdminRouting = React.memo(() => {
  return useRoutes(routes);
});

export default AdminRouting;
