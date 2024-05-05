import mongoose from "mongoose";

const trialDataSchema = mongoose.Schema({
    name:String,
    address:String,
    marks:[Number],
});

export const TrialData = mongoose.model("trialdata",trialDataSchema);