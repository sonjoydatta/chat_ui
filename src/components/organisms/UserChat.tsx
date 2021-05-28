import { FC, Fragment, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IUserMessages } from '../../data/constants';
import { ChatHeader, ChatMessage, SendController, SendControllerProps } from '../molecules';

export const UserChat: FC<UserChatProps> = ({ isOnline, data, ...rest }) => {
	const elementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (elementRef.current) {
			elementRef.current.scrollTo({ top: elementRef.current.scrollHeight });
		}
	}, [data]);

	if (data) {
		const { name, src, messages } = data;
		const headerProps = { name, src, isOnline };

		return (
			<Fragment>
				<ChatHeader {...headerProps} />
				<MessageWrapper ref={elementRef}>
					{messages?.map(({ by, data }, i) => (
						<ChatMessage key={i} variant={by === 'opponent' ? 'sender' : 'reciver'}>
							{data}
						</ChatMessage>
					))}
				</MessageWrapper>
				<SendController {...rest} />
			</Fragment>
		);
	}

	return null;
};

export interface UserChatProps extends SendControllerProps {
	isOnline?: boolean;
	data: IUserMessages;
}

const MessageWrapper = styled.div`
	height: calc(100% - 9rem);
	padding: 1rem;
	display: block;
	overflow: hidden;
	overflow-y: auto;

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
