! function () {
  let str = `
/*
*画皮卡丘的鼻子
*/  
.nose{
  width:0px;
  height:0px;
  border:9px solid ;
  border-radius:50%;
  border-width:10px 12px;
  border-color:black transparent transparent;
  position:absolute;
  top:25px;
  left:50%;
  margin-left:-12px;
}
/*
*画皮卡丘的眼睛
*/  
.eye{
  width:46px;
  height:46px;
  background:rgb(46,46,46);
  border-radius:50%;
  border:2px solid black;
  position:absolute;
}
.eye::before{
  content:'';
  display:block;
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:white;
  border:2px solid black;
  position:absolute;
  left:7px;
  top:-1px;
}
.eye.left{
  right:50%;
  margin-right:66px;
}
.eye.right{
  left:50%;
  margin-left:66px;
  
}
/*
*画皮卡丘的脸
*/  
.face{
  width:65px;
  height:65px;
  background:red;
  border-radius:50%;
  border:2px solid black;
}
.face.left{
  position:absolute;
  right:50%;
  margin-right:90px;
  top:84px;
}
.face.right{
  position:absolute;
  left:50%;
  margin-left:90px;
  top:84px;
}
/*
*画皮卡丘的嘴唇
*/  
.upperLip{
  width:77px;
  height:20px;
  border:2px solid black;
  border-top:none;
  position:absolute;
  top:50px;
}
.upperLip.left{
  border-right:1px solid transparent;
  border-bottom-left-radius:36px 20px;
  transform:rotate(-23deg);
  right:50%;
  background:#ffe600;
}
.upperLip.right{
  border-left:1px solid transparent;
  border-bottom-right-radius:36px 20px;
  transform:rotate(23deg);
  left:50%;
  background:#ffe600;
}
.lowerLip-wrapper{
  position:absolute;
  bottom:4px;
  right:50%;
  margin-right:-75px;
  height:122px;
  width:150px;
  overflow:hidden;
  
}
/*
*画皮卡丘的下嘴唇、舌头
*/  
.lowerLip{
  width:150px;
  height:1000px;
  border:2px solid;
  border-radius:75px/500px;
  background:#9b000a;
  position:absolute;
  bottom:0; 
  overflow:hidden;
}
.lowerLip::after{
  content:'';
  width:100px;
  height:100px;
  background:#ff485f;
  position:absolute;
  bottom:0;
  right:50%;
  margin-right:-50px;
  border-radius:48px/50px;
}
  `
  var duration = 50
  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget)
    // console.log($button)
    let speed = $button.attr('data-speed')
    // console.log($speed)
    $button.addClass('active').siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 100
        break;
      case 'normal':
        duration = 50
        break;
      case 'fast':
        duration = 10
        break;
    }
    // console.log('===============')
    // console.log(duration)
  })

  function writeCode(prefix, result, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setTimeout(function run() {
      n += 1
      container.innerHTML = prefix + result.substring(0, n)
      styleTag.innerHTML = prefix + result.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < str.length) {
        // console.log(duration)
        setTimeout(run, duration)
      } else {
        fn && fn.call() //fn如果存在就回调fn}
      }
    }, 50)

  }
  writeCode('', str, () => {
    let container = document.querySelector('#code')
    console.log('皮卡丘画完了')
    // container.scrollTop = 0
  })
}.call()