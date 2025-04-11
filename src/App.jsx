import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Header from "./components/Utils/Header";
import Footer from "./components/Utils/Footer";
import WppButton from "./components/Utils/WppButton";

function App() {
  return (
    <BrowserRouter>
      <header>
        <WppButton />
        <Header />
      </header>
      <main>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
