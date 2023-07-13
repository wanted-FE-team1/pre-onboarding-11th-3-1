import styled from "styled-components";
import ReactMarkdown from "react-markdown";

interface DetailBodyProps {
  body: string | null | undefined;
}

function DetailBody({ body }: DetailBodyProps) {
  return (
    <Container>
      <ReactMarkdown children={body ? body : ""}></ReactMarkdown>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px;
  font-size: 20px;
  line-height: 1.6;
`;

export default DetailBody;
