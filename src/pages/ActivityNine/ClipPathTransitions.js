import React from 'react';
import Cards from './Cards/Cards';

function ClipPathTransitions(props) {
	return (
		<div>
			<select name='animation-direction'>
				<option value='ltr'>left to right</option>
				<option value='rtl'>right to left</option>
				<option value='ttb'>top to bottom</option>
				<option value='btt'>bottom to top</option>
			</select>

			<Cards />
		</div>
	);
}

export default ClipPathTransitions;
