// React
import {useMemo, useState} from "react";

// Custom Hooks
import useAPI from "../hooks/useAPI.js";
import useDebounce from "../hooks/useDebounce.js";

// API
import {OMDB_SEARCH_API} from "../api/index.js";

// Library Imports
import {useNavigate} from "react-router-dom";

// Custom Components
import CustomAutocomplete from "./CustomAutocomplete.jsx";

const TypeAheadWidget = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm);

    const {
        apiData,
        isLoading,
        isError
    } = useAPI(debouncedSearchTerm.length >= 3 ? OMDB_SEARCH_API(debouncedSearchTerm) : null)

    const navigate = useNavigate();

    const apiDropdownOptions = useMemo(() => {
        if (!apiData || isLoading || isError) return [];

        const data = apiData.Search

        const isDataAvailable = data?.length >= 1

        return isDataAvailable
            ? data.map(details => {
                return {
                    id: details.imdbID,
                    label: details.Title,
                    value: details.Title
                }
            })
            : []
    }, [apiData])

    function handleSelectChange(e, value, reason) {
        if (!value || !value.id) return null

        navigate(`/movies/${value.id}`)
    }

    return <CustomAutocomplete
        inputValue={searchTerm}
        placeholder="Search"
        dropdownOptions={apiDropdownOptions}
        onInputChange={(e) => setSearchTerm(e.target.value)}
        onSelectChange={handleSelectChange}
        autocompleteProps={{
            disableClearable: true,
            autoComplete: true,
            autoHighlight: true,
            popupIcon: null,
            loading: isLoading,
            open: isLoading || apiDropdownOptions.length >= 1,
            noOptionsText: searchTerm ? "No movies found" : "No Options"
        }}
    />
}

export default TypeAheadWidget