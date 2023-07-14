import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { convertDate } from '../utils/convertDate';
import { IssueDataType, RepositoryAPI } from '../apis/issues';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function IssueDetail() {
  const { id } = useParams();
  const [issue, setIssue] = useState<IssueDataType>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const fetchIssue = async () => {
    let response;

    try {
      if (id) {
        response = await RepositoryAPI.getIssue(id);
        setIssue(response);
        setLoading(false);
      }
    } catch (error) {
      return navigate('/error');
    }
  };

  useEffect(() => {
    fetchIssue();
  }, [id]);

  return (
    <>
      {!isLoading && issue ? (
        <div className='max-w-xl m-auto'>
          <div className='flex justify-between items-center hover:bg-slate-300 p-3 pb-7 border-b-2 rounded-lg drop-shadow-lg'>
            <div className='w-14 h-14 rounded-lg overflow-hidden mr-4'>
              <img
                className='w-full h-full object-cover'
                src={issue.user?.avatar_url}
                alt='깃헙 프로필 이미지'
              />
            </div>
            <div>
              <h2 className='text-lg'>
                #{issue.number}&nbsp;{issue.title}
              </h2>
              <p className='text-sm pt-2'>
                작성자: {issue.user?.login}&nbsp; 작성일:{' '}
                {convertDate(issue.created_at)}
              </p>
            </div>
            <p className='whitespace-nowrap p-2 font-medium rounded-full'>
              코멘트: {issue.comments}
            </p>
          </div>
          <div className='p-3 pt-7'>
            {issue.body && <MarkdownPreview source={issue.body} />}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
