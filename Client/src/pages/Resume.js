import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Document, Page } from "react-pdf";
import resume from "../Assets/Images/Ryan_Brisch_Resume.docx.pdf";

export default function About() {
  return (
    <>
      <Document file={resume}>
        <Page pagenumber={1} />
      </Document>
      <p>DownLoad Me</p>
    </>
  );
}
