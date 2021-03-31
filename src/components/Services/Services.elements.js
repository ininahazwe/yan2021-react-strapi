import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px){
    height: auto;
    margin-bottom: 50px;
  }
  
`
export const Title = styled.h1`
  font-size: 3rem;
  color: var(--blanc);
  margin-bottom: 100px;
  
  @media screen and (max-width: 768px){
    margin: 50px 0;
  }
`
export const Title2 = styled.h1`
  font-size: 3rem;
  color: var(--rouge);
  margin-bottom: 100px;
  
  @media screen and (max-width: 768px){
    margin: 50px 0;
  }
`
export const Subtitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 20px;
`
export const SubDescription = styled.p`
    
`
export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin: 0 100px;
  gap: 20px;
  
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`
export const Service = styled.div`
  text-align: center;
  background: var(--blanc);
  padding: 20px;
  min-height: 200px;
`
