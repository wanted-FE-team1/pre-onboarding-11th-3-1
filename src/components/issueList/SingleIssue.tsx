import { useContext } from 'react';

import issueType from '../../type/issueType';
import { IssueContext } from './IssueList';

type Iprops = {
	issue: issueType;
};

function SingleIssue({ issue }: Iprops) {
	const { id, title, author, date, commentNumber } = issue;
	const user = useContext(IssueContext);
	// console.log(user);
	return (
		<li className="flex  items-center justify-center text-gray-800 py-3 border-b-2 border-gray">
			<div className="flex  flex-col items-center justify-center text-gray-800">
				<div className="flex items-center justify-center text-gray-800">
					<span>#{id}</span>
					<span>{title}</span>
				</div>
				<div className="flex  items-center justify-center text-gray-800">
					<span>작성자: {author}</span>
					<span>작성일: {date}</span>
				</div>
			</div>
			<div>코멘트: {commentNumber}</div>
		</li>
	);
}

export default SingleIssue;
