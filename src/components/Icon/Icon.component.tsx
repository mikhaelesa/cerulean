import clsx from "clsx";
import Icons from "./Icons";
import { TIconName } from "./types";

export interface IIconProps {
	className?: string;
	iconName?: TIconName;
	size?: number;
	width?: number;
	height?: number;
	color?: string;
}

export const Icon = ({
	size = 24,
	width = size,
	height = size,
	color = "inherit",
	iconName = "IcCheck",
	className,
}: IIconProps) => {
	return (
		<div
			className={clsx("Icon", className)}
			style={{
				color,
				width,
				height,
			}}
		>
			{Icons[iconName]}
		</div>
	);
};
