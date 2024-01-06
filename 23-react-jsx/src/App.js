import './App.css';

function App() {
  const name = 'gildon';
  const styles = {
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: '40px',
  };


  const name1 = '로이';
  const animal1 = '강아지';
  const a = 10;
  const b = 8;
  const title = 'Hellow world';
  // 이렇게 주석 동일하게 작동
  return (
    <div className="App">
      {/* JSX 문법 */}
      {/* 1. 하나로 감싸인 요소 */}
      {/* 2. javascript 표현식 사용
            - {}로 감싸면 js 표현식 사용 가능
            - {}에서 삼항 연산자 사용 가능 (if문 안된다) 
      */}
      <div>{name} 안녕하세요!</div>
      <div>{name === 'gildong' ? 'gildong 입니다' : '잘못 아셨네요'}</div>

      {/* 3. style 속성 (인라인)
          - 리액트에서 돔 요소에 스타일 적용시 문자열 X -> 객체 사용
          - 스타일 속성 이름 중에서 하이픈(-) 포함시 camelCase 사용
      */}
      <div
        style={{ backgroundColor: 'blue', color: 'white', fontSize: '48px' }}
      >
        스타일 적용!
      </div>
      <div style={styles}>스타일 적용2</div>

      {/* 4. className 사용
          - class 속성이 아닌 className 속성 사용!

          5. 종료 태그가 없는 태그의 사용
          - 기존에 종료 태그가 없는 태그를 사용 하더라도 종료 태그를 작성 해야 함 or self-closing
          - <input> -> <input></input> or <input />
          - <br> -> <br></br> or <br />

          6. 주석
          - //: jsx 외부 주석 (return 밖)
          - jsx 내부 주석 {**}
      */}
      {/*  */}

      {/* 시습1번*/}
      <h2>제 반려동물의 이름은 {name1}입니다.</h2>
      <h2>
        {name1}는 {animal1}입니다.
      </h2>

      {/* 실습2번 */}
      {3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}
      <br></br>
      {/* 실습3번 */}
      {/* 단축평가 && */}
      {/* ture && '문자열' */}
      {a > b && 'a가 b보다 큽니다.'}

      {/* 실습4번 */}
      <div className='title'>{title}</div>
      <div>
        아이디 : <input type="text" />
        <br />
        비밀번호 : <input type="text" />
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;