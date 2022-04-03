{
  /* <span id="temp" class="fa-solid"></span> */
}
const tempLoad = () => {
  const temp = document.querySelector("#temp");
  temp.className = "fa-solid fa-temperature-empty";
  //   setTimeout(() => {
  //     temp.className = "fa-solid fa-temperature-empty";
  //   }, 1000);
  setTimeout(() => {
    temp.className = "fa-solid fa-temperature-quarter";
    temp.style.color = "#f8b627";
  }, 1000);
  setTimeout(() => {
    temp.className = "fa-solid fa-temperature-half";
  }, 2000);
  setTimeout(() => {
    temp.className = "fa-solid fa-temperature-three-quarters";
  }, 3000);
  setTimeout(() => {
    temp.className = "fa-solid fa-temperature-full";
    temp.style.color = "#d63031";
  }, 4000);
};
tempLoad();
setInterval(tempLoad, 5000);
