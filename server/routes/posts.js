import express from "express";
import { updatePost, addPost, deletePost, getByTag, getPost, random, search, sub, trend, getPostFromUser } from "../controllers/post.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a post
router.post("/", verifyToken, addPost)
router.put("/:id", verifyToken, updatePost)
router.delete("/:id", verifyToken, deletePost)
router.get("/find/:id", getPost)
router.get("/trend", trend)
router.get("/random", random)
router.get("/sub",verifyToken, sub)
router.get("/tags", getByTag)
router.get("/search", search)
router.get("/user/:id", getPostFromUser)

export default router;
