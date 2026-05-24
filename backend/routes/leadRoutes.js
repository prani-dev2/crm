const express = require("express");

const router = express.Router();

const Lead = require("../models/Lead");

router.get("/", async (req, res) => {

    const leads = await Lead.find();

    res.json(leads);
});

router.post("/", async (req, res) => {

    try {

        console.log("POST request received");

        console.log(req.body);

        const lead = new Lead(req.body);

        await lead.save();

        console.log("Lead saved successfully");

        res.json(lead);

    } catch (error) {

        console.log("ERROR SAVING LEAD:");

        console.log(error);

        res.status(500).json({
            message: "Error saving lead"
        });
    }
});

router.delete("/:id", async (req, res) => {

    await Lead.findByIdAndDelete(req.params.id);

    res.json({
        message: "Lead deleted"
    });
});

router.put("/:id", async (req, res) => {

    const updatedLead =
        await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

    res.json(updatedLead);
});

module.exports = router;