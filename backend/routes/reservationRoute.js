import express, { Router } from "express"
import { createReservation } from "../controller/reservation.js";

const router = Router();
router.route("/send").post(createReservation)

export default router