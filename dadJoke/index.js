const jokes = document.querySelector("#jokes");
const jokeBtn = document.querySelector("#jokeBtn");

const setHeader = {
  headers: {
    Accept: "application/json",
  },
};

// const generateJokes = () => {
//   fetch("https://icanhazdadjoke.com/", setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//       jokes.innerHTML = data.joke;
//     })
//     .catch((err) => console.log(err));
// };
const generateJokes = async () => {
  try {
    const res = await fetch("https://icanhazdadjoke.com/", setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (err) {
    console.error(err);
  }
};
jokeBtn.addEventListener("click", generateJokes);
generateJokes();
