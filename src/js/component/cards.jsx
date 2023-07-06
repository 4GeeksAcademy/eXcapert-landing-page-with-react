import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Card = ({data =[] }) => {

	return (
			<div className="col">
				<div className="card text-center h-100">
					
					<img src={data.image} className="card-img-top" />
							
					<div className="card-body">
						<h5 className="card-title">{data.title}</h5>
						<p className="card-text">{data.description}</p>
					</div>
					<div className="card-footer bg-white">
 						<a href="#" className="btn btn-primary">{data.button}</a>
 					</div>
				</div>
			</div>
			);
};

export default Card;
