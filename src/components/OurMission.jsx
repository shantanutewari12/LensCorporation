import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Mission<br className="sm:block hidden" /> AI for Social Good
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Explainable AI (XAI) is an emerging subject of 
      machine learning research that refers to strategies 
      that try to provide transparency to typically opaque AI models and their predictions.
      </p>
      <Button styles={`mt-10`} />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
