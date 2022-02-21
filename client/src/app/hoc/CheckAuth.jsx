// import { useLocation,Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ErrorHandler from "../components/ErrorHandler/ErrorHandler.jsx";
// import LogIn from "../components/Forms/LogRegModal.jsx";

const CheckAuth = ({children}) => {
    const auth = localStorage.getItem("jwt")
    const navigate = useNavigate()
    return auth ? <>     
    {navigate("/")}
    <ErrorHandler errorMessage={"Error, you are not available for this page"} /> </> : children
}

export {CheckAuth}


CheckAuth.propTypes = {
    children: PropTypes.any
}