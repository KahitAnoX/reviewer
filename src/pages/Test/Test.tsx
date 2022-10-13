import React, { useState, useRef, SyntheticEvent } from 'react';
import styles from './Test.scss';

function Test() {
	const [divBackground, setDivBackground] = useState(false);
	const [childText2, setChildText2] = useState(false);

	// const onMouseOverHandler = (event, mouseState) => {
	// 	setDivBackground(mouseState);
	// };

	// const childMouseOverHandler = (event, mouseState) => {
	// 	event.stopPropagation();
	// 	setChildText2(mouseState);
	// };

	const mouseEventHandler = (e: SyntheticEvent) => {};

	const scrollableDivLastRef = useRef(null);

	return (
		// <div
		// 	className={styles['test']}
		// 	onMouseOver={(e) => onMouseOverHandler(e, true)}
		// 	onMouseOut={(e) => onMouseOverHandler(e, false)}
		// 	style={{ background: `${divBackground ? 'red' : 'green'}` }}>
		// 	{divBackground ? 'mouseover' : 'mouseout'}
		// 	<div>1</div>
		// 	<p>testing</p>
		// 	<div
		// 		onMouseOver={(e) => childMouseOverHandler(e, true)}
		// 		onMouseOut={(e) => childMouseOverHandler(e, false)}>
		// 		{console.log(childText2)}
		// 		{childText2 ? 'mouseover' : '2'}
		// 	</div>
		// </div>

		// <div className={styles['flex-trainer']}>
		// 	<div>123</div>
		// 	<div>456</div>
		// 	{/* <div>Exercitation officia nulla irure velit proident fugiat.</div> */}
		// 	<div>123</div>
		// 	<div>789</div>
		// </div>
		<>
			<button
				onMouseMove={
					(e) => mouseEventHandler(e)

					// console.log(scrollableDivLastRef.current.getBoundingClientRect())
				}>
				Click ME!
			</button>
			<div className={styles['scrollable-div']}>
				<div>
					Deserunt non nostrud ut irure cillum aute fugiat eiusmod aliquip. Est
					laborum et aliquip tempor. Nulla voluptate ad incididunt Lorem dolor
					eu commodo. Ea et consequat qui duis anim nisi. Quis incididunt nisi
					dolore sit occaecat amet incididunt in do in veniam. Velit dolor qui
					sint sint cupidatat anim culpa cupidatat reprehenderit veniam
					excepteur excepteur et. Ex occaecat culpa adipisicing sint est
					consequat quis. Qui officia laborum in minim excepteur exercitation
					fugiat ad excepteur veniam velit cillum in nisi. Fugiat enim cillum
					aliqua minim cupidatat commodo commodo fugiat do. Exercitation
					adipisicing in eiusmod dolore proident labore duis laboris elit
					voluptate aliqua ut. Ea laboris fugiat non sint
				</div>
				<div ref={scrollableDivLastRef}>
					velit magna mollit exercitation. Officia id aliquip incididunt amet
					excepteur anim tempor ex laborum id sunt. Ullamco sit deserunt
					consectetur sunt deserunt excepteur esse reprehenderit qui voluptate
					ea. Sunt occaecat id sit voluptate culpa minim laboris velit velit
					commodo. Anim veniam ad qui culpa ullamco. Aliqua ipsum sunt sunt
					nulla sit ut eu consequat in amet in consequat occaecat veniam.
					Eiusmod commodo laboris reprehenderit exercitation. Minim voluptate
					sit consectetur velit. Tempor deserunt commodo esse officia et
					voluptate ut et commodo. Ea elit ex veniam anim incididunt officia
					reprehenderit. Esse elit cillum dolore occaecat ipsum nisi duis. Ipsum
					commodo exercitation minim enim aliqua eu sunt et mollit. Duis nulla
					id labore est ea culpa. Veniam aliquip minim voluptate aute anim culpa
					anim ad esse do Lorem tempor deserunt. Ex tempor cupidatat ut nisi.
					Qui adipisicing do officia aliquip laboris enim aute magna. Ut veniam
					mollit cillum anim veniam dolor veniam aliquip laboris id qui amet.
					Cupidatat pariatur irure cupidatat exercitation culpa laboris cillum.
				</div>
			</div>
		</>
	);
}

export default Test;
