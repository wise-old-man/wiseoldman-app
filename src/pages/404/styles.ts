import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Panel = styled.div`
  position: relative;
  margin: auto;
  width: 500px;
  max-width: 100%;
  padding: var(--space-7);
  background: var(--panel);
  border-radius: var(--radius-3);
`;

export const Title = styled.h1`
  font-weight: var(--black);
  font-size: var(--font-9);
  margin-bottom: var(--space-2);
`;

export const SubTitle = styled.h2`
  font-size: var(--font-5);
  color: var(--foreground-low);
`;

export const ReturnLink = styled.a`
  display: block;
  text-decoration: none;
  color: var(--primary);
  font-size: var(--font-4);
  margin-top: var(--space-5);
  font-weight: var(--bold);
`;

export const TrollImage = styled.img`
  position: absolute;
  right: -20px;
  top: -50px;
  height: 300px;
`;
