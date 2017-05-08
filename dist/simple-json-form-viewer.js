(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JSONViewer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var isObject = function isObject(o) {
	return o !== null && typeof o === 'object';
};

var styles = {
	form: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "space-around",
		alignItems: "stretch",
		alignContent: "space-around"
	},
	label: {
		display: "block",
		fontWeight: "900",
		lineHeight: "1.5rem"
	},
	input: {
		lineHeight: "1.5rem",
		backgroundColor: "white",
		border: "1px solid #cacaca",
		borderRadius: "2px",
		padding: "0.1rem 0.5rem"
	},
	field: {
		flexGrow: "1",
		display: "flex",
		flexFlow: "column wrap",
		justifyContent: "space-around",
		alignItems: "stretch",
		alignContent: "space-around",
		border: "1px solid rgba(0,0,0,.1)",
		borderRadius: "4px",
		padding: "0.5rem",
		margin: "0.25rem",
		backgroundColor: "rgba(0,0,0,.03)"
	}
};

var JSONViewer = React.createClass({
	displayName: 'JSONViewer',

	render: function render() {
		var _props$data = this.props.data;
		var data = _props$data === undefined ? {} : _props$data;

		return React.createElement(
			'div',
			{ style: styles.form },
			Object.keys(data).map(function (key) {
				return React.createElement(
					'div',
					{
						key: key,
						style: styles.field
					},
					React.createElement(
						'label',
						{ style: styles.label },
						key
					),
					isObject(data[key]) ? React.createElement(JSONViewer, {
						data: data[key]
					}) : React.createElement('input', {
						type: 'text',
						value: data[key] || "",
						readOnly: true,
						style: styles.input
					})
				);
			})
		);
	}
});

exports['default'] = JSONViewer;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});