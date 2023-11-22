// rest 파라미터

// 1. 함수에서 rest 파라미터 사용
const vlaue = [1, 2, 3, 4, 5];

// 함수 선언(rest 사용)
function get(a, b, ...rest){
    console.log('a > ',a);
    console.log('b > ', b);
    console.log('rest > ', rest);
}

// 함수 호출(spread 사용)
get(...values);
get(values);

// 2. 객체에서 rest
const icecream = {
    flavor: 'choco',
    price: 1000,
    company: 'bingre'
};

const {flavor, ...rest} = icecream;
console.log(flavor); // choco
console.log(rest); // {price: 1000, company: 'bingre'}

// 3. 배열에서 rest
const number = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest1] = number;
console.log(one); // 1
console.log(two); // 2
console.log(rest1); // [3, 4, 5, 6]



