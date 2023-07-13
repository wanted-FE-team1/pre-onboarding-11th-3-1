import { Endpoints } from "@octokit/types";
import Issue from "./Issue";
import Advertising from "./Advertising";

type issueListResponseType =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];

type issueListType = issueListResponseType["data"];

interface IssueListWithAdPProps {
  issueList?: issueListType;
}

function IssueListWithAd({ issueList }: IssueListWithAdPProps) {
  const issueListComponent = issueList?.map(issue => {
    return (
      <Issue
        key={issue.id}
        issueNumber={issue.number}
        title={issue.title}
        name={issue.user?.login}
        createdAt={issue.created_at}
        comments={issue.comments}
      />
    );
  });

  const insertAdvertising = (componentList: JSX.Element[] | undefined) => {
    if (componentList === undefined) return;

    const issueListWithAdvertising = [...componentList];
    for (let i = 0; i <= issueListWithAdvertising.length; i += 5) {
      if (i === 0) continue;
      issueListWithAdvertising.splice(i, 0, <Advertising key={i} />);
      i += 1;
    }
    return issueListWithAdvertising;
  };

  return insertAdvertising(issueListComponent);
}

export default IssueListWithAd;
