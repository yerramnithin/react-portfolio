import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Button from "./components/Button";
import Counter from "./components/Counter";
import AgeVerification from "./components/AgeVerification";

function App() {
  return (
    <div className="app-layout d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/button" element={<Button />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/age-verification" element={<AgeVerification />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
