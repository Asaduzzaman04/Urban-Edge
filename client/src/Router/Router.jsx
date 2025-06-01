import React from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} /> 
          {/* <Route path="/help-center" element={<HelpCenter />} /> */}
          {/* <Route path="/order-tracking" element={<OrderTracking />} /> */}

          {/* Error 404 */}
          <Route
            path="*"
            element={
              <div className="text-center text-red-500 text-2xl flex mx-auto justify-center items-center h-screen">
                Error 404: Page Not Found
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
