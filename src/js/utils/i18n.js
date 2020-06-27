export const MONTH_NAMES = {
	"fr": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
	"en": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

export const MONTH_NAMES_SHORT =  {
	"fr": ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
	"en": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

export const DAY_NAMES_SHORT =  {
	"fr": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
	"en": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

export const DAY_NAMES =  {
	"fr": ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
	"en": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
};

export const LESS =  {
	"fr": ["Moins"],
	"en": ["Less"],
};

export const MORE =  {
	"fr": ["Plus"],
	"en": ["More"],
};

export const heatmapTooltip = (lang, day, month, year) => {
	if (lang === 'fr') {
		return ' le ' + day + ' ' + month + ' ' + year;
	}
	return ' on ' + month + ' ' + day + ', ' + year;
};