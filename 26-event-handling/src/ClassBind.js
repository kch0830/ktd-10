import { Component } from 'react';

class ClassBind extends Component {
    state = {
        name: 'codingon'
      }
      // #클래서 컴포넌트에서 이벤트 쓰기 - 화살표 함수 사용
      printConsole = () => {
        console.log('this', this);
        console.log('state', this.state);
      }
    render() {
        return(
            <div>
                <h1>Class Component Event</h1>
                <button onClick={this.printConsole}>printConsole(인자X)</button>
            </div>
        );
    }
}

export default ClassBind;

// 여긴 졸아서 몰룸........