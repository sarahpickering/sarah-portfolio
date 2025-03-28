import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,rgb(218,165,32),rgb(160, 128, 13));
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px;
  border-radius: 30px;
  margin: 30px 0px;
  text-align: center;
  transition: all 0.3s ease;
  max-width: 1500px;
  width: 90%;
  margin: 40px auto;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color:rgb(249, 244, 244);
  @media (max-width: 768px) { font-size: 2rem; }
  @media (max-width: 480px) { font-size: 1.5rem; }
`;

export const SectionText = styled.div`
  p {
    font-size: 1.2rem;
    color:rgb(249, 242, 242);
    @media (max-width: 768px) { font-size: 1.1rem; }
    @media (max-width: 480px) { font-size: 1rem; }
  }
`;