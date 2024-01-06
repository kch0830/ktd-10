import './App.css';
import FuncComponent from './FuncComponent';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FoodComponent from './FoodComponent';

function App() {
  const my_func = () => {
    console.log('콘솔 성공');
  };
  return (<div classname="App">
    <FuncComponent name={3} />
    <FuncComponent />

    <hr />
    <Button link="https://www.google.co.kr">google</Button>

    <hr />
    <ClassComponent name="코딩온" />
    <ClassComponent />

    <hr />
    <FoodComponent food="찌킨" />
    <PropsEx2 
      title= "타이틀"
      author= "저자"
      price= "가격"
      type= "응"
      />
    <PropsEx3 text="App 컴포넌트에서 넘겨준 text props" valid= {my_func} />
  </div>
  );
}

export default App;
