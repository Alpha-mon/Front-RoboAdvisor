import '../Test.css';
import { useEffect, useState } from 'react';

function App() {

  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(()=>{
    setVh()

    function onResize(){
      setVh()
    }

    window.addEventListener('resize',onResize)

  },[])

  const [page,setPage] = useState(0)

  const questionList = [
    {
      q: ['몇 년 전에 없어져도 되는 여윳돈으로 넣었던 투자 종목에서 1억이라는 돈을 벌게 되었다. 이후 나의 태도는?'],
      a: [
        { answer: 'a. 1억이면 나중에 쓸 일이 생길 수도 있으니까, 예금에 넣자', type: ['3'] },
        { answer: 'b. 1억으로 100억 가즈아 다시 투자 몰빵!!!', type: ['0'] },
        { answer: 'c. 반 정도는 예금하고 반 정도만 다시 투자해보자', type: ['2', '1'] },
      ]
    },
    {
      q: ['나는 경제에 관심이 많은 편이라, 관련 기사나 소식을 자주 보는 편이다.'],
      a: [
        { answer: 'a. 자주 본다', type: ['0', '1'] },
        { answer: 'b. 가끔 본다', type: ['2'] },
        { answer: 'c. 절대 보지 않는다', type: ['3'] },
      ]
    },
    {
      q: ['친구들이랑 게임을 하러갔다. 그때 친구가, “진 사람이 밥 사기 내기 콜?” 그때 나의 반응은?'],
      a: [
        { answer: 'a. “콜” (내기를 한다)', type: ['2', '1'] },
        { answer: 'b. “밥 받고, 디저트까지?” (판을 키운다)', type: ['0', '1'] },
        { answer: 'c. “뭔 내기야~재미로 해” (내기를 하지 않는다)', type: ['3'] },
      ]
    },
    {
      q: ['투자에 관심이 많은 나는, 투자 동아리원들과 모의투자 대회에 나가게 되었다. 투자 계획을 짤 때 나의 자세는?'],
      a: [
        { answer: 'a. 내가 생각한 나의 의견을 어필하며 주장을 내세운다', type: ['0'] },
        { answer: 'b. 팀원들의 말을 먼저 듣고, 내 생각을 정리해서 말한다', type: ['2', '1'] },
        { answer: 'c. 대부분 경청하며 회의 내용을 정리한다', type: ['3'] },
      ]
    },
    {
      q: ['나는 ETF, 채권, 주식, 금리, 재무제표와 같은 금융 기본 용어를 잘 알고 있다'],
      a: [
        { answer: 'a. 잘 모른다', type: ['3'] },
        { answer: 'b. 조금 안다', type: ['2'] },
        { answer: 'c. 매우 잘 안다', type: ['0', '1'] },
      ]
    },
  
    {
      q: ['내가 투자한 코인 종목이 급떡상하고 있다. 이때 나의 선택은?'],
      a: [
        { answer: 'a. 추가 매수 가자!!', type: ['0','1'] },
        { answer: 'b. 일단은 지켜보자는 마음으로 떡상한 이유들을 찾아보며 분석한다.', type: ['3','2'] },
        { answer: 'c. 얼른 팔아서 사고 싶었던 것들 쇼핑 고고!', type: ['1','2'] },
      ]
    },
    {
      q: ['내가 관심있게 보는 회사는?'],
      a: [
        { answer: 'a. 할머니,할아버지 때 부터 변함없이 든든한 대기업', type: ['3'] },
        { answer: 'b. 전세계가 주목하고 있는 떠오르는 회사', type: ['2', '1'] },
        { answer: 'c. 변동이 오르락 내리락, 변화가 빠른 회사', type: ['0'] },
      ]
    },
    {
      q: ['내가 주식을 하는 이유는 뭘까?'],
      a: [
        { answer: 'a. 예적금보다 빠르게 수익을 창출할 수 있어서', type: ['1','2'] },
        { answer: 'b. 장기적으로 봤을 때 수익률을 높여 안정적인 자산을 가지고 싶어서', type: ['3'] },
        { answer: 'c. 큰 돈을 빠른 시일 내에 벌고 싶어서', type: ['0'] },
      ]
    },
    {
      q: ['갑자기 내가 투자한 종목이 급변하고 있다!!! 이때 나는?'],
      a: [
        { answer: 'a. 으악 무서워 빨리 수익 실현되었을 때 빼던가 해야겠다', type: ['3'] },
        { answer: 'b. 급변하면 오히려 좋아.. 여기서 단기로 수익을 창출해볼까?', type: ['0', '1'] },
        { answer: 'c. 조금만 지켜보다가 매도하거나 매수하자', type: ['2'] },
      ]
    },
    {
      q: ['분석을 열심히 한 뒤에 결국 특정 종목에 투자를 했다'],
      a: [
        { answer: 'a. 주식은 묵혀두는거지~ 투자를 하고 잊는다', type: ['3'] },
        { answer: 'b. 시도 때도 없이 주식 가격을 확인하며 언제 매도를 하고 언제 추가 매수를 할지 지켜본다', type: ['0', '1'] },
        { answer: 'c. 아침에 일어나서 주식장이 열릴 때만 확인하고 덮어둔다', type: ['2'] },
      ]
    },
    {
      q: ['너가 어떤 동물인지 보러 갈래?'],
      a: [
        {type:'', answer:'결과 확인하기'}
      ]
    }
  ]

  const [testList, setTestList] = useState([
    {name:'0',count:0},{name:'1',count:0},
    {name:'2',count:0},{name:'3',count:0}
  ])

  const hadleCkAnswer = (type,idx) => {
    let ls = testList
    for(let i=0; i<ls.length; i++){
      if(ls[i].name===type){
        ls[i].count = ls[i].count + 1
      }
    }

    setTestList(ls)
    setPage(page+1)

    if(idx+1 === questionList.length){
      setInfoList()
    }
  }

  const [namedesc,setnamedesc] = useState([])

  function setInfoList(){

    let il = [
      {
        name: '강력한 결단력과 자신감 있는 투자 스킬을 활용하여 고수익을 얻어내는 공격투자형 <사자>',
        desc: ['공격투자형인 당신!', '주식 시장에서 변동성이 큰 종목에 집중적으로 투자하며', '단기적인 시장 변화를 민감하게 파악하여 투자 결정을 내리기 때문에', '리스크가 크지만 높은 수익을 기대하는 경향을 보이는군요']
      },
      { 
        name: '높은 수익을 위해 적극적이고 감수성 높은 투자를 하는 적극투자형 <뱀>',
        desc: ['적극투자형인 당신!', '높은 위험을 감수하고, 단기적인 시장 변화를 잘 파악하여', '주기적으로 매매를 시도하며 주식 시장의 흐름을 적극적으로 활용하는 경향을 보이는군요']
      },
      {
        name: '안정적이고 꾸준한 수익을 추구하는 위험중립형 <원숭이>',
        desc: ['위험중립형인 당신!', '주식시장에서 높은 위험을 감수하지 않고도 꾸준한 수익을 얻을 수 있는 안정적인 투자를 선호하며', '장기적인 투자를 통해 성장가능성이 높은 기업들에 투자하는 경향을 보이는군요']
      },
      {
        name: '예측이 가능하고 저리스크, 저수익의 안전한 수익만을 원하는 안정추구형 <양>',
        desc: ['안정추구형인 당신!', '안정적인 성과를 추구하기 위해 안정성이 높은 대형주나 안정성이 높은 성장주 등에 투자하는 경향이 있군요', '안정적이면서 조심스러운 투자 성향이 장기적인 투자에서는 꾸준한 수익을 얻기 좋죠']
      }
    ]

    // testList 배열에서 각 타입의 선택된 횟수 가져오기
    const typeCounts = testList.map(data => data.count);

    // 가장 많이 선택된 횟수 찾기
    const maxCount = Math.max(...typeCounts);

    // 가장 많이 선택된 타입 찾기
    const mostSelectedType = testList.find(data => data.count === maxCount);

    // 가장 많이 선택된 타입에 대응하는 결과
    const resultInfo = il.find(info => info.name.includes(mostSelectedType.name));

    // 결과 출력
    console.log('가장 많이 선택된 타입:', mostSelectedType.name);
    console.log('선택된 횟수:', maxCount);
    console.log('결과 정보:', resultInfo);

    // result 변수
    let result = resultInfo;

    // setnamedesc(resultInfo);
    setnamedesc(il.filter(val=>val.result === result)[0])
  }

  return (
    <div className = "testLayout">
      {page===0?
        <div className='startPageLayout'>
          <div className='startLogo'>
              <div>주식 성향 테스트</div>
              <div>▼</div>
          </div>
          <div onClick={()=>setPage(1)} className='startButton'>동물로 알아보기</div>
        </div>
        :page <= questionList.length?
        <div className='questionLayout'>
         <div className='testTitle'>
          <div>AlphaMon 주식 성향 테스트</div>
          <div>{`${page} / ${questionList.length}`}</div>
         </div>
         {questionList.map((val,idx)=>
         <div className='questionList' style={{display:page===idx+1?'flex':'none'}}key={idx}>
          <div className='questionItemLayout'>
            <div className='profileImg'>
              <div/><div/>
            </div>

            <div className='chatListLayout'>
              {val.q.map((qval,qidx)=>
              <div key={qidx} className = 'chatBox'>
                <div>◀︎</div> <div>{qval}</div>
              </div>)}
              
            </div>
          </div>
          <div className='answerItemLayout'>
            <div className='aChatBox'>
              <div>+</div> <div>#</div>
            </div>

            {val.a.map((aval,aidx)=>
              <div key={aidx} className='answerBox' onClick={()=>hadleCkAnswer(aval.type,idx)}>
                {aval.answer}
              </div>)}
          </div>
        </div>)}
        </div>
        :
        <div className='questionLayout'>
         <div className='testTitle'>
          <div>AlphaMon 주식 성향 테스트</div>
          <div onClick={()=>window.location.reload()}>테스트 다시하기</div>
         </div>

         <div className='questionList' style={{display:'flex'}}>
          <div className='questionItemLayout'>
            <div className='profileImg'>
              <div/><div/>
            </div>

            <div className='chatListLayout'>
              <div className = 'chatBox'>
                <div>◀︎</div> <div> {namedesc.name} </div>
              </div>

              {namedesc.desc.map((val,idx)=>
                <div className='chatBox' key={idx}>
                  <div>◀︎</div> <div>{val}</div>
                </div>)}
            </div>
          </div>
         </div>     
        </div>
      }
    </div>
  );
}

export default App;
