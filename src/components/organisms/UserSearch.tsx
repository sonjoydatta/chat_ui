import { FC } from 'react';
import styled from 'styled-components';
import Icon, { arrowLeft } from '../../icons';
import { Button, ButtonProps, FormInput, FormInputProps } from '../atoms';

export const UserSearch: FC<UserSearchProps> = ({ isFocused, onClick, ...rest }): JSX.Element => {
	const buttonProps: ButtonProps = { variant: 'link', onClick };

	return (
		<Wrapper>
			{isFocused && (
				<Button {...buttonProps}>
					<Icon path={arrowLeft} />
				</Button>
			)}
			<FormInput srOnly border="pill" placeholder="Search by name" {...rest} />
		</Wrapper>
	);
};

type EventHandlers = Pick<FormInputProps, 'onChange' | 'onFocus' | 'onBlur'> & Pick<ButtonProps, 'onClick'>;

export interface UserSearchProps extends EventHandlers {
	isFocused?: boolean;
}

UserSearch.defaultProps = {
	isFocused: false,
};

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 1rem;
	position: sticky;
	box-shadow: -0.25rem 0 0.25rem rgba(0, 0, 0, 0.1);

	button {
		padding: 0;
		margin-right: 0.5rem;
	}
`;
