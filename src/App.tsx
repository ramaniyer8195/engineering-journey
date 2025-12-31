import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Why from "./pages/Why";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="my-3 mx-10 max-h-[89vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/why" element={<Why />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
