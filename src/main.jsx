// React
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

// MUI
import {createTheme, ThemeProvider} from "@mui/material";

// Library Imports
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// Styles
import './index.css'

// Custom Components
import ErrorPage from "./pages/ErrorPage.jsx";
import MoviesList from "./pages/MoviesList.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MoviesList/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/movies/:id",
        element: <MovieDetails/>,
        errorElement: <ErrorPage/>,
    }
]);

const theme = createTheme({
    palette: {
        primary: {
            main: '#DAA520'
        }
    }
})

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </StrictMode>,
)
