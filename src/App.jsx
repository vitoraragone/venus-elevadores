import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Header from "./components/Utils/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          {/* <Route path="/about" element={"<About />"} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
