import React from 'react';
import styled from 'styled-components';

function BottomMenu() {
    return (
    <>
        <Container>
            <HomeMenu src="/icons/HomeMenu.png" alt="홈메뉴"></HomeMenu>
            <SecondMenu src="/icons/SecondMenu.png" alt="두번째메뉴"></SecondMenu>
            <CommuMenu src="/icons/CommuMenu.png" alt="커뮤메뉴"></CommuMenu>
            <MyMenu src="/icons/MyMenu.png" alt="마이메뉴"></MyMenu>
        </Container>
    </>
    );
}

const Container = styled.div`
    width: 414px;
    height: 72px;
    flex-shrink: 0;
    background: #FFF;
    box-shadow: 0px 2px 48px 0px rgba(0, 0, 0, 0.12);
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
`;

const MenuIcon = styled.img`
    width: 18px;
    height: 20px;
    flex-shrink: 0;
    margin-left: 42px;
    margin-right: 42px;
`;

const HomeMenu = styled(MenuIcon)``; 
const SecondMenu = styled(MenuIcon)``; 
const CommuMenu = styled(MenuIcon)``; 
const MyMenu = styled(MenuIcon)``; 

export default BottomMenu;