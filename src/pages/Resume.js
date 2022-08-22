import { Typography } from "@mui/material";

const App = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Ryan_Brisch_Resume.docx.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Ryan_Brisch_Resume.docx.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <center>
        <h1 style={{ fontWeight: "normal", fontFamily: "BelleFair" }}>
          Thank You for Your Interest
        </h1>
        <h3 style={{ fontWeight: "normal", fontFamily: "BelleFair" }}>
          Click on below button to download a PDF version of my resume
        </h3>
        <p style={{ fontWeight: "normal", fontFamily: "BelleFair" }}>
          Please use any of the options in the footer to reach out about any
          questions or interest in discussing how I can be a benefit to your
          company.
        </p>
        <button onClick={onButtonClick}>Download Resume</button>
      </center>
    </>
  );
};

export default App;
