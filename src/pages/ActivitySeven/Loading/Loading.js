import React, { useEffect, useState } from 'react';
import styles from './Loading.scss';

function Loading(props) {
	const { style, animate, delay } = props;

	return (
		<div className={styles['loading-bar']} style={style}>
			<div
				style={{ animationDuration: `${delay}ms` }}
				className={`${styles['inner-loading']} ${
					animate && styles['animate']
				}`}></div>
		</div>
	);
}

export default Loading;
