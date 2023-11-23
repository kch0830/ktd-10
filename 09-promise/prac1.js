function callPromise(name){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log(name);
            resolve(name);
        }, 1000);
    })
}
function backPromise(){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log('back');
            resolve('back');
        }, 1000);
    })
}
function hellPromise(){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            resolve('callback hell');
        }, 1000);
    })
}

// callPromise('kim')
// .then(function (name){
//     console.log(`${name} 반가워`);
//     return backPromise();
// }).then(function (txt){
//     console.log(`${txt} 실행했구나`);
//     return hellPromise();
// }).then(function (massage){
//     console.log(`여기는 ${massage}`);
// })

async function exce(){
    let user = await callPromise('kim');
    console.log(user + '반가워');
    let txt = await backPromise();
    console.log(txt + '실행했구나');
    let title = await hellPromise();
    console.log('여기는' + title);
}

exce();