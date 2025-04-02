import styled from 'styled-components';


export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:rgb(248, 245, 245);
  background: linear-gradient(135deg,#c4a87c,rgb(241, 214, 171));
  box-shadow: 0 4px 6px rgba(108, 6, 99, 0.1);
  border: rgb(43, 43, 40);
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

export const SectionTitle = styled.h1`
  font-size: 2.5rem; color: #131313;
  background-color: #e7e5e4;
  letter-spacing: .15em;
  color:rgb(249, 244, 244);
  @media (max-width: 768px) { font-size: 2rem; }
  @media (max-width: 480px) { font-size: 1.5rem; }
`;

export const SectionText = styled.div`
  p {
    font-size: 1.2rem;
    color:rgb(230, 224, 224);
    @media (max-width: 768px) { font-size: 1.1rem; }
    @media (max-width: 480px) { font-size: 1rem; }
  }
`;

// export const SectionLink = styled.nav`
// a {
//   color: white;
//   text-decoration: none;

// }
// ` 
  
