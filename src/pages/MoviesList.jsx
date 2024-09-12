// MUI
import {Typography} from "@mui/material";

// Custom Components
import CustomContainer from "../components/CustomContainer.jsx";
import PaginatedMoviesList from "../components/PaginatedMoviesList.jsx";
import TypeAheadWidget from "../components/TypeAheadWidget.jsx";

// Styles
import "../styles/MoviesList.css"

const MoviesList = () => {
    return <CustomContainer>
        <Typography color="primary" variant="h5">Movies List</Typography>

        <TypeAheadWidget/>
        <PaginatedMoviesList/>
    </CustomContainer>
}

export default MoviesList