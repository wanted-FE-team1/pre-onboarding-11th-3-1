import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IssueContext } from '../contexts/IssueContext';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function IssueList() {
  const { issues, getInfiniteIssues, isLoading, isError } =
    useContext(IssueContext);

  const handleIntersection = () => {
    if (!isLoading) {
      getInfiniteIssues();
    }
  };

  const ref = useIntersectionObserver({ callback: handleIntersection });

  if (isError) return <div>에러</div>;

  return (
    <div className='max-w-xl m-auto'>
      <ul>
        {issues?.map((issue, index) => (
          <div key={issue.id}>
            <li className='border-solid border-b-2 border-gray-200 '>
              <Link
                to={`/issue/${issue.id}`}
                className='flex justify-between items-center hover:bg-slate-300  p-3'
              >
                <div>
                  <h2 className='text-base'>{`#${issue.number} ${issue.title}`}</h2>
                  <p className='text-sm'>
                    {`작성자: ${issue.user?.login}, `}
                    {`작성일: ${issue.created_at}`}
                  </p>
                </div>
                <p>{`코멘트: ${issue.comments}`}</p>
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
        <li ref={ref}></li>
      </ul>
    </div>
  );
}
