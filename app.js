var adviceId = document.getElementById("adviceId");
var adviceContent = document.getElementById("adviceContent");
var pattern = document.getElementById("pattern");

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.slip);

      adviceId.innerText = "Advice #" + data.slip.id;
      adviceContent.innerText = "„" + data.slip.advice + "”";
    });
};

getAdvice();

if (window.innerWidth < 400) {
  pattern.setAttribute("src", "./images/pattern-divider-mobile.svg");
} else {
  pattern.setAttribute("src", "./images/pattern-divider-desktop.svg");
}
