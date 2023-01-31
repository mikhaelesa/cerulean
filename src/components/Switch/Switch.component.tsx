import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface ISwitchProps extends HTMLAttributes<HTMLDivElement> {
	active?: boolean;
}
export const Switch = ({ active, ...props }: ISwitchProps) => {
	return (
		<div {...props} className={clsx("Switch", active && "Switch--Active")}>
			<div className="Switch__Toggler"></div>
		</div>
	);
};
