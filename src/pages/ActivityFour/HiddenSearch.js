import React, { useState    } from 'react';
import styles from './HiddenSearch.scss';

function HiddenSearch(props) {
	const [isActive, setIsActive] = useState(false);

	const activeButtonHandler = () => {
		setIsActive((prevValue) => !prevValue);
	};

	return (
		<div className={`${styles['hidden-search']} ${!isActive && styles['disabled']}`}>
			<input type='text' placeholder='Search...'></input>
			<div onClick={activeButtonHandler}>
				<span class='material-symbols-outlined'>search</span>
			</div>
		</div>
	);
}

export default HiddenSearch;
