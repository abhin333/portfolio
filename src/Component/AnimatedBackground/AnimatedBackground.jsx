import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initGrid();
    };
    window.addEventListener('resize', resize);

    // ─── Palette ─────────────────────────────────────────────
    const C = {
      violet: [139, 92, 246],
      cyan: [34, 211, 238],
      pink: [251, 113, 133],
      lav: [167, 139, 250],
    };
    const rgba = ([r, g, b], a) => `rgba(${r},${g},${b},${a})`;

    // ─── 1. WARP STAR TUNNEL ─────────────────────────────────
    class WarpStar {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.angle = Math.random() * Math.PI * 2;
        this.dist = init ? Math.random() * Math.hypot(W, H) * 0.5 : 1;
        this.speed = 1.5 + Math.random() * 3.5;
        this.size = 0.5 + Math.random() * 1.2;
        const cols = [C.violet, C.cyan, C.pink, C.lav];
        this.col = cols[Math.floor(Math.random() * cols.length)];
        this.maxDist = Math.hypot(W, H) * 0.52;
      }
      update() {
        this.dist += this.speed * (this.dist / 120 + 0.5);
        if (this.dist > this.maxDist) this.reset();
      }
      draw() {
        const cx = W / 2, cy = H / 2;
        const x = cx + Math.cos(this.angle) * this.dist;
        const y = cy + Math.sin(this.angle) * this.dist;
        const prevDist = Math.max(1, this.dist - this.speed * 4);
        const px = cx + Math.cos(this.angle) * prevDist;
        const py = cy + Math.sin(this.angle) * prevDist;
        const alpha = Math.min(1, this.dist / 80) * 0.8;
        const w = this.size * (this.dist / 200 + 0.3);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        ctx.strokeStyle = rgba(this.col, alpha);
        ctx.lineWidth = w;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }
    const warpStars = Array.from({ length: 220 }, () => new WarpStar());

    // ─── 2. CONSTELLATION NETWORK ────────────────────────────
    class Node {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.55;
        this.vy = (Math.random() - 0.5) * 0.55;
        this.r = 1.2 + Math.random() * 2;
        const cols = [C.violet, C.cyan, C.lav];
        this.col = cols[Math.floor(Math.random() * cols.length)];
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.018 + Math.random() * 0.025;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        this.pulse += this.pulseSpeed;
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
      }
      draw() {
        const a = 0.55 + 0.35 * Math.sin(this.pulse);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = rgba(this.col, a);
        ctx.fill();
      }
    }
    const nodes = Array.from({ length: 60 }, () => new Node());
    const MAX_DIST = 160;

    const drawEdges = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const a = (1 - d / MAX_DIST) * 0.28;
            const g = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            g.addColorStop(0, rgba(nodes[i].col, a));
            g.addColorStop(1, rgba(nodes[j].col, a));
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = g;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    // ─── 3. HEX GRID PULSE ───────────────────────────────────
    const HEX_SIZE = 52;
    const HEX_GAP = 4;
    let hexCells = [];

    const initGrid = () => {
      hexCells = [];
      const s = HEX_SIZE + HEX_GAP;
      const cols2 = Math.ceil(W / (s * 1.732)) + 2;
      const rows2 = Math.ceil(H / (s * 1.5)) + 2;
      for (let row = -1; row < rows2; row++) {
        for (let col = -1; col < cols2; col++) {
          const x = col * s * 1.732 + (row % 2 === 0 ? 0 : s * 0.866);
          const y = row * s * 1.5;
          hexCells.push({ x, y, phase: Math.random() * Math.PI * 2, speed: 0.004 + Math.random() * 0.008 });
        }
      }
    };

    const drawHex = (x, y, size, alpha, strokeCol) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const px = x + size * Math.cos(a);
        const py = y + size * Math.sin(a);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = rgba(strokeCol, alpha);
      ctx.lineWidth = 0.6;
      ctx.stroke();
    };

    const drawHexGrid = (t) => {
      hexCells.forEach(cell => {
        cell.phase += cell.speed;
        const a = 0.04 + 0.06 * Math.abs(Math.sin(cell.phase));
        const col = Math.sin(cell.phase) > 0 ? C.violet : C.cyan;
        drawHex(cell.x, cell.y, HEX_SIZE, a, col);
      });
    };

    // ─── 4. SCANLINE ─────────────────────────────────────────
    let scanY = -40;
    const drawScanline = () => {
      scanY += 0.8;
      if (scanY > H + 40) scanY = -40;
      const g = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
      g.addColorStop(0, 'rgba(34,211,238,0)');
      g.addColorStop(0.5, 'rgba(34,211,238,0.045)');
      g.addColorStop(1, 'rgba(34,211,238,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, scanY - 40, W, 80);
    };

    // ─── Init ─────────────────────────────────────────────────
    canvas.width = W;
    canvas.height = H;
    initGrid();

    // ─── Render loop ─────────────────────────────────────────
    let t = 0;
    const render = () => {
      t++;
      ctx.clearRect(0, 0, W, H);

      // depth fade: warp stars first (behind everything)
      warpStars.forEach(s => { s.update(); s.draw(); });

      // hex grid
      drawHexGrid(t);

      // constellation edges + nodes
      drawEdges();
      nodes.forEach(n => { n.update(); n.draw(); });

      // scanline sweep
      drawScanline();

      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="animated-bg">
      <div className="animated-bg__base" />
      <div className="animated-bg__nebula animated-bg__nebula--a" />
      <div className="animated-bg__nebula animated-bg__nebula--b" />
      <div className="animated-bg__nebula animated-bg__nebula--c" />
      <canvas ref={canvasRef} className="animated-bg__canvas" />
      <div className="animated-bg__vignette" />
    </div>
  );
};

export default AnimatedBackground;
