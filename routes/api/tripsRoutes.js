const router = require("express").Router();
const { Trips } = require("../../models");


router.post("/", async (req, res) => {
  try {
    const newTripData = await Trips.create(req.body);
    res.status(200).json(newTripData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedTrip = await Trips.destroy({
      where: {
        trips_id: req.params.id,
      },
    });
    if (!deletedTrip) {
      res.status(404).json({ message: "No trip found with that id!" });
      return;
    }
    res.status(200).json(deletedTrip);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
