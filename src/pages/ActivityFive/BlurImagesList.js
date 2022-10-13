import React from 'react';
import styles from './BlurImagesList.scss';
import BlurLoading from './BlurLoading/BlurLoading';
import wlop1 from '../../../src/assets/WLOP/WLOP1.jpg';
import wlop2 from '../../../src/assets/WLOP/WLOP2.jpg';
import wlop3 from '../../../src/assets/WLOP/WLOP3.jpg';
import wlop4 from '../../../src/assets/WLOP/WLOP4.jpg';
import wlop5 from '../../../src/assets/WLOP/WLOP5.jpg';
import wlop6 from '../../../src/assets/WLOP/WLOP6.jpg';

const imagesList = [wlop1, wlop2, wlop3, wlop4, wlop5, wlop6];

function BlurImagesList(props) {
	return (
		<div className={styles['blur-images-list']}>
			{imagesList.map((item, index) => (
				<BlurLoading key={index} blurImage={item} />
			))}
		</div>
	);
}

export default BlurImagesList;
