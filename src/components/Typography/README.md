# Typography

Render pre-styled text and choose which tag to use for rendering the text

## Usage

Just need to call the component in your jsx

```jsx
<!-- Will render p tag with body-1 variant by default -->
<Typography>Typography</Typography>
```

If you want to change the tag just pass component props

```jsx
<!-- Will render h1 -->
<Typography component="h1">Typography</Typography>
```

You can also change the style of the text by passing variant props

```jsx
<!-- Will render h1 with subheading-1 styling -->
<Typography variant="subheading-1" component="h1">Typography</Typography>
```

## Props

| props     | value                                                                                                                                                                                      | default value | description                                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | --------------------------------------------- |
| children  | ReactNode                                                                                                                                                                                  | none          | Typography content                            |
| variant   | "heading-1" \| "heading-2" \| "heading-1" \| "subheading-1" \| "subheading-2" \| "subheading-3" \| "body-1" \| "body-2" \| "body-3" \| "button-1" \| "button-2" \| "button-3" \| "caption" | "body-1"      | Choose variant to determine typography style. |
| component | "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p" \| "span"                                                                                                                              | "p"           | Which tag to use for the typography           |
