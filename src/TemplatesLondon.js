const templateLondonContent = document.querySelector(".template-contents");
const templateUserName = document.querySelector(".user-name");
const templateAddress = document.querySelector(".address-part");

// {/* <h4 class="user-name">Ahmed Adekoya, Medical Doctor</h4>  */}

class TemplatesLondonFillUpFromLocalStorage {
  constructor() {
    this.#showUserNameAndWantedJob();
    this.#showAddressEmailPhone();
  }

  #getItemsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("personalDetails"));
  }

  #showUserNameAndWantedJob() {
    setInterval(() => {
      if (!this.#getItemsFromLocalStorage()) return;
      const { firstName, lastName, wantedJob } =
        this.#getItemsFromLocalStorage()[0];
      const markup = `${firstName} ${lastName}${
        firstName.length > 0 || lastName.length > 0 ? "," : ""
      } ${wantedJob}`;
      templateUserName.innerHTML = markup;
    }, 1000);
  }

  #showAddressEmailPhone() {
    setInterval(() => {
      if (!this.#getItemsFromLocalStorage()) return;
      const c = (a) => `${a.length > 1 ? "," : ""}`;
      const { address, city, postalCode, country, phone, email } =
        this.#getItemsFromLocalStorage()[0];
      const markup = `${address}${c(address)} ${city}${c(
        city
      )} ${postalCode}${c(postalCode)} ${country}${c(country)} ${phone}${c(
        phone
      )} ${email}`;
      templateAddress.innerHTML = markup;
    }, 1000);
  }
}

export { TemplatesLondonFillUpFromLocalStorage };
