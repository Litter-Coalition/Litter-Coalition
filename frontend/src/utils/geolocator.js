const GeoLocator = {
	lat: null,
	lon: null,
	options: {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	},
	success(pos) {
		const coords = pos.coords;
		return [coords.latitude, coords.longitude];
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

		return [1, 2]
	},
};

export default GeoLocator;
