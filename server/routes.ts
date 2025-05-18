import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create a public directory for static files
  const publicDir = path.join(process.cwd(), "public");
  const imagesDir = path.join(publicDir, "images");
  
  // Create directories if they don't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  // Serve static files from the public directory
  app.use('/images', express.static(imagesDir));
  
  
  app.get('/api/data', async (req, res) => {
    try {
      
      res.json({ success: true, message: "Data fetched successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  });

  
  const httpServer = createServer(app);
  
  return httpServer;
}
