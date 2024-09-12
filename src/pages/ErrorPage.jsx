// Library Imports
import {useRouteError} from "react-router-dom";

// MUI
import {Typography} from "@mui/material";

// Custom Components
import CustomContainer from "../components/CustomContainer.jsx";

// Styles
import "../styles/ErrorPage.css"

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <CustomContainer className="error-page-container error-text">
            <Typography variant="h1">Oops!</Typography>
            <Typography className="error-text" mt={4}>{error.statusText || error.message}</Typography>

            <Typography className="error-text" color="error" mt={2}>
                {error.data}
            </Typography>
        </CustomContainer>
    );
}

export default ErrorPage