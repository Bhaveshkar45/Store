import AdminLayout from "./components/ui/admin-view/layout";
import AuthLayout from "./components/ui/auth/layout";
import ShoppingHeader from "./components/ui/shopping-view/header";
import ShoppingLayout from "./components/ui/shopping-view/layout";
import AdminDashboard from "./pages/auth/admin-view/dashboard";
import AdminOrders from "./pages/auth/admin-view/orders";
import AdminProducts from "./pages/auth/admin-view/products";
import AuthLogin from "./pages/auth/login";
import NotFound from "./pages/auth/not-found";
import AuthRegister from "./pages/auth/register";
//import { Routes } from "react-router-dom"
import { Router, Routes, Route } from "react-router-dom";
import ShoppingHome from "./pages/auth/shopping-view/home";
import ShoppingCheckout from "./pages/auth/shopping-view/checkout";
import ShoppingListing from "./pages/auth/shopping-view/listing";
import CheckAuth from "./components/ui/common/check-auth";
import { UnauthPage } from "./pages/auth/unauth-page";

function App() {
  const isAuthenticated = true;
  const user = {
    name : 'kb',
    role : 'user'
  };

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* <h1> Header Component </h1> */}

      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="products" element={<AdminProducts />} />
          <Route path="order" element={<AdminOrders />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="account" element={<ShoppingHome />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="header" element={<ShoppingHeader />} />
        </Route>       
        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<UnauthPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
