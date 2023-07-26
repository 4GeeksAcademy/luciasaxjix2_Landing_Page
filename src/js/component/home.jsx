import React from "react";
import Navbar from "./navbar.jsx";
import Welcome from "./welcome.jsx";
import Card from "./card.jsx"
import Footer from "./footer.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
			<>
				<Navbar/>
				<Welcome/>
				
				<div className="container">
					<div className ="row">
						<div className ="col-12 col-md-3">
						<Card/>
						</div>
						<div className ="col-12 col-md-3">
						<Card/>
						</div>
						<div className ="col-12 col-md-3">
						<Card/>
						</div>
						<div className ="col-12 col-md-3">
						<Card/>
						</div>
					</div>
				</div>
				<Footer/>
			</>
	);
};

export default Home;