/**
 * @name exports
 * @static
 * @summary Arguments for the observation query
 */
module.exports = {
  code: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.code',
    definition: 'http://hl7.org/fhir/SearchParameter/clinical-code',
    description:
      'Multiple Resources:     * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Procedure](procedure.html): A code to identify a  procedure  * [List](list.html): What the purpose of this list is  * [ProcedureRequest](procedurerequest.html): What is being requested/ordered  * [Observation](observation.html): The code of the observation type  * [DiagnosticReport](diagnosticreport.html): The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [Condition](condition.html): Code for the condition  ',
  },
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'Observation.effectiveDateTime',
    definition: 'http://hl7.org/fhir/SearchParameter/clinical-date',
    description:
      "Multiple Resources:     * [Consent](consent.html): When this Consent was created or indexed  * [SupplyRequest](supplyrequest.html): When the request was made  * [RiskAssessment](riskassessment.html): When was assessment made?  * [CareTeam](careteam.html): Time period team covers  * [FamilyMemberHistory](familymemberhistory.html): When history was captured/updated  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [AllergyIntolerance](allergyintolerance.html): Date record was believed accurate  * [CarePlan](careplan.html): Time period plan covers  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [Procedure](procedure.html): Date/Period the procedure was performed  * [List](list.html): When the list was prepared  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [Flag](flag.html): Time period when flag is active  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Composition](composition.html): Composition editing time  * [DetectedIssue](detectedissue.html): When identified  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  ",
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
    description:
      'Multiple Resources:     * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [Goal](goal.html): External Ids for this goal  * [Consent](consent.html): Identifier for this record (external references)  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [SupplyRequest](supplyrequest.html): Unique identifier  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [CareTeam](careteam.html): External Ids for this team  * [ImagingStudy](imagingstudy.html): Other identifiers for the Study  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [Procedure](procedure.html): A unique identifier for a procedure  * [List](list.html): Business identifier  * [Immunization](immunization.html): Business identifier  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  * [ProcedureRequest](procedurerequest.html): Identifiers assigned to this order  * [Observation](observation.html): The unique id for a particular observation  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Condition](condition.html): A unique identifier of the condition record  * [Composition](composition.html): Logical identifier of composition (version-independent)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [SupplyDelivery](supplydelivery.html): External identifier  ',
  },
  patient: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.subject',
    definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
    description:
      'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
  },
  encounter: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.context',
    definition: 'http://hl7.org/fhir/SearchParameter/clinical-encounter',
    description:
      'Multiple Resources:     * [DocumentReference](documentreference.html): Context of the document  content  * [RiskAssessment](riskassessment.html): Where was assessment performed?  * [DeviceRequest](devicerequest.html): Encounter or Episode during which request was created  * [Procedure](procedure.html): Search by encounter  * [List](list.html): Context in which list created  * [VisionPrescription](visionprescription.html): Return prescriptions with this encounter identifier  * [ProcedureRequest](procedurerequest.html): An encounter in which this request is made  * [Flag](flag.html): Alert relevant during encounter  * [Observation](observation.html): Encounter related to the observation  * [DiagnosticReport](diagnosticreport.html): The Encounter when the order was made  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this encounter identifier  * [Composition](composition.html): Context of the Composition  ',
  },
  'based-on': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.basedOn',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-based-on',
    description: 'Reference to the test or procedure request.',
  },
  category: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.category',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-category',
    description: 'The classification of the type of observation',
  },
  'code-value-concept': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-code-value-concept',
    description: 'Code and coded value parameter pair',
  },
  'code-value-date': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-code-value-date',
    description: 'Code and date/time value parameter pair',
  },
  'code-value-quantity': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-code-value-quantity',
    description: 'Code and quantity value parameter pair',
  },
  'code-value-string': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-code-value-string',
    description: 'Code and string value parameter pair',
  },
  'combo-code': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.code',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-combo-code',
    description: 'The code of the observation type or component type',
  },
  'combo-code-value-concept': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-combo-code-value-concept',
    description: 'Code and coded value parameter pair, including in components',
  },
  'combo-code-value-quantity': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-combo-code-value-quantity',
    description: 'Code and quantity value parameter pair, including in components',
  },
  'combo-data-absent-reason': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.dataAbsentReason',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-combo-data-absent-reason',
    description:
      'The reason why the expected value in the element Observation.value[x] or Observation.component.value[x] is missing.',
  },
  'combo-value-concept': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-combo-value-concept',
    description:
      'The value or component value of the observation, if the value is a CodeableConcept',
  },
  'combo-value-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'Observation.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-combo-value-quantity',
    description:
      'The value or component value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)',
  },
  'component-code': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.component.code',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-code',
    description: 'The component code of the observation type',
  },
  'component-code-value-concept': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-code-value-concept',
    description: 'Component code and component coded value parameter pair',
  },
  'component-code-value-quantity': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-code-value-quantity',
    description: 'Component code and component quantity value parameter pair',
  },
  'component-data-absent-reason': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.component.dataAbsentReason',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-data-absent-reason',
    description:
      'The reason why the expected value in the element Observation.component.value[x] is missing.',
  },
  'component-value-concept': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.component.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-value-concept',
    description: 'The value of the component observation, if the value is a CodeableConcept',
  },
  'component-value-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'Observation.component.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-value-quantity',
    description:
      'The value of the component observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)',
  },
  context: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.context',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-context',
    description: 'Healthcare event  (Episode-of-care or Encounter) related to the observation',
  },
  'data-absent-reason': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.dataAbsentReason',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-data-absent-reason',
    description:
      'The reason why the expected value in the element Observation.value[x] is missing.',
  },
  device: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.device',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-device',
    description: 'The Device that generated the observation data.',
  },
  method: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.method',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-method',
    description: 'The method used for the observation',
  },
  performer: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.performer',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-performer',
    description: 'Who performed the observation',
  },
  related: {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-related',
    description: 'Related Observations - search on related-type and related-target together',
  },
  'related-target': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.related.target',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-related-target',
    description: 'Resource that is related to this one',
  },
  'related-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.related.type',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-related-type',
    description: 'has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by',
  },
  specimen: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.specimen',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-specimen',
    description: 'Specimen used for this observation',
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.status',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-status',
    description: 'The status of the observation',
  },
  subject: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.subject',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-subject',
    description: 'The subject that the observation is about',
  },
  'value-concept': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-concept',
    description: 'The value of the observation, if the value is a CodeableConcept',
  },
  'value-date': {
    type: 'date',
    fhirtype: 'date',
    xpath: 'Observation.valueDateTime',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-date',
    description: 'The value of the observation, if the value is a date or period of time',
  },
  'value-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'Observation.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-quantity',
    description:
      'The value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)',
  },
  'value-string': {
    type: 'string',
    fhirtype: 'string',
    xpath: 'Observation.valueString',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-string',
    description:
      'The value of the observation, if the value is a string, and also searches in CodeableConcept.text',
  },
};
