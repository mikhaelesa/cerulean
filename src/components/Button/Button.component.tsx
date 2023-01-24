import { ButtonHTMLAttributes, ReactNode } from "react";
import { TButtonSize, TButtonVariant } from "./types";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	variant?: TButtonVariant;
	size?: TButtonSize;
}

export const Button = ({
	children,
	size = "regular",
	variant = "primary",
	className,
	...props
}: IButtonProps) => {
	return (
		<button
			{...props}
			className={[
				"Button",
				size === "large"
					? "Button--Large"
					: size === "regular"
					? "Button--Regular"
					: size === "small"
					? "Button--Small"
					: null,
				variant === "primary"
					? "Button--Primary"
					: variant === "outlined"
					? "Button--Outlined"
					: variant === "nude"
					? "Button--Nude"
					: null,
				className,
			].join(" ")}
		>
			{children}
		</button>
	);
};
