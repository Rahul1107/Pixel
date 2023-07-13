import { createContext, useState } from "react";

const GenreContext = createContext();

const GenreProvider = ({children}) => {
    const [allGenre, setAllGenre] = useState()


    const addGenre = (value)=>{
        setAllGenre(value);
    }

    return(
        <GenreContext.Provider value={{allGenre, addGenre}}>
        {children} 

        </GenreContext.Provider>
    )
}

export {GenreContext,GenreProvider}