// Library Imports
import {MoonLoader} from "react-spinners";

// Custom Components
import CustomContainer from "../components/CustomContainer.jsx";

// Styles
import "../styles/LoadingPage.css"

const LoadingPage = () => {
    return <CustomContainer className="loading-page-container">
        <MoonLoader size={80} color="#DAA520"/>
    </CustomContainer>
}

export default LoadingPage