/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { AvatarProps } from '.';

export const Image = styled.img<AvatarProps>`
	${({ size }) => {
		switch (size) {
			case 'sm':
				return css`
					width: 2rem;
					height: 2rem;
				`;

			default:
				return css`
					width: 3rem;
					height: 3rem;
				`;
		}
	}}
	display: inline-block;
	border-radius: 50rem;
`;
