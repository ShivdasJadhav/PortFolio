import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashbord",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Finance",
    path: "/dashbord/finance",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Sales",
        path: "/dashbord/finance/sales",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Purchases",
        path: "/dashbord/finance/purchases",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Monthly Sales Report",
        path: "/dashbord/finance/MSReport",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Monthly Purchase Report",
        path: "/dashbord/finance/MPReport",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Payment Dues",
        path: "/dashbord/finance/paymentDues",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Payment Reminders",
        path: "/dashbord/finance/paymentReminder",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "CRM",
    path: "/dashbord/crm",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Costomer Details",
        path: "/dashbord/crm/costoDetails",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Cousomer Sales Report",
        path: "/dashbord/crm/CostoSalesReport",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Add Costomer",
        path: "/dashbord/crm/AddCosto",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: "Inventory",
    path: "/dashbord/inventory",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Stock Details",
        path: "/dashbord/inventory/stockDetails",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Monthly Stock Details",
        path: "/dashbord/inventory/monthlyStocKDetails",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Messages",
    path: "/dashbord/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Message 1",
        path: "/dashbord/messages/message1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Message 2",
        path: "/dashbord/messages/message2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "HR",
    path: "/dashbord/hr",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Manage Employees",
        path: "/dashbord/hr/employeeManagement",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Payrolls",
        path: "/dashbord/hr/payrolls",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Departments",
        path: "/dashbord/hr/department",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Designation",
        path: "/dashbord/hr/designation",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Communication",
    path: "/dashbord/comunication",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Bulk Messages",
        path: "/dashbord/communicate/bulkMsg",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Bulk Email",
        path: "/dashbord/communicate/bulkEmail",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/dashbord/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
