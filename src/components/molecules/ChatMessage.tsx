/* eslint-disable indent */
import { FC } from 'react';
import styled, { css } from 'styled-components';

export const ChatMessage: FC<ChatMessageProps> = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>;

export interface ChatMessageProps {
	variant: 'sender' | 'reciver';
}

const Wrapper = styled.div<ChatMessageProps>`
	width: fit-content;
	max-width: 60%;
	display: block;
	padding: 1rem;
	border-radius: 0.5rem;
	${({ variant }) => {
		switch (variant) {
			case 'sender':
				return css`
					background-color: var(--light);
				`;

			case 'reciver':
				return css`
					margin-left: auto;
					color: var(--white);
					background-color: var(--primary);
				`;
		}
	}}

	& + & {
		margin-top: 0.5rem;
	}
`;
