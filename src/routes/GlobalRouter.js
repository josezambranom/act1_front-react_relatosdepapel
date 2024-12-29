import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import LibroDetails from '../views/LibroDetails';
import CheckoutDetails from '../views/CheckoutDetails';
import NotFound from '../views/NotFound';
import {Overview} from "../views/Overview";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/libros" element={<Layout><Overview /></Layout>} />
                <Route path="/libros/:libroId" element={<Layout><LibroDetails /></Layout>} />
                <Route path="/checkout" element={<Layout><CheckoutDetails /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default GlobalRouter;
