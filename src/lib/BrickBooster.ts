export type Brick = {
  top: number;
  left: number;
  height: number;
  width: number;
  status: number;
};

export type GameField = {
  ctx: CanvasRenderingContext2D | undefined;
  topOffset: number;
  leftOffset: number;
  height: number;
  width: number;
};

export class BrickBooster {
  root: HTMLElement | undefined;

  gameField: GameField;

  brickList: Brick[] | undefined;

  x: number = 0;
  y: number = 0;

  dx = 4;
  dy = -4;

  ballRadius = 10;
  paddleHeight = 10;
  paddleWidth = 75;
  paddleX = 0;

  rightPressed = false;
  leftPressed = false;

  pause = false;

  constructor(root: HTMLElement) {
    this.root = root;

    this.gameField = {
      ctx: undefined,
      height: 0,
      width: 0,
      topOffset: 0,
      leftOffset: 0,
    };
  }

  init = () => {
    this.createGameField();

    this.x = this.gameField.width / 2;
    this.y = this.gameField.height - 30;
    this.paddleX = (this.gameField.width - this.paddleWidth) / 2;
  };

  createGameField = () => {
    if (!this.root) throw new Error("The root element must be specified.");

    const LANE_SPACE = 100;
    const rect = this.root.getBoundingClientRect();

    const gameField = document.createElement("canvas") as HTMLCanvasElement;
    const ctx = gameField.getContext("2d");
    if (!ctx) throw new Error("Cannot get canvas context.");

    const height = rect.height + LANE_SPACE;
    const width = rect.width;

    gameField.height = height;
    gameField.width = width;

    const topOffset = rect.top;
    const leftOffset = rect.left;
    gameField.style.position = "absolute";
    gameField.style.top = topOffset + "px";
    gameField.style.left = leftOffset + "px";

    this.root.appendChild(gameField);

    this.gameField = {
      ctx,
      topOffset,
      leftOffset,
      height,
      width,
    };
  };

  deployMultiBrickByElements = (targetList: Element[]) => {
    const brickList: Brick[] = [];

    targetList.forEach((target) => {
      const appearedBrick = this.makeAppearBrick(target, this.gameField);
      brickList.push(appearedBrick);
    });

    this.brickList = brickList;
  };

  makeAppearBrick = (targetElement: Element, gameFiled: GameField): Brick => {
    const rect = targetElement.getBoundingClientRect();
    const { ctx, topOffset, leftOffset } = gameFiled;
    if (!ctx) throw new Error("Cannot get canvas context.");

    const top = rect.top - topOffset;
    const left = rect.left - leftOffset;
    const height = rect.height;
    const width = rect.width;

    ctx.beginPath();
    ctx.rect(left, top, rect.width, rect.height);
    ctx.fillStyle = "#a0522d";
    ctx.fill();
    ctx.closePath();

    return { top, left, height, width, status: 1 };
  };

  keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === "Right" || e.key === "ArrowRight") {
      this.rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      this.leftPressed = true;
    }
  };

  keyUpHandler = (e: KeyboardEvent) => {
    if (e.key === "Right" || e.key === "ArrowRight") {
      this.rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      this.leftPressed = false;
    }
  };

  bindcontroller = () => {
    document.addEventListener("keydown", this.keyDownHandler, false);
    document.addEventListener("keyup", this.keyUpHandler, false);
  };

  draw = () => {
    const {
      gameField: { ctx },
      x,
      y,
      dx,
      dy,
      rightPressed,
      leftPressed,
    } = this;
    if (!ctx) throw new Error("Cannot get canvas context.");

    ctx.clearRect(0, 0, this.gameField.width, this.gameField.height);
    this.drawIntactBrick();
    this.drawBall();
    this.drawPaddle();

    this.detectBallBrickCollision();
    this.detectBallPaddleCollision();

    this.x = x + dx;
    this.y = y + dy;

    if (rightPressed) {
      this.paddleX = Math.min(
        this.paddleX + 7,
        this.gameField.width - this.paddleWidth
      );
    } else if (leftPressed) {
      this.paddleX = Math.max(this.paddleX - 7, 0);
    }

    if (rightPressed) {
      this.paddleX += 7;
    } else if (this.leftPressed) {
      this.paddleX -= 7;
    }

    if (!this.pause) requestAnimationFrame(this.draw);
  };

  drawIntactBrick = () => {
    const {
      gameField: { ctx },
      brickList,
    } = this;
    if (!ctx) throw new Error("Cannot get canvas context.");
    if (!brickList) throw new Error("Cannot get brickList.");

    for (const brick of brickList) {
      if (brick.status !== 1) continue;

      ctx.beginPath();
      ctx.rect(brick.left, brick.top, brick.width, brick.height);
      ctx.fillStyle = "#a0522d";
      ctx.fill();
      ctx.closePath();
    }
  };

  drawBall = () => {
    const {
      gameField: { ctx },
      x,
      y,
      ballRadius,
    } = this;
    if (!ctx) throw new Error("Cannot get canvas context.");

    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#a0522d";
    ctx.fill();
    ctx.closePath();
  };

  drawPaddle = () => {
    const {
      gameField: { ctx, height },
      paddleWidth,
      paddleHeight,
      paddleX,
    } = this;
    if (!ctx) throw new Error("Cannot get canvas context.");

    ctx.beginPath();
    ctx.rect(paddleX, height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#a0522d";
    ctx.fill();
    ctx.closePath();
  };

  detectBallPaddleCollision = () => {
    const {
      gameField: { width, height },
      x,
      y,
      dx,
      dy,
      ballRadius,
      paddleX,
      paddleWidth,
    } = this;

    if (x + dx > width - ballRadius || x + dx < ballRadius) this.dx = -dx;
    if (y + dy < ballRadius) {
      this.dy = -dy;
    } else if (y + dy > height - ballRadius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        this.dy = -dy;
      } else {
        this.pause = true;
        alert("GAME OVER");
        document.location.reload();
      }
    }
  };

  detectBallBrickCollision = () => {
    if (!this.brickList) throw new Error("Cannot get canvas context.");
    for (let i = 0; i < this.brickList.length; i++) {
      const b = this.brickList[i];
      if (b.status !== 1) continue;

      const direction = this.detectCollisionDirection(
        b.left,
        b.top,
        b.width,
        b.height
      );

      if (direction === "vertical" || direction === "corner") {
        this.dy = this.dy * -1;
        b.status = 0;
      } else if (direction === "horizontal") {
        this.dx = this.dx * -1;
        b.status = 0;
      }
    }
  };

  detectCollisionDirection = (
    rectX: number,
    rectY: number,
    rectWidth: number,
    rectHeight: number
  ) => {
    const { x, y, ballRadius } = this;
    const crx = x - rectX;
    const cry = y - rectY;
    const distX = Math.abs(crx - rectWidth / 2);
    const distY = Math.abs(cry - rectHeight / 2);

    // 衝突判定
    if (
      distX > rectWidth / 2 + ballRadius ||
      distY > rectHeight / 2 + ballRadius
    ) {
      return; // 衝突していない
    }

    if (distX <= rectWidth / 2) {
      return "vertical"; // 縦の辺と衝突
    }

    if (distY <= rectHeight / 2) {
      return "horizontal"; // 横の辺と衝突
    }

    // 角の判定
    const dx = distX - rectWidth / 2;
    const dy = distY - rectHeight / 2;
    if (dx * dx + dy * dy <= ballRadius * ballRadius) {
      return "corner"; // 角と衝突
    }

    return; // 衝突していない
  };
}
