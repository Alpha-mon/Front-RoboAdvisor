// import logo from './logo.svg';
// import './App.css';
import Header from '../../components/Main/Header';
import TopMenu from '../../components/Main/TopMenu';
import BottomMenu from '../../components/Main/BottomMenu';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
  return(
  <>
    <Container>
      <Header></Header>
      <TopMenu></TopMenu>
      <Mainservice></Mainservice>
      <Test onClick={()=>navigate('/test')}>
        <Testimage src="/images/edit.png" alt="테스트"></Testimage>
        <TextContainer>
          <Testtext>투자 성향 테스트</Testtext>
          <Testexplain>나는 어떤 투자 성향을 가지고 있을까?</Testexplain>
        </TextContainer>
      </Test>
      <BottomMenu></BottomMenu>
    </Container>
  </>
  );
}

const Container = styled.div`
`;

const Mainservice = styled.div`
`;

const Test = styled.div`
  position: absolute;
  left: 14px; 
  bottom: 97.8px;
  display: flex;
  width: 386px;
  height: 71px;
  transform: rotate(0.023deg);
  padding: 6.029px 0px 6.029px 6.029px;
  align-items: center;
  gap: 9.646px;
  flex-shrink: 0;
  border-radius: 9.043px;
  background: var(--White, #FFF);
  box-shadow: 0px 9.64561px 19.29122px 0px rgba(245, 248, 252, 0.60);
`;

const Testimage = styled.img`
  margin-top: 6px;
  width: 48px;
  height: 48px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Testtext = styled.div`
  margin-top: 13px;
  color: var(--Black, #212226);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.468px; /* 120.57% */
  letter-spacing: -0.18px;
`;

const Testexplain = styled.div`
  margin-top: 6px;
  color: var(--Gray-Text, #949BA5);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 10.851px; /* 108.513% */
  letter-spacing: -0.15px;
`;

export default Main;