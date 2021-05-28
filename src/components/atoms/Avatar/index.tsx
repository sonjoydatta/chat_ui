import { FC, ImgHTMLAttributes } from 'react';
import { Image } from './styles';
import defaultAvatarSrc from '../../../assets/images/avatar.png';

export const Avatar: FC<AvatarProps> = (props): JSX.Element => <Image {...props} />;

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	size?: 'sm';
}

Avatar.defaultProps = {
	src: defaultAvatarSrc,
};
