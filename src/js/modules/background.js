export const initBackground = () => {
  let initialise = function () {
    let canvas = document.createElement('canvas');
    canvas.classList.add('bg-container');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    let context = canvas.getContext('2d');

    let circleRadius = 1.2;
    let circleGap = 15;

    let rows = Math.floor(canvas.height / (circleRadius + circleGap));
    let cols = Math.floor(canvas.width / (circleRadius + circleGap));

    let circles = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        circles.push({
          x: col * (circleRadius * 2 + circleGap) + circleRadius,
          y: row * (circleRadius * 2 + circleGap) + circleRadius,
          offsetX: 0,
          offsetY: 0,
        });
      }
    }

    window.addEventListener('mousemove', (event) => {
      let mouseX = event.clientX;
      let mouseY = event.clientY;

      for (let circle of circles) {
        let distanceX = mouseX - (circle.x + circle.offsetX);
        let distanceY = mouseY - (circle.y + circle.offsetY);
        let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 12) {
          circle.offsetX = (distanceX / distance) * 20;
          circle.offsetY = (distanceY / distance) * 20;
        } else {
          circle.offsetX *= 0.5;
          circle.offsetY *= 0.8;
        }
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let circle of circles) {
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
    });

    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let circle of circles) {
      context.beginPath();
      context.arc(circle.x, circle.y, circleRadius, 0, 2 * Math.PI);
      context.fillStyle = '#6649ff';
      context.fill();
    }
  };

  window.addEventListener('load', initialise);
};
