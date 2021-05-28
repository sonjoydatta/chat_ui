import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserSearch, UserList, IuserItemProps, UserChat } from '../organisms';
import { IUserMessages, userMessages, usersData } from '../../data/constants';

const Messaging: FC = (): JSX.Element => {
	const [users, setUsers] = useState<IuserItemProps[]>(usersData);
	const [replicas, setReplicas] = useState<IuserItemProps[]>([]);
	const [selected, setSelected] = useState<number | null>(null);
	const [messages, setMessages] = useState<IUserMessages>(userMessages);
	const [message, setMessage] = useState<string>('');

	useEffect(() => {
		if (usersData && usersData.length > 0) {
			setSelected(usersData[0].id);
		}
	}, [usersData]);

	const handleClickUser = (id: number) => {
		setSelected(id);
	};

	/**
	 * Search related actions
	 */
	const handleOpenSearch = () => {
		setUsers((prevState) => {
			setReplicas([...prevState]);
			return [];
		});
	};

	const handleCloseSearch = () => {
		setReplicas((prevState) => {
			setUsers([...prevState]);
			return [];
		});
	};

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	/**
	 * Chat related actions
	 */
	const handleSendMessage = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' || e.keyCode === 13) sendMessage();
	};

	const sendMessage = () => {
		if (message?.length > 0) {
			console.log(message);
		}
	};

	return (
		<Container>
			<UsersWrapper>
				<UserSearch
					isFocused={replicas?.length > 0}
					onClick={handleCloseSearch}
					onChange={handleSearch}
					onFocus={handleOpenSearch}
				/>
				<UserList data={users} activeID={selected} clickHandler={handleClickUser} />
			</UsersWrapper>
			<ChatWrapper>
				<UserChat
					isOnline
					data={messages}
					value={message}
					onKeyUp={handleSendMessage}
					onClick={sendMessage}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</ChatWrapper>
		</Container>
	);
};

export default Messaging;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	background-color: var(--white);
`;

const UsersWrapper = styled.div`
	width: 30%;
	height: 100%;
	border-right: 1px solid var(--light);
`;

const ChatWrapper = styled.div`
	width: 70%;
	height: 100%;
	border-right: 1px solid var(--light);
`;
