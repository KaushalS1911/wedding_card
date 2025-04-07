import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const OAuthSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get("token");

        if (token) {
            localStorage.setItem("token", token);
            navigate("/");
        } else {
            navigate("/login");
        }
    }, [location, navigate]);

    return null;
};

export default OAuthSuccess;
