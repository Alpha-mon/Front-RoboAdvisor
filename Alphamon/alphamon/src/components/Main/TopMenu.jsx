import React, { useState } from 'react';
import styled from 'styled-components';

function TopMenu() {
    const [selectMenu, setSelectMenu] = useState('홈 화면'); 
    console.log(selectMenu);
    return (
    <>
        <Container>
            <HomeTag onClick={() => {setSelectMenu('홈 화면')}}isSelected={selectMenu === '홈 화면'}>홈 화면</HomeTag>
            <GuideTag onClick={() => {setSelectMenu('주식 초보자 가이드')}}isSelected={selectMenu === '주식 초보자 가이드'}>주식 초보자 가이드</GuideTag>
            <ChatbotTag onClick={() => {setSelectMenu('챗봇 서비스 이용하기')}}isSelected={selectMenu === '챗봇 서비스 이용하기'}>챗봇 서비스 이용하기</ChatbotTag>
        </Container>
    </>
    );

    // topmenu 를 props 끌어와서 state마다 components를 보여주는 방식은 어떤지
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
    color: ${props => (props.isSelected ? 'blue' : 'black')};
    `;

const GuideTag = styled.div`
    color: ${props => (props.isSelected ? 'blue' : 'black')};
`;

const ChatbotTag = styled.div`
    color: ${props => (props.isSelected ? 'blue' : 'black')};
`;

export default TopMenu;