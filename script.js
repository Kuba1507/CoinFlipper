const coinToShake = document.querySelector(".coin-to-shake");
const coinHeads = document.querySelector(".coin-heads");
const coinTails = document.querySelector(".coin-tails");
const headsScoring = document.querySelector(".heads-score");
const tailsScoring = document.querySelector(".tails-score");
const resetBtn = document.querySelector(".reset");

let randomNumber;
let headsScore = 1;
let tailsScore = 1;

const afterClick = () => {
	coinToShake.classList.add("fading-coin");
	coinToShake.addEventListener("animationed", () => {
		coinToShake.style.display = "none";
	});

	coinHeads.classList.add("fading-coin");
	coinTails.classList.add("fading-coin");

	randomNumber = Math.floor(Math.random() * 10);

	if (randomNumber < 5) {
		setTimeout(showHeads, 2000);
		setTimeout(addHeadsPoints, 4000);
	} else if (randomNumber > 4) {
		setTimeout(showTails, 2000);
		setTimeout(addTailsPoints, 4000);
	}

	resetAnimation();
};

const showHeads = () => {
	coinHeads.style.display = "flex";
	coinHeads.classList.add("show-coin");
};

const showTails = () => {
	coinTails.style.display = "flex";
	coinTails.classList.add("show-coin");
};

const resetAnimation = () => {
	coinHeads.classList.remove("show-coin");
	coinTails.classList.remove("show-coin");
};

const addHeadsPoints = () => {
	headsScoring.textContent = headsScore;
	headsScore++;
};

const addTailsPoints = () => {
	tailsScoring.textContent = tailsScore;
	tailsScore++;
};

const resetApp = () => {
	coinToShake.style.display = "flex";
	coinToShake.classList.remove("fading-coin");
	coinHeads.style.display = "none";
	coinHeads.classList.remove("fading-coin");
	coinHeads.classList.remove("show-coin");
	coinTails.style.display = "none";
	coinTails.classList.remove("fading-coin");
	coinTails.classList.remove("show-coin");
	headsScore = 1;
	tailsScore = 1;
	headsScoring.textContent = 0;
	tailsScoring.textContent = 0;
};

coinToShake.addEventListener("click", afterClick);
coinHeads.addEventListener("click", afterClick);
coinTails.addEventListener("click", afterClick);
resetBtn.addEventListener("click", resetApp);
