const mouth = document.querySelector("#mouth");
const emotionElements = document.querySelectorAll(".rating-container div");

console.log(emotionElements);

function selectEmotion(e) {
  console.log("clicked", e.target);
}

emotionElements.forEach((emotionElement) =>
  emotionElement.addEventListener("click", selectEmotion)
);
