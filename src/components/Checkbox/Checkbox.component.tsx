import clsx from "clsx";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { Icon } from "../Icon";

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Checkbox = ({
	label,
	defaultChecked,
	checked,
	onChange,
	disabled,
	...props
}: ICheckboxProps) => {
	const [isChecked, setIsChecked] = useState(defaultChecked || checked || false);
	const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
		if (onChange) onChange(e);
		setIsChecked((prev) => !prev);
	};
	return (
		<label className="Label">
			<input
				{...props}
				disabled={disabled}
				className="Input__Checkbox"
				type="checkbox"
				onChange={handleCheck}
			/>
			<div
				className={clsx(
					"Checkbox",
					isChecked && !disabled && "Checkbox--Active",
					disabled && !isChecked && "Checkbox--Disabled",
					isChecked && disabled && "Checkbox--Active--Disabled",
				)}
			>
				<Icon size={16} iconName="IcCheck" />
			</div>
			{label}
		</label>
	);
};
