import styled from "styled-components";

interface HeaderProps {
  organization: string;
  repository: string;
}

function Header({ organization, repository }: HeaderProps) {
  return (
    <Container>
      <h1>
        {organization} / {repository}
      </h1>
    </Container>
  );
}

const Container = styled.header`
  text-align: center;
  padding: 30px;
`;

export default Header;
