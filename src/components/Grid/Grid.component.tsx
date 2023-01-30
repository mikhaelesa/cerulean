import { clsx } from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { TColumn } from "./types";

export interface IGridProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	asItem?: boolean;
	start?: TColumn<1, 12>;
	end?: TColumn<1, 12>;
	startMd?: TColumn<1, 8>;
	endMd?: TColumn<1, 8>;
	startSm?: TColumn<1, 4>;
	endSm?: TColumn<1, 4>;
}

export const Grid = ({
	children,
	asItem = false,
	start,
	end,
	startMd,
	endMd,
	startSm,
	endSm,
	className,
	...props
}: IGridProps) => {
	return (
		<div
			{...props}
			className={clsx(
				!start && !end && !asItem && "Grid",
				startSm && `StartSm--${startSm}`,
				endSm && `EndSm--${endSm}`,
				startMd && `StartMd--${startMd}`,
				endMd && `EndMd--${endMd}`,
				start && `Start--${start}`,
				end && `End--${end}`,
				className,
			)}
		>
			{children}
		</div>
	);
};
