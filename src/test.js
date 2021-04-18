const string = `
        *{
            box-sizing: border-box;
        }
        .skin *::before{box-sizing: border-box}
        .skin *::after{box-sizing: border-box}
        .skin{
    position: relative;
    background: #ffe600;
    height: 100vh;
}
.nose{
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0;
    height: 0;
    width: 10px;
    height: 10px;
    position: relative;
    left: 50%;
    top:146px;
    margin-left: -10px;
    z-index:10;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(10deg);
    }
    66%{
        transform: rotate(-10deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    animation: wave .3s infinite linear;
    transform-origin: 50% 100%;
}
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: #000;
}
.eyes{
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eyes::before{
    content: '';
    display: block;
    border: 2px solid #000;
    width: 24px;
    height: 24px;
    background: #fff;
    position: relative;
    border-radius: 50%;
    left: 8px;
    top: 4px;
}
.eyes.left{
    transform: translateX(-100px);
}
.eyes.right{
    transform: translateX(100px);
}
.mouth{
    width: 200px;
    height: 200px;
    /*border: 1px solid red;*/
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top:-20px;
    z-index: 1;
}
.mouth .up  .lip.left{     /* 左嘴唇 */
    border: 3px solid #000;
    height: 30px;
    width: 80px;
    border-radius: 0 0 0 50px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    transform: rotate(-15deg) translateX(-53px);
    position: absolute;
    left: 50%;
    margin-left: -30px;
    background: #ffe600;
}
.mouth .up .lip.left::before{
    content:'';
    display: block;
    width: 7px;
    height: 30px;
    /*border: 1px solid green;*/
    position: absolute;
    right: -6px;
    bottom: 0;
    background: #ffe600;
}
.mouth .up  .lip.right{     /* 右嘴唇 */
    border: 3px solid #000;
    height: 30px;
    width: 80px;
    border-radius: 0 0 50px 0;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    transform: rotate(15deg) translateX(53px);
    position: absolute;
    left: 26%;
    margin-right: -30px;
    background: #ffe600;

}
.mouth .up .lip.right::before{
    content:'';
    display: block;
    width: 7px;
    height: 30px;
    /*border: 1px solid green;*/
    position: absolute;
    left: -6px;
    bottom: 0;
    background: #ffe600;
}
.mouth .down{
    /*border: 1px solid red;*/
    height: 164px;
    position: absolute;
    top: 0px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 1px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius:75px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    /*border: 1px solid green;*/
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -176px;
    left: 50%;
    margin-left: -100px;
    border-radius: 130px;
}
.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
}
.face.left{
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
}
.face.right{
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
}
`
let n = 1
let time = 30
let displayCSS = () => {
    n++
    if(n > string.length){
        window.clearInterval(timer)
        return
    }
    demo.innerText = string.substr(0,n)
    demo2.innerHTML = string.substr(0,n)
    demo.scrollTop = demo.scrollHeight
}
let timer  //  定时器
const play = (speed) => {
    timer = setInterval(() => {
        displayCSS()
    },time)
}
play(time)
btnPause.onclick = () => {
    window.clearInterval(timer)
}
btnPlay.onclick = () => {
    timer = setInterval(() => {
        displayCSS()
    },time)
}
btnSlow.onclick = () => {    // 不同速度
    runCSS(50)
}
btnNormal.onclick = () => {    // 不同速度
    runCSS(30)
}
btnFast.onclick = () => {    // 不同速度
    runCSS(10)
}
let runCSS = (speed) => {     //  播放函数
    window.clearInterval(timer)
    time = speed
    play(speed)
}


// const player = {      //  面向对象写法优化
//     id: undefined,
//     time: 100,
//     ui: {
//         demo: document.querySelector('#demo'),
//         demo2: document.querySelector('#demo2')
//     },
//     events: {
//         '#btnPause': 'pause',
//         '#btnPlay': 'play',
//         '#btnSlow': 'slow',
//         '#btnNormal': 'normal',
//         '#btnFast': 'fast'
//     },
//     n: 1,
//     init: () => {
//         player.ui.demo.innerText = string.substr(0, player.n)
//         player.ui.demo2.innerHTML = string.substr(0, player.n)
//         player.bindEvents()
//         player.play()
//     },
//     bindEvents: () => {
//         for (let key in player.events) {
//             if (player.events.hasOwnProperty(key)) {
//                 const value = player.events[key] // pause / play / slow
//                 document.querySelector(key).onclick = player[value]
//             }
//         }
//
//     },
//     run: () => {
//         player.n += 1
//         if (player.n > string.length) {
//             window.clearInterval(player.id)
//             return
//         }
//         player.ui.demo.innerText = string.substr(0, player.n)
//         player.ui.demo2.innerHTML = string.substr(0, player.n)
//         player.ui.demo.scrollTop = player.ui.demo.scrollHeight
//     },
//     play: () => {
//         window.clearInterval(player.id)
//         player.id = setInterval(player.run, player.time)
//     },
//     pause: () => {
//         window.clearInterval(player.id)
//     },
//     slow: () => {
//         player.pause()
//         player.time = 300
//         player.play()
//     },
//     normal: () => {
//         player.pause()
//         player.time = 100
//         player.play()
//     },
//     fast: () => {
//         player.pause()
//         player.time = 0
//         player.play()
//     }
// }
//
// player.init()
