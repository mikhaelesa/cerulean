import clsx from "clsx";
import { HTMLAttributes } from "react";
import { Typography } from "../Typography";
import { TSwitchSize } from "./types";

export interface ISwitchProps extends HTMLAttributes<HTMLDivElement> {
	active?: boolean;
	size?: TSwitchSize;
	label?: string;
}
export const Switch = ({ active, label, size = "small", ...props }: ISwitchProps) => {
	return (
		<div className="Switch__Container">
			<div
				{...props}
				className={clsx(
					"Switch",
					active && "Switch--Active",
					`Switch--${size.charAt(0).toUpperCase() + size.slice(1)}`,
				)}
			>
				<div className="Switch__Toggler"></div>
			</div>
			{label && (
				<Typography variant="body-2" component="span">
					{label}
				</Typography>
			)}
		</div>
	);
};
