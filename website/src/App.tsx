import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PrivacyPage from "./Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/privacy"
          element={<PrivacyPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
