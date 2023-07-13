import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import issueType from '../../type/issueType';
import Content from './Content';
import Title from './Title';

function IssueDetail() {
	const [issueone, setIssueone] = useState<issueType>();
	const { id } = useParams();
	const issueNumber = id;
	const getIssues = () => {
		const config = {
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_GIBHUB_API}`,
			},
		};

		axios
			.get(
				`https://api.github.com/repos/facebook/react/issues/${issueNumber}`,
				config,
			)
			.then((response) => {
				const issue = response.data;
				setIssueone({
					id: issue.number,
					title: issue.title,
					author: issue.user.login,
					date: issue.created_at,
					commentNumber: issue.comments,
					profileImg: issue.user.avatar_url,
					content: issue.body,
				});
			})

			.catch(() => {
				window.location.replace('/error');
			});
	};

	useEffect(() => {
		getIssues();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [issueone]);

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{issueone && (
				<>
					<Title issue={issueone} />
					<Content issueContent={issueone.content!} />
				</>
			)}
		</>
	);
}

export default IssueDetail;
