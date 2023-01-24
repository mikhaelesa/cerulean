import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
	label?: string;
}

export const Input = ({ error, label, id, ...props }: IInputProps) => {
	return (
		<div className={"Input"}>
			{label && <label htmlFor={id}>{label}</label>}
			<input {...props} id={id} className={error ? "Input--Error" : ""} />
		</div>
	);
};
