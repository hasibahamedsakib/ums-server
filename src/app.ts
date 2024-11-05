import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

const app = express();

// using middleware
app.use(express.json());
app.use(cors());

// home route
app.get("/", (req: Request, res: Response) => {
  res.send(`<h1>Welcome to UMS</h1><i>...university management system</i>`);
});

// handling client error
app.use((req: Request, res: Response, next) => {
  res.status(400).json({
    success: false,
    message: "Requested url not found",
    error: {
      code: 400,
      description: "Route not valid,check again",
    },
  });
  next();
});

// handling server error
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: "Something went wrong",
    error: {
      code: 500,
      description: "Internally Server Error",
    },
  });
});

export default app;
