module.exports = {
	APPOINTMENT: {
		name: 'appointment',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-appointment',
		documentation: 'The appointment that scheduled this encounter.',
	},
	CONDITION: {
		name: 'condition',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-condition',
		documentation: 'Reason the encounter takes place (resource).',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-date',
		documentation: 'A date within the period the Encounter lasted.',
	},
	EPISODEOFCARE: {
		name: 'episodeofcare',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-episodeofcare',
		documentation: 'Episode(s) of care that this encounter should be recorded against.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-identifier',
		documentation: 'Identifier(s) by which this encounter is known.',
	},
	INCOMINGREFERRAL: {
		name: 'incomingreferral',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-incomingreferral',
		documentation: 'The ReferralRequest that initiated this encounter.',
	},
	INDICATION: {
		name: 'indication',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-indication',
		documentation: 'Reason the encounter takes place (resource).',
	},
	LENGTH: {
		name: 'length',
		type: 'number',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-length',
		documentation: 'Length of encounter in days.',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-location',
		documentation: 'Location the encounter takes place.',
	},
	LOCATION_PERIOD: {
		name: 'location-period',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-location-period',
		documentation: 'Time period during which the patient was present at the location.',
	},
	PART_OF: {
		name: 'part-of',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-part-of',
		documentation: 'Another Encounter this encounter is part of.',
	},
	PARTICIPANT: {
		name: 'participant',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-participant',
		documentation: 'Persons involved in the encounter other than the patient.',
	},
	PARTICIPANT_TYPE: {
		name: 'participant-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-participant-type',
		documentation: 'Role of participant in encounter.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-patient',
		documentation: 'The patient present at the encounter.',
	},
	PRACTITIONER: {
		name: 'practitioner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-practitioner',
		documentation: 'Persons involved in the encounter other than the patient.',
	},
	PROCEDURE: {
		name: 'procedure',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-procedure',
		documentation: 'Reason the encounter takes place (resource).',
	},
	REASON: {
		name: 'reason',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-reason',
		documentation: 'Reason the encounter takes place (code).',
	},
	SPECIAL_ARRANGEMENT: {
		name: 'special-arrangement',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-special-arrangement',
		documentation: 'Wheelchair, translator, stretcher, etc.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-status',
		documentation: 'planned | arrived | in-progress | onleave | finished | cancelled.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-type',
		documentation: 'Specific type of encounter.',
	},
};
