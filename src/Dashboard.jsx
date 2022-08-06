import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
// finance
import Sales from "./pages/Finance/sales";
import Purchase from "./pages/Finance/purchase";
import MSR from "./pages/Finance/monthlySales";
import MPR from "./pages/Finance/monthlyPurchase";
import PayDues from "./pages/Finance/paymentDues";
import PayReminder from "./pages/Finance/paymentReminder";
//crm
import CostoDetails from "./pages/CRM/CostoDetails";
import AddCosto from "./pages/CRM/AddCosto";
import CostoSalesRepo from "./pages/CRM/CostoSalesReport";
//Inventory
import StockDetails from "./pages/Inventory/stockDetails";
import MonthlyStockReport from "./pages/Inventory/MonthlyStockReport";
//Hr
import Deparments from "./pages/HR/department";
import Designation from "./pages/HR/designation";
import EmplyeeManagement from "./pages/HR/manageEmployee";
import Payroll from "./pages/HR/payrolls";
//Communication
import BulkEmail from "./pages/Communication/email";
import BulkMsg from "./pages/Communication/message";

function Dashbord() {
  return (
    <div className="">
        <Routes>
          {/* //Finance */}
          <Route path="/dashbord/finance/sales" element={<Sales />} />
          <Route path="/dashbord/finance/purchases" element={<Purchase />} />
          <Route path="/dashbord/finance/MSReport" element={<MSR />} />
          <Route path="/dashbord/finance/MPReport" element={<MPR />} />
          <Route path="/dashbord/finance/paymentDues" element={<PayDues />} />
          <Route
            path="/dashbord/finance/paymentReminder"
            element={<PayReminder />}
          />
          {/* //CRM */}
          <Route path="/dashbord/crm/costoDetails" element={<CostoDetails />} />
          <Route path="/dashbord/crm/AddCosto" element={<AddCosto />} />
          <Route
            path="/dashbord/crm/costoSalesReport"
            element={<CostoSalesRepo />}
          />
          {/* Inventory */}
          <Route
            path="/dashbord/inventory/monthlyStockDetails"
            element={<MonthlyStockReport />}
          />
          <Route
            path="/dashbord/inventory/stockDetails"
            element={<StockDetails />}
          />
          {/* HR */}
          <Route
            path="/dashbord/hr/employeeManagement"
            element={<EmplyeeManagement />}
          />
          <Route path="/dashbord/hr/designation" element={<Designation />} />
          <Route path="/dashbord/hr/department" element={<Deparments />} />
          <Route path="/dashbord/hr/payrolls" element={<Payroll />} />
          {/* communicate */}
          <Route
            path="/dashbord/communicate/bulkEmail"
            element={<BulkEmail />}
          />
          <Route path="/dashbord/communicate/bulkMsg" element={<BulkMsg />} />

          <Route path="/dashbord/team" element={<Team />} />
        </Routes>
    </div>
  );
}

export default Dashbord;
