import { useEffect, useRef } from 'react';

export const useIntersectionObserver = ({ callback }: { callback: any }) => {
  const ref = useRef(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    // 옵저버 콜백함수
    const target = entries[0];

    if (target.isIntersecting) {
      callback();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
};
