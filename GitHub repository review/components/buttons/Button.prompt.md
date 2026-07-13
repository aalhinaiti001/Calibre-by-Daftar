Primary call-to-action. Use `primary` for the main action on a surface, `dark` for hero moments, `ghost` for secondary/tertiary actions.

```jsx
<Button variant="primary" href="#contact">Scope a call</Button>
<Button variant="dark" uppercase={false} size="md">Diagnose one role</Button>
<Button variant="ghost">See the method</Button>
```

Labels are uppercase + wide-tracked by default; pass `uppercase={false}` for sentence-case hero buttons. Colors resolve through mood tokens, so the button re-skins automatically under `data-mood="midnight"`.
