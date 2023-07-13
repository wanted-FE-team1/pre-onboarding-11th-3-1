import React, { createContext, useRef, useState } from 'react';
import { getIssuesApi, listReposIssueResponse } from '../apis/issues';

interface IssueContextType {
  issues: listReposIssueResponse['data'];
  isLoading: boolean;
  isError: boolean;
  getInfiniteIssues: () => void;
  getIssue: (id: number) => listReposIssueResponse['data'][number];
}

const defaultVlaue: IssueContextType = {
  issues: [],
  isLoading: false,
  isError: false,
  getInfiniteIssues: () => {
    throw new Error();
  },
  getIssue: () => {
    throw new Error();
  },
};

interface IssueContextProviderProps {
  children: React.ReactNode;
}

export const IssueContext = createContext<IssueContextType>(defaultVlaue);

export function IssueContextProvider({ children }: IssueContextProviderProps) {
  const [issues, setIssues] = useState<listReposIssueResponse['data']>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const pageRef = useRef(1);
  const isEndRef = useRef(false);

  const getInfiniteIssues = async () => {
    if (isEndRef.current) return;

    setIsLoading(true);

    try {
      const response = await getIssuesApi(pageRef.current);

      if (response.length === 0) {
        isEndRef.current = true;
        return;
      }

      pageRef.current = pageRef.current + 1;
      setIssues((prev) => [...prev, ...response]);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getIssue = (id: number) => {
    const issue = issues.find((issue) => issue.id === id);
    if (!issue) {
      throw new Error('id에 해당하는 issue가 없습니다 ');
    }
    return issue;
  };

  return (
    <IssueContext.Provider
      value={{ issues, isLoading, getInfiniteIssues, getIssue, isError }}
    >
      {children}
    </IssueContext.Provider>
  );
}
