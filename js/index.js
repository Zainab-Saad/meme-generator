import { memes, jokes, quotes, riddles } from "./resources.js";

const showMeme = () => {
  const main = getClearedMainElement();
  getClearedAsideElement();
  const meme = randomElemGenerator(memes);
  const header3 = document.createElement("h3");
  header3.textContent = "Meme";
  main.appendChild(header3);

  const image = document.createElement("img");
  image.src = meme;
  main.appendChild(image);
};

const tellJoke = () => {
  const main = getClearedMainElement();
  getClearedAsideElement();
  const joke = randomElemGenerator(jokes);

  const header3 = document.createElement("h3");
  header3.textContent = "Lemme tell you a joke";
  main.appendChild(header3);

  const div = createDiv(main);

  const para = document.createElement("p");
  para.textContent = joke;
  div.appendChild(para);
};

const randomQuote = () => {
  const main = getClearedMainElement();
  getClearedAsideElement();
  const quote = randomElemGenerator(quotes);
  const header3 = document.createElement("h3");
  header3.textContent = "Lemme inspire you :p";
  main.appendChild(header3);

  const para1 = document.createElement("p");
  para1.className = "quote";
  para1.textContent = quote.quote;
  const div = createDiv(main);
  div.appendChild(para1);

  const para2 = document.createElement("p");
  para2.className = "author";
  para2.textContent = `~ ${quote.author}`;
  div.appendChild(para2);
};

const riddleMe = () => {
  const main = getClearedMainElement();
  const aside = getClearedAsideElement();
  const riddle = randomElemGenerator(riddles);
  const header3 = document.createElement("h3");
  header3.textContent = "Riddle";
  main.appendChild(header3);

  const para = document.createElement("p");
  para.textContent = riddle.question;
  const div = createDiv(main);
  div.appendChild(para);

  const showAnswerBtn = document.createElement("button");
  showAnswerBtn.innerHTML = "Show Answer";
  showAnswerBtn.className = "show-answer-btn";
  aside.appendChild(showAnswerBtn);

  window.localStorage.setItem("answer", riddle.answer);

  showAnswerBtn.onclick = showRiddleAnswer;
};

const showRiddleAnswer = () => {
  const showAnswerBtn = document.querySelector(".show-answer-btn");
  const riddleAnswer = window.localStorage.getItem("answer");

  const para = document.createElement("p");
  para.className = "riddle-answer";
  para.textContent = riddleAnswer;

  document.querySelector(".content").appendChild(para);

  window.localStorage.clear();

  showAnswerBtn.remove();
};

const randomElemGenerator = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length);
  let arrayElem = array[randomIndex];
  return arrayElem;
};

const getClearedMainElement = () => {
  const main = document.querySelector("main");
  main
    .querySelectorAll("*")
    .forEach((n) => (n.className != "heading" ? n.remove() : {}));
  return main;
};

const getClearedAsideElement = () => {
  const aside = document.querySelector("aside");
  aside
    .querySelectorAll("*")
    .forEach((n) =>
      n.className != "heading" && n.className != "btn" ? n.remove() : {}
    );
  return aside;
};

const createDiv = (parent) => {
  const div = document.createElement("div");
  div.className = "content";
  parent.appendChild(div);
  return div;
};

const showMemeBtn = document.getElementById("show-meme");
showMemeBtn.onclick = showMeme;

const tellJokeBtn = document.getElementById("tell-joke");
tellJokeBtn.onclick = tellJoke;

const randomQuoteBtn = document.getElementById("random-quote");
randomQuoteBtn.onclick = randomQuote;

const riddleMeBtn = document.getElementById("riddle-me");
riddleMeBtn.onclick = riddleMe;
