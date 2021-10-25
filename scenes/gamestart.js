export default function GameStart() {
  add([sprite("bg", { width: width(), height: height() })]);
  add([
    text("Press Space To Play!", { font: "sink", size: 68 }),
    pos(width() / 2, height() / 2 - 100),
    origin("center"),
  ]);

  keyPress("space", () => {
    go("game");
  });
}
