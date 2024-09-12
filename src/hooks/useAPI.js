import {useEffect, useState} from "react";
import axios from "axios";

const useAPI = (apiURL) => {
    const [apiData, setApiData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!apiURL) {
            setApiData(null)
            return
        }

        if (isLoading || isError) return

        async function fetchData() {
            try {
                setIsLoading(true);

                const {data, status} = await axios.get(apiURL);
                setApiData(data);
            } catch (error) {
                setApiData(null)
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData()
    }, [apiURL])

    return {
        apiData,
        isError,
        isLoading
    }
}

export default useAPI