import React from 'react';
import styles from './SideMenu.scss';
import AboutIcon from '../../../assets/ICONS/aboutIcon.svg';
import MailIcon from '../../../assets/ICONS/mailIcon.svg';
import HomeIcon from '../../../assets/ICONS/homeIcon.svg';

function SideMenu(props) {
	const { templateIsActive } = props;

	return (
		<div
			className={`${styles['side-menu']} ${
				templateIsActive ? styles['active'] : ''
			}`}>
			<div>
				<HomeIcon /> Home
			</div>
			<div>
				<AboutIcon /> About
			</div>
			<div>
				<MailIcon /> Contact
			</div>
		</div>
	);
}

export default SideMenu;
