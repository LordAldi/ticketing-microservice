import { requireAuth } from "@anuisme/common-ticket";
import express, { Request, Response } from "express";

const router = express.Router();
router.post(
  "/api/tickets",
  requireAuth,
  async (req: Request, res: Response) => {
    res.sendStatus(200);
  }
);

export { router as createTicketRouter };
