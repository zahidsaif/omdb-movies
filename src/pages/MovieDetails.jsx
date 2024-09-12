// MUI
import {Box, Link, Typography} from "@mui/material";

// Library Imports
import {useParams} from "react-router-dom";

// API
import {OMDB_DETAILS_API} from "../api/index.js";

// Custom Hooks
import useAPI from "../hooks/useAPI.js";

// Custom Components
import CustomContainer from "../components/CustomContainer.jsx";
import NoDataPage from "./NoDataPage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import LoadingPage from "./LoadingPage.jsx";

// Styles
import "../styles/MovieDetails.css"

const MovieDetails = () => {
    const {id} = useParams()

    const {apiData, isLoading, isError} = useAPI(id ? OMDB_DETAILS_API(id) : null)

    if (isError) return <ErrorPage/>

    return <CustomContainer>
        <Box className="movie-details-header">
            <Typography color="primary" variant="h5">Movie Details</Typography>
            <Link href="/" underline="hover" fontWeight={500} sx={{color: "white"}}>Home</Link>
        </Box>

        {isLoading ? <LoadingPage/> : <DetailsSection apiData={apiData}/>}
    </CustomContainer>
}

const DetailsSection = ({apiData}) => {
    if (!apiData) return <NoDataPage/>

    return <>
        <Box mt={2}>
            <Box className="poster-img-container">
                <img
                    border="4px"
                    width="300px"
                    height="450px"
                    className="poster-img"
                    src={apiData.Poster}
                    alt={`Poster for ${apiData.Title || "Movie"}`}
                />
            </Box>

            <Typography mt={2} variant="h6" color="primary">
                {apiData.Title} {apiData.Year && `(${apiData.Year})`}
            </Typography>
        </Box>

        <Box mt={2} className="minor-details-container">
            <LabelWithDescription label="Genre" description={apiData.Genre}/>
            <LabelWithDescription label="Running Time" description={apiData.Runtime}/>
            <LabelWithDescription label="Rating" description={`${apiData.imdbRating || "-"}/10`}/>
            <LabelWithDescription label="Language" description={`${apiData.Language}`}/>
        </Box>

        <LabelWithDescription label="Plot" description={apiData.Plot} mt={3.5}/>
        <LabelWithDescription label="Actors" description={apiData.Actors} mt={2}/>
    </>
}

const LabelWithDescription = ({label, description, ...restProps}) => {
    return <Box {...restProps}>
        <Typography color="primary" variant="body1">{label}</Typography>
        <Typography variant="body2">{description ? description : "Information Not Available"}</Typography>
    </Box>
}

export default MovieDetails