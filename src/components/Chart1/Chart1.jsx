import React from 'react';
import {VictoryChart, VictoryArea} from 'victory'
import customTheme from '../../victorytheme'

const Chart1 = () => {
	return (
		<div className="mt-8 w-screen px-2">
			<div className="w-screen">
				<VictoryChart
					theme={customTheme}
					domainPadding={{x: 10}}
				>
					<VictoryArea
						data={[
							{x: 0, y: 2},
							{x: 1, y: 3},
							{x: 2, y: 5},
							{x: 3, y: 4},
							{x: 4, y: 6}
						]}
					/>
				</VictoryChart>
			</div>
			<p className="text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id bibendum est, ac venenatis quam. Curabitur dui tortor, iaculis et venenatis ut,
				tincidunt eget purus. Nunc id lobortis lacus. Morbi blandit scelerisque gravida. Praesent lacinia cursus ligula, ac volutpat ante. Curabitur quam leo,
				consectetur venenatis urna a, iaculis hendrerit dolor. Maecenas pharetra eu ligula eget auctor. Vestibulum ac eros pulvinar, tempus orci in, scelerisque
				nisl. Nam vehicula ut nulla nec sagittis. Curabitur quis consectetur augue. Cras pellentesque, nulla ut ultrices congue, diam massa interdum justo,
				ultricies pretium erat metus non velit.
			</p>
		</div>
	);
};

export default Chart1;