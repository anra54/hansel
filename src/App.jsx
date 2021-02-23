import React from "react";
import PdfViewer from "./PdfViewer";
import "./App.css";

let url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf'

const App = () => (
  <div className="content">
    <h1>Document Viewer</h1>
    <PdfViewer pdf={url} />
  </div>
);

export default App;
