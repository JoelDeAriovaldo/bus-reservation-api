const Reservation = require('../models/Reservation');
const Seat = require('../models/Seat');
const BoardingPoint = require('../models/BoardingPoint');

exports.createReservation = async (req, res) => {
    try {
        const {
            userId, tripId, seatId, boardingPointId, disembarkingPointId,
            passengerName, passengerGender, passengerAge, passengerContact,
            mobileWalletNumber
        } = req.body;

        // Verificar disponibilidade do assento
        const seatAvailable = await Seat.checkAvailability(seatId);
        if (!seatAvailable) {
            return res.status(400).json({ message: 'Seat is not available' });
        }

        // Criar a reserva
        const reservation = await Reservation.create({
            userId, tripId, seatId, boardingPointId, disembarkingPointId,
            passengerName, passengerGender, passengerAge, passengerContact,
            mobileWalletNumber, paymentStatus: 'Pending'
        });

        // Atualizar o status do assento para indisponível
        await Seat.updateAvailability(seatId, false);

        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ message: 'Error creating reservation' });
    }
};