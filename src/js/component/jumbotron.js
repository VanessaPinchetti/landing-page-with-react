import React from "react";

const Jumbotron = () => {
	return (
		<div>
			<div class="container">
				<div className="jumbotron m-0 px-5 pt-0 bg-secondary">
					<h1 className="display-4 p-2 bg-border">A Warm Welcome!</h1>
					<p className="lead p-2 bg-border">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Velit laboriosam natus aperiam suscipit eveniet
						temporibus vitae officia quo eius repellendus.
						Aspernatur qui nihil porro laborum quibusdam harum
						neque, modi dignissimos.
					</p>

					<p className="lead">
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							Call to action
						</a>
					</p>
					<hr />
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;
