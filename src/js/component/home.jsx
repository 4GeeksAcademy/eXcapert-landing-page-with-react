import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./cards.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const cards = [
	{
		image: "https://picsum.photos/500/325",
		title: "Card Title",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		button: "Find Out More!"
	},
	{
		image: "https://picsum.photos/500/326",
		title: "Card2 Title",
		description: "onsectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		button: "Find Out More!"
	},
	{
		image: "https://picsum.photos/500/324",
		title: "Card3 Title",
		description: "onsectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		button: "Find Out More!"
	},
	{
		image: "https://picsum.photos/499/325",
		title: "Card4 Title",
		description: "adipisicing elit. Sapiente esse necessitatibus neque.",
		button: "Find Out More!"
	}
	
];

const Home = () => {

    return (
		<main>
			<Navbar />
			<div class="container">
				<Jumbotron/>
				<div class="row row-cols-1 row-cols-md-4 g-4">
					{cards.map((card, idx) => <Card data={card} key={idx} />)}
				</div>
			</div> 
			<footer class="footer mt-3 p-4 bg-dark  text-center">
				<div class="container">
					<span class="text-muted ">Copyright My Site 2023.</span>
				</div>
				</footer>

		</main>
    );
	
};

console.log();
export default Home;
