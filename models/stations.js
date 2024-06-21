import mongoose from "mongoose";

const fuelTypeSchema = mongoose.Schema({
  type: {
    type: String,
  },
  pricePerLitre: {
    type: Number,
  },
});

const stationSchema = mongoose.Schema({
  name: { type: String },
  address: { type: String },
  hours: { type: String },
  services: { type: [String] },
  fuelTypes: {
    type: [fuelTypeSchema],
  },
  coordinates: {
    lat: {
      type: Number,
    },
    lon: {
      type: Number,
    },
  },
});

const Station = mongoose.model("Station", stationSchema);
export default Station;
