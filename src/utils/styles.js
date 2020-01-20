export function rand(min, max) {
  let math = Math.random();
  let rand = Math.floor(math * (max - min) + min);

  return rand;
}

export function template(i, duration) {
  return `
        &:nth-child(${i + 1}) {
          animation-delay: ${-i * 0.2}s; 
          transform: translate3d(
          ${rand(-250, 250)}px,
          ${rand(-250, 250)}px,
          ${rand(-200, 200)}px
          );
         }
      `;
}
export function getAnimations(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += template(i, i);
  }
  return str;
}
