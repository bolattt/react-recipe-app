import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/recipes/:id" element={<Recipe />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
