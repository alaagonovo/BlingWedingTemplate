// import Link from "next/link";

// export default function NotFound() {
//   return (
//     <div>
//       <h2>Not Found</h2>
//       <p>Could not find requested resource</p>
//       <Link href="/">Return Home</Link>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures that the code is run on the client side
  }, []);

  if (!isClient) {
    return null; // You can return a loading state here or null for the server-side
  }

  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
