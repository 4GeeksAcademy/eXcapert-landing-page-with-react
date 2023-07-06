import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
	return (
		<div className="row">
			<div className="bg-light p-5 rounded-lg m-3">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid
similique quaerat nam nobis illo aspernatur vita fugiat numquam repellat.</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
			</div>
		</div>
		);
};




export default Jumbotron;
