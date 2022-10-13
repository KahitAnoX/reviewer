import React from 'react';
import styles from './Gallery.scss';

import wlop1 from '../../../src/assets/WLOP/WLOP1.jpg';
import tiny_wlop1 from '../../../src/assets/TINY/WLOP1.png';
import ProgressiveImage from './ProgressiveImage';

function Gallery(props) {
	return (
		<div className={styles['gallery']}>
			<ProgressiveImage src={wlop1} placeholderSrc={tiny_wlop1} />
		</div>
	);
}

export default Gallery;
