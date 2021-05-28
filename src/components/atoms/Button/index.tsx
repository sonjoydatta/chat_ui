import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonWrapper } from './styles';

export const Button: FC<ButtonProps> = ({ children, ...rest }) => <ButtonWrapper {...rest}>{children}</ButtonWrapper>;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	border?: 'rounded' | 'pill';
	variant?: 'primary' | 'secondary' | 'link';
	block?: boolean;
}

Button.defaultProps = {
	variant: 'primary',
	block: false,
};
