import clsx from "clsx";
import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from "react";
import { Icon, TIconName } from "../Icon";
import { Typography } from "../Typography";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
	errorMessage?: string;
	label?: string;
	iconRight?: TIconName;
	iconRightEvent?: () => void;
}

export const Input = ({
	error = false,
	errorMessage = "Invalid input",
	label,
	className,
	id,
	onInvalid,
	onChange,
	required = false,
	iconRight,
	iconRightEvent,
	disabled,
	...props
}: IInputProps) => {
	const [isInvalid, setIsInvalid] = useState(error);

	const handleOnInvalid = (e: FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (onInvalid) {
			onInvalid(e);
		}
		setIsInvalid(true);
	};

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e);
		}
		setIsInvalid(false);
	};

	return (
		<div className={clsx("Input", className)}>
			{label && (
				<label htmlFor={id}>
					{label}
					{required && (
						<Typography variant="body-2" component="span">
							*
						</Typography>
					)}
				</label>
			)}
			<div className="Input--Container">
				<input
					{...props}
					id={id}
					disabled={disabled}
					required={required}
					className={clsx(isInvalid && "Input--Error")}
					onInvalid={handleOnInvalid}
					onChange={handleOnChange}
				/>
				{iconRight && (
					<div
						className={clsx(
							"Input--Container--Icon",
							iconRightEvent && "Input--Container--Icon--Event",
						)}
						onClick={!disabled ? iconRightEvent : undefined}
					>
						<Icon iconName={iconRight} />
					</div>
				)}
			</div>
			{isInvalid && errorMessage && (
				<Typography className="Input--Error--Message" variant="body-3" component="span">
					{errorMessage}
				</Typography>
			)}
		</div>
	);
};
