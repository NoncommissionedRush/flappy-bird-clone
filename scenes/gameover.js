export default function GameOver() {
  add([sprite("bg", { width: width(), height: height() })]);
  add([
    text("Game Over!", { font: "sink", size: 68 }),
    pos(width() / 2, height() / 2 - 200),
    origin("center"),
  ]);

  add([
    text("Press space to play again", { font: "sink", size: 48 }),
    pos(width() / 2, height() / 2 - 50),
    origin("center"),
  ]);

  keyPress("space", () => {
    go("game");
  });
}
