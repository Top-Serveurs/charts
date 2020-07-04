import '../css/charts.scss';

import Heatmap from './charts/Heatmap';
import AxisChart from './charts/AxisChart';

const chartTypes = {
	bar: AxisChart,
	line: AxisChart,
	heatmap: Heatmap
};

function getChartByType(chartType = 'line', parent, options) {
	if (chartType === 'axis-mixed') {
		options.type = 'line';
		return new AxisChart(parent, options);
	}

	return new chartTypes[chartType](parent, options);
}

class Chart {
	constructor(parent, options) {
		return getChartByType(options.type, parent, options);
	}
}

export { Chart, Heatmap, AxisChart };