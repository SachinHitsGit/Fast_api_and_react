import React, { useRef, useEffect } from "react";

export default function Game() {
  const canvasRef = useRef(null);
  const requestRef = useRef();
  const isFlying = useRef(false);

  // game world constants
  const gravity = 0.2;
  const thrust = -5;
  const player = { x: 100, y: 200, vy: 0, size: 30 };
  let obstacles = [];
  let frame = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleKeyDown = (e) => {
      if (e.code === "Space") isFlying.current = true;
    };
    const handleKeyUp = (e) => {
      if (e.code === "Space") isFlying.current = false;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const loop = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // background
      ctx.fillStyle = "#222";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // player physics
      if (isFlying.current) player.vy += thrust * 0.1;
      player.vy += gravity;
      player.y += player.vy;

      if (player.y > canvas.height - player.size) {
        player.y = canvas.height - player.size;
        player.vy = 0;
      }
      if (player.y < 0) {
        player.y = 0;
        player.vy = 0;
      }

      // obstacle generation
      if (frame % 90 === 0) {
        const gap = 140;
        const top = Math.random() * (canvas.height - gap - 50) + 20;
        obstacles.push({
          x: canvas.width,
          top,
          bottom: top + gap,
          w: 40,
        });
      }

      // move & draw obstacles
      ctx.fillStyle = "#0f0";
      obstacles.forEach((o) => {
        o.x -= 4;
        ctx.fillRect(o.x, 0, o.w, o.top);
        ctx.fillRect(o.x, o.bottom, o.w, canvas.height - o.bottom);
      });

      // remove off-screen obstacles
      obstacles = obstacles.filter((o) => o.x + o.w > 0);

      // draw player
      ctx.fillStyle = "#ff0";
      ctx.fillRect(player.x, player.y, player.size, player.size);

      // collision check
      for (let o of obstacles) {
        if (
          player.x < o.x + o.w &&
          player.x + player.size > o.x &&
          (player.y < o.top || player.y + player.size > o.bottom)
        ) {
          ctx.fillStyle = "red";
          ctx.font = "48px sans-serif";
          ctx.fillText("GAME OVER", 200, 300);
          cancelAnimationFrame(requestRef.current);
          return;
        }
      }

      requestRef.current = requestAnimationFrame(loop);
    };

    requestRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{ border: "1px solid #444", background: "#000" }}
    />
  );
}
