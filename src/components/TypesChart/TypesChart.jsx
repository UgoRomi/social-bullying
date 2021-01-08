import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {blueGreen} from "../../colors";

const TypesChart = () => {
	const data = [
		{
			name: 'Data dropping', votes: 171,
		},
		{
			name: 'Flaming', votes: 194,
		},
		{
			name: 'Harassment', votes: 136,
		},
		{
			name: 'Impersonificazione', votes: 150,
		},
		{
			name: 'Nessuno', votes: 5,
		},
	];
	return (
		<>
			<h3 className="chart-title mt-12">Quali tipi di cyberbullismo conosci?</h3>
			<div className="chart-container">
				<p className="text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id bibendum est, ac venenatis quam. Curabitur dui tortor, iaculis et venenatis ut,
					tincidunt eget purus. Nunc id lobortis lacus. Morbi blandit scelerisque gravida. Praesent lacinia cursus ligula, ac volutpat ante. Curabitur quam leo,
					consectetur venenatis urna a, iaculis hendrerit dolor. Maecenas pharetra eu ligula eget auctor. Vestibulum ac eros pulvinar, tempus orci in,
					scelerisque
					nisl. Nam vehicula ut nulla nec sagittis. Curabitur quis consectetur augue. Cras pellentesque, nulla ut ultrices congue, diam massa interdum justo,
					ultricies pretium erat metus non velit.
				</p>
				<ResponsiveContainer width="100%" height={400}>
					<BarChart
						layout={"horizontal"}
						data={data}
					>
						<CartesianGrid strokeDasharray="3 3"/>
						<XAxis dataKey="name"/>
						<YAxis/>
						<Tooltip/>
						<Legend/>
						<Bar dataKey="votes" fill={blueGreen}/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</>);
};

export default TypesChart;