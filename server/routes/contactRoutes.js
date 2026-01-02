import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

/**
 * @route   POST /api/contacts
 * @desc    Save a new contact
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Name, Email, and Phone are required",
      });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await newContact.save();

    res.status(201).json({
      message: "Contact saved successfully",
      contact: newContact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error while saving contact",
    });
  }
});

/**
 * @route   GET /api/contacts
 * @desc    Get all contacts
 */
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: "Server error while fetching contacts",
    });
  }
});

export default router;
