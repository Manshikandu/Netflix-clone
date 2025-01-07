import express from "express";
import { searchMovie,searchPerson,searchTv,getSearchHistory,removeitemFromSearchhistory } from "../controllers/search.controller.js";
const router = express.Router();

router.get("/person/:query",searchPerson);
router.get("/movie/:query",searchMovie);
router.get("/tv/:query",searchTv);

router.get("/history",getSearchHistory);
router.get("/history/:id",removeitemFromSearchhistory);

export default router;