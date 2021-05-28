/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const ButtonWrapper = styled.button<ButtonProps>`
	cursor: pointer;
	line-height: 1.5;
	padding: 0.594rem 1rem;
	display: inline-block;
	border: 1px solid transparent;
	${({ variant }) => {
		switch (variant) {
			case 'primary':
				return css`
					color: var(--white);
					border-color: var(--primary);
					background-color: var(--primary);
				`;

			case 'secondary':
				return css`
					color: var(--white);
					border-color: var(--secondary);
					background-color: var(--secondary);
				`;

			case 'link':
				return css`
					background-color: transparent;
				`;
		}
	}}
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
	${({ block }) => {
		if (block) {
			return css`
				width: 100%;
				text-align: center;
			`;
		}
	}}

	&:hover {
		opacity: 0.9;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.65;
	}
`;
