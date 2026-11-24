import React, { useEffect, useRef } from 'react';

export default function DnaHelixCanvas({ className = "w-full h-full" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let angle = 0;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);

      const numPoints = 28;
      const wavelength = height / 1.8;
      const amplitude = Math.min(width * 0.35, 120);
      const centerY = height / 2;
      const startX = 40;
      const endX = width - 40;
      const step = (endX - startX) / (numPoints - 1);

      angle += 0.02;

      for (let i = 0; i < numPoints; i++) {
        const x = startX + i * step;
        const phase = (x / wavelength) * Math.PI * 2 + angle;
        
        // Two antiparallel strands
        const y1 = centerY + Math.sin(phase) * amplitude;
        const y2 = centerY - Math.sin(phase) * amplitude;
        const z = Math.cos(phase); // for depth simulation

        const radius1 = 4 + z * 2.2;
        const radius2 = 4 - z * 2.2;
        const alpha = 0.35 + (z + 1) * 0.3;

        // Base pair connector rung
        if (i % 2 === 0) {
          ctx.beginPath();
          ctx.moveTo(x, y1);
          ctx.lineTo(x, y2);
          const gradient = ctx.createLinearGradient(x, y1, x, y2);
          gradient.addColorStop(0, `rgba(34, 139, 90, ${alpha * 0.7})`); // Emerald
          gradient.addColorStop(0.5, `rgba(168, 201, 165, ${alpha * 0.4})`); // Sage
          gradient.addColorStop(1, `rgba(22, 75, 53, ${alpha * 0.7})`); // Forest
          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.max(1, 2 + z * 1);
          ctx.stroke();

          // Hydrogen bond dots in center
          const midY = (y1 + y2) / 2;
          ctx.beginPath();
          ctx.arc(x, midY, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 139, 90, ${alpha})`;
          ctx.fill();
        }

        // Strand 1 node (Emerald)
        ctx.beginPath();
        ctx.arc(x, y1, Math.max(2, radius1), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 139, 90, ${alpha})`;
        ctx.shadowColor = 'rgba(34, 139, 90, 0.4)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Strand 2 node (Sage / Mint)
        ctx.beginPath();
        ctx.arc(x, y2, Math.max(2, radius2), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(22, 75, 53, ${0.4 + (1 - z) * 0.3})`;
        ctx.shadowColor = 'rgba(22, 75, 53, 0.3)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-label="Interactive DNA Double Helix Animation"
    />
  );
}
