# Cerulean Design System

> A design system made for convenience without compromising aesthetics.

**Cerulean Design System** will help you through creating a [React](https://reactjs.org/) based website faster and easier with our ready to use components and 0 configurations.

## Getting Started

Install cerulean-design-system

```bash
# With npm
npm i @mikhaelesa/cerulean
# With yarn
yarn add @mikhaelesa/cerulean
# With pnpm
pnpm add @mikhaelesa/cerulean
```

Import CSS to your root `jsx` or `tsx` file

```javascript
// main.tsx
import "@mikhaelesa/cerulean/dist/style.css";
```

Now use any component in your project

```jsx
const Home = () => {
	return (
		<>
			<p>
				<Typography>Hello</Typography>
			</p>
			<Button>Click me!</Button>
			<Icon iconName="IcCheck" />
		</>
	);
};
```

Test out the design system by using any component available and see if it's working

## Documentation

For now, all component documentation is in each component folder

- [Button Documentation](https://github.com/mikhaelesa/cerulean/tree/main/src/components/Button#readme)
- [Checkbox Documentation](https://github.com/mikhaelesa/cerulean/tree/main/src/components/Checkbox#readme)
- [Icon Documentation](https://github.com/mikhaelesa/cerulean/tree/main/src/components/Icon#readme)
- [Input Documentation](https://github.com/mikhaelesa/cerulean/tree/main/src/components/Input#readme)
- [Typography Documentation](https://github.com/mikhaelesa/cerulean/tree/main/src/components/Typography#readme)
- [Grid Documentation](https://github.com/mikhaelesa/cerulean/tree/main/src/components/Grid#readme)
