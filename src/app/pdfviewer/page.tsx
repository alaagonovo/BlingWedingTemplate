"use client";

import { useSearchParams } from "next/navigation";

export default function PdfViewer() {
  const searchParams = useSearchParams();
  const pdfSrc = searchParams.get("src");

  if (!pdfSrc) return <p>No PDF found</p>;

  return (
    <div style={{ width: "100vw", height: "100vh", overflowY: "scroll" }}>
      <iframe
        src={pdfSrc}
        width="100%"
        height="100%"
        style={{ border: "none", overflowY: "scroll" }}
      />
    </div>
  );
}
