const router = require('express').Router();
const travelersRoutes = require('./travelersRoutes');
const locationsRoutes = require('./locationsRoutes');
const tripsRoutes = require('./tripsRoutes');


router.use('/travelers', travelersRoutes);
router.use('/locations', locationsRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;