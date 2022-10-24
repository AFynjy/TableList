import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Modal from "./Modal";
import TablePage from "./TablePage";


function App() {
  return (
      <Routes>
        <Route path="/" element={<TablePage />} />
        <Route path="/formcard" element={<Modal />} />
      </Routes>
  );
}

export default App;