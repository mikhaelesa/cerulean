import clsx from "clsx";
import { HTMLAttributes, MouseEvent } from "react";
import { Icon, TIconName } from "../Icon";
import { Typography } from "../Typography";
import { TBadgeSize, TBadgeVariant } from "./types";

export interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
	variant?: TBadgeVariant;
	outlined?: boolean;
	text?: string;
	icon?: TIconName;
	size?: TBadgeSize;
	onClickIcon?: () => void;
}
export const Badge = ({
	icon,
	outlined = false,
	text = "Badge",
	variant = "default",
	onClickIcon,
	size = "regular",
	...props
}: IBadgeProps) => {
	const handleClickIcon = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		if (onClickIcon) {
			onClickIcon();
		}
	};
	return (
		<div
			{...props}
			className={clsx(
				"Badge",
				`Badge--${variant ? variant?.charAt(0).toUpperCase() + variant?.slice(1) : "Default"}`,
				`Badge--${size ? size?.charAt(0).toUpperCase() + size?.slice(1) : "Regular"}`,
				outlined && "Badge--Outlined",
			)}
		>
			<Typography variant="body-2" component="span" className="Badge__Text">
				{text}
			</Typography>
			{icon && (
				<div className="Badge__Icon" onClick={handleClickIcon}>
					<Icon iconName={icon} size={16} />
				</div>
			)}
		</div>
	);
};
