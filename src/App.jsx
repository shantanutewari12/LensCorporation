import styles from "./style";
import { Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Services from "./components/Services";
import { Contact } from "./components/GetInTouch";

const App = () => (
  <div className="bg-gray-900 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CTA />
        <Services />
        <Business />
        <Stats />
        <CardDeal />
        <Clients />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
