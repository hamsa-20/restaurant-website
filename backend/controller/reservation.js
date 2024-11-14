import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import Reservation from "../models/reservationSchema.js"

const createReservation = async (req, res) => {
    const { firstName, lastName, email, phone, time } = req.body;
    if ([firstName, lastName, email, phone, time].some((field) => !field || field.trim() === "")) throw new ApiError(400, "All the field are required");
    const reservation = await Reservation.create({
        firstName,
        lastName,
        email,
        phone,
        time
    });
    console.log(reservation)
    if (!reservation) throw new ApiError(400, "Failed to create the reservation");
    return res
        .status(200)
        .json(new ApiResponse(200, reservation, "Reservation created succesfully"))
}

export {
    createReservation
}