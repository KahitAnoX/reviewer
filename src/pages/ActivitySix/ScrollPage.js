import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './ScrollPage.scss';

function ScrollPage(props) {
	const arrayLength = 100;
	const arrayRefs = useRef([]);

	const callbackFunction = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(`${styles['giant']}`);
			} else {
				entry.target.classList.remove(`${styles['giant']}`);
			}
			console.log(entry.target);
		});
	};

	const options = {
		root: null,
		rootMargin: '-200px',
		threshold: 0,
	};

	const observer = new IntersectionObserver(callbackFunction, options);

	useEffect(() => {
		if (!arrayRefs.current.length) return;
		arrayRefs.current.forEach((item) => {
			observer.observe(item);
		});
	}, [arrayRefs]);

	const elementsDisplayHandler = useMemo(() => {
		const elementsDisplay = Array(arrayLength)
			.fill()
			.map((item, index) => (
				<div
					key={index}
					ref={(element) => (arrayRefs.current[index] = element)}>
					{index}
				</div>
			));

		return elementsDisplay;
	});

	return <div className={styles['scroll-page']}>{elementsDisplayHandler}</div>;
}

export default ScrollPage;
