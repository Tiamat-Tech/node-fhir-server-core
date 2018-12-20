const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class ImplementationGuidePage extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImplementationGuidePage';
		Object.assign(this, opt);
	}

	// This is a ImplementationGuidePage resource
	static get __resourceType() {
		return 'ImplementationGuidePage';
	}

	// The source address for the page.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field source`);
		}
		this.__source = new_value;
	}

	// A short name used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The kind of page that this is. Some pages are autogenerated (list, example), and other kinds are of interest so that tools can navigate the user to the page of interest.
	get kind() {
		return this.__kind;
	}

	set kind(new_value) {
		this.__kind = new_value;
	}

	// For constructed pages, what kind of resources to include in the list.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = Array.isArray(new_value) ? new_value : [new_value];
	}

	// For constructed pages, a list of packages to include in the page (or else empty for everything).
	get package() {
		return this.__package;
	}

	set package(new_value) {
		this.__package = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The format of the page.
	get format() {
		return this.__format;
	}

	set format(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field format`);
		}
		this.__format = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			source: this.__source,
			name: this.__name,
			kind: this.__kind,
			type: this.__type,
			package: this.__package,
			format: this.__format,
		});
	}
}

module.exports = ImplementationGuidePage;
