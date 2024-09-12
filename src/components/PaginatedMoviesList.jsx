// React
import {useEffect, useRef, useState} from "react";

// Custom Hooks
import useAPI from "../hooks/useAPI.js";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";

// API
import {OMDB_SEARCH_WITH_PAGINATION_API} from "../api/index.js";

// MUI
import {Box, Typography} from "@mui/material";

// Library Imports
import {MoonLoader} from "react-spinners";
import {useNavigate} from "react-router-dom";

const PaginatedMoviesList = () => {
    const [page, setPage] = useState(1)
    const [completeData, updateCompleteData] = useState([])
    const [totalPageCount, setTotalPageCount] = useState(1)

    const isEndOfList = page > totalPageCount

    const {
        apiData,
        isLoading,
        isError
    } = useAPI(!isEndOfList ? OMDB_SEARCH_WITH_PAGINATION_API("marvel", page) : null)

    const intersectionRef = useRef()
    const isIntersecting = useIntersectionObserver(intersectionRef)

    useEffect(() => {
        if (!apiData || isLoading || isError) return

        const newData = apiData.Search?.length >= 1 ? apiData.Search : []

        if (apiData.totalResults) setTotalPageCount(Math.ceil(apiData.totalResults / 10))

        updateCompleteData(prevState => [...prevState, ...newData])
    }, [apiData, isLoading, isError])

    useEffect(() => {
        if (!isIntersecting) return

        setPage(prevState => prevState + 1)
    }, [isIntersecting])

    return <>
        <Box className="movie-list-container">
            {completeData.map(rowData => <MovieCard key={rowData.imdbID} data={rowData}/>)}
        </Box>

        {isLoading && <SimpleLoader/>}

        <Typography ref={intersectionRef} textAlign="center" width="100%" mt={2}>
            {!isLoading && !isEndOfList && "Load More"}
            {!isLoading && isEndOfList && "You have seen all the movies in this list!"}
        </Typography>
    </>
}

const SimpleLoader = () => {
    return <Box className="loader-container" mt={2} pb={2}>
        <MoonLoader size={40} color="#DAA520"/>
    </Box>
}

const MovieCard = ({data}) => {
    const navigate = useNavigate()

    return <Box className="movie-card-container" mt={2.5} onClick={() => navigate(`/movies/${data.imdbID}`)}>
        <Box className="movie-card-img-container">
            <img
                border="4px"
                width="100%"
                height="250px"
                className="movie-card-img"
                src={data.Poster}
                alt={`Poster for ${data.Title || "Movie"}`}
            />
        </Box>

        <Box className="movie-card-text-container">
            <Typography variant="body1" fontWeight={600}>{data.Title}</Typography>
        </Box>
    </Box>
}

export default PaginatedMoviesList