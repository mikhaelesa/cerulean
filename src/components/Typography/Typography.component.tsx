import clsx from "clsx";
import React, { HTMLAttributes, ReactNode } from "react";
import { TTypographyComponent, TTypographyVariant } from "./types";

export interface ITypographyProps extends HTMLAttributes<HTMLParagraphElement> {
	children?: ReactNode;
	variant?: TTypographyVariant;
	component?: TTypographyComponent;
}

export const Typography = ({
	variant = "body-1",
	component = "p",
	children,
	className,
	...props
}: ITypographyProps) => {
	const element = React.createElement(
		component,
		{
			...props,
			className: clsx(`Typography--${variant}`, className),
		},
		children,
	);

	return element;
};
