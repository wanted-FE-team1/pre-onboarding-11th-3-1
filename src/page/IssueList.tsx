import { useState, useEffect } from "react";
import { Endpoints } from "@octokit/types";
import { RepositoryAPI } from "../api/api";
import IssueListWithAd from "../components/IssueList/IssueListWithAd";

type issueListResponseType =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];

type issueListType = issueListResponseType["data"];

function IssueList() {
  const [issueList, setIssueList] = useState<issueListType>();

  useEffect(() => {
    RepositoryAPI.getIssueList()
      .then(res => {
        setIssueList(res);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      <IssueListWithAd issueList={issueList} />
    </ul>
  );
}

export default IssueList;
