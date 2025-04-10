// import {useEffect} from 'react';
// import {useLocation, useNavigate} from 'react-router-dom';
//
// const   OAuthSuccess = ({setOpenLoginPage}) => {
//     const navigate = useNavigate();
//     const location = useLocation();
//
//     useEffect(() => {
//         const queryParams = new URLSearchParams(location.search);
//         const token = queryParams.get("token");
//
//         if (token) {
//             sessionStorage.setItem("token", token);
//             // setOpenLoginPage(false)
//             navigate("/login");
//         } else {
//             navigate("/");
//             // setOpenLoginPage(true)
//         }
//     }, [location, navigate]);
//
//     return null;
// };
//
// export default OAuthSuccess;


import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OAuthSuccess = ({ setOpenLoginPage }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const allowedRoutes = ['/', '/login'];

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const token = sessionStorage.getItem("token");
        const path = location.pathname;
        console.log(token,"321321321321321321321321321321321")

        if (token) {
            sessionStorage.setItem("token", token);
        } else if (!token && !allowedRoutes.includes(path)) {
            setOpenLoginPage(true);
        }
    }, [location, setOpenLoginPage]);

    return null;
};

export default OAuthSuccess;

