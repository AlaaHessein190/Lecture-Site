import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// Lazy load الصفحات
const Home = lazy(() => import("./pages/Home"));
const Questions = lazy(() => import("./pages/Questions"));
function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions/:id" element={<Questions />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
