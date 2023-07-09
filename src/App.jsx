import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/Homepage/HomePage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";
import ExplorePage from "./pages/ExplorePage";
import PageNotFound from "./pages/PageNotFound";




function App() {
  
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
    

        
        
    </BrowserRouter>
  )
}

export default App
