/**
 * @name exports
 * @static
 * @summary Arguments for the chargeitem query
 */
module.exports = {
  account: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ChargeItem.account',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-account',
    description: 'Account to place this charge',
  },
  code: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ChargeItem.code',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-code',
    description: 'A code that identifies the charge, like a billing code',
  },
  context: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ChargeItem.context',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-context',
    description: 'Encounter / Episode associated with event',
  },
  'entered-date': {
    type: 'date',
    fhirtype: 'date',
    xpath: 'ChargeItem.enteredDate',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-entered-date',
    description: 'Date the charge item was entered',
  },
  enterer: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ChargeItem.enterer',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-enterer',
    description: 'Individual who was entering',
  },
  'factor-override': {
    type: 'number',
    fhirtype: 'number',
    xpath: 'ChargeItem.factorOverride',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-factor-override',
    description: 'Factor overriding the associated rules',
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ChargeItem.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-identifier',
    description: 'Business Identifier for item',
  },
  occurrence: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'ChargeItem.occurrenceDateTime',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-occurrence',
    description: 'When the charged service was applied',
  },
  'participant-actor': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ChargeItem.participant.actor',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-participant-actor',
    description: 'Individual who was performing',
  },
  'participant-role': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ChargeItem.participant.role',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-participant-role',
    description: 'What type of performance was done',
  },
  patient: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ChargeItem.subject',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-patient',
    description: 'Individual service was done for/to',
  },
  'performing-organization': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ChargeItem.performingOrganization',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-performing-organization',
    description: 'Organization providing the charged sevice',
  },
  'price-override': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'ChargeItem.priceOverride',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-price-override',
    description: 'Price overriding the associated rules',
  },
  quantity: {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'ChargeItem.quantity',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-quantity',
    description: 'Quantity of which the charge item has been serviced',
  },
  'requesting-organization': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ChargeItem.requestingOrganization',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-requesting-organization',
    description: 'Organization requesting the charged service',
  },
  service: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ChargeItem.service',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-service',
    description: 'Which rendered service is being charged?',
  },
  subject: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ChargeItem.subject',
    definition: 'http://hl7.org/fhir/SearchParameter/ChargeItem-subject',
    description: 'Individual service was done for/to',
  },
};
