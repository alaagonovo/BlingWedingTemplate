import About from "@/components/about/About";
import AboutCard, { ICategory } from "@/components/about/card/AboutCard";
import AboutHero from "@/components/about/heroabout/AboutHero";
import styles from "./pagestyle.module.css";
function page() {
  const category = [
    {
      image: "/16.webp",
      title: "WEDDING",
    },
    {
      image: "/about2.webp",
      title: "EVENTS",
    },
    {
      image: "/about3.webp",
      title: "COUPONS",
    },
    {
      image: "/ras_elkhima2.webp",
      title: "EWPC event",
      pdf: "/pdfs/Press Release - EWPC.pdf",
    },
    {
      image: "/ras_elkhima1.webp",
      title: "EWPC event",
      pdf: "/pdfs/The Global Luxury Wedding Industry Gears Up for its Most Anticipated Edition of EWPC in Ras Al.pdf",
    },
  ];
  return (
    <div className={styles.main_about}>
      <div className={styles.top_cont}></div>
      <AboutHero />
      <About />
      <section className={styles.category_grid}>
        {category.map((item: ICategory, index: number) => (
          <AboutCard category={item} key={index} />
        ))}
      </section>
    </div>
  );
}

export default page;
