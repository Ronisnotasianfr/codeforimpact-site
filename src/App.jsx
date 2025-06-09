
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Users, Globe, Laptop } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// ... (shortened for brevity in this preview, full code goes here from previous response)
export default function App() {
  return (
    <Router>
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-700">CodeForImpact</Link>
        <nav className="space-x-4">
          <Link to="/projects" className="text-gray-700 hover:text-indigo-600">Projects</Link>
          <Link to="/join" className="text-gray-700 hover:text-indigo-600">Join</Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
