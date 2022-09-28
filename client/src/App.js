import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/homePage";
import {paths} from "./paths";
import PlanePage from "./pages/plane-page/planePage";
import CreatePlanePage from "./pages/create-plane-page/createPlanePage";
import OrderPage from "./pages/order-page/orderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<HomePage/>}/>
        <Route path={`${paths.plane}/:id`} element={<PlanePage/>}/>
        <Route path={paths.createPlane} element={<CreatePlanePage/>}/>
        <Route path={paths.order} element={<OrderPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
