// export default [
//   { name: "ABOUT US", path: "/aboutus" },
//   { name: "LATEST WORK", path: "/latestwork" },
//   { name: "VLOGS", path: "/vlogs" },
//   { name: "COUPONS", path: "/coupons" },
//   { name: "CONTACT", path: "#contactus" },
// ];
// links.ts
interface LinkType {
  name: string;
  path: string;
  type: "internal" | "external";
}

const links: LinkType[] = [
  { name: "ABOUT US", path: "/aboutus", type: "external" },
  { name: "LATEST WORK", path: "/latestwork", type: "external" },
  { name: "VLOGS", path: "/vlogs", type: "external" },
  { name: "COUPONS", path: "/coupons", type: "external" },
  { name: "CONTACT US", path: "#contactus", type: "internal" },
];

export default links;
