const bycrypt = require("bcrypt")
const {User, validate} = require("../models/user");
const router = require("express").Router();