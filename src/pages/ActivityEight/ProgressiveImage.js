import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './ProgressiveImage.scss';

function ProgressiveImage(props) {
	const { src, placeholderSrc } = props;

	const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			setImgSrc(src);
		};
	}, [src]);

	const displayStatus =
		placeholderSrc && imgSrc === placeholderSrc ? 'loading' : 'loaded';

	return (
		<img
			{...props}
			src={imgSrc}
			alt={props.alt | ''}
			className={`${styles['progressive-image']} ${styles[displayStatus]}`}
		/>
	);
}

export default ProgressiveImage;
