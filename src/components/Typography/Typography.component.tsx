import { HTMLAttributes, ReactNode } from "react";
import { TTypographyVariant } from "./types";

export interface ITypograhpyProps extends HTMLAttributes<HTMLSpanElement> {
	children?: ReactNode;
	variant?: TTypographyVariant;
}

export const Typography = ({
	children,
	variant = "body-1",
	className,
	...props
}: ITypograhpyProps) => {
	return (
		<span {...props} className={[`Typography--${variant}`, className].join(" ")}>
			{children}
		</span>
	);
};
