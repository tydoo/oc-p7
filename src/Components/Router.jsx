import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";

import Home from "../Pages/Home"
import HousingDetail from "../Pages/HousingDetail";
import About from "../Pages/About";
import Error404 from "../Pages/Errors";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/housing/detail/:housingId" element={ <HousingDetail /> } />
                    <Route path="/about" element={ <About /> } />
                    <Route path="*" element={ <Error404 /> } />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router