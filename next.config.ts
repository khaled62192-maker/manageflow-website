import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — produces an `out/` folder of plain HTML/CSS/JS that
  // can be uploaded to any static host (Netlify, Vercel, S3, GitHub Pages).
  output: "export",
  // No image optimization service when serving static files
  images: { unoptimized: true },
  // Trailing-slash URLs map cleanly to /folder/index.html on most hosts
  trailingSlash: true,
};

export default nextConfig;
