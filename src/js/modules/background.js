export const initBackground = () => {
  let initialise = function () {
    let canvas = document.createElement('canvas');
    canvas.classList.add('bg-container');
    document.body.appendChild(canvas);
    let context = canvas.getContext('2d');

    let circleRadius = 1;
    let circleGap = 20;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initialiseCircles();
    };

    let circles = [];
    const initialiseCircles = () => {
      circles = [];
      let rows = Math.floor(canvas.height / (circleRadius + circleGap));
      let cols = Math.floor(canvas.width / (circleRadius + circleGap));

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          circles.push({
            x: col * (circleRadius + circleGap) + circleRadius,
            y: row * (circleRadius + circleGap) + circleRadius,
            offsetX: 0,
            offsetY: 0,
            targetOffsetX: 0,
            targetOffsetY: 0,
          });
        }
      }
    };

    const animateCircles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let circle of circles) {
        circle.offsetX += (circle.targetOffsetX - circle.offsetX) * 0.05;
        circle.offsetY += (circle.targetOffsetY - circle.offsetY) * 0.05;

        context.beginPath();
        context.arc(
          circle.x + circle.offsetX,
          circle.y + circle.offsetY,
          circleRadius,
          0,
          2 * Math.PI,
        );
        context.fillStyle = '#6649ff';
        context.fill();
      }
      requestAnimationFrame(animateCircles);
    };

    window.addEventListener('mousemove', (event) => {
      let mouseX = event.clientX;
      let mouseY = event.clientY;

      for (let circle of circles) {
        let distanceX = mouseX - (circle.x + circle.offsetX);
        let distanceY = mouseY - (circle.y + circle.offsetY);
        let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 15) {
          if (!circle.hover) {
            circle.hover = true;
            circle.targetOffsetX = (Math.random() - 0.3) * 40;
            circle.targetOffsetY = (Math.random() - 0.3) * 40;
            clearTimeout(circle.resetTimeout);
          }
        } else {
          if (circle.hover) {
            circle.hover = false;
            circle.resetTimeout = setTimeout(() => {
              circle.targetOffsetX = 0;
              circle.targetOffsetY = 0;
            }, 700);
          }
        }
      }
    });

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animateCircles();
  };

  window.addEventListener('load', initialise);
};
