import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from "react";
import { Typography } from "../Typography";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
	errorMessage?: string;
	label?: string;
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
		<div className={["Input", className].join(" ")}>
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
			<input
				{...props}
				id={id}
				required={required}
				className={isInvalid ? "Input--Error" : ""}
				onInvalid={handleOnInvalid}
				onChange={handleOnChange}
			/>
			{isInvalid && errorMessage && (
				<Typography className="Input--Error--Message" variant="body-3" component="span">
					{errorMessage}
				</Typography>
			)}
		</div>
	);
};
