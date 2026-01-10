import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./routes/Search";
import HomeBody from "./routes/HomeBody";
import Home from "./routes/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
