import React from 'react';
import styled from 'styled-components';

function TopMenu() {
    return (
    <>
        <Container>
            <HomeTag></HomeTag>
            <GuideTag></GuideTag>
            <ChatbotTag></ChatbotTag>
        </Container>
    </>
    );
}

const Container = styled.div`
    display: flex;
    width: 386px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 14px;
    background: #F2F2F2;
    position: absolute;
    top: 126px;
    left: 14px;
    justify-content: space-between;
    align-items: center; 
`;

const HomeTag = styled.div`
    width: 120px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.06);
    `;

const GuideTag = styled.div`
`;

const ChatbotTag = styled.div`
`;

export default TopMenu;