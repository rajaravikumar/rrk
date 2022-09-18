import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Pdf({ name, pdfLink, view }) {
  const [width, setWidth] = useState(1200);
  //   const [numPages, setNumPages] = useState(null);
  //   const [pageNumber, setPageNumber] = useState(1);

  //   function onDocumentLoadSuccess({ numPages }) {
  //     setNumPages(numPages);
  //   }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Button
            // class="p-3 mb-2 bg-dark text-white"
            variant="secondary "
            href={pdfLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{name}
          </Button>
        </Row>

        {view ? (
          <Row
            style={{
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Document
              file={pdfLink}
              //onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex justify-content-center"
            >
              {/* Currently working only  for one page, need to configure. */}
              <br></br>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
            {/* <p>
              Page {pageNumber} of {numPages}
            </p> */}
          </Row>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}

export default Pdf;
