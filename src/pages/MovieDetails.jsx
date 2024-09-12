import {lazy, Suspense} from "react";

// MUI
import {Box, Typography} from "@mui/material";

// Library Imports
import {useParams, Link} from "react-router-dom";

// API
import {OMDB_DETAILS_API} from "../api/index.js";

// Custom Hooks
import useAPI from "../hooks/useAPI.js";

// Custom Components
import CustomContainer from "../components/CustomContainer.jsx";
import ErrorPage from "./ErrorPage.jsx";
import LoadingPage from "./LoadingPage.jsx";

// Styles
import "../styles/MovieDetails.css"

// Lazy Loaded Components
const DetailsSectionLazy = lazy(() => import("../components/DetailsSection.jsx"));

const MovieDetails = () => {
    const {id} = useParams()

    const {apiData, isLoading, isError} = useAPI(id ? OMDB_DETAILS_API(id) : null)

    if (isLoading) return <LoadingPage/>
    if (isError) return <ErrorPage/>

    return <CustomContainer>
        <Box className="movie-details-header">
            <Typography color="primary" variant="h5">Movie Details</Typography>

            <Link to="/" style={{color: "white"}}>
                Home
            </Link>
        </Box>

        <Suspense fallback={<LoadingPage/>}>
            <DetailsSectionLazy apiData={apiData}/>
        </Suspense>
    </CustomContainer>
}

export default MovieDetails