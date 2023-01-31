import { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, TIconName } from "../Icon";
import { TButtonSize, TButtonVariant } from "./types";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	variant?: TButtonVariant;
	size?: TButtonSize;
	iconLeft?: TIconName;
	iconRight?: TIconName;
	iconLeftSize?: number;
	iconRightSize?: number;
}

export const Button = ({
	children,
	size = "regular",
	variant = "primary",
	className,
	iconLeft,
	iconRight,
	iconLeftSize,
	iconRightSize,
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
			{iconLeft && (
				<div>
					<Icon iconName={iconLeft} size={iconLeftSize} />
				</div>
			)}
			{children}
			{iconRight && (
				<div>
					<Icon iconName={iconRight} size={iconRightSize} />
				</div>
			)}
		</button>
	);
};
