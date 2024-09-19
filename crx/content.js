// 默认 CCTV13
const url = window.location.href;
const match = url.match(/cctv(\d+)/);
let currentChannel = match ? parseInt(match[1]) : 13;

// 监听键盘事件以适配遥控器
window.addEventListener('keydown', (event) => {
  // 阻止事件传播和默认行为
  event.stopPropagation();
  event.preventDefault();

  if (event.key === 'ArrowUp') {
    currentChannel = currentChannel === 1 ? 17 : currentChannel - 1;
    console.log(`向上按键：切换到频道 ${currentChannel}`);
  } else if (event.key === 'ArrowDown') {
    currentChannel = currentChannel === 17 ? 1 : currentChannel + 1;
    console.log(`向下按键：切换到频道 ${currentChannel}`);
  } else if (event.key === 'Enter') {
    const playerElement = document.getElementById('video');
    // const playerElement = document.getElementById('player');
    if (playerElement) {
      // 模拟点击播放器元素以切换播放和暂停
      playerElement.click();
      console.log('确定按钮已按下，切换播放和暂停');
    } else {
      console.log('未找到播放器元素');
    }
  } else {
    return;
  }

  const newUrl = `https://tv.cctv.com/live/cctv${currentChannel}/`;
  console.log(`新 URL: ${newUrl}`);
  window.location.href = newUrl;
});