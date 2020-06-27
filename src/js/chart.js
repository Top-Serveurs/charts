import '../css/charts.scss';

import PercentageChart from './charts/PercentageChart';
import Heatmap from './charts/Heatmap';
import AxisChart from './charts/AxisChart';
import DonutChart from './charts/DonutChart';

const chartTypes = {
	bar: AxisChart,
	line: AxisChart,
	percentage: PercentageChart,
	heatmap: Heatmap,
	donut: DonutChart,
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

export { Chart, PercentageChart, Heatmap, AxisChart };