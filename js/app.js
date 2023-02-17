const mouth = document.querySelector("#mouth");
const emotionElements = document.querySelectorAll(".rating-container div");

console.log(emotionElements);

function selectEmotion(e) {
  mouth.classList.remove("happy-mouth", "indifferent-mouth", "sad-mouth");
  console.log("clicked", e.target.id);
  const chosenEmotion = e.target.id;

  if (chosenEmotion === "bad") {
    mouth.classList.add("sad-mouth");
  }
  if (chosenEmotion === "okay") {
    mouth.classList.add("indifferent-mouth");
  }
  if (chosenEmotion === "good") {
    mouth.classList.add("happy-mouth");
  }
}

emotionElements.forEach((emotionElement) =>
  emotionElement.addEventListener("click", selectEmotion)
);
