// MUI
import {Typography} from "@mui/material";

// Custom Components
import CustomContainer from "../components/CustomContainer.jsx";

// Styles
import "../styles/NoDataPage.css"

const NoDataPage = () => {
    return <CustomContainer className="noData-page-container">
        <Typography variant="h1">404!</Typography>
        <Typography className="noData-text" color="error" mt={4}>Data Not Found</Typography>

        <Typography className="noData-text" mt={2}>
            Please try again
        </Typography>
    </CustomContainer>
}

export default NoDataPage