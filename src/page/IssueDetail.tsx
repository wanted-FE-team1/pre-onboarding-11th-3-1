import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Endpoints } from "@octokit/types";
import { RepositoryAPI } from "../api/api";
import DetailHeader from "../components/IssueDetail/DetailHeader";
import DetailBody from "../components/IssueDetail/DetailBody";

type issueResponseType =
  Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"];

type issueDetailType = issueResponseType["data"];

function IssueDetail() {
  const [issue, setIssue] = useState<issueDetailType>();
  const { id } = useParams();

  useEffect(() => {
    if (id === undefined) return;

    RepositoryAPI.getIssue(id)
      .then(res => {
        setIssue(res);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <>
      <DetailHeader
        title={issue?.title}
        issueNumber={issue?.number}
        name={issue?.user?.login}
        createdAt={issue?.created_at}
        comments={issue?.comments}
        avatar={issue?.user?.avatar_url}
      />
      <DetailBody body={issue?.body} />
    </>
  );
}

export default IssueDetail;
