/* Calibre Verdict — site copy.
   Edit words here; js/app.js renders them. Keep the voice plain and specific. */
window.CALIBRE = {
  // Order matters: this is the guided path, landing first and contact last.
  routes: ['', 'method', 'outputs', 'who', 'pilot', 'faq', 'contact'],

  rooms: [
    { id: 'method', num: 'i', name: 'Method' },
    { id: 'outputs', num: 'ii', name: 'Deliverables' },
    { id: 'who', num: 'iii', name: "Who it's for" },
    { id: 'pilot', num: 'iv', name: 'How it runs' },
    { id: 'faq', num: 'v', name: 'FAQ' },
  ],

  labels: {
    '': 'Calibre', method: 'Method', outputs: 'Deliverables', who: "Who it's for",
    pilot: 'How it runs', faq: 'FAQ', contact: 'Next step',
  },

  // [title, what the step is, what the example standard shows at this step]
  steps: [
    ['Define', 'Write the role standard with you before any finalist is read.', 'Criteria are agreed and locked. Nothing is scored yet.'],
    ['Read', 'Two readers score each finalist independently against a role-specific standard.', 'Each reader records evidence notes, without seeing the other’s. Finalists are presented in entry order.'],
    ['Compare', 'Put the notes side by side and make the disagreement visible.', 'Divergence on stakeholder judgment is flagged, not averaged away.'],
    ['Calibrate', 'Resolve or name the disagreement in one written recommendation.', 'One written recommendation, with the reasons and risks named, and the evidence still missing.'],
  ],

  // Illustrative role standard: [criterion, reader A, reader B, readers diverge?]
  criteria: [
    ['Close ownership', 'Signed off', 'Signed off', false],
    ['Controls design', 'Evidenced', 'Evidenced', false],
    ['Stakeholder judgment', 'Strong', 'Thin', true],
    ['Technical accounting', 'Not tested', 'Not tested', false],
  ],

  // The last entry is the memo and is rendered on its own.
  deliverables: [
    ['Role standard', 'The written criteria for this role, agreed before any finalist is read.'],
    ['Evidence notes', 'Each finalist scored independently against a role-specific standard. Finalists presented in entry order.'],
    ['Divergence record', 'Where the readers disagreed, and how that was resolved or left open.'],
    ['Interview follow-ups', 'Questions for your panel where the evidence is thin.'],
    ['Recommendation memo', 'One written recommendation, with the reasons and risks named.'],
  ],

  seats: [
    ['Founder / CEO', 'How much can our next finance lead really carry?', 'A clear role definition and evidence of ownership, before the mandate is set.'],
    ['CFO / finance director', 'Does this finalist’s past work match the technical load?', 'Close, controls, FP&A and technical-accounting evidence, read against your standard.'],
    ['Board / investor', 'Can the team explain why this appointment was made?', 'A decision record that shows the basis, the uncertainty and the challenge.'],
  ],

  phases: [
    ['Scope', 'Agree the role, the shortlist and the terms in writing.'],
    ['Standard', 'Write the role criteria together and lock them.'],
    ['Review', 'Independent reads, then comparison and calibration.'],
    ['Memo', 'Walk through the recommendation with your decision-makers.'],
  ],

  terms: [
    ['Role in scope', 'One finance role'],
    ['Timeline', 'Two weeks'],
    ['Finalists reviewed', 'Confirmed at scoping'],
    ['Fee', 'Fixed, quoted in writing'],
    ['Candidate data handling', 'Agreed before sharing'],
  ],

  faqs: [
    ['Is this recruitment?', 'No. You source the shortlist. We review it against a written role standard and hand back a memo. We do not source or place candidates.'],
    ['Does Calibre choose the candidate?', 'No. The memo gives a recommendation with reasons, risks and missing evidence. Your team makes the decision.'],
    ['Why finance roles only?', 'The review depends on finance judgment. Reading whether someone owned a close, designed a control or made a technical call is the same work Daftar does on financial statements.'],
    ['Does it replace our interviewers?', 'No. Your panel still interviews. Calibre gives them a shared standard and specific follow-up questions.'],
  ],

  contactEmail: 'ahmad@daftaradvisory.com',
};
