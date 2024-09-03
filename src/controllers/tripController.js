const Trip = require('../models/Trip');
const Route = require('../models/Route');
const Carrier = require('../models/Carrier');

exports.searchTrips = async (req, res) => {
    try {
        const { departure, arrival, date } = req.body;
        const routes = await Route.getByLocations(departure, arrival);
        const trips = [];
        for (const route of routes) {
            const routeTrips = await Trip.getAvailableTrips(route.id, date);
            trips.push(...routeTrips);
        }
        const carriers = await Carrier.getAll();

        const result = trips.map(trip => {
            const carrier = carriers.find(c => c.id === trip.carrier_id);
            return {
                ...trip,
                carrierName: carrier.name
            };
        });

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error searching trips' });
    }
};