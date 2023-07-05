import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";




function App() {
  
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    

        
        
    </BrowserRouter>
  )
}

export default App
