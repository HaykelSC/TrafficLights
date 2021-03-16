import React from "react";

export default class trafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			SelectedLight: null
		};
	}
	render() {
		Console.log(this.state);
		let redExtraClass = "";
		if (this.state.SelectedLight == "red") redExtraClass = "selected";
		let yellowExtraClass = "";
		if (this.state.SelectedLight == "yellow") yellowExtraClass = "selected";
		let greenExtraClass = "";
		if (this.state.SelectedLight == "green") greenExtraClass = "selected";

		return;
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={"red light " + redExtraClass}
					onClick={() =>
						this.setState({ SelectedLight: "red" })
					}></div>
				<div
					className={"yellow light " + yellowExtraClass}
					onClick={() =>
						this.setState({ SelectedLight: "yellow" })
					}></div>
				<div
					className={"green light " + greenExtraClass}
					onClick={() =>
						this.setState({ SelectedLight: "green" })
					}></div>
			</div>
		</div>;
	}
}
