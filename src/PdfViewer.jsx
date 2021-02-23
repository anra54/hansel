import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./PdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const firstPage = () => {
    setPageNumber(1);
  };

  const lastPage = () => {
    setPageNumber(numPages);
  };

  return (
    <div>
      <div className="controls">
        <button className="btn" onClick={firstPage} disabled={pageNumber === 1}>
          <span>&laquo;</span>
        </button>
        <button className="btn" onClick={prevPage} disabled={pageNumber === 1}>
          <span>&#8249;</span>
        </button>
        <span className="page-info">Page {pageNumber}/{numPages}</span>
        <button className="btn" onClick={nextPage} disabled={pageNumber === numPages}>
          <span>&#8250;</span>
        </button>
        <button className="btn" onClick={lastPage} disabled={pageNumber === numPages}>
          <span>&raquo;</span>
        </button>
      </div>

      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        onContextMenu={(e) => e.preventDefault()}
        className="pdf-container"
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default PdfViewer;
