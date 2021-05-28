/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { FormInputProps } from './FormInput';

export const FormGroup = styled.div`
	width: 100%;
	display: block;

	& + & {
		margin-top: 1rem;
	}
`;

export const FormLabel = styled.label<Pick<FormInputProps, 'srOnly'>>`
	display: inline-block;
	margin-bottom: 0.25rem;
	${({ srOnly }) => {
		if (srOnly) {
			return css`
				width: 1px;
				height: 1px;
				margin: -1px;
				overflow: hidden;
				position: absolute;
			`;
		}
	}}
`;

export const FormControl = styled.input<Omit<FormInputProps, 'srOnly' | 'label'>>`
	width: 100%;
	line-height: 1.5;
	padding: 0.594rem 1rem;
	display: block;
	border: 1px solid var(--border);
	${({ border }) => {
		switch (border) {
			case 'rounded':
				return css`
					border-radius: 0.25rem;
				`;

			case 'pill':
				return css`
					border-radius: 50rem;
				`;
		}
	}}
	transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;

	&:focus {
		outline: none;
		border-color: var(--primary);
		background-color: var(--light);
	}
`;
