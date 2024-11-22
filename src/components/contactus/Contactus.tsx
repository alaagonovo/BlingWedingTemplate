import React from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./contactus.css";
import styles from "./contactus.module.css";
import MobileFrame from "../ui/mobileframe/Mobile";
function Contactus() {
  return (
    <section className={styles.main_grid_contactus}>
      <div>
        <h3>CONTACT US</h3>
        <h1>We’d love to hear from you</h1>
        <p>Our friendly team would love to hear from you.</p>
        <form>
          <div className="grid gap-6  md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-white dark:focus:ring-blue-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <PhoneInput
              country={"us"}
              value="515 525 56"
              inputClass="w-full p-2 border border-gray-300 bg-gray-50 rounded-md focus:ring-blue-500 focus:border-blue-500 "
              dropdownClass="custom-dropdown"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block w-full h-32 text-sm text-gray-900 bg-gray-50 rounded-lg border p-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Your Message
          </button>
        </form>
      </div>

      <div className={styles.sec_main_container}>
        <div className={styles.mobiles_container} data-aos="fade-left">
          <div className={styles.first_mob}>
            <MobileFrame video="/3.mp4" />
          </div>
          <MobileFrame video="/6.mp4" />
        </div>
      </div>
    </section>
  );
}

export default Contactus;
