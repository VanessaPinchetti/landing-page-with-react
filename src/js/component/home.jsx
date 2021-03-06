import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="row">
				<div className="col-12">
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<a className="navbar-brand" href="#">
							Start Bootstrap
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link" href="#">
										Home{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										About
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Services
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Contact
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Home;
