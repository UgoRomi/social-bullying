import React from 'react';
import {Cell, Legend, Pie, PieChart, ResponsiveContainer} from "recharts";
import {pieColors} from "../../colors";
import {renderCustomizedLabel} from "../../utils";

const DiscoveredChart = () => {
	const data = [
		{
			"value": 60.7,
			"name": "Social/Internet"
		},
		{
			"value": 14.5,
			"name": "Scuola"
		},
		{
			"value": 20.1,
			"name": "TV/Giornali"
		},
		{
			"value": 4.7,
			"name": "Amici/Familiari"
		},
	];

	return (
		<>
			<h3 className="chart-title mt-12">Come ne sei venuto/a a conoscenza?</h3>
			<div className="chart-container">
				<ResponsiveContainer width="100%" height={400}>
					<PieChart>
						<Legend layout="horizontal" verticalAlign="top" align="center"/>
						<Pie data={data} dataKey="value" nameKey="name" fill="#8884d8" label={renderCustomizedLabel}>{
							data.map((entry, index) => <Cell fill={pieColors[index % pieColors.length]}/>)
						}</Pie>
					</PieChart>
				</ResponsiveContainer>
				<p className="text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id bibendum est, ac venenatis quam. Curabitur dui tortor, iaculis et venenatis ut,
					tincidunt eget purus. Nunc id lobortis lacus. Morbi blandit scelerisque gravida. Praesent lacinia cursus ligula, ac volutpat ante. Curabitur quam leo,
					consectetur venenatis urna a, iaculis hendrerit dolor. Maecenas pharetra eu ligula eget auctor. Vestibulum ac eros pulvinar, tempus orci in,
					scelerisque
					nisl. Nam vehicula ut nulla nec sagittis. Curabitur quis consectetur augue. Cras pellentesque, nulla ut ultrices congue, diam massa interdum justo,
					ultricies pretium erat metus non velit.
				</p>
			</div>
		</>
	);
};

export default DiscoveredChart;