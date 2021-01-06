import React from 'react';
import {Pie, PieChart, ResponsiveContainer} from "recharts";

const CyberBullyingKnown = () => {
	const data = [
		{
			"name": "Group A",
			"value": 400
		},
		{
			"name": "Group B",
			"value": 300
		},
	];

	return (
		<>
			<h3 className="chart-title mt-12">Sai cosa è il cyberbullismo?</h3>
			<div className="chart-container">
				<ResponsiveContainer width="100%" height={400}>
					<PieChart>
						<Pie data={data} dataKey="value" nameKey="name" fill="#8884d8"/>
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
		</>);
};

export default CyberBullyingKnown;