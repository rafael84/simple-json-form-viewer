var React = require('react');

var isObject = function(o) {
	return o !== null && typeof o === 'object';
}

var styles = {
	"form": {
		"display": "flex",
		"flexFlow": "row wrap",
		"justifyContent": "space-around",
		"alignItems": "stretch",
		"alignContent": "center",
		"backgroundColor": "rgba(0,0,0,.03)"
	},
	"label": {
		"display": "block",
		"fontWeight": "900",
		"lineHeight": "0.5rem"
	},
	"input": {
		"lineHeight": "1.5rem",
		"backgroundColor": "white",
		"border": "1px solid #cacaca",
		"borderRadius": "2px",
		"padding": "0.1rem 0.5rem"
	},
	"field": {
		"flexGrow": "1",
		"flexBasis": "content",
		"display": "flex",
		"flexFlow": "column wrap",
		"justifyContent": "space-around",
		"alignItems": "stretch",
		"alignContent": "center",
		"border": "1px solid rgba(0,0,0,.1)",
		"borderRadius": "4px",
		"padding": "0.5rem"
	}
}

var JSONViewer = React.createClass({
	render () {
		let {data={}} = this.props;
		return (
			<div style={styles.form}>
				{
					Object.keys(data).map(
						key => (
							<div
								key={key}
								style={styles.field}
							>
								<label style={styles.label}>
									{key}
								</label>
								{
									isObject(data[key]) ? (
										<JSONViewer
											data={data[key]}
										/>
									) : (
										<input
											type="text"
											value={data[key] || ""}
											readOnly
											style={styles.input}
										/>
									)
								}
							</div>
						)
					)
				}
			</div>
		)
	}
});

export default JSONViewer;
