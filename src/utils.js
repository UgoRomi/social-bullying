//const RADIAN = Math.PI / 180;
export const renderCustomizedLabel = ({_cx, _cy, _midAngle, _innerRadius, _outerRadius, percent, _index}) => {
	//const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	// const x = cx + radius * Math.cos(-midAngle * RADIAN);
	// const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		`${(percent * 100).toFixed(0)}%`
		// <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
		// 	{`${(percent * 100).toFixed(0)}%`}
		// </text>
	);
};