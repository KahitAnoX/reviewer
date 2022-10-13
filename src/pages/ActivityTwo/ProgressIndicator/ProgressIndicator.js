import React from 'react';
import styles from './ProgressIndicator.scss';

function ProgressIndicator(props) {
	const { progressNum } = props;

	return (
		<div className={styles['progress-indicator']}>
			<div className={styles['line-container']}>
				<div className={styles['line']}>
					<div className={styles[`progress-line-${progressNum}`]}></div>
				</div>
			</div>
			<div className={styles[`circles-container-${progressNum}`]}>
				{Array.from(new Array(4)).map((item, index) => {
					return <div className={styles['circle']}>{index + 1}</div>;
				})}
			</div>
		</div>
	);
}

export default ProgressIndicator;
