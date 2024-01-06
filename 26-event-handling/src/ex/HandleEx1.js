import { Component } from 'react';

// 클래스형 컴포넌트
class HandleEx extends Component {
    state = { 
        name: 'Hello World!'
     } 
    render() {
        // state 데이터는 this.state로 접근 가능 => this.state.number
        const {name} = this.state
        return (
            <div>
                {/* this.setState(): state 값을 바꾸는 함수 */}
                {/* state 값을 직접 변경 불가능 */}
                {/* 클래스형에서 함수 사용시 화살표 함수 권장 */}
                <h1>{name}</h1>
                <button onClick={() => this.setState({name: 'Goodbye World'})}>
                    button
                </button>
            </div>
        );
    }
}
 
export default HandleEx;