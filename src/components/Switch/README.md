# Switch

Switch component for toggling state on or off

## Usage

Call the component in your application

```jsx
<Switch />
```

Control the switch with `active` and `onClick` props

```jsx
<Switch active={switchActive} onClick={() => setSwitchActive((prev) => !prev)} />
```

Pick your own size

```jsx
// Default to small
<Switch size="small" />
<Switch size="regular" />
<Switch size="large" />
```

Add label

```jsx
<Switch label="Notification setting" />
```

## Props

| props  | value                           | default value | description                                             |
| ------ | ------------------------------- | ------------- | ------------------------------------------------------- |
| active | boolean                         | false         | Switch's state on or off                                |
| size   | "small" \| "regular" \| "large" | "small"       | Switch's size                                           |
| label  | string                          | none          | Display a label next to the switch with specified value |
