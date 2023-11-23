// // Promise (프로미스 객체)
// // 비동기 함수를 동기처리하기 위해 만든 객체
// // 미래에 성공/실패에 대한 결과 값을 '약속'한다는 의미
// // 성공, 실패를 분리해서 반환
// // 성공에 대한 결관느 then 메서드로,
// // 실패에 대한 결과는 catch 메서드로
// // -rejected : 실패

// // 1. promise를 생성하는 코드
// function promise1(flag) {
//     // 프로미스 객체를 생성하여 반환  
//     return new Promise(function (resolve, reject) {
//         if (flag) {
//             resolve(`현재 프로미스의 상태는 fulfilled(이행), then메서드로 연결! flag: ${flag}`);
//         } else {
//             reject(`현재 프로미스의 상태는 rejected(거절), catch메서드로 연결! flag: ${flag}`);
//         }
//     })
// }

// // 2. promise를 사용하는 코드
// promise1(5 > 3)
//     .then((result) => {
//         console.log('result :', result);
//     }).catch((error) => {
//         console.log('error :', error);
//     })

// // --------프로미스 예제
// // index.js에서 "콜백 함수"를 이용해서 동기처리한 코드를 
// // "promise"를 이용해 동기처리

// function goMart(){
//     console.log('마트에 와서 어떤 음료를 살지 고민중,,,,,');
// }

// function pickDrink(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log('고민을 끝!');
//             product = '콜라';
//             price = 3600;
//             const money = 2000;

//             if(price > money){
//                 reject();
//             } else{
//                 resolve();
//             }
            
//             // resolve(); // 성공을 의미하는 resolve 실행
//         }, 3000);
//     })
// }

// function pay(product, price){
//     console.log(`상품명 : ${product}, 가격 :${price}`);
// }

// let product, price;
// goMart();
// pickDrink().then(()=> {
//     pay(product, price);
// }).catch(()=> {
//     console.log('거지ㅠㅠ,,')
// });

// ----------프로미스 체이닝
// 함수를 이용해서 (4+3)*2-1 = 13 을 연산하기!

function add(n1, n2, cb){
    setTimeout(function(){
        const result = n1 + n2;
        cb(result); // mul(result)
    }, 1000);
}

function mul(n, cb){
    setTimeout(function(){
        const result = n *2;
        cb(result); // sub(result)
    }, 700);
}

function sub(n, cb){
    setTimeout(function(){
        const result = n-1;
        cb(result);
    }, 500);
}

add(4, 3, function(result){
    console.log('add result :', result);
    mul(result, function(result){
        console.log('mul result : ', result);
        sub(result, function(result){
            console.log('sub result : ', result);
        })
    })
})

// ----------프로미스 체이닝하면?
function addPromise(n1, n2){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const result = n1 + n2;
            resolve(result);
        }, 1000);
    })
}
function mulPromise(n){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            const result = n*2;
            resolve(result);
        }, 700);
    })
    }
function subPromise(n){
    return new Promise(function (resolve, reject){
        const result = n-1;
        resolve(result);
    }, 500);
}

addPromise(4, 3)
.then(function (result){
    console.log('add result :', result);
    return mulPromise(result);
}).then(function (result){
    console.log('mul result: ', result);
    return subPromise(result);
}).then(function (result){
    console.log('sub result: ', result)
}).catch(function (error){
    console.log(error);
})

