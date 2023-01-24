import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
	label?: string;
}

export const Input = ({ error, label, ...props }: IInputProps) => {
	return (
		<div className="Input">
			{label && <label>{label}</label>}
			<input {...props} />
		</div>
	);
};
