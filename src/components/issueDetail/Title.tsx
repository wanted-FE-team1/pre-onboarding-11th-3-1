import issueType from '../../type/issueType';

type Iprops = {
	issue: issueType;
};

function Title({ issue }: Iprops) {
	const { id, title, author, date, commentNumber, profileImg } = issue;
	return (
		<li className="flex  items-center justify-center text-gray-800 py-3 border-b-2 border-gray">
			<div className="flex  flex-col items-center justify-center text-gray-800">
				<div className="flex items-center justify-center text-gray-800">
					<img src={profileImg} alt="profileImage" className="w-10 mr-3" />
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

export default Title;
