import React from 'react';
import styles from './NavigationBar.scss';
import { NavLink } from 'react-router-dom';

function NavigationBar(props) {
	return (
		<div className={styles['navigation-bar']}>
			<NavLink
				className={({ isActive }) => (isActive ? styles['active'] : '')}
				to='/'>
				Back
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? styles['active'] : '')}
				to='/activity-1'>
				Activity#1
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? styles['active'] : '')}
				to='/activity-2'>
				Activity#2
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? styles['active'] : '')}
				to='/activity-3'>
				Activity#3
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? styles['active'] : '')}
				to='/activity-4'>
				Activity#4
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? styles['active'] : '')}
				to='/activity-5'>
				Activity#5
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? styles['active'] : '')}
				to='/activity-6'>
				Activity#6
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? styles['active'] : '')}
				to='/activity-7'>
				Activity#7
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? styles['active'] : '')}
				to='/activity-8'>
				Activity#8
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? styles['active'] : '')}
				to='/activity-9'>
				Activity#9
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? styles['active'] : '')}
				to='/activity-10'>
				Activity#10
			</NavLink>
		</div>
	);
}

export default NavigationBar;
