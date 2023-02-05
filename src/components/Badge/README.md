# Badge

Badge is a compact elements that represent an input, attribute, or action.

## Usage

The basic usage is to call the Badge without supplying any props

```jsx
<Badge />
```

Badge have many variants that can help you with color hints

```jsx
// No variant = "default"
<Badge />
<Badge variant="primary" />
<Badge variant="success" />
<Badge variant="warning" />
<Badge variant="danger" />
```

You can also use `outlined` variant to give a hint if it's not an important badge or something else

```jsx
<Badge outlined />
<Badge variant="primary" outlined />
<Badge variant="success" outlined />
<Badge variant="warning" outlined />
<Badge variant="danger" outlined />
```

Specify `icon` props to show icon next to the badge's text and you can also give it an action.

```jsx
<Badge variant="primary" icon="IcClose" onClickIcon={removeBadge} />
```
