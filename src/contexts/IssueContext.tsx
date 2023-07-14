import React, { createContext, useRef, useState } from 'react';
import { RepositoryAPI, IssueListResponseType } from '../apis/issues';

interface IssueContextType {
  issues: IssueListResponseType['data'];
  isLoading: boolean;
  isError: boolean;
  getInfiniteIssues: () => void;
}

const defaultVlaue: IssueContextType = {
  issues: [],
  isLoading: false,
  isError: false,
  getInfiniteIssues: () => {
    throw new Error();
  },
};

interface IssueContextProviderProps {
  children: React.ReactNode;
}

export const IssueContext = createContext<IssueContextType>(defaultVlaue);

export function IssueContextProvider({ children }: IssueContextProviderProps) {
  const [issues, setIssues] = useState<IssueListResponseType['data']>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const pageRef = useRef(1);
  const isEndRef = useRef(false);

  const getInfiniteIssues = async () => {
    if (isEndRef.current) return;

    setIsLoading(true);
    try {
      const response = await RepositoryAPI.getIssueList(pageRef.current);
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

  return (
    <IssueContext.Provider
      value={{ issues, isLoading, getInfiniteIssues, isError }}
    >
      {children}
    </IssueContext.Provider>
  );
}
