import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Gallery from './pages/ActivityEight/Gallery';
import ScrollableList from './pages/ActivityEleven/ScrollableList';
import BlurImagesList from './pages/ActivityFive/BlurImagesList';
import HiddenSearch from './pages/ActivityFour/HiddenSearch';
import ClipPathTransitions from './pages/ActivityNine/ClipPathTransitions';
import ImageZoom from './pages/ActivityOne/ImageZoom';
import BlogCarousel from './pages/ActivitySeven/BlogCarousel';
import ScrollPage from './pages/ActivitySix/ScrollPage';
import ScrollPractice from './pages/ActivityTen/ScrollPractice';
import RotatingTemplate from './pages/ActivityThree/RotatingTemplate';
import Navigator from './pages/ActivityTwo/Navigator';
import DraggableList from './pages/DraggableList/DraggableList';
import Test from './pages/Test/Test';

function App(props) {
	return (
		<div className={styles['app']}>
			<NavigationBar />
			<Routes>
				<Route path='activity-1' element={<ImageZoom />} />
				<Route path='activity-2' element={<Navigator />} />
				<Route path='activity-3' element={<RotatingTemplate />} />
				<Route path='activity-4' element={<HiddenSearch />} />
				<Route path='activity-5' element={<BlurImagesList />} />
				<Route path='activity-6' element={<ScrollPage />} />
				<Route path='activity-7' element={<BlogCarousel />} />
				<Route path='activity-8' element={<Gallery />} />
				<Route path='activity-9' element={<ClipPathTransitions />} />
				<Route path='activity-10' element={<ScrollPractice />} />
				<Route path='activity-11' element={<ScrollableList />} />
				<Route path='draggable' element={<DraggableList />} />
				<Route path='test' element={<Test />} />
			</Routes>
		</div>
	);
}

export default App;
