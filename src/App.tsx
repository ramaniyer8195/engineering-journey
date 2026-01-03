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
      <main className="min-h-[calc(100vh-64px)] overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/why" element={<Why />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
