import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: "dot" | "hub" | "data";
  pulsePhase: number;
  pulseSpeed: number;
}

const DotBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Create nodes
    const nodes: Node[] = [];
    const numNodes = 80;

    for (let i = 0; i < numNodes; i++) {
      const type = i < 6 ? "hub" : i < 20 ? "data" : "dot";
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * (type === "data" ? 0.6 : 0.2),
        vy: (Math.random() - 0.5) * (type === "data" ? 0.6 : 0.2),
        size: type === "hub" ? 3 : type === "data" ? 1.5 : Math.random() * 1.5 + 0.5,
        opacity: type === "hub" ? 0.4 : type === "data" ? 0.3 : Math.random() * 0.2 + 0.05,
        type,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    // Data flow particles along connections
    interface FlowParticle {
      fromIdx: number;
      toIdx: number;
      t: number;
      speed: number;
      opacity: number;
    }
    const flowParticles: FlowParticle[] = [];

    let animationId: number;
    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      frame++;

      // Update nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += node.pulseSpeed;

        if (node.x < -20) node.x = w + 20;
        if (node.x > w + 20) node.x = -20;
        if (node.y < -20) node.y = h + 20;
        if (node.y > h + 20) node.y = -20;
      });

      // Draw connections and spawn flow particles
      const connectionDist = 160;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = 0.06 * (1 - dist / connectionDist);
            const isHubConnection = nodes[i].type === "hub" || nodes[j].type === "hub";

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = isHubConnection
              ? `hsla(200, 70%, 60%, ${alpha * 2})`
              : `hsla(215, 50%, 55%, ${alpha})`;
            ctx.lineWidth = isHubConnection ? 0.8 : 0.4;
            ctx.stroke();

            // Spawn flow particles occasionally on hub connections
            if (isHubConnection && frame % 120 === 0 && Math.random() < 0.3 && flowParticles.length < 20) {
              flowParticles.push({
                fromIdx: i,
                toIdx: j,
                t: 0,
                speed: 0.008 + Math.random() * 0.012,
                opacity: 0.5,
              });
            }
          }
        }
      }

      // Draw and update flow particles
      for (let i = flowParticles.length - 1; i >= 0; i--) {
        const fp = flowParticles[i];
        fp.t += fp.speed;
        if (fp.t > 1) {
          flowParticles.splice(i, 1);
          continue;
        }

        const from = nodes[fp.fromIdx];
        const to = nodes[fp.toIdx];
        const px = from.x + (to.x - from.x) * fp.t;
        const py = from.y + (to.y - from.y) * fp.t;
        const fadeAlpha = fp.opacity * Math.sin(fp.t * Math.PI);

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(190, 80%, 65%, ${fadeAlpha})`;
        ctx.fill();
      }

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;

        if (node.type === "hub") {
          // Outer glow
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 12);
          gradient.addColorStop(0, `hsla(200, 70%, 60%, ${0.08 * pulse})`);
          gradient.addColorStop(1, `hsla(200, 70%, 60%, 0)`);
          ctx.beginPath();
          ctx.arc(node.x, node.y, 12, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(200, 70%, 60%, ${node.opacity + pulse * 0.15})`;
          ctx.fill();

          // Ring
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size + 3 + pulse * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(200, 70%, 60%, ${0.08 + pulse * 0.06})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else if (node.type === "data") {
          // Small diamond shape for data particles
          const s = node.size + pulse * 0.5;
          ctx.save();
          ctx.translate(node.x, node.y);
          ctx.rotate(Math.PI / 4);
          ctx.fillStyle = `hsla(170, 60%, 55%, ${node.opacity + pulse * 0.1})`;
          ctx.fillRect(-s, -s, s * 2, s * 2);
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(215, 50%, 55%, ${node.opacity})`;
          ctx.fill();
        }
      });

      // Subtle grid overlay (circuit board feel)
      if (frame === 1) {
        // Draw once as it's static — but since we clear, draw every frame at very low opacity
      }
      const gridSpacing = 80;
      ctx.strokeStyle = `hsla(215, 30%, 50%, 0.02)`;
      ctx.lineWidth = 0.5;
      for (let x = 0; x < w; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default DotBackground;
