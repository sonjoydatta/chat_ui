import { FC, useRef } from 'react';
import styled from 'styled-components';
import Icon, { image, sendPlane } from '../../icons';
import { Button, ButtonProps, FormInput, FormInputProps } from '../atoms';

export const SendController: FC<SendControllerProps> = ({ onClick, ...rest }) => {
	const imageRef = useRef<HTMLInputElement>(null);
	const buttonProps: ButtonProps = { variant: 'link', onClick };

	return (
		<Wrapper>
			<FormInput {...rest} />
			<ButtonWrapper>
				<Button {...buttonProps}>
					<Icon path={sendPlane} width={20} height={20} />
				</Button>
				<Button variant="link" onClick={() => imageRef.current?.click()}>
					<Icon path={image} width={20} height={20} />
				</Button>
			</ButtonWrapper>
			<input ref={imageRef} type="file" accept="image/*" style={{ display: 'none' }} />
		</Wrapper>
	);
};

export type SendControllerProps = FormInputProps & Pick<ButtonProps, 'onClick'>;

SendController.defaultProps = {
	srOnly: true,
	placeholder: 'Write a message...',
};

const Wrapper = styled.div`
	width: 100%;
	padding: 1rem 0;
	display: block;
	position: relative;
	background-color: var(--light);
	box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.1);

	input {
		padding-right: 5.75rem;
		border-color: transparent;
		background-color: var(--light);

		&:focus {
			border-color: transparent;
		}
	}
`;

const ButtonWrapper = styled.div`
	position: absolute;
	right: 1rem;
	top: calc(50% - 1.188rem);
	z-index: 99;

	button {
		line-height: 0;
		padding: 0.5rem;
	}
`;
