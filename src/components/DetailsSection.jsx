// MUI
import {Box, Typography} from "@mui/material";

// Custom Components
import NoDataPage from "../pages/NoDataPage.jsx";

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

export default DetailsSection