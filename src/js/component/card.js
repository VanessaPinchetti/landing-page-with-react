import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export const Card = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-3">
					{" "}
					<div
						className="card text-center"
						style={{ width: "18 rem" }}>
						<img
							src={rigoImage}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>{" "}
				</div>
				<div className="col-3">
					{" "}
					<div
						className="card text-center"
						style={{ width: "18 rem" }}>
						<img
							src={rigoImage}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>{" "}
				</div>
				<div className="col-3">
					{" "}
					<div
						className="card text-center"
						style={{ width: "18 rem" }}>
						<img
							src={rigoImage}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>{" "}
				</div>
				<div className="col-3">
					{" "}
					<div
						className="card text-center"
						style={{ width: "18 rem" }}>
						<img
							src={rigoImage}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>{" "}
				</div>
			</div>
		</div>
	);
};

export default Card;
