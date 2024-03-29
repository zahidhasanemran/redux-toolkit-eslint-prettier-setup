import "./App.css";
import Home from "./pages";
import { Route, Routes } from "react-router-dom";
import SingleCocktail from "./pages/SingleCocktail";
import Header from "./components/Header";

function App() {
  return (
    <div className="App" data-testid="emran">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </div>
  );
}

export default App;
