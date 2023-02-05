import { InputHTMLAttributes } from "react";
import { Typography } from "../Typography";

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Radio = ({ label, id, ...props }: IRadioProps) => {
	return (
		<div className="Radio">
			<input {...props} id={id} type="radio" className="Radio__Input" />
			{label && (
				<label htmlFor={id}>
					<Typography component="span" variant="body-2">
						{label}
					</Typography>
				</label>
			)}
		</div>
	);
};
