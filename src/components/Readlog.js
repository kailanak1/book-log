import React from 'react';
import Form from './Form'; 
import styled from 'styled-components'; 

const Container = styled.div`
  display: inline-block;
  background-color: #FEEDD3;
  border-radius: 27px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Title = styled.h2`
  color: #87ceeb;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Content = styled.div`
  align-self: center;
`;


function Readlog(){

        return(
            <Container>
                <Content>
                <Title>How long will my TBR take?</Title>
                <Form/>
                </Content>
            </Container>
        )
}

export default Readlog