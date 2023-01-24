# Button

Simple button component

## Usage

Just pass a text and a button will appear with the text

```xml
<Button>Click me</Button>
```

Button also comes with 3 variants with primary variant as default. See [Props](#Props)

```xml
<!--  -->
<Button variant="outlined">I'm Outlined Button</Button>
```

You can choose between 3 button sizes with regular size as default. See [Props](#Props)

```xml
<!--  -->
<Button size="large">I'm Large Button</Button>
```

## Props

| props    | value                             | default value | description                           |
| -------- | --------------------------------- | ------------- | ------------------------------------- |
| children | ReactNode                         | none          | Content of the button                 |
| variant  | "primary" \| "outlined" \| "nude" | "primary"     | Choose variant with different styles. |
| size     | "large" \| "regular" \| "small"   | "regular"     | Change button size                    |
