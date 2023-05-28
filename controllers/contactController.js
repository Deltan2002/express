const asyncHandler = require("express-async-handler");

//@desc Get all contact
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
  res.json({ message: "get contacts" });
});

//@desc create contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!  ");
  }
  res.json({ message: "create contacts" });
});

//@desc get contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req, res) => {
  res.json({ message: "get a contact" });
});

//@desc create contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  res.json({ message: "update contacts" });
});

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res.json({ message: "delete contact" });
});

module.exports = {
  getContact,
  getContacts,
  updateContact,
  createContact,
  deleteContact,
};
