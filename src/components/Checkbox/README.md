# Checkbox

Custom checkbox with extra spices

## Usage

Just call it in your jsx or tsx file

```jsx
<Checkbox />
```

Add label to checkbox

```jsx
<Checkbox label="French Fries" />
<Checkbox label="Cheeseburger" />
```

Control your checkbox

```jsx
<Checkbox label="Disabled" disabled />
// You can use checked or defaultChecked
<Checkbox label="Disabled and checked" disabled checked />
```

## Props

| props          | value   | default value | description                            |
| -------------- | ------- | ------------- | -------------------------------------- |
| label          | string  | none          | Add label to the right of the checkbox |
| disabled       | boolean | false         | Disable the checkbox                   |
| checked        | boolean | false         | Set the checkbox state to checked      |
| defaultChecked | boolean | false         | Set the checkbox state to checked      |
