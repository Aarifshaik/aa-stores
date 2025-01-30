import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  // basePath: '/aa-stores', // Replace <repository-name> with your GitHub repo name
  // trailingSlash: true, // Ensures proper paths for GitHub Pages
  /* config options here */ 
  distDir:'dist',
  images: {
    domains: ["images.unsplash.com","plus.unsplash.com"],
    unoptimized: true,
  },
};

export default nextConfig;
