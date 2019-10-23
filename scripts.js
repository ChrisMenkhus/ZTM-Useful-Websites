var websiteCards = [
	{
		websiteName: "cssTricks",
		websiteLink: "https://css-tricks.com",
		description: "CSS Tricks has quick information on CSS and Flexbox",
		image: "images/cssTricks.png"
	},
	{
		websiteName: "GridMalven",
		websiteLink: "http://grid.malven.co",
		description: "Easy to read cheat sheet for CSS grid",
		image: "images/gridmalven.png"
	},
	{
		websiteName: "Animate.css",
		websiteLink: "https://daneden.github.io/animate.css",
		description: "Easy css animation package, similiar to bootstrap",
		image: "images/animatecss.png"
	},
	{
		websiteName: "W3Schools",
		websiteLink: "https://www.w3schools.com",
		description: "Pretty much the documentation on web development",
		image: "images/w3schools.png"
	},
	{
		websiteName: "Bootstrap",
		websiteLink: "https://getbootstrap.com/docs/4.3/getting-started/introduction",
		description: "Gives you a CSS foundation to play with, making website creation easier and funner",
		image: "images/bootstrap.png"
	},
];

function newCard() {
	var grid = document.querySelector(".gridContainer");
	var cardTemplate = document.querySelector(".cardTemplate");
	var newCard = cardTemplate.cloneNode(true);
	grid.appendChild(newCard);
	return newCard;
};


