import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/client/Layout";
import Home from "./pages/client/Home";
import { Detail } from "./pages/client/Detail";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { Cart } from "./pages/client/Cart";
import { LayOutAdmin } from "./components/admin/Layout";
import { Phone } from "./pages/admin/Phone";
import { Edit } from "./pages/admin/Edit";
import { Add } from "./pages/admin/Add";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/detail"
            element={
              <Layout>
                <Detail />
              </Layout>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/admin/dashboard"
            element={<LayOutAdmin>{<Phone />}</LayOutAdmin>}
          />
          <Route
            path="/admin/edit"
            element={<LayOutAdmin>{<Edit />}</LayOutAdmin>}
          />
          <Route
            path="/admin/add"
            element={<LayOutAdmin>{<Add />}</LayOutAdmin>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
