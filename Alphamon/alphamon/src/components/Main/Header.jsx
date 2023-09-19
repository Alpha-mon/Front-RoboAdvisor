import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
    <>
        <Container>
            <LeftMenu src="/icons/leftMenu.png" alt="왼쪽메뉴"></LeftMenu>
            <Title>AlphaMon</Title>
            <Alphamonlogo src="/images/logo.png" alt="로고"></Alphamonlogo>
        </Container>
    </>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 386px;
    height: 48px;
    flex-shrink: 0;
    padding: 48px 0 14px;
`;

const LeftMenu = styled.img`
    width: 21.758px;
    height: 16.714px;
    flex-shrink: 0;
    margin-left: 14px;
`;

const Title = styled.div`
    color: var(--light-gray-11, #000);
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; 
    margin-left: 120px;
    margin-right: auto;
`;

const Alphamonlogo = styled.img`
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    margin-right: 14x;
`;

export default Header;