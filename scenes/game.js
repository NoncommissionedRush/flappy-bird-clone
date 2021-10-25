let highScore = 0;
let SPEED = 250;

export default function Game() {
  add([sprite("bg", { width: width(), height: height() })]);

  const bird = add([sprite("bird"), pos(200, 40), area(), scale(0.1), body()]);
  let score = 0;

  function generatePipe() {
    const GAP = rand(200, 300);
    const OFFSET = rand(22, 55) * 10;

    // top pipe
    add([
      sprite("pipe", { flipY: true }),
      pos(width(), height() - OFFSET - GAP / 2),
      area(),
      scale(0.3),
      origin("botleft"),
      "pipe",
      { cleared: false },
    ]);

    // bottom pipe
    add([
      sprite("pipe"),
      pos(width(), height() - OFFSET + GAP / 2),
      area(),
      scale(0.3),
      "pipe",
    ]);
  }

  loop(2, generatePipe);

  loop(1, () => {
    if (score > 1 && score % 10 === 0) {
      SPEED += 50;
    }
  });

  let scoreDisplay = add([text(`Score: ${score}`, { font: "sink", size: 40 })]);
  let highScoreDisplay = add([
    text(`High: ${highScore}`, { font: "sink", size: 40 }),
    pos(0, 50),
  ]);

  action("pipe", (pipe) => {
    pipe.move(-SPEED, 0);

    if (pipe.pos.x < 0) {
      destroy(pipe);
    }

    if (pipe.cleared === false && bird.pos.x > pipe.pos.x) {
      pipe.cleared = true;
      score += 1;
      if (score > highScore) {
        highScore = score;
      }
      scoreDisplay.text = `Score: ${score}`;
      highScoreDisplay.text = `High: ${highScore}`;
    }
  });

  bird.collides("pipe", () => {
    go("gameover");
  });

  bird.action(() => {
    if (bird.pos.y < 0 || bird.pos.y > height() + 50) {
      go("gameover");
    }
  });

  keyPress("space", () => {
    bird.jump(550);
  });
}
