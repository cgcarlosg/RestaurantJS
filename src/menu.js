function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
  
    menu.appendChild(
      createMenuItem(
        "Bacony",
        "Beans with fried bacon"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Piggy",
        "Beans with fried pig"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Traditional",
        "Beans with steak"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Special",
        "Beans with mix of beacon and pig"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Familiar",
        "Beans in a huge pot for the whole family"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Gourmet",
        "Selected beans and species added"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Creamy",
        "Beans made soup with rice and avocato"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Steaky",
        "Beans with multiple variety of steaks"
      )
    );
  
    return menu;
  }
  
  function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = `images/beans/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }
  
  function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export default loadMenu;