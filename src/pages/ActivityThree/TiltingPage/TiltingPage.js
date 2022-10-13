import React from 'react';
import styles from './TiltingPage.scss';
import PageCard from './PageCard/PageCard';

const pageData = [
	{
		title: 'Semnopithecus entellus',
		author: 'Dusicyon thous',
		publishedDate: '5/12/2022',
		content:
			'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
	},
	{
		title: 'Spermophilus richardsonii',
		author: 'Falco mexicanus',
		publishedDate: '6/25/2022',
		content:
			'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
	},
	{
		title: 'Philetairus socius',
		author: 'Milvago chimachima',
		publishedDate: '9/19/2021',
		content:
			'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
	},
	{
		title: 'Sciurus vulgaris',
		author: 'Gyps fulvus',
		publishedDate: '6/19/2022',
		content:
			'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
	},
	{
		title: 'Pandon haliaetus',
		author: 'Tringa glareola',
		publishedDate: '12/30/2021',
		content:
			'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
	},
	{
		title: 'Calyptorhynchus magnificus',
		author: 'Sarkidornis melanotos',
		publishedDate: '10/8/2021',
		content:
			'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
	},
	{
		title: 'Epicrates cenchria maurus',
		author: 'Choloepus hoffmani',
		publishedDate: '8/6/2022',
		content:
			'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
	},
	{
		title: 'Nucifraga columbiana',
		author: 'Francolinus leucoscepus',
		publishedDate: '10/5/2021',
		content:
			'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
	},
	{
		title: 'Pitangus sulphuratus',
		author: 'Neophron percnopterus',
		publishedDate: '2/8/2022',
		content:
			'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
	},
	{
		title: 'Otocyon megalotis',
		author: 'Centrocercus urophasianus',
		publishedDate: '1/14/2022',
		content:
			'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
	},
];

function TiltingPage(props) {
	const { templateIsActive } = props;

	return (
		<div
			className={`${styles['tilting-page']} ${
				templateIsActive ? styles['active'] : ''
			}`}>
			<main>
				{pageData
					.sort((a, b) => {
						if (a.content.length > b.content.length) {
							return 1;
						} else if (a.content.length < b.content.length) {
							return -1;
						} else {
							return 0;
						}
					})
					.map((item, index) => (
						<PageCard cardData={pageData[index]} />
					))}
			</main>
		</div>
	);
}

export default TiltingPage;
