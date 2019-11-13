import styled from 'styled-components';

export const CustomTitle: any = styled.h1`
  font-family: var(--base-font-family);
  font-size: ${(props: any) => props.fontSize || '4rem'};
  color: ${(props: any) => props.color || 'var(--base-color)'};
  box-shadow: 20px 20px 20px rgba(0, 213, 60, 0.7);
  border-radius: 5px;
  background-color: ${(props: any) => props.bgColor || 'transparent'};
  padding: 3%;
  margin: 1% 0 1% 0;
`;