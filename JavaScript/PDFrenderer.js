var pdf = new PDFObject({
  src: "../Dissertation.pdf",
  id: "pdfRendered",
  pdfOpenParams: {
    view: "FitH"
  }
}).embed("pdfRenderer");