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
    ['Define', 'Write the role standard with you before any finalist is read.', 'The Role Definition Matrix and Anchored Scorecard are agreed and locked. Nothing is scored yet.'],
    ['Read', 'Reviewers score each finalist independently against a role-specific standard.', 'Each reviewer records evidence on the Independent Review Grid without seeing the others’. Finalists are presented in entry order.'],
    ['Compare', 'Put the grids side by side and make the disagreement visible.', 'Divergence on stakeholder judgment is flagged, not averaged away.'],
    ['Calibrate', 'Resolve or name each disagreement, then write one recommendation.', 'The Executive Verdict Memo: one written recommendation, with the reasons and risks named, and the evidence still missing.'],
  ],

  // Illustrative role standard: [criterion, reader A, reader B, readers diverge?]
  criteria: [
    ['Close ownership', 'Signed off', 'Signed off', false],
    ['Controls design', 'Evidenced', 'Evidenced', false],
    ['Stakeholder judgment', 'Strong', 'Thin', true],
    ['Technical accounting', 'Not tested', 'Not tested', false],
  ],

  // The five Verdict components, the same in every scope.
  // The last entry is the memo and is rendered on its own.
  deliverables: [
    ['Role Definition Matrix', 'The criteria for this role and the evidence that would show each, agreed with you before any finalist is read.'],
    ['Anchored Scorecard', 'A 1–5 evidence scale for every criterion, with anchors that say what each score requires.'],
    ['Independent Review Grid', 'Each finalist scored independently against a role-specific standard. Finalists presented in entry order.'],
    ['Calibration Notes', 'Where reviewers disagreed, and how each difference was resolved or left open.'],
    ['Executive Verdict Memo', 'One written recommendation, with the reasons and risks named.'],
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

  // Scopes follow the Calibre Pricing Strategy (October 2026). Prices are quoted in
  // writing, not published here. [name, fence, what it adds]
  offers: [
    ['Second Opinion', 'Two finalists · Finance Manager and FP&A roles', 'The full review, from the same panel, on a choice between two finalists.'],
    ['Verdict', 'Up to four finalists · Controller-level roles', 'All five components, from the Role Definition Matrix to the Executive Verdict Memo.'],
    ['Verdict Senior', 'Up to four finalists · Finance Director, Group FC, CFO', 'Adds a 60–90 minute calibration session with your panel and a board-ready memo.'],
  ],
  addon: ['Probation Checkpoint', 'Add-on · day 75–90', 'The hire re-read against the same scorecard while you can still act. A review of the evidence, not a forecast of performance.'],

  terms: [
    ['Role in scope', 'One finance role'],
    ['Finalists', 'Two to four, from your shortlist'],
    ['Turnaround', 'Two weeks from a complete shortlist'],
    ['Fee', 'Fixed by scope, quoted in writing'],
    ['Payment', 'Half on mandate, half on the memo'],
    ['Candidate data', 'Signed data-processing agreement'],
  ],

  faqs: [
    ['Is this recruitment?', 'No. You source the shortlist. We review it against a written role standard and hand back a memo. No sourcing, no placement fee.'],
    ['Does Calibre choose the candidate?', 'No. The memo gives a recommendation with reasons, risks and missing evidence. Your team makes the decision.'],
    ['Why finance roles only?', 'The review depends on finance judgment. Reading whether someone owned a close, designed a control or made a technical call is the same work Daftar does on financial statements.'],
    ['Does it replace our interviewers?', 'No. Your panel still interviews. Calibre gives them one standard to argue from and names the evidence still missing.'],
    ['What evidence is it built on?', 'It is informed by structured-selection research, which favours a written standard and independent scoring. We do not apply research figures to Calibre or claim it cuts bad hires by any percentage.'],
    ['Why does timing matter in Saudi Arabia?', 'From 27 October 2026, firms with five or more accountants must fill 50% of 44 accounting titles, including financial controller and financial manager, with Saudi nationals. Replacing a controller under that rule means thinner shortlists and more riding on each choice.'],
  ],

  contactEmail: 'ahmad@daftaradvisory.com',
};
