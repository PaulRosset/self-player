import styled from "styled-components";

export const Padding = styled.div`
  padding: 12px;
  padding-right: 20px;
`;

export const Title = styled(Padding)`
  font-weight: bold;
`;

export const Separator = styled.div`
  border-top: solid 2px white;
  width: 100%;
  margin: 10px 0;
`;

export const Playlist = styled.div``;

export const LinkEpi = styled(Padding)`
  cursor: pointer;

  &:hover {
    background-color: #9748ea;
  }
`;
