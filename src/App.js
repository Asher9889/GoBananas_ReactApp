import "./App.css";
import TopHeadlines from "./pages/topHeadlines/TopHeadlines.jsx";
import Header from "./components/header/Header.jsx";
import React from "react";

export default function App() {
  return (
    <div>
      <Header />
      <TopHeadlines />
    </div>
  );
}
