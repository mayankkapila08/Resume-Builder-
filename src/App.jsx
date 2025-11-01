import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import ResumeForm from "./components/ResumeForm";
import Preview from "./components/Preview";
import Templates from "./components/Templates";
import Download from "./components/Download";
import Footer from "./components/Footer";
import './index.css';
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    languages: "",
    frontend: "",
    backend: "",
    databases: "",
    tools: "",
    achievement: "",
    summary: ""
  });
  const [template, setTemplate] = useState("default");

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/form">Resume Form</Link>
          <Link to="/preview">Preview</Link>
          <Link to="/templates">Templates</Link>
          <Link to="/download">Download</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<ResumeForm form={form} setForm={setForm} />} />
            <Route path="/preview" element={<Preview form={form} template={template} />} />
            <Route path="/templates" element={<Templates template={template} setTemplate={setTemplate} />} />
            <Route path="/download" element={<Download form={form} template={template} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
