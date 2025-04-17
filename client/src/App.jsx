import AdminLayout from "./components/ui/admin-view/layout";
import AuthLayout from "./components/ui/auth/layout"
import AdminDashboard from "./pages/auth/admin-view/dashboard";
import AdminOrders from "./pages/auth/admin-view/orders";
import AdminProducts from "./pages/auth/admin-view/products";
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
//import { Routes } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1> Header Component </h1>
      <Router>
        <Routes>
         <Route path="/auth" element={<AuthLayout/>}>
             <Route path="login" element={<AuthLogin/>}/>
            <Route path="register" element={<AuthRegister/>}/>
         </Route>
         <Route path="/admin" element={<AdminLayout/>}>
         <Route path="products" element={<AdminProducts/>}/>
         <Route path="order" element={<AdminOrders/>}/>
         <Route path="dashboard" element={<AdminDashboard/>}/>


         </Route>
        </Routes>
      </Router>

    </div>
  )

}

export default App
