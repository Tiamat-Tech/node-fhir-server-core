/**
 * @name exports
 * @summary Contributor Class
 */
module.exports = class Contributor {
  constructor(opts) {
    // Create an object to store all props
    Object.defineProperty(this, '__data', { value: {} });

    // Define getters and setters as enumerable

    Object.defineProperty(this, '_id', {
      enumerable: true,
      get: () => this.__data._id,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._id = new Element(value);
      },
    });

    Object.defineProperty(this, 'id', {
      enumerable: true,
      get: () => this.__data.id,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.id = value;
      },
    });

    Object.defineProperty(this, 'extension', {
      enumerable: true,
      get: () => this.__data.extension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.extension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, '_type', {
      enumerable: true,
      get: () => this.__data._type,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._type = new Element(value);
      },
    });
    // valueSetReference: http://hl7.org/fhir/ValueSet/contributor-type
    Object.defineProperty(this, 'type', {
      enumerable: true,
      get: () => this.__data.type,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.type = value;
      },
    });

    Object.defineProperty(this, '_name', {
      enumerable: true,
      get: () => this.__data._name,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._name = new Element(value);
      },
    });

    Object.defineProperty(this, 'name', {
      enumerable: true,
      get: () => this.__data.name,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.name = value;
      },
    });

    Object.defineProperty(this, 'contact', {
      enumerable: true,
      get: () => this.__data.contact,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let ContactDetail = require('./contactdetail.js');
        this.__data.contact = Array.isArray(value)
          ? value.map((v) => new ContactDetail(v))
          : [new ContactDetail(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'Contributor',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'Contributor';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      _type: this._type && this._type.toJSON(),
      type: this.type,
      _name: this._name && this._name.toJSON(),
      name: this.name,
      contact: this.contact && this.contact.map((v) => v.toJSON()),
    };
  }
};
