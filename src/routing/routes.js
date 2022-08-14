import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/home';
import Menu from '../pages/menu/menu';
import User from '../pages/user/user';
import Reposity from '../pages/reposity/reposity';
//Routes

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/menu" element={<Menu />}>
                </Route>
                <Route path="/searchUser" element={<User />}>
                </Route>
                <Route path="/searchReposity" element={<Reposity />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default Routing;