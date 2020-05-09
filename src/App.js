import React, { useState } from "react";
import './App.css';
import ImageUpload from "./ImageUpload/index";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Alert,
  Button,
  Accordion,
  Card,
  CardDeck,
  Image,
  Table,
} from "react-bootstrap";

function App() {
  return (
    <div className="App container">
      <ImageUpload />
    </div>
  );
}

export default App;
