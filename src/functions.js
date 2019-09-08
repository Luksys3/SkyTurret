import _ from 'lodash';

export default {
	changeLineLen(x1, y1, x2, y2, radius) {
	    let dx = x2 - x1;
	    let dy = y2 - y1;
	    let length = Math.sqrt(dx * dx + dy * dy);

	    if (length > 0) {
	        dx /= length;
	        dy /= length;
	    }

	    dx *= radius;
	    dy *= radius;

	    let x3 = x1 + dx;
	    let y3 = y1 + dy;

	    return [x3, y3];
	},

	/**
	 * Checks if given object has all given properties
	 *
	 * @param {object} object
	 * @param {array} properties
	 */
	has(object, properties) {
		if (typeof object !== "object" || Array.isArray(object))
			throw new TypeError("Argument object must be an instance of Object.");

		if (!Array.isArray(properties))
			throw new TypeError("Argument properties must be an instance of Array.");

		return _.every(properties, _.partial(_.has, object))
				? true
				: false;
	}
}
