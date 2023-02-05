import clsx from "clsx";
import { ChangeEvent, FormEvent, TextareaHTMLAttributes, useState } from "react";
import { Typography } from "../Typography";

export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	errorMessage?: string;
	error?: boolean;
}
export const Textarea = ({
	label,
	error,
	errorMessage = "Invalid input",
	id,
	required,
	className,
	onInvalid,
	onChange,
	...props
}: ITextareaProps) => {
	const [isInvalid, setIsInvalid] = useState(error);

	const handleOnInvalid = (e: FormEvent<HTMLTextAreaElement>) => {
		e.preventDefault();
		if (onInvalid) {
			onInvalid(e);
		}
		setIsInvalid(true);
	};

	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		if (onChange) {
			onChange(e);
		}
		setIsInvalid(false);
	};
	return (
		<div className={clsx("Textarea", className)}>
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
			<textarea
				{...props}
				id={id}
				required={required}
				className={clsx(isInvalid && "Textarea--Error")}
				onInvalid={handleOnInvalid}
				onChange={handleOnChange}
			/>
			{isInvalid && errorMessage && (
				<Typography className="Textarea--Error--Message" variant="body-3" component="span">
					{errorMessage}
				</Typography>
			)}
		</div>
	);
};
