import React, { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import Header from './components/common/Header';
import ErrorPage from './pages/ErrorPage';
import LoadingPage from './pages/LoadingPage';

const IssueListPage = lazy(() => import('./pages/IssueListPage'));
const IssueDetailPage = lazy(() => import('./pages/IssueDetailPage'));
function App() {
	return (
		<>
			<Header />
			<Suspense fallback={<LoadingPage />}>
				<Routes>
					<Route path="/" element={<IssueListPage />} />
					<Route path="/issuedetail/:id" element={<IssueDetailPage />} />
					<Route path="/error" element={<ErrorPage />} />
					<Route path="/loading" element={<LoadingPage />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
