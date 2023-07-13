import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IssueContext } from '../contexts/IC';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

export default function IssueDetail() {
  const { getIssue } = useContext(IssueContext);
  const { id } = useParams();

  const issue = getIssue(Number(id));

  return (
    <div className='max-w-xl m-auto'>
      <h2 className='flex justify-between items-center hover:bg-slate-300  p-3 border-b-2'>
        <div className='w-14 h-14 rounded-lg overflow-hidden mr-4'>
          <img
            className='w-full h-full object-cover'
            src={issue.user.avatar_url}
            alt='깃헙 프로필 이미지'
          />
        </div>
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
      </h2>
      <div className='p-3'>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
      </div>
    </div>
  );
}
