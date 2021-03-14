const GeoLocator = {
	lat: null,
	lon: null,
	options: {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	},
	success(pos) {
		return [pos.coords.latitude, pos.coords.longitude];
	},
	error(err) {
		console.warn(
			`Error when attempting to access device geolocation! ${err}`
		);
        return null;
	},
	getCoords() {
		navigator.geolocation.getCurrentPosition(
			this.success,
			this.error,
			this.options
		);
	},
};

export default GeoLocator;
