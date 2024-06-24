// export const initBackground = () => {
//   let initialise = function () {
//     let canvas = document.createElement('canvas');
//     canvas.classList.add('bg-container');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     document.body.appendChild(canvas);
//     let context = canvas.getContext('2d');

//     let circleRadius = 1.5;
//     let circleGap = 20;

//     let rows = Math.floor(canvas.height / (circleRadius + circleGap));
//     let cols = Math.floor(canvas.width / (circleRadius + circleGap));

//     let circles = [];
//     for (let row = 0; row < rows; row++) {
//       for (let col = 0; col < cols; col++) {
//         circles.push({
//           x: col * (circleRadius + circleGap) + circleRadius,
//           y: row * (circleRadius + circleGap) + circleRadius,
//           offsetX: 0,
//           offsetY: 0,
//         });
//       }
//     }

//     window.addEventListener('mousemove', (event) => {
//       let mouseX = event.clientX;
//       let mouseY = event.clientY;

//       for (let circle of circles) {
//         let distanceX = mouseX - (circle.x + circle.offsetX);
//         let distanceY = mouseY - (circle.y + circle.offsetY);
//         let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

//         if (distance < 10) {
//           circle.offsetX = (distanceX / distance) * 20;
//           circle.offsetY = (distanceY / distance) * 20;
//         } else {
//           circle.offsetX *= 0.1;
//           circle.offsetY *= 0;
//         }
//       }

//       context.clearRect(0, 0, canvas.width, canvas.height);
//       for (let circle of circles) {
//         context.beginPath();
//         context.arc(
//           circle.x + circle.offsetX,
//           circle.y + circle.offsetY,
//           circleRadius,
//           0,
//           6 * Math.PI,
//         );
//         context.fillStyle = '#6649ff';
//         context.fill();
//       }
//     });

//     context.clearRect(0, 0, canvas.width, canvas.height);
//     for (let circle of circles) {
//       context.beginPath();
//       context.arc(circle.x, circle.y, circleRadius, 0, 1.5 * Math.PI);
//       context.fillStyle = '#6649ff';
//       context.fill();
//     }
//   };

//   window.addEventListener('load', initialise);
// };

// export const initBackground = () => {
//   let initialise = function () {
//     let canvas = document.createElement('canvas');
//     canvas.classList.add('bg-container');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     document.body.appendChild(canvas);
//     let context = canvas.getContext('2d');

//     let circleRadius = 1.2;
//     let circleGap = 20;

//     let rows = Math.floor(canvas.height / (circleRadius + circleGap));
//     let cols = Math.floor(canvas.width / (circleRadius + circleGap));

//     let circles = [];
//     for (let row = 0; row < rows; row++) {
//       for (let col = 0; col < cols; col++) {
//         circles.push({
//           x: col * (circleRadius + circleGap),
//           y: row * (circleRadius + circleGap),
//           offsetX: 0,
//           offsetY: 0,
//         });
//       }
//     }

//     const drawCircles = () => {
//       context.clearRect(0, 0, canvas.width, canvas.height);
//       for (let circle of circles) {
//         context.beginPath();
//         context.arc(
//           circle.x + circle.offsetX,
//           circle.y + circle.offsetY,
//           circleRadius,
//           0,
//           2 * Math.PI,
//         );
//         context.fillStyle = '#6649ff';
//         context.fill();
//       }
//     };

//     window.addEventListener('mouseenter', () => {
//       for (let circle of circles) {
//         circle.offsetX = (Math.random() - 0.3) * 50;
//         circle.offsetY = (Math.random() - 0.3) * 70;
//       }
//       drawCircles();

//       setTimeout(() => {
//         for (let circle of circles) {
//           circle.offsetX = 0;
//           circle.offsetY = 0;
//         }
//         drawCircles();
//       }, 4000); // Wait 4 seconds before returning circles to their original positions
//     });

