function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");
  
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone: 111 111 111 111";
  
    const address = document.createElement("p");
    address.textContent = "Bogota, Andinos Mall";
  
    const restaurantLocation = document.createElement("img");
    restaurantLocation.src = "images/restaurant-location.jpg";
    restaurantLocation.alt = "Mozzafiato restaurant location";
  
    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);
  
    return contact;
  }
  
  function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
  }
  
  export default loadContact;