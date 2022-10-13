import React, { useState } from 'react';
import styles from './Navigator.scss';
import ProgressButtons from './ProgressButtons/ProgressButtons';
import ProgressIndicator from './ProgressIndicator/ProgressIndicator';

function Navigator(props) {
	const [progressNum, setProgressNum] = useState(1);

	const navigateHandler = (step) => {
		if (progressNum === 1 && step === -1) return;
		if (progressNum === 4 && step === 1) return;
		setProgressNum((prevState) => prevState + step);
	};
	return (
		<div className={styles['navigator']}>
			<ProgressIndicator progressNum={progressNum} />
			<ProgressButtons
				navigateHandler={navigateHandler}
				progressNum={progressNum}
			/>
		</div>
	);
}

export default Navigator;
