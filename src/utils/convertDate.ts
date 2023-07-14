export const convertDate = (time: string) => {
  const date = new Date(time);
  return (
    date.getFullYear() +
    '년 ' +
    (date.getMonth() + 1) +
    '월 ' +
    date.getDate() +
    '일 '
  );
};
