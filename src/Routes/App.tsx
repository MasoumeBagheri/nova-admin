import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/Routes/main-layout";
import { ProtectedRoute } from "@/Routes/protected-route";

import Login from "@/pages/login/login";
import Dashboard from "@/pages/dashboard/dashboard";
import Products from "@/pages/products/products";
import Users from "@/pages/users/users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
