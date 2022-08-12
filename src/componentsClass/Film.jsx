import React, {useEffect, useState} from "react";
import axios from 'axios';

const Film = ({url})=> {
    const[film, setFilm] = useState('');

    const fecthData = async url => {
        const response = await axios.get(url);
        const results = await response.data;
        return results;
    };
    
    useEffect( () => {
        const getFilms = async url => {
            const fetchFilms = await fecthData(url);
            setFilm(fetchFilms.title)
        };
        getFilms(url);
      }, []);


    return(
        <>
        <div>{film},</div>
        </>
    )
}

export default Film;