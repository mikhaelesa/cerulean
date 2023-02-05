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

Adjust the size of the badge

```jsx
// Default to regular
<Badge size="small" />
<Badge size="regular" />
<Badge size="large" />
```

Specify `icon` props to show icon next to the badge's text and you can also give it an action.

```jsx
<Badge variant="primary" icon="IcClose" onClickIcon={removeBadge} />
```

## Props

| props       | value                                                        | default value | description                                                  |
| ----------- | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| text        | string                                                       | "Badge"       | Badge's text value                                           |
| variant     | "default" \| "primary" \| "success" \| "warning" \| "danger" | "default"     | Badge's variant for color hint                               |
| outlined    | boolean                                                      | false         | Outlined version of the badge\. Can help with priority hint  |
| icon        | TIconName                                                    | none          | Add icon next to badge's text\. Icon can be given any action |
| onClickIcon | \(\) => void                                                 | none          | Give action to icon on click                                 |
| size        | "small" \| "regular" \| "large"                              | "regular"     | Badge's size. Can be used for hierarchical                   |
