import express from "express";
import { updateVideo, deleteVideo, addVideo, addView, getByTag, getVideo, random, search, sub, trend, getVideoFromUser } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();


router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", addView)
router.get("/trend", trend)
router.get("/random", random)
router.get("/sub",verifyToken, sub)
router.get("/tags", getByTag)
router.get("/search", search)
router.get("/user/:id", getVideoFromUser)

export default router;
