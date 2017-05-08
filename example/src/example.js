var React = require('react');
var ReactDOM = require('react-dom');
var JSONViewer = require('simple-json-form-viewer');

var App = React.createClass({
	render () {
		return (
			<div>
				<JSONViewer
					data={
						{
							"id": "0001",
							"type": "donut",
							"name": "Cake",
							"ppu": 0.55,
							"batters": {
								"batter": [
									{ "id": "1001", "type": "Regular" },
									{ "id": "1002", "type": "Chocolate" },
									{ "id": "1003", "type": "Blueberry" }
								]
							},
							"topping": [
								{ "id": "5001", "type": "None" },
								{ "id": "5002", "type": "Glazed" },
								{ "id": "5005", "type": "Sugar" },
								{ "id": "5007", "type": "Powdered Sugar" },
								{ "id": "5006", "type": "Chocolate with Sprinkles" },
								{ "id": "5003", "type": "Chocolate" },
								{ "id": "5004", "type": "Maple" }
							]
						}
					}
				/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
