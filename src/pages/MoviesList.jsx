// React
import {lazy, Suspense} from "react";

// MUI
import {Typography} from "@mui/material";

// Custom Components
import CustomContainer from "../components/CustomContainer.jsx";
import LoadingPage from "./LoadingPage.jsx";

// Lazy Loaded Components
const TypeAheadWidgetLazy = lazy(() => import("../components/TypeAheadWidget.jsx"));
const PaginatedMoviesListLazy = lazy(() => import("../components/PaginatedMoviesList.jsx"));

// Styles
import "../styles/MoviesList.css"

const MoviesList = () => {
    return <CustomContainer>
        <Typography color="primary" variant="h5">Movies List</Typography>

        <Suspense fallback={<LoadingPage/>}>
            <TypeAheadWidgetLazy/>
            <PaginatedMoviesListLazy/>
        </Suspense>
    </CustomContainer>
}

export default MoviesList