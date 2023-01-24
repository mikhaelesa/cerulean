import Icons from "./Icons";
import { TIconName } from "./types";

export interface IIconProps {
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
}: IIconProps) => {
	return (
		<div
			className="Icon"
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
