// // Update a user
// const router = require("express").Router();
// const User = require('../models/user');

// router.put('/users/:id', async (req, res) => {
// 	const userId = req.params.id;
// 	console.log("userId is",userId)
// 	const updatedUserData = req.body;
// 	try {
// 	  const user = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
// 	  if (!user) {
// 		return res.status(404).send({ error: 'User not found' });
// 	  }
// 	  res.send(user);
// 	} catch (error) {
// 	  console.error(error);
// 	  res.status(500).send({ error: 'Internal server error' });
// 	}
//   });
  

// module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Update a user
router.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

module.exports = router;

