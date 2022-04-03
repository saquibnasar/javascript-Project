const container = document.querySelector("#container");

const request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon-form/658/");
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
  const htmlData = `
    <div id="card">
            <img src="${data.sprites.front_shiny}" alt="" />
            <h1 class="card_body_title">${data.name}</h1>
            <div class="card_body_footer">
              <span>${data.types[0].type.name}</span>
              <span>${data.types[1].type.name}</span>
            </div>
      </div>
  `;
  container.insertAdjacentHTML("afterbegin", htmlData);
});
