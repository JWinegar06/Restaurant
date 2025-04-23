const URL = "https://iskarr.github.io/austindonovan.github.io/api/business.json";


let cards = document.querySelector("div.cards");
let para = document.createElement("p");

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let business = jsObject.business;

    for (let i = 0; i < business.length; i++) {
      // Create card element for each business
      let card = document.createElement("section");
      card.className = "card";

      // Create and append business name
      let h2 = document.createElement("h2");
      h2.textContent = business[i].name;
      card.appendChild(h2);

      // Create and append business image
      let img = document.createElement("img");
      img.setAttribute("src", business[i].imageurl);  
      img.setAttribute("alt", business[i].name + " image");
      card.appendChild(img);

      // Create and append business location
      let location = document.createElement("p");
      location.textContent = "Address: " + business[i].address; 
      card.appendChild(location);

      // Create and append business description
      let description = document.createElement("p");
      description.textContent = business[i].description; 
      card.appendChild(description);

      // Append the card to the cards container
      cards.appendChild(card);
    }
  })
 