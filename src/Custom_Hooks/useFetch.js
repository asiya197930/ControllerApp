import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
//   return (
//     <div></div>
//   )
const [data, setData] = useState(null)
const [isLoading, setIsLoading] = useState(true) // to show loading
const [error, setError] = useState(null)

     useEffect(() => {
            fetch(url)
            .then((res) => {
                if(!res.ok){
                    throw Error("Fetching is not successfull")
                }
                else{
                    return res.json()
                }
            })
            .then((data) => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch((error) => {
                setError(error.message)
                setIsLoading(false)
            })
        },[url]); // empty dependency ",[]" to stop calling again and again
    return {data, isLoading, error}    
}

export default useFetch
