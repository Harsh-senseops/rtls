// import App from "../App";
import React from "react";
import LoginPage from "../pages/login";
import Plant2Dashboard from "../pages/plant2-dashboard";
import ReportsIcon from "../assets/icons/reports-icon";
import DashboardIcon from "../assets/icons/dashboard-icon";
import DashBoardIcon2 from "../assets/icons/dashboard-icon-2";
import PlantIcon from "../assets/icons/plant-icon";
import LogoutIcon from "../assets/icons/logout-icon";
import TestingAreaIcon from "../assets/icons/testing-area-icon";
import ParkingAreaIcon from "../assets/icons/parking-area-icon";
import GateWayIcon from "../assets/icons/gate-way-icon";
import HistoryIcon from "../assets/icons/history-icon";
import MarryUnMarryIcon from "../assets/icons/marry-unmarry-icon";
import ConfigurationIcon from "../assets/icons/configuration-icon";
import UserManagementIcon from "../assets/icons/user-management-icon";
import AlertIcon from "../assets/icons/alerts-icon";
import TestingAndReworkArea from "../pages/plant-2/testing-and-rework-area";
import ParkingAreaPage from "../pages/plant-2/parking-area";
import AttachDetach from "../pages/plant-2/attatch-detach";
import Plant1Dashboard from "../pages/plant-1/plant-1-dashboard";
import History from "../pages/plant-2/history";
import UserManagement from "../pages/user-management";
import ExitAreaPage from "../pages/plant-2/exit-area";
import ConfigurationPage from "../pages/configuration-page";
export const router = [
  // { title: "Dashboard", icon: DashboardIcon, path: "/", element: <App /> },
  // {
  //   title: "Plant 1",
  //   icon: PlantIcon,
  //   child: [
  //     {
  //       title: "Dashboard",
  //       icon: DashBoardIcon2,
  //       path: "/plant1-dashboard",
  //       element: <Plant1Dashboard />,
  //     },
  //   ],
  // },
  {
    title: "Plant 2",
    icon: PlantIcon,
    child: [
      {
        title: "Plant 2 Dashboard",
        icon: DashBoardIcon2,
        path: "/plant2/dashboard",
        element: <Plant2Dashboard />,
      },
      {
        title: "Weld Repair Area",
        icon: TestingAreaIcon,
        path: "/plant2/weld-repair-area",
        element: <TestingAndReworkArea />,
      },
      {
        title: "Parking Area",
        icon: ParkingAreaIcon,
        path: "/plant2/parking-area",
        element: <ParkingAreaPage />,
      },
      {
        title: "Gate Way",
        icon: GateWayIcon,
        path: "/plant2/gate-way",
        element: <ExitAreaPage />,
      },
      {
        title: "History",
        icon: HistoryIcon,
        path: "/plant2/history",
        element: <History />,
      },
      {
        title: "Attach/Detach",
        icon: MarryUnMarryIcon,
        path: "/plant2/attach-detach",
        element: <AttachDetach />,
      },
      {
        title: "Configuration",
        icon: ConfigurationIcon,
        path: "/plant2-dashboard/configuration",
        element: <ConfigurationPage />,
      },
    ],
  },
  {
    title: "User management",
    icon: UserManagementIcon,
    path: "/user-management",
    element: <UserManagement />,
  },
  {
    title: "Reports",
    icon: ReportsIcon,
    path: "/plant2-dashboard",
    element: <Plant2Dashboard />,
  },
  {
    title: "Alerts",
    icon: AlertIcon,
    path: "/plant2-dashboard",
    element: <Plant2Dashboard />,
  },
  { title: "Logout", icon: LogoutIcon, path: "/login", element: <LoginPage /> },
];
