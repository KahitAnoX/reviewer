import React, { useEffect, useRef, useState } from 'react';
import styles from './ScrollableList.scss';

function ScrollableList() {
	const scrollableElements: React.MutableRefObject<any[]> = useRef([]);
	const [scrollPositionDirection, setScrollPositionDirection] = useState(0);
	const scrollableElementsArray = Array.from(Array(20)).map((item, index) => {
		return (
			<div
				ref={(element) => (scrollableElements.current[index] = element)}
				key={index}
				className={styles['scroll-item']}>
				<div className={`${styles['banner']} ${styles['step-1']}`}>
					Tab {index}
				</div>
				<div className={styles['item-label']}>{index}</div>
			</div>
		);
	});

	const onScrollHandler = (e: any) => {
		const containerElement = e.target;
		const goingDown: boolean =
			containerElement.scrollTop > scrollPositionDirection;
		setScrollPositionDirection(containerElement.scrollTop);

		scrollableElements.current.map((item, index) => {
			if (goingDown) {
				if (
					containerElement.scrollTop >= item.offsetTop && // scroll must be greater than > 0 height of the element
					containerElement.scrollTop <= item.offsetTop + item.clientHeight // scroll must be less than height of element
				) {
					if (
						containerElement.scrollTop <=
						item.offsetTop + item.clientHeight - item.childNodes[0].clientHeight
					) {
						item.childNodes[0].classList.remove(styles['step-1']);
						item.childNodes[0].classList.add(styles['step-2']);
					} else {
						item.childNodes[0].classList.remove(styles['step-2']);
						item.childNodes[0].classList.add(styles['step-3']);
					}
				}
			}
			if (!goingDown) {
				if (containerElement.scrollTop <= item.offsetTop + 1) {
					item.childNodes[0].classList.remove(styles['step-2']);
					item.childNodes[0].classList.add(styles['step-1']);
				} else if (
					containerElement.scrollTop <=
					item.offsetTop + item.clientHeight - item.childNodes[0].clientHeight
				) {
					item.childNodes[0].classList.remove(styles['step-3']);
					item.childNodes[0].classList.add(styles['step-2']);
				}
			}
		});
	};

	return (
		<div className={styles['scrollable-list']} onScroll={onScrollHandler}>
			{scrollableElementsArray}
		</div>
	);
}

export default ScrollableList;
