const Dice = document.querySelector(".dice-button");
const id = document.querySelector(".id");
const advice = document.querySelector(".advice-text");
const card = document.querySelector(".advice-card");

const getAdvice = async () => {
  const res = await fetch("	https://api.adviceslip.com/advice");
  const data = await res.json();

  //   putting values into corresponding containers
  id.innerHTML = "#" + data.slip.id;
  advice.innerHTML = data.slip.advice;

  //   set card height according to advice height
  if (advice.offsetHeight > 200) {
    card.style.height = `${advice.offsetHeight + 200}px`;
    console.log("height op");
  } else {
    card.style.height = `350px`;
  }
};

Dice.addEventListener("click", getAdvice);
//render the first advice to card
getAdvice();

// animation

let tl = gsap.timeline({
  defaults: { duration: 0.5, opacity: 0 },
  stagger: 0.1,
});

tl.from(".advice-card", {
  y: 100,
});

tl.from(".anim-1", {
  x: -100,
  stagger: 0.1,
});
tl.from(".anim", {
  y: 50,
  stagger: 0.5,
});
