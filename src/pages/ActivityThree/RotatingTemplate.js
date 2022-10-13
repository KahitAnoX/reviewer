import React, { useState } from 'react';
import styles from './RotatingTemplate.scss';
import CircleMenu from './CircleMenu/CircleMenu';
import SideMenu from './SideMenu/SideMenu';
import TiltingPage from './TiltingPage/TiltingPage';

function RotatingTemplate(props) {
	const [templateIsActive, setTemplateIsActive] = useState(false);

	const templateTransformHandler = () => {
		setTemplateIsActive((prevState) => !prevState);
	};

	return (
		<div className={styles['rotating-template']}>
			<CircleMenu
				templateIsActive={templateIsActive}
				templateTransformHandler={templateTransformHandler}
			/>
			<SideMenu templateIsActive={templateIsActive} />
			<TiltingPage templateIsActive={templateIsActive} />
		</div>
	);
}

export default RotatingTemplate;
