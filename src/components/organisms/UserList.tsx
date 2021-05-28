import { FC } from 'react';
import styled from 'styled-components';
import { UserListItem, UserListItemProps } from '../molecules';

export const UserList: FC<UserListProps> = ({ data, activeID, clickHandler }): JSX.Element => {
	return (
		<ListItems>
			{data?.map(({ id, ...restData }, i) => (
				<UserListItem key={i} isActive={id === activeID} onClick={() => clickHandler(id)} {...restData} />
			))}
		</ListItems>
	);
};

export interface IuserItemProps extends Pick<UserListItemProps, 'name' | 'message' | 'src'> {
	id: number;
}

export interface UserListProps {
	data: IuserItemProps[];
	activeID?: number | null;
	clickHandler: (id: number) => void;
}

const ListItems = styled.ul`
	height: calc(100% - 72px);
	overflow: hidden;
	overflow-y: auto;
	margin: 0;
	padding: 0;
	list-style: none;

	&::-webkit-scrollbar {
		width: 0.5rem;

		&-track {
			border-radius: 0.5rem;
			background-color: #f1f1f1;
		}

		&-thumb {
			border-radius: 0.5rem;
			background-color: #888888;

			&:hover {
				background-color: #666666;
			}
		}
	}
`;
