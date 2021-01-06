import {assign} from "lodash";

// *
// * Colors
// *
const customPeach = "#fcaa67",
	customRed = "#b0413e",
	customCream = "#ffffc7",
	customBurgundy = "#473335",
	customGreen = "#44af69",
	customDarkBlue = "#011627",
	customTeal = "#2ec4b6",
	customGrey = "#212121",
	purpleMain = '#a78bfa'
const colors = [customPeach, customRed, customCream, customBurgundy, customGreen, customDarkBlue, customTeal];
// *
// * Typography
// *
const sansSerif = "'Fira Sans', 'sans-serif'";
const letterSpacing = "normal";
const fontSize = 14;
// *
// * Layout
// *
const baseProps = {
	width: 450,
	height: 300,
	padding: 50,
	colorScale: colors
};
// *
// * Labels
// *
const baseLabelStyles = {
	fontFamily: sansSerif,
	fontSize,
	letterSpacing,
	padding: 10,
	fill: purpleMain,
	stroke: "transparent"
};

const centeredLabelStyles = assign({textAnchor: "middle"}, baseLabelStyles);
// *
// * Strokes
// *
const strokeLinecap = "round";
const strokeLinejoin = "round";

const theme = {
	area: assign(
		{
			style: {
				data: {
					fill: customGreen
				},
				labels: baseLabelStyles
			}
		},
		baseProps
	),
	axis: assign(
		{
			style: {
				axis: {
					fill: "transparent",
					stroke: customTeal,
					strokeWidth: 1,
					strokeLinecap,
					strokeLinejoin
				},
				axisLabel: assign({}, centeredLabelStyles, {
					padding: 25
				}),
				grid: {
					fill: "none",
					stroke: "none",
					pointerEvents: "painted"
				},
				ticks: {
					fill: "transparent",
					size: 1,
					stroke: "transparent"
				},
				tickLabels: baseLabelStyles
			}
		},
		baseProps
	),
	bar: assign(
		{
			style: {
				data: {
					fill: customTeal,
					padding: 8,
					strokeWidth: 0
				},
				labels: baseLabelStyles
			}
		},
		baseProps
	),
	boxplot: assign(
		{
			style: {
				max: {padding: 8, stroke: customRed, strokeWidth: 1},
				maxLabels: assign({}, baseLabelStyles, {padding: 3}),
				median: {padding: 8, stroke: customPeach, strokeWidth: 1},
				medianLabels: assign({}, baseLabelStyles, {padding: 3}),
				min: {padding: 8, stroke: customCream, strokeWidth: 1},
				minLabels: assign({}, baseLabelStyles, {padding: 3}),
				q1: {padding: 8, fill: customGrey},
				q1Labels: assign({}, baseLabelStyles, {padding: 3}),
				q3: {padding: 8, fill: customGrey},
				q3Labels: assign({}, baseLabelStyles, {padding: 3})
			},
			boxWidth: 20
		},
		baseProps
	),
	candlestick: assign(
		{
			style: {
				data: {
					stroke: customBurgundy,
					strokeWidth: 1
				},
				labels: assign({}, baseLabelStyles, {padding: 5})
			},
			candleColors: {
				positive: "#ffffff",
				negative: customDarkBlue
			}
		},
		baseProps
	),
	chart: baseProps,
	errorbar: assign(
		{
			borderWidth: 8,
			style: {
				data: {
					fill: "transparent",
					stroke: customRed,
					strokeWidth: 2
				},
				labels: baseLabelStyles
			}
		},
		baseProps
	),
	group: assign(
		{
			colorScale: colors
		},
		baseProps
	),
	histogram: assign(
		{
			style: {
				data: {
					fill: customGrey,
					stroke: customGreen,
					strokeWidth: 2
				},
				labels: baseLabelStyles
			}
		},
		baseProps
	),
	legend: {
		colorScale: colors,
		gutter: 10,
		orientation: "vertical",
		titleOrientation: "top",
		style: {
			data: {
				type: "circle"
			},
			labels: baseLabelStyles,
			title: assign({}, baseLabelStyles, {padding: 5})
		}
	},
	line: assign(
		{
			style: {
				data: {
					fill: "transparent",
					stroke: customPeach,
					strokeWidth: 2
				},
				labels: baseLabelStyles
			}
		},
		baseProps
	),
	pie: {
		style: {
			data: {
				padding: 10,
				stroke: "transparent",
				strokeWidth: 1
			},
			labels: assign({}, baseLabelStyles, {padding: 20})
		},
		colorScale: colors,
		width: 400,
		height: 400,
		padding: 50
	},
	scatter: assign(
		{
			style: {
				data: {
					fill: customTeal,
					stroke: "transparent",
					strokeWidth: 0
				},
				labels: baseLabelStyles
			}
		},
		baseProps
	),
	stack: assign(
		{
			colorScale: colors
		},
		baseProps
	),
	tooltip: {
		style: assign({}, baseLabelStyles, {padding: 0, pointerEvents: "none"}),
		flyoutStyle: {
			stroke: customGreen,
			strokeWidth: 1,
			fill: "#f0f0f0",
			pointerEvents: "none"
		},
		flyoutPadding: 5,
		cornerRadius: 5,
		pointerLength: 10
	},
	voronoi: assign(
		{
			style: {
				data: {
					fill: "transparent",
					stroke: "transparent",
					strokeWidth: 0
				},
				labels: assign({}, baseLabelStyles, {padding: 5, pointerEvents: "none"}),
				flyout: {
					stroke: customPeach,
					strokeWidth: 1,
					fill: "#f0f0f0",
					pointerEvents: "none"
				}
			}
		},
		baseProps
	)
};

export default theme