"use client";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Button from "../UI/button";
import Image from "next/image";
import blue from "@/public/blue.svg";
import green from "@/public/green.svg";
import boltUpLeft from "@/public/bolt-up-left.svg";
import boltDownRight from "@/public/bolt-down-right.svg";
import boltDownLeft from "@/public/bolt-down-left.svg";
import boltUpRight from "@/public/bolt-up-right.svg";
import SnakeFood from "./snakeFood";
import upArrow from "@/public/up-arrow.svg";
import downArrow from "@/public/down-arrow.svg";
import leftArrow from "@/public/left-arrow.svg";
import rightArrow from "@/public/right-arrow.svg";
import { useSnakeGameController } from "@/hooks/use-game-controller";
import { motion } from "framer-motion";
import { PAGES } from "@/constants";

const GameBoard: NextPage = () => {
  const { push } = useRouter();
  const [gameMode, setGameMode] = useState<"standard" | "endless">("standard");
  const [highestScore, setHighestScore] = useState<number>(
    window !== undefined ? Number(window.localStorage.getItem("highScore")) : 0,
  );
  const winScore = gameMode === "standard" ? 10 : undefined;
  const {
    canvasRef,
    canvasSize,
    score,
    setScore,
    gameOver,
    paused,
    togglePause,
    resetGame,
    setDirection,
  } = useSnakeGameController({ winScore, gameMode });

  const foodLeft = winScore ? [...Array(winScore - score)] : [];
  const foodEaten = [...Array(score)];

  useEffect(() => {
    if (gameMode === "endless" && score > highestScore) {
      queueMicrotask(() => setHighestScore(score));
    }
  }, [score, gameMode, highestScore]);

  return (
    <div className="w-[510px] h-[475px] rounded-lg border border-[#0C1616] backdrop-blur-[32px] shadow-card game-card relative p-8 flex justify-between gap-5">
      <>
        {/* gradient bg */}
        <Image
          src={blue}
          alt="blue"
          className="absolute top-8 left-[173px] shrink-0 blur-[90px] -z-10"
        />
        <Image
          src={green}
          alt="green"
          className="absolute right-8 bottom-[112px] shrink-0 blur-[90px] -z-10"
        />

        {/* bolts */}
        <Image
          src={boltUpLeft}
          alt="bolt_up_left"
          className="absolute top-2 left-2 shrink-0"
        />
        <Image
          src={boltUpRight}
          alt="bolt_up_right"
          className="absolute top-2 right-2 shrink-0"
        />
        <Image
          src={boltDownLeft}
          alt="bolt_down_left"
          className="absolute bottom-2 left-2 shrink-0"
        />
        <Image
          src={boltDownRight}
          alt="bolt_down_right"
          className="absolute bottom-2 right-2 shrink-0"
        />
      </>

      <div className="w-[239px] h-[405px] rounded-lg bg-[#011627D6] shadow-snake-card relative">
        <div className="w-full h-full">
          <canvas
            className="size-full relative"
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
          />
        </div>
        <div className="absolute bottom-14 w-full right-0 left-0 mx-auto">
          {paused && !gameOver && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center w-full gap-5"
            >
              <Button variant="primary" onClick={togglePause}>
                start-game
              </Button>
            </motion.div>
          )}
          {gameOver && score !== winScore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center w-full gap-5"
            >
              <div className="bg-primary-100/80 w-full rounded-lg h-12 flex items-center justify-center shadow-game-over">
                <p className="font-medium text-accent-200 text-center text-2xl uppercase">
                  game over!
                </p>
              </div>
              <button onClick={resetGame} className="text-code-snippet">
                start-again
              </button>
            </motion.div>
          )}
          {score === winScore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center w-full gap-5"
            >
              <div className="bg-primary-100/80 w-full rounded-lg h-12 flex items-center justify-center shadow-game-over">
                <p className="font-medium text-accent-200 text-center text-2xl uppercase">
                  well done!
                </p>
              </div>
              <button onClick={resetGame} className="text-code-snippet">
                play-again
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="w-[182px] h-[142px] rounded-lg bg-[#01142330] p-3.5 flex flex-col gap-3.5">
          <p className="font-medium text-code-snippet">
            &#47;&#47; use keyboard
            <br />
            &#47;&#47; arrows to play
          </p>
          <div className="flex flex-col items-center gap-1">
            <button
              className="hover:opacity-60"
              onClick={() => setDirection("up")}
            >
              <Image src={upArrow} alt="up_arrow" />
            </button>
            <div className="flex justify-between">
              <button
                className="hover:opacity-60"
                onClick={() => setDirection("left")}
              >
                <Image src={leftArrow} alt="left_arrow" />
              </button>
              <button
                className="hover:opacity-60"
                onClick={() => setDirection("down")}
              >
                <Image src={downArrow} alt="down_arrow" />
              </button>
              <button
                className="hover:opacity-60"
                onClick={() => setDirection("right")}
              >
                <Image src={rightArrow} alt="right_arrow" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-between flex-1">
          <div className="flex flex-col gap-2.5">
            <p className="font-medium text-code-snippet text-secondary-400">
              {gameMode === "endless" ? "// Scores" : "// food left"}
            </p>
            <div
              className={`flex gap-2 flex-wrap ${
                gameMode === "standard" ? "w-[150px]" : "w-full"
              }`}
            >
              {gameMode === "standard" &&
                foodLeft.map((_, i) => (
                  <SnakeFood key={i} className="shrink-0" />
                ))}
              {gameMode === "standard" &&
                foodEaten.map((_, i) => (
                  <SnakeFood key={i} className="shrink-0 opacity-40" />
                ))}

              {gameMode === "endless" && (
                <div className="flex flex-col gap-2 w-full">
                  <p>Score: {score}</p>
                  <p>Highest Score: {highestScore}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <p>
              Mode:{" "}
              <span className="bg-primary-300 text-accent-200 font-semibold px-2 py-1 rounded">
                {gameMode}
              </span>
            </p>
            <Button
              variant="secondary"
              onClick={() => {
                setGameMode(gameMode === "standard" ? "endless" : "standard");
                setScore(0);
              }}
              className="p-2 rounded w-max"
            >
              switch-mode
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          className="self-end"
          onClick={() => push(PAGES.ABOUT)}
        >
          skip
        </Button>
      </div>
    </div>
  );
};

export default GameBoard;
