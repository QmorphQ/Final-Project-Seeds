// import { useLocation,Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import ErrorHandler from "../components/ErrorHandler/ErrorHandler.jsx";
import LogIn from "../components/Forms/LogRegModal.jsx";

const RequireAuth = ({children}) => {
    const auth = localStorage.getItem("jwt")

    if(!auth){
        return (
        <>     
            <ErrorHandler errorMessage={"Error, try to login"} />
            <LogIn/>
        </>
        )
    }

    return children
}

export {RequireAuth}


RequireAuth.propTypes = {
    children: PropTypes.any
}