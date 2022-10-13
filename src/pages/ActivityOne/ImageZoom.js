import React, { useState } from 'react';
import styles from './ImageZoom.scss';
import wlop1 from '../../../src/assets/WLOP/WLOP1.jpg';
import wlop2 from '../../../src/assets/WLOP/WLOP2.jpg';
import wlop3 from '../../../src/assets/WLOP/WLOP3.jpg';
import wlop4 from '../../../src/assets/WLOP/WLOP4.jpg';
import wlop5 from '../../../src/assets/WLOP/WLOP5.jpg';
import wlop6 from '../../../src/assets/WLOP/WLOP6.jpg';
import tiny_wlop1 from '../../../src/assets/TINY/WLOP1.png';
import tiny_wlop2 from '../../../src/assets/TINY/WLOP2.png';
import tiny_wlop3 from '../../../src/assets/TINY/WLOP3.png';
import tiny_wlop4 from '../../../src/assets/TINY/WLOP4.png';
import tiny_wlop5 from '../../../src/assets/TINY/WLOP5.png';
import tiny_wlop6 from '../../../src/assets/TINY/WLOP6.png';
import ProgressiveImage from '../ActivityEight/ProgressiveImage';

const classNamesMap = [
	{ tab: 0, classNamesList: [], imgSrc: wlop1, placeholderSrc: tiny_wlop1 },
	{ tab: 1, classNamesList: [], imgSrc: wlop2, placeholderSrc: tiny_wlop2 },
	{ tab: 2, classNamesList: [], imgSrc: wlop3, placeholderSrc: tiny_wlop3 },
	{ tab: 3, classNamesList: [], imgSrc: wlop4, placeholderSrc: tiny_wlop4 },
	{ tab: 4, classNamesList: [], imgSrc: wlop5, placeholderSrc: tiny_wlop5 },
	{ tab: 5, classNamesList: [], imgSrc: wlop6, placeholderSrc: tiny_wlop6 },
];

function ImageZoom(props) {
	const [classNamesData, setClassNamesData] = useState(classNamesMap);

	const activeTabHandler = (tabNumber) => {
		setClassNamesData((prevState) => {
			return prevState.map((item) => {
				const tempClassNamesList = [...item.classNamesList];
				const activeItemStyle = styles['active-tab-animation'];
				const viewItemStyle = styles['view-tab-animation'];

				if (item.tab === tabNumber) {
					if (tempClassNamesList.indexOf(viewItemStyle) !== -1) {
						return { ...item, classNamesList: [] };
					}
					if (tempClassNamesList.indexOf(activeItemStyle) !== -1) {
						tempClassNamesList.push(viewItemStyle);
						return { ...item, classNamesList: tempClassNamesList };
					}
					tempClassNamesList.push(activeItemStyle);
					return { ...item, classNamesList: tempClassNamesList };
				}
				return { ...item, classNamesList: [] };
			});
		});
	};

	const getStyles = (tabNumber) => {
		if (classNamesData[tabNumber].classNamesList.length === 0) return '';
		return classNamesData[tabNumber].classNamesList.join(' ');
	};

	return (
		<div className={styles['container']}>
			{classNamesData.map((item, index) => {
				return (
					<div
						key={item.tab}
						className={getStyles(item.tab)}
						onClick={activeTabHandler.bind(this, item.tab)}>
						{/* <img src={item.imgSrc}></img> */}
						<ProgressiveImage
							placeholderSrc={item.placeholderSrc}
							src={item.imgSrc}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default ImageZoom;
