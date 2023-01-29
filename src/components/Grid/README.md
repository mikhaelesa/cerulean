# Grid

Container that uses `display: grid;` and has been set to fit the screen size from small to large.

The grid settings:

- Mobile up (>640px): 4 columns
- Tablet up (>768px): 8 columns
- Desktop up (>1024px): 12 columns

## Usage

Use it as a container and you will have a responsive grid by default.

```jsx
<Grid>
	<div>Grid item</div>
</Grid>
```

Treat it as a grid item by putting it inside a Grid container and pass `start` and `end` or `asItem` props. The end props uses `grid-column-end: span ${endValue}`, so if `start` is 2 and `end` is 10, it will take 10 columns counting from `start`.

```jsx
<Grid>
	<Grid start={2} end={10}>
		<h1>How to create a blog</h1>
	</Grid>
	<Grid asItem>
		<p>Creating blog is easier with the help of Cerulean Design System</p>
	</Grid>
</Grid>
```

If you want to adjust the number of columns that will be used according to screen size.

```jsx
<Grid>
	<Grid start={2} end={10} startMd={2} endMd={6} startSm={1} endSm={4}>
		<h1>How to create a blog</h1>
	</Grid>
</Grid>
```

## Props

| props    | value     | default value | description                                                                                                         |
| -------- | --------- | ------------- | ------------------------------------------------------------------------------------------------------------------- |
| children | ReactNode | none          | Children of this component                                                                                          |
| start    | 1 - 12    | none          | Specifies a grid item's start position within the grid column on large screen. Will be grid item if specified       |
| end      | 1 - 12    | none          | Specifies a grid item's end position within the grid column on large screen. Will be grid item if specified         |
| startMd  | 1 - 8     | none          | Specifies a grid item's start position within the grid column on medium screen size. Will be grid item if specified |
| endMd    | 1 - 8     | none          | Specifies a grid item's end position within the grid column on medium screen size. Will be grid item if specified   |
| startSm  | 1 - 4     | none          | Specifies a grid item's start position within the grid column on small screen size. Will be grid item if specified  |
| endSm    | 1 - 4     | none          | Specifies a grid item's end position within the grid column on small screen size. Will be grid item if specified    |
