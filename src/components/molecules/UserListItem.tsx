import { FC, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { Avatar, AvatarProps } from '../atoms';

export const UserListItem: FC<UserListItemProps> = (props): JSX.Element => {
	const { name, message, isActive, onClick, ...rest } = props;
	const listProps = { isActive, onClick };

	return (
		<ListItem {...listProps}>
			<Avatar {...rest} />
			<TextContent>
				<span>{name}</span>
				{message && <p>{message}</p>}
			</TextContent>
		</ListItem>
	);
};

export interface UserListItemProps extends AvatarProps {
	name: string;
	message?: string;
	isActive?: boolean;
	onClick?: MouseEventHandler<HTMLElement>;
}

UserListItem.defaultProps = {
	isActive: false,
};

const TextContent = styled.div`
	margin-left: 0.625rem;
	overflow: hidden;

	span {
		font-size: 1rem;
		font-weight: 500;
		color: var(--secondary);
		transition: color 0.2s ease-in-out;
	}

	p {
		margin-bottom: 0;
		color: var(--secondary);
		font-size: 0.75rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

const ListItem = styled.li<Pick<UserListItemProps, 'isActive'>>`
	width: 100%;
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	cursor: pointer;
	background-color: var(--white);
	transition: background-color 0.2s ease-in-out;

	&:hover {
		${TextContent} {
			span {
				color: var(--primary);
			}
		}
	}

	${({ isActive }) => {
		if (isActive) {
			return css`
				background-color: var(--light);

				img {
					padding: 2px;
					border: 2px solid var(--primary);
				}

				${TextContent} {
					span {
						color: var(--primary);
					}
				}
			`;
		}
	}}
`;
