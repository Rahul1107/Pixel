import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/Homepage/HomePage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import PageNotFound from "./pages/PageNotFound";
import { useContext, useEffect } from "react";
import { GenreContext } from "./context/GenreContext";
import { fetchDataFromApi } from "./utils/api";
import Footer from "./components/Footer";







function App() {

  const {allGenre, addGenre} = useContext(GenreContext)

  useEffect(() => {
    genresCall();
  },[]);

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
  
    data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item));
    });

    addGenre(allGenres);
    
  };
 
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:mediaType/:id' element={<DetailsPage/>} />
      <Route path='/search/:query' element={<SearchPage/>} />
      <Route path='/explore/:mediaType' element={<ExplorePage />} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    <Footer/>

        
        
    </BrowserRouter>
  )
}

export default App
