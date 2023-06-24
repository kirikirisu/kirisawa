type Brick = {
  top: number;
  left: number;
  height: number;
  width: number;
  status: number;
};

type GameField = {
  ctx: CanvasRenderingContext2D;
  topOffset: number;
  leftOffset: number;
  height: number;
  width: number;
};

export const gameFactory = {
  makeAppearBrick: (targetElement: Element, gameFiled: GameField): Brick => {
    const rect = targetElement.getBoundingClientRect();
    const { ctx, topOffset, leftOffset } = gameFiled;

    const top = rect.top - topOffset;
    const left = rect.left - leftOffset;
    const height = rect.height;
    const width = rect.width;

    ctx.beginPath();
    ctx.rect(left, top, rect.width, rect.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    return { top, left, height, width, status: 1 };
  },
  deployMultiBrick: (gameField: GameField, targetList: Element[]): Brick[] => {
    const brickList: Brick[] = [];

    targetList.forEach((target) => {
      const appearedBrick = gameFactory.makeAppearBrick(target, gameField);
      brickList.push(appearedBrick);
    });

    return brickList;
  },
  drawMultiBrick: (gameField: GameField, brickList: Brick[]): Brick[] => {
    const { ctx } = gameField;

    for (const brick of brickList) {
      if (brick.status !== 1) continue;

      ctx.beginPath();
      ctx.rect(brick.left, brick.top, brick.width, brick.height);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }

    return brickList;
  },
  detectCollision: (
    rectX: number,
    rectY: number,
    rectWidth: number,
    rectHeight: number,
    circleX: number,
    circleY: number,
    circleRadius: number
  ) => {
    const crx = circleX - rectX;
    const cry = circleY - rectY;
    const distX = Math.abs(crx - rectWidth / 2);
    const distY = Math.abs(cry - rectHeight / 2);

    // 衝突判定
    if (
      distX > rectWidth / 2 + circleRadius ||
      distY > rectHeight / 2 + circleRadius
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
    if (dx * dx + dy * dy <= circleRadius * circleRadius) {
      return "corner"; // 角と衝突
    }

    return; // 衝突していない
  },
  expandGameField: (root: HTMLElement): GameField | undefined => {
    const LANE_SPACE = 250;
    const rect = root.getBoundingClientRect();

    const gameField = document.createElement("canvas") as HTMLCanvasElement;
    const ctx = gameField.getContext("2d");

    const height = rect.height + LANE_SPACE;
    const width = rect.width;

    gameField.height = height;
    gameField.width = width;

    const topOffset = rect.top;
    const leftOffset = rect.left;
    gameField.style.position = "absolute";
    gameField.style.top = topOffset + "px";
    gameField.style.left = leftOffset + "px";

    if (!ctx) return;

    root.appendChild(gameField);
    return { ctx, topOffset, leftOffset, height, width };
  },
};
