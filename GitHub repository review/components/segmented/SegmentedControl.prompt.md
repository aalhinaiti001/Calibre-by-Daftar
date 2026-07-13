Segmented switch for 2–3 short choices — the control behind the "Feel" panel (mood, type voice, density). Controlled component.

```jsx
<SegmentedControl
  label="Mood"
  options={["Ink", "Midnight"]}
  value={mood}
  onChange={setMood}
/>
```

Options can be strings or `{value, label}`. Active segment fills with accent.
