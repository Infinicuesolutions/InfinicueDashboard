/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   rtlName: "",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/table",
  //   name: "Debit Card",
  //   rtlName: "",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Credit Card",
  //   rtlName: "",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin",
  // },
  {
    path: "/icons",
    name: "Debit Card Frauds",
    rtlName: "",
    icon: CreditCardIcon,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Credit Card Frauds",
    rtlName: "",
    icon: CreditCardIcon,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Online/Netbanking Frauds",
    rtlName: "",
    icon: AccountBalanceIcon,
    component: NotificationsPage,
    layout: "/admin",
  },
    {
    path: "/upi",
    name: "UPI",
    rtlName: "",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  // {
  //   path: "/onlinebanking",
  //   name: "Online Banking",
  //   rtlName: "",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/onlinebanking",
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;