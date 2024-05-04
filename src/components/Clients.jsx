import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <div>
    <h3 className='text-4xl font-bold mb-6 text-center text-white'>We Work With Amazing Clients</h3>
    <section className={`${styles.flexCenter} my-4 overflow-hidden`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 animate-bounce`}>
            <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Clients;
