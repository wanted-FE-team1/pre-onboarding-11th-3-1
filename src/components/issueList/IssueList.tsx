import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import { GetResponseTypeFromEndpointMethod } from '@octokit/types';

import issueType from '../../type/issueType';
import Ad from './Ad';
import SingleIssue from './SingleIssue';

type CreateLabelResponse = GetResponseTypeFromEndpointMethod<any>;

export const IssueContext = createContext<issueType>({});

function IssueList() {
	const [issueList, setIssueList] = useState<issueType[]>([]);
	// let allIssues = [] as CreateLabelResponse[];
	const getIssues = () => {
		const config = {
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_GIBHUB_API}`,
			},
			params: {
				page: 1,
				per_page: 30,
			},
		};

		axios
			.get('https://api.github.com/repos/facebook/react/issues', config)
			.then((response) => {
				const issues = response.data;
				// allIssues = allIssues.concat(issues);
				setIssueList(
					issues.map((issue: CreateLabelResponse) => ({
						id: issue.number,
						title: issue.title,
						author: issue.user.login,
						date: issue.created_at,
						commentNumber: issue.comments,
						profileImg: issue.user.avatar_url,
						content: issue.body,
					})),
				);
			})
			.catch(() => {
				// window.location.replace('/error');
			});
	};

	useEffect(() => getIssues(), []);

	return (
		<ul className="list-none">
			{issueList.map((issue, index) => (
				<IssueContext.Provider key={issue.id} value={issue}>
					<Link to={`/issuedetail/${issue.id}`}>
						<SingleIssue issue={issue} />
					</Link>
					<Link to="https://www.wanted.co.kr/">
						{(index + 1) % 5 === 0 && <Ad />}
					</Link>
				</IssueContext.Provider>
			))}
		</ul>
	);
}

export default IssueList;
