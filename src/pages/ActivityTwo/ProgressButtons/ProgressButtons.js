import React from 'react';
import styles from './ProgressButtons.scss';

function ProgressButtons(props) {
	const { navigateHandler, progressNum } = props;

	return (
		<div className={styles['progress-buttons']}>
			<button
				onClick={() => navigateHandler(-1)}
				className={progressNum === 1 && styles['disabled']}>
				Back
			</button>
			<button
				onClick={() => navigateHandler(1)}
				className={progressNum === 4 && styles['disabled']}>
				Next
			</button>
		</div>
	);
}

export default ProgressButtons;
