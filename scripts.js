var websiteCards = [
	/* This is the template card
	{
		websiteName: "cssTricks",
		websiteLink: "https://css-tricks.com",
		description: "CSS Tricks has quick information on CSS and Flexbox",
		image: "images/cssTricks.png"
	},
	*/
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
	{
		websiteName: "Pexels",
		websiteLink: "https://www.pexels.com/",
		description: "Free photos for web design",
		image: "images/pexels.png"
	},
	{
		websiteName: "Udemy: Zero To Master",
		websiteLink: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/",
		description: "Learn everything you need to know to get a job in web development",
		image: "images/ztm.png"
	}

];

var myNewCard;

function newCard() {
	var grid = document.querySelector(".gridContainer");
	var cardTemplate = document.querySelector(".cardTemplate");
	var newCard = cardTemplate.cloneNode(true);
	grid.appendChild(newCard);
	
	
	
	myNewCard = newCard;
	return newCard;
};


function populateCardWithData(card, i) {
	 card.children[0].children[0].innerText = websiteCards[i].websiteName;
	 card.children[1].src = websiteCards[i].image;
	 card.children[2].children[0].innerText = websiteCards[i].description;
	 card.children[2].children[1].href = websiteCards[i].websiteLink;
};


x = -1;

websiteCards.forEach(
	function() {
		newCard();
		x++;
		populateCardWithData(myNewCard, x);
	}
)








