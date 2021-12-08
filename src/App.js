
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            {/* <Route path="/" component={<Trending/>} exact /> */}
            <Route path="/" element={<Trending />}></Route>
            <Route path="/movies" element={<Movies/>} ></Route>
            <Route path="/series" element={<Series/>} ></Route>
            <Route path="/search" element={<Search/>} ></Route>
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;