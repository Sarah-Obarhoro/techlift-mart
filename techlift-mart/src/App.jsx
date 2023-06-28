import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from "./Pages/LandingPage";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
