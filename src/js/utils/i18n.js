export const heatmapTooltip = (lang, day, month, year) => {
	return window.i18n.htTooltip.replace('{month}', month).replace('{day}', day).replace('{year}', year);
};