# Input

Input component with that have focus, error, and disabled styling. Also responsible for handling invalid input on submit.

## Usage

Call the component and pass props like standard html input

```jsx
<Input type="email" placeholder="Search here..." onChange={(e) => console.log(e.target.value)} />
```

Add label for the input

```jsx
// Adding id when label is specified is recommended
<Input label="Email" id="email" />
```

Show if input is invalid or error

```jsx
<Input error />
```

Also handles invalid input by default

```jsx
// If input is required but the value is empty on submit, the input will turn into error style.
<Input required />
```

## Props

| props        | value   | default value | description                                         |
| ------------ | ------- | ------------- | --------------------------------------------------- |
| label        | string  | none          | Add label for input                                 |
| error        | boolean | false         | Show if input is invalid or error                   |
| errorMessage | string  | Invalid input | Error message content to show when input is invalid |
