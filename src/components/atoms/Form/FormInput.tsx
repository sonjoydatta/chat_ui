import { FC, InputHTMLAttributes } from 'react';
import { FormControl, FormGroup, FormLabel } from './styles';

export const FormInput: FC<FormInputProps> = ({ label, srOnly, ...rest }): JSX.Element => {
	const labelProps = { srOnly, children: label };

	return (
		<FormGroup>
			<FormLabel {...labelProps} />
			<FormControl {...rest} />
		</FormGroup>
	);
};

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	srOnly?: boolean;
	border?: 'rounded' | 'pill';
}

FormInput.defaultProps = {
	srOnly: false,
};
