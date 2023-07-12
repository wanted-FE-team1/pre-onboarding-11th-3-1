import React from 'react';
import { useParams } from 'react-router-dom';

export default function IssueDetail() {
  const { id } = useParams();

  // Fetch the issue based on the id, or use a context
  //    const issue = ...;

  return (
    <div>
      {/* <h2>{issue.title}</h2>
      <p>{issue.author}</p>
      <p>{issue.date}</p>
      <p>{issue.comments}</p>
      <ReactMarkdown>{issue.body}</ReactMarkdown>
      <img src={issue.avatarUrl} alt={`${issue.author}'s avatar`} /> */}
    </div>
  );
}
