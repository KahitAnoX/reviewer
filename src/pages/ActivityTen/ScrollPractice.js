import React, { useEffect, useRef } from 'react';
import styles from './ScrollPractice.scss';

function ScrollPractice(props) {
	const scrollDivRefs = useRef([]);
	const scrollContainerRef = useRef();

	const activeElementHandler = (item, elementPosition) => {
		if (
			item.offsetTop >= elementPosition &&
			item.offsetTop <= elementPosition + 100
		) {
			item.classList.add(styles['magic']);
		} else {
			item.classList.remove(styles['magic']);
		}
	};

	useEffect(() => {
		scrollDivRefs?.current?.map((item, index) => {
			const activeElementPosition = scrollContainerRef?.current.scrollTop + 220;
			activeElementHandler(item,activeElementPosition)
		});
	}, []);

	const scrollHandler = (e) => {
		console.log(e.target.scrollHeight); // total height of the scrollable elements behind overflow hidden 2210px (100px height * 20 items) + (10px margin * 21 items)
		console.log(e.target.scrollTop); // max scrolltop is scrollheight - clientheight ----> equivalent to window.scrollY or window.pageYOffset
		console.log(e.target.clientHeight); // height of the container with overflow hidden
		console.log(e);

		scrollDivRefs?.current?.map((item, index) => {
			console.log(item.offsetTop, '------------ item.offsetTop', index); // this is absolute value, actual position of each item
			console.log(item.clientHeight, '------------ item.clientHeight'); // item height (content,padding)
			console.log(item.clientWidth, '------------ item.clientWidth'); //item width (content,padding)

			const activeElementPosition = e.target.scrollTop + 220;
			activeElementHandler(item,activeElementPosition);
		});

		console.log(e.target.classList, 'yyy'); // access classlist of the parent element
	};

	return (
		<div
			className={styles['scroll-container']}
			onScroll={scrollHandler}
			ref={scrollContainerRef}>
			{Array.from(Array(20)).map((item, index) => {
				return (
					<div
						key={index}
						ref={(element) => (scrollDivRefs.current[index] = element)}>
						{index + 1}
					</div>
				);
			})}
		</div>
	);
}

export default ScrollPractice;
