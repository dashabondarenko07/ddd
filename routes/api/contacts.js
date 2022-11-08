const express = require("express");

const ctrl = require("../../controllers/contacts/index");

const { validateBody } = require("../../middleware/index");

const schemas = require("../../schema/contacts");

const { ctrlWrapper } = require("../../helpers/index");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.delete("/:contactId", ctrlWrapper(ctrl.updateContact));

module.exports = router;
