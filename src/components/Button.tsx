import { ReactNode } from "react";

export interface IButtonProps {
	children?: ReactNode;
}

const Button = ({ children }: IButtonProps) => {
	return <button className="Button">{children}</button>;
};

export default Button;
