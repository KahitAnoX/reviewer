import React from 'react';
import styles from './PageCard.scss';

function PageCard(props) {
	const { cardData } = props;
	const { title, author, publishedDate, content } = cardData;

	return (
		<article className={styles['page-card']}>
			<div>image to</div>
			<h2>{title}</h2>
			<p>{author}</p>
			<p>{publishedDate}</p>
			<p>{content}</p>
			<button>Read More</button>
		</article>
	);
}

export default PageCard;
