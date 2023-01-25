# Icon

Provide an easy way to add icon in your app. We use [Ant Design Icons](https://ant.design/components/icon) as our icons.

## Usage

```jsx
<!-- Will show a default Check Icon -->
<Icon />
```

If you want to change the icon, simply pass `iconName` props and specify the icon name.

```jsx
<Icon iconName="IcClose" />
```

Changing color is super easy

```jsx
<!-- You can also use hex for color -->
<Icon color="red" />
```

Size? Say no more

```jsx
<!-- Size props specifies both width and height -->
<Icon size={24} />

<!-- You can also specify width and height individually -->
<Icon width={24} height={18} />
```

## Props

| props    | value                                            | default value | description                                             |
| -------- | ------------------------------------------------ | ------------- | ------------------------------------------------------- |
| iconName | IcCheck, IcClose, etc                            | IcCheck       | Which icon to use                                       |
| color    | Color name or color hex e.g.: "red" \| "#2a52be" | inherit       | Change the color of the icon                            |
| size     | Any number                                       | 24            | Change sizing of the icon affects both width and height |
| width    | Any number                                       | size          | Change the width of the icon                            |
| height   | Any number                                       | size          | Change the height of the icon                           |
