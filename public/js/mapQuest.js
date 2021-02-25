function initMap() {
	// add your code here
	L.mapquest.key = 'KcWNVu3FRujZCMRFEDaBIeQaPq3PqmKP';

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
	center: [32.8783137,-117.2401845],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12
	});
}