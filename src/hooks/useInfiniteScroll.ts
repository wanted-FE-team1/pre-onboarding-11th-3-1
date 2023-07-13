import { useEffect } from "react";

export function useInfiniteScroll() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 0.3,
    };

    const handleIntersect: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[]
    ) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isPortfoliosError && hasNextPortfolio) {
          // fetchNextPortfolio();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
}
