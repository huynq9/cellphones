import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/client/Layout";
import Home from "./pages/client/Home";
import { Detail } from "./pages/client/Detail";
import { SignUp } from "./pages/SignUp";
import { Cart } from "./pages/client/Cart";
import { LayOutAdmin } from "./components/admin/Layout";
import { Phone } from "./pages/admin/Phone";
import { Edit } from "./pages/admin/Edit";
import { Add } from "./pages/admin/Add";
import { Sigin } from "./pages/Sigin";
import { PrivateRouter } from "./components/admin/PrivateRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/detail/:id?"
            element={
              <Layout>
                <Detail />
              </Layout>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Sigin />} />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/admin/"
            element={<PrivateRouter>{<Phone />}</PrivateRouter>}
          />
          <Route
            path="/admin/edit/:id"
            element={<PrivateRouter>{<Edit />}</PrivateRouter>}
          />
          <Route
            path="/admin/add"
            element={<PrivateRouter>{<Add />}</PrivateRouter>}
          />
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
