import { useEffect, useRef, useState } from "react";

const defaultOptions: ISnakeGameOptions = {
  snakeSize: 10,
  foodSize: 10,
  snakeSpeed: 100,
  winScore: 10,
  gameMode: "standard",
};

export const useSnakeGameController = (options: ISnakeGameOptions) => {
  const mergedOptions = { ...defaultOptions, ...options };

  const initialSnake: ISnake[] = [
    { x: 80, y: 80 },
    { x: 80, y: 90 },
    { x: 80, y: 100 },
    { x: 80, y: 110 },
    { x: 80, y: 120 },
    { x: 80, y: 130 },
    { x: 80, y: 140 },
    { x: 80, y: 150 },
    { x: 80, y: 160 },
    { x: 90, y: 160 },
    { x: 100, y: 160 },
    { x: 110, y: 160 },
    { x: 120, y: 160 },
    { x: 130, y: 160 },
    { x: 140, y: 160 },
    { x: 140, y: 170 },
    { x: 140, y: 180 },
    { x: 140, y: 190 },
    { x: 140, y: 200 },
    { x: 140, y: 210 },
    { x: 140, y: 220 },
    { x: 140, y: 230 },
    { x: 140, y: 240 },
    { x: 140, y: 250 },
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<ISnake[]>(initialSnake);
  const [direction, setDirection] = useState<"up" | "down" | "left" | "right">(
    "up"
  );
  const [food, setFood] = useState<ISnake>({ x: 80, y: 50 });
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(true);
  const [canvasSize, setCanvasSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const togglePause = () => setPaused(!paused);

  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        setCanvasSize({ width: rect.width, height: rect.height });
      }
    };

    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (!ctx) return;

    const drawSnake = () => {
      ctx.fillStyle = "#43D9AD";
      snake.forEach((s, i) => {
        ctx.globalAlpha = 1 - i / snake.length;
        if (i === 0) {
          ctx.beginPath();
          switch (direction) {
            case "up":
              ctx.arc(
                s.x + mergedOptions.snakeSize! / 2,
                s.y,
                mergedOptions.snakeSize! / 2,
                Math.PI,
                0
              );
              break;
            case "down":
              ctx.arc(
                s.x + mergedOptions.snakeSize! / 2,
                s.y + mergedOptions.snakeSize!,
                mergedOptions.snakeSize! / 2,
                0,
                Math.PI
              );
              break;
            case "left":
              ctx.arc(
                s.x,
                s.y + mergedOptions.snakeSize! / 2,
                mergedOptions.snakeSize! / 2,
                Math.PI / 2,
                Math.PI * 1.5
              );
              break;
            case "right":
              ctx.arc(
                s.x + mergedOptions.snakeSize!,
                s.y + mergedOptions.snakeSize! / 2,
                mergedOptions.snakeSize! / 2,
                Math.PI * 1.5,
                Math.PI / 2
              );
              break;
          }
          ctx.fill();
        }
        ctx.fillRect(
          s.x,
          s.y,
          mergedOptions.snakeSize!,
          mergedOptions.snakeSize!
        );
      });
    };

    const drawFood = () => {
      ctx.beginPath();
      ctx.arc(
        food.x + mergedOptions.foodSize! / 2,
        food.y + mergedOptions.foodSize! / 2,
        mergedOptions.foodSize! + 2,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = "#43D9AD";
      ctx.globalAlpha = 0.1;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(
        food.x + mergedOptions.foodSize! / 2,
        food.y + mergedOptions.foodSize! / 2,
        mergedOptions.foodSize! / 1.2,
        0,
        2 * Math.PI
      );
      ctx.globalAlpha = 0.2;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(
        food.x + mergedOptions.foodSize! / 2,
        food.y + mergedOptions.foodSize! / 2,
        mergedOptions.foodSize! / 2,
        0,
        2 * Math.PI
      );
      ctx.globalAlpha = 1;
      ctx.fill();
    };

    const checkCollision = (head: ISnake) => {
      if (
        head.x < 0 ||
        head.x >= canvasSize.width ||
        head.y < 0 ||
        head.y >= canvasSize.height
      ) {
        setGameOver(true);
        const highScore = localStorage.getItem("highScore");
        if (!highScore || score > parseInt(highScore)) {
          localStorage.setItem("highScore", score.toString());
        }
        return true;
      }

      if (snake.slice(1).some((s) => head.x === s.x && head.y === s.y)) {
        setGameOver(true);
        const highScore = localStorage.getItem("highScore");
        if (!highScore || score > parseInt(highScore)) {
          localStorage.setItem("highScore", score.toString());
        }
        return true;
      }

      return false;
    };

    const checkFood = (head: ISnake) => {
      if (head.x === food.x && head.y === food.y) {
        setScore(score + 1);
        const newFood = {
          x:
            Math.floor(
              Math.random() * (canvasSize.width / mergedOptions.snakeSize!)
            ) * mergedOptions.snakeSize!,
          y:
            Math.floor(
              Math.random() * (canvasSize.height / mergedOptions.snakeSize!)
            ) * mergedOptions.snakeSize!,
        };
        // Ensure food does not overlap with snake
        if (snake.some((s) => s.x === newFood.x && s.y === newFood.y)) {
          checkFood(head);
        } else {
          setFood(newFood);
          // Increase snake size
          setSnake([...snake, snake[snake.length - 1]]);
        }
      }
    };

    const moveSnake = () => {
      if (gameOver) return;

      const newSnake = [...snake];
      const newHead = { ...newSnake[0] };

      switch (direction) {
        case "up":
          newHead.y -= mergedOptions.snakeSize!;
          break;
        case "down":
          newHead.y += mergedOptions.snakeSize!;
          break;
        case "left":
          newHead.x -= mergedOptions.snakeSize!;
          break;
        case "right":
          newHead.x += mergedOptions.snakeSize!;
          break;
      }

      if (!checkCollision(newHead)) {
        newSnake.unshift(newHead);
        newSnake.pop();
        setSnake(newSnake);
      }
      checkFood(newHead);
    };

    const gameLoop = setInterval(() => {
      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
      drawSnake();
      drawFood();
      if (!paused && !gameOver) {
        moveSnake();
      }
      if (
        mergedOptions.gameMode === "standard" &&
        score === mergedOptions.winScore
      ) {
        setGameOver(true);
      }
    }, mergedOptions.snakeSpeed!);

    return () => {
      clearInterval(gameLoop);
    };
  }, [
    snake,
    food,
    direction,
    gameOver,
    paused,
    score,
    canvasSize,
    options,
    mergedOptions.snakeSpeed,
    mergedOptions.snakeSize,
    mergedOptions.foodSize,
    mergedOptions.gameMode,
    mergedOptions.winScore,
  ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction !== "down") setDirection("up");
          break;
        case "ArrowDown":
          if (direction !== "up") setDirection("down");
          break;
        case "ArrowLeft":
          if (direction !== "right") setDirection("left");
          break;
        case "ArrowRight":
          if (direction !== "left") setDirection("right");
          break;
        case " ":
          togglePause();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]); //eslint-disable-line

  const resetGame = () => {
    setSnake(initialSnake);
    setDirection("up");
    setFood({ x: 50, y: 50 });
    setGameOver(false);
    setScore(0);
    setPaused(false);
  };

  return {
    canvasRef,
    canvasSize,
    score,
    setScore,
    gameOver,
    paused,
    resetGame,
    togglePause,
    direction,
    setDirection,
  };
};
