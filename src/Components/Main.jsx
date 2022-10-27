import React from 'react';
import Header from './SharedFolder/Header';
import Footer from './SharedFolder/Footer';
import { Outlet } from 'react-router-dom'


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;