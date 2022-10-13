import React, { useEffect, useState } from 'react';
import styles from './BlogCarousel.scss';

import wlop1 from '../../../src/assets/WLOP/WLOP1.jpg';
import wlop2 from '../../../src/assets/WLOP/WLOP2.jpg';
import wlop3 from '../../../src/assets/WLOP/WLOP3.jpg';
import wlop4 from '../../../src/assets/WLOP/WLOP4.jpg';
import wlop5 from '../../../src/assets/WLOP/WLOP5.jpg';
import wlop6 from '../../../src/assets/WLOP/WLOP6.jpg';
import LeftIcon from '../../../src/assets/ICONS/leftIcon.svg';
import RightIcon from '../../../src/assets/ICONS/rightIcon.svg';

import Loading from './Loading/Loading';

function BlogCarousel(props) {
	const images = [
		{ imgSrc: wlop1, zIndex: 0 },
		{ imgSrc: wlop2, zIndex: 1 },
		{ imgSrc: wlop3, zIndex: 2 },
		{ imgSrc: wlop4, zIndex: 3 },
		{ imgSrc: wlop5, zIndex: 4 },
		{ imgSrc: wlop6, zIndex: 5 },
	];
	const [activeBar, setActiveBar] = useState(undefined);
	const [carouselImages, setCarouselImages] = useState(images);
	const [animateDirection, setAnimateDirection] = useState('forward');
	const timerDuration = 2000;
	const [firstRender, setFirstRender] = useState(true);

	useEffect(() => {
		setActiveBar(images.length - 1);
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			if (animateDirection === 'forward') {
				udpateZIndexHandler('forward');
				navigationHandler('forward');
			} else if (animateDirection === 'backward') {
				udpateZIndexHandler('backward');
				navigationHandler('backward');
			}
		}, timerDuration);
		return () => {
			clearInterval(timer);
		};
	}, [activeBar]);

	const udpateZIndexHandler = () => {
		setCarouselImages((prevState) => {
			const imagesMap = prevState.map((item) => item.imgSrc);
			const zIndexMap = prevState.map((item) => item.zIndex);

			if (animateDirection === 'forward') {
				const removedItem = zIndexMap.splice(0, 1);
				zIndexMap.push(...removedItem);
			} else if (animateDirection === 'backward') {
				const removedItem = zIndexMap.pop();
				zIndexMap.unshift(removedItem);
			}

			return imagesMap.map((item, index) => {
				return {
					imgSrc: item,
					zIndex: zIndexMap[index],
				};
			});
		});
	};

	useEffect(() => {
		setActiveBar(() => {
			let returnValue;
			carouselImages.forEach((item, index) => {
				if (item.zIndex === carouselImages.length - 1) returnValue = index;
			});
			console.log(returnValue, 'asdfsaf');
			return returnValue;
		});
	}, [JSON.stringify(carouselImages)]);

	const navigationHandler = (direction) => {
		setAnimateDirection(direction);
	};

	const reverseImagesArray = () => {
		setCarouselImages((prevState) => {
			const zIndexMap = prevState.map((item) => item.zIndex).reverse();
			const imagesMap = prevState.map((item) => item.imgSrc);

			return imagesMap.map((item, index) => {
				return {
					imgSrc: item,
					zIndex: zIndexMap[index],
				};
			});
		});
	};

	const imageAnimation = (index) => {
		if (index === activeBar) {
			if (animateDirection === 'forward') {
				return styles['animate-forward'];
			}
			if (animateDirection === 'backward') {
				return styles['animate-backward'];
			}
		}
		return '';
	};

	useEffect(() => {
		if (firstRender) {
			setFirstRender(false);
			return;
		}
		reverseImagesArray();
	}, [animateDirection]);

	const buttonClickHandler = (direction) => {
		navigationHandler(direction);
		udpateZIndexHandler(direction);
	};

	return (
		<div className={styles['blog-carousel']}>
			<div className={styles['button-group']}>
				<div
					onClick={() => {
						buttonClickHandler('backward');
					}}>
					<LeftIcon />
				</div>
				<div
					onClick={() => {
						buttonClickHandler('forward');
					}}>
					<RightIcon />
				</div>
			</div>
			<div className={styles['image-group']}>
				{carouselImages.map((item, index) => {
					return (
						<img
							src={item.imgSrc}
							style={{
								zIndex: item.zIndex,
								animationDuration: `${timerDuration}ms`,
							}}
							key={index}
							className={imageAnimation(index)}></img>
					);
				})}
			</div>
			<div className={styles['loading-group']}>
				{carouselImages.map((item, index) => {
					let reversedIndex = Math.abs(activeBar - (carouselImages.length - 1));
					return (
						<Loading
							key={index}
							animate={reversedIndex === index}
							delay={timerDuration}
							style={{ width: `calc(90% / ${images.length})` }}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default BlogCarousel;
