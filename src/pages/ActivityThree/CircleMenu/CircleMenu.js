import React from 'react';
import styles from './CircleMenu.scss';
import HamburgerIcon from '../../../assets/ICONS/hamburgerIcon.svg';
import CrossIcon from '../../../assets/ICONS/crossIcon.svg';

function CircleMenu(props) {
	const { templateIsActive, templateTransformHandler } = props;
	return (
		<div
			className={`${styles['circle-menu']} ${
				templateIsActive ? styles['active'] : ''
			}`}
			onClick={templateTransformHandler}>
			<div>
				<CrossIcon />
			</div>
			<div>
				<HamburgerIcon />
			</div>
		</div>
	);
}

export default CircleMenu;
