import React, { useEffect, useState } from 'react';
import { getIssues, listReposIssueResponse } from '../apis/issues';
import { Link } from 'react-router-dom';

export default function IssueList() {
  // assuming `issues` is the data you fetched
  const [issues, setIssues] = useState<listReposIssueResponse['data']>([]);

  useEffect(() => {
    (async () => {
      const response = await getIssues(0);
      console.log('response :>> ', response);
      // getEx();
      setIssues(response);
    })();
  }, []);

  return (
    <div className='max-w-xl m-auto'>
      <p>이슈리스트</p>
      <div className='divide-y divide-solid'>
        {issues?.map((issue, index) => (
          <>
            <div key={issue.id}>
              <Link
                to={`/issue/${issue.id}`}
                className='flex justify-between items-center	 hover:bg-slate-300  p-3'
              >
                <div>
                  <h2 className='text-base'>{`#${issue.number} ${issue.title}`}</h2>
                  <p className='text-sm'>
                    {`작성자: ${issue.user?.login}, `}
                    {`작성일: ${issue.created_at}`}
                  </p>
                </div>
                <p>{`코멘트: ${issue.comments}`}</p>
                {/* 프로필이미지: issue.user.avatar_url
                    본문: issue.body */}
              </Link>
            </div>
            {index % 5 === 4 && (
              <Link to='https://www.wanted.co.kr/'>
                <img
                  className='m-auto p-5'
                  src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
                  alt='Ad'
                />
              </Link>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
