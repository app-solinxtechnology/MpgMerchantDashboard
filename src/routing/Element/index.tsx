import SmallLoader from "$Icons/smallLoader";
import { lazy, ElementType, Suspense, SuspenseProps } from "react";
const Loadable = (Component: ElementType) => (props: SuspenseProps) =>
  (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
        <SmallLoader/>
    </div>
        
      }
    >
      <Component {...props} />
    </Suspense>
  );

export const LoginPage = Loadable(lazy(() => import("../../pages/login")));

export const DashboardLayout = Loadable(lazy(() => import("../../layouts/dashboardLayout")));

export const DashbaordPage =Loadable(lazy(() => import("../../pages/Dashboard")));

export const UserListPage =Loadable(lazy(() => import("../../pages/user")));

export const MerchantPage =Loadable(lazy(() => import("../../pages/merchant")));

export const CashInDailyPage =Loadable(lazy(() => import("../../pages/cash-in-daily")));

export const CashInMonthlyPage =Loadable(lazy(() => import("../../pages/cash-in-monthy")));

export const CashInYearPage =Loadable(lazy(() => import("../../pages/cash-in-yearly")));

export const DetailCashInDailyPage = Loadable(lazy(() => import("../../pages/cash-in-daily/presentation/Details")));

export const DetailCashInMonthlyPage = Loadable(lazy(() => import("../../pages/cash-in-monthy/presentation/Details")));

export const DetailCashInYearlyPage = Loadable(lazy(() => import("../../pages/cash-in-yearly/presentation/Details")));

export const DetailCashOutDailyPage = Loadable(lazy(() => import("../../pages/cash-out-daily/presentation/Details")));

export const DetailCashOutMonthlyPage = Loadable(lazy(() => import("../../pages/cash-out-monthy/presentation/Details")));

export const DetailCashOutYearlyPage = Loadable(lazy(() => import("../../pages/cash-out-yearly/presentation/Details")));

export const CashOutDailyPage =Loadable(lazy(() => import("../../pages/cash-out-daily")));

export const CashOutMonthlyPage =Loadable(lazy(() => import("../../pages/cash-out-monthy")));

export const CashOutYearPage =Loadable(lazy(() => import("../../pages/cash-out-yearly")));

export const AdminPage = Loadable(lazy(() => import("../../pages/admin")));

export const PermissionPage = Loadable(lazy(() => import("../../pages/permession")));

export const DailyIncomePage = Loadable(lazy(() => import("../../pages/income-daily")));

export const MonthlyIncomePage = Loadable(lazy(() => import("../../pages/income-monthy")));

export const YearlyIncomePage = Loadable(lazy(() => import("../../pages/income-yearly")));

export const FeePage = Loadable(lazy(() => import("../../pages/fee")));

export const FeeCreatePage =  Loadable(lazy(() => import("../../pages/fee")));

export const TutroialPage =  Loadable(lazy(() => import("../../pages/Tutroial")));

export const PaymentMethodPage =  Loadable(lazy(() => import("../../pages/payment-method")));

export const PrivacyPage =  Loadable(lazy(() => import("../../pages/privacy")));

export const FaqPage = Loadable(lazy(() => import("../../pages/faq")));

export const PackagePage = Loadable(lazy(() => import("../../pages/Package")));



