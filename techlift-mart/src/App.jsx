import { Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
