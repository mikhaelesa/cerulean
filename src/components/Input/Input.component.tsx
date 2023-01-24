import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
	label?: string;
}

export const Input = ({ error, label, className, id, ...props }: IInputProps) => {
	return (
		<div className={["Input", className].join(" ")}>
			{label && <label htmlFor={id}>{label}</label>}
			<input {...props} id={id} className={error ? "Input--Error" : ""} />
		</div>
	);
};
