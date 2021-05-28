import { FC } from 'react';
import styled from 'styled-components';
import { Avatar, AvatarProps } from '../atoms';

export const ChatHeader: FC<ChatHeaderProps> = ({ name, isOnline, ...rest }) => (
	<Wrapper>
		<Avatar {...rest} />
		<span className={isOnline ? 'online' : ''}>{name}</span>
	</Wrapper>
);

export interface ChatHeaderProps extends AvatarProps {
	name: string;
	isOnline?: boolean;
}

ChatHeader.defaultProps = {
	size: 'sm',
	isOnline: false,
};

const Wrapper = styled.div`
	width: 100%;
	min-height: 4.5rem;
	display: flex;
	align-items: center;
	padding: 1rem;
	box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.1);

	span {
		font-weight: 500;
		color: var(--secondary);
		padding-left: 0.5rem;
		position: relative;

		&:after {
			content: '';
			width: 0.5rem;
			height: 0.5rem;
			margin-left: 0.5rem;
			border-radius: 0.5rem;
			display: inline-block;
			background-color: var(--secondary);
		}

		&.online {
			&:after {
				background-color: var(--success);
			}
		}
	}
`;
