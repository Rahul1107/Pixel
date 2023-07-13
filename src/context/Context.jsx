import { createContext,  useState } from "react"


const GenreContext = createContext()

const GenreProvider = ({children}) =>{
    const [genre, setGenre] = useState()

    const addGenre = (newGenre) =>{
        setGenre(newGenre)
    }
    return(
        <GenreContext.Provider value={{genre, addGenre}}>
            {children}
        </GenreContext.Provider>
    )
}   

export {GenreContext,GenreProvider}