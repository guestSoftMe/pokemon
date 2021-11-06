import React, {useEffect, useState} from 'react'

export const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options)
                const json = await response.json()
                setData(json)
            } catch (e) {
                setError(e)
            }
        }
        fetchData()
    }, []);

    return {
        data, error
    }

}
// export default useFetch
