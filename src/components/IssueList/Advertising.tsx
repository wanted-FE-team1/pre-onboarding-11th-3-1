import styled from "styled-components";

function Advertising() {
  return (
    <Link href="https://www.wanted.co.kr/" target="_blank">
      <img
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
        alt="wanted logo"
      />
    </Link>
  );
}

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 76.5px;
  border-bottom: 1px solid #e5e5e5;
`;

export default Advertising;
