import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Rent from './pages/Rent';
import './App.css'; /* Asegúrate de importar el archivo CSS */

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/rent" element={<Rent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
