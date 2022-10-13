import React, { useEffect, useState } from 'react';
import styles from './BlurLoading.scss';

function BlurLoading(props) {
	const { blurImage } = props;
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		if (counter === 100) return;
		const timer = setInterval(() => {
			setCounter((prevValue) => prevValue + 1);
		}, 50);
		return () => {
			clearInterval(timer);
		};
	}, [counter]);

	let imgBlur = 5 - counter * (5 / 100);
	let counterOpacity = 1 - counter * (1 / 100);

	return (
		<div className={styles['blur-loading']}>
			<img src={blurImage} style={{ filter: `blur(${imgBlur}px)` }} />
			<span style={{ opacity: counterOpacity }}>{counter}%</span>
		</div>
	);
}

export default BlurLoading;
