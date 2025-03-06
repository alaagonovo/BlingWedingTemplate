"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PdfContent() {
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

export default function PdfViewer() {
  return (
    <Suspense fallback={<p>Loading PDF...</p>}>
      <PdfContent />
    </Suspense>
  );
}
