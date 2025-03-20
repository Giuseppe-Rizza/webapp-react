import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import CreateMoviePage from './pages/CreateMoviePage';

import './App.css'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route index path="/" element={<HomePage />} />
          <Route path="movies/:id" element={<MoviePage />} />
          <Route path="movies/create" element={<CreateMoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App