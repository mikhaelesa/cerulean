import { ButtonHTMLAttributes, ReactNode } from "react";
import { TButtonSize, TButtonVariant } from "./types";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	variant?: TButtonVariant;
	size?: TButtonSize;
}

export const Button = ({ children, size = "regular", variant = "primary" }: IButtonProps) => {
	return (
		<button
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
			].join(" ")}
		>
			{children}
		</button>
	);
};