//     window.addEventListener('mousemove', (event) => {
//       let mouseX = event.clientX;
//       let mouseY = event.clientY;

//       for (let circle of circles) {
//         let distanceX = mouseX - (circle.x + circle.offsetX);
//         let distanceY = mouseY - (circle.y + circle.offsetY);
//         let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

//         if (distance < 12) {
//           circle.offsetX = (distanceX / distance) * 20;
//           circle.offsetY = (distanceY / distance) * 20;
//         } else {
//           circle.offsetX *= 0.5;
//           circle.offsetY *= 0.9;
//         }
//       }

//       drawCircles();
//     });

//     drawCircles();
//   };

//   window.addEventListener('load', initialise);
// };

// export const initBackground = () => {
//   let initialise = function () {
//     let canvas = document.createElement('canvas');
//     canvas.classList.add('bg-container');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     document.body.appendChild(canvas);
//     let context = canvas.getContext('2d');

//     let circleRadius = 1;
//     let circleGap = 15;

//     let rows = Math.floor(canvas.height / (circleRadius + circleGap));
//     let cols = Math.floor(canvas.width / (circleRadius + circleGap));

//     let circles = [];
//     for (let row = 0; row < rows; row++) {
//       for (let col = 0; col < cols; col++) {
//         circles.push({
//           x: col * (circleRadius + circleGap) + circleRadius,
//           y: row * (circleRadius + circleGap) + circleRadius,
//           offsetX: 0,
//           offsetY: 0,
//           targetOffsetX: 0,
//           targetOffsetY: 0,
//         });
//       }
//     }

//     const animateCircles = () => {
//       let animationFrameId;
//       context.clearRect(0, 0, canvas.width, canvas.height);
//       for (let circle of circles) {
//         circle.offsetX += (circle.targetOffsetX - circle.offsetX) * 0.1;
//         circle.offsetY += (circle.targetOffsetY - circle.offsetY) * 0.1;

//         context.beginPath();
//         context.arc(
//           circle.x + circle.offsetX,
//           circle.y + circle.offsetY,
//           circleRadius,
//           0,
//           2 * Math.PI,
//         );
//         context.fillStyle = '#6649ff';
//         context.fill();
//       }
//       animationFrameId = requestAnimationFrame(animateCircles);
//     };

//     window.addEventListener('mousemove', (event) => {
//       let mouseX = event.clientX;
//       let mouseY = event.clientY;

//       for (let circle of circles) {
//         let distanceX = mouseX - (circle.x + circle.offsetX);
//         let distanceY = mouseY - (circle.y + circle.offsetY);
//         let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

//         if (distance < 15) {
//           circle.targetOffsetX = (distanceX / distance) * 50;
//           circle.targetOffsetY = (distanceY / distance) * 90;
//         } else {
//           circle.targetOffsetX = 0;
//           circle.targetOffsetY = 0;
//         }
//       }
//     });

//     window.addEventListener('mouseleave', () => {
//       setTimeout(() => {
//         for (let circle of circles) {
//           circle.targetOffsetX = 0;
//           circle.targetOffsetY = 0;
//         }
//       }, 7000);
//     });

//     animateCircles();
//   };

//   window.addEventListener('load', initialise);
// };

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
        circle.offsetX += (circle.targetOffsetX - circle.offsetX) * 0.02;
        circle.offsetY += (circle.targetOffsetY - circle.offsetY) * 0.02;

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
          circle.targetOffsetX = (distanceX / distance) * 70;
          circle.targetOffsetY = (distanceY / distance) * 70;
        } else {
          circle.targetOffsetX = 0;
          circle.targetOffsetY = 0;
        }
      }
    });

    window.addEventListener('mouseleave', () => {
      setTimeout(() => {
        for (let circle of circles) {
          circle.targetOffsetX = 0;
          circle.targetOffsetY = 0;
        }
      }, 5000);
    });

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animateCircles();
  };

  window.addEventListener('load', initialise);
};
