import { useEffect, useState } from "react";
import "./App.css";
import { fetchDataFromAPi } from "./utils/axios/axios.js";
import Appbar from "./components/menu/Appbar.jsx";
import NewsCard from "./components/card/NewsCard.jsx";
import TopHeadlines from "./pages/topHeadlines/TopHeadlines.jsx";
import Header from "./components/header/Header.jsx";
import * as React from "react";

export default function App() {
  return (
    <div>
      <Header />
      <TopHeadlines />
    </div>
  );
}
