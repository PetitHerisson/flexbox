import React from 'react'
import styled from 'styled-components'
import cat from './cat.png'

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    & > * {
        padding: 10px;
        margin: 10px;
        flex: 1 100%;
        border-radius: 10px;
    }@media(max-width: 768px){
        flex-direction: column;
    } 
`;

const Header = styled.div`
    background: hotpink;
    height: 120px;
`;

const Main = styled.div`
    background: deepskyblue;
    text-align: left;
    height: 400px;
    font-size: 25px;
    flex: 4;
    text-align: center;
`;

const Sidebar = styled.div`
    background: tomato;
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    @media(max-width: 768px){
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

const Footer = styled.div`
    background: lightgreen;
    height: 80px;
`;
const layout = () => {
    return (
        <Container>
            <Header><h1>Header</h1></Header>
            <Sidebar>
                <h1>Item 1</h1>
                <h1>Item 2</h1>
                <h1>Item 3</h1>
            </Sidebar>
            <Main>
                <img style={{ width: '350px' }} src={cat} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Main>
            <Footer><h1>Footer</h1></Footer>
        </Container>
    )
}

export default layout
