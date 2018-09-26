// Background Animation based on canvas. 
// Author: Krzysztof Kamieniecki 

const makeAnimation = div => {
  let size = dimentions(div);
  let ctx = canvas(div);
  const color = "rgb(0, 105, 89, .5)";
  const colorLight = "rgb(0, 105, 89, .3)";
  const colorDark = "rgb(0, 105, 89, .2)";
  const smalls = generate(100, dotInDiv, size, .5, 3, color);
  const smalls2 = generate(50, dotInDiv, size, 1.5, 3, colorLight);
  const middles = generate(30, dotInDiv, size, .4, 5, colorDark);
	const bigs = generate(10, dotInDiv, size, 1.5, 10, colorLight);
	const points = [...smalls, ...smalls2, ...middles, ...bigs]

	return function loop(t = 0) {
    ctx.clearRect(0, 0, size.width, size.height);
    points.forEach(point => {
      drawCircle(ctx,point, point.radius, point.color);
      update(point);
      isIn(point, size);
    });
    t += 1000 / 60;
    requestAnimationFrame(loop);
  };
}

export default makeAnimation;


const update = point => Object.assign(point, {y:point.y-point.speed})

const isIn = (point, size) => {
  point.x = point.x > size.width ? 0 : point.x;
  point.y = point.y < 0 ? size.height : point.y;
  return point;
}

const dimentions = el => ({
    width: el.getBoundingClientRect().width,
    height: el.getBoundingClientRect().height
  })

const canvas = (div, color = "white") => {
  let c = document.createElement("canvas");
  Object.assign(c, dimentions(div));
  div.style.position = "relative";
  c.style.position = "absolute";
  c.style.top = c.style.left = 0;
  const ctx = c.getContext("2d");
  ctx.fillStyle = color;
  div.appendChild(c);
  return ctx;
}

const randomOf = (value, start = 0) => Math.floor(Math.random() * (value - start + 1)) + start

const dotInDiv = (dimentions, speed, radius, color) => ({
    x: randomOf(dimentions.width),
    y: randomOf(dimentions.height),
    speed: randomOf(speed, 1),
    radius: randomOf(radius, 1),
    color
})

const generate = (n, fn, dimentions, speed, radius, color, result = []) => {
  while (n--) {
    result.push(fn(dimentions, speed, radius, color));
  }
  return result;
}

const drawCircle = (ctx, dot) => {
  let defaultColor = ctx.fillStyle;
  ctx.fillStyle = dot.color || ctx.fillStyle;
  ctx.beginPath();
  ctx.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = defaultColor;
}
