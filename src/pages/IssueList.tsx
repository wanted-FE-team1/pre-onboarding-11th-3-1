import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IssueContext } from '../contexts/IssueContext';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Error from '../components/common/Error';
import { convertDate } from '../utils/convertDate';
import { IssueDataType } from '../apis/issues';

export default function IssueList() {
  const baseUrl = useLocation().pathname;
  const { issues, getInfiniteIssues, isLoading, isError } =
    useContext(IssueContext);

  const handleIntersection = () => {
    if (!isLoading) {
      getInfiniteIssues();
    }
  };
  const ref = useIntersectionObserver({ callback: handleIntersection });

  return (
    <div className='max-w-xl m-auto'>
      <ul>
        {issues?.map((issue: IssueDataType, index: number) => (
          <div key={issue.id + index}>
            <li className='border-solid border-b-2 border-gray-200 '>
              <Link
                to={`${baseUrl}/${issue.number}`}
                className='flex justify-between items-center hover:bg-slate-300  p-3'
              >
                <div>
                  <h2 className='text-base'>
                    #{issue.number} {issue.title}
                  </h2>
                  <p className='text-sm'>
                    작성자: {issue.user?.login} 작성일:
                    {convertDate(issue.created_at)}
                  </p>
                </div>
                <p className='whitespace-nowrap'>코멘트: {issue.comments}</p>
              </Link>
            </li>
            {index % 5 === 4 && (
              <Link to='https://www.wanted.co.kr/'>
                <img
                  className='m-auto p-5'
                  src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
                  alt='Ad'
                />
              </Link>
            )}
          </div>
        ))}
        {isLoading && <LoadingSpinner />}
        {isError ? <Error /> : <li ref={ref}></li>}
      </ul>
    </div>
  );
}
