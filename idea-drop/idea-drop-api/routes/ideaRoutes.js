import express from 'express';

const router = express.Router();

// @route           GET /api/ideas
// @description     Get all ideas
// @access          Public
router.get("/", (req, res) => {
  const ideas = [
    { id: 1, title: "Idea 1", description: "Description for Idea 1" },
    { id: 2, title: "Idea 2", description: "Description for Idea 2" },
    { id: 3, title: "Idea 3", description: "Description for Idea 3" },
  ];
  res.json(ideas); 
  //resonse object has a method called json() that sends a JSON response. 
  // It converts the  objectinto a JSON string and sets the appropriate headers for the response.
});

// @route           POST /api/ideas
// @description     Create a new idea
// @access          Public
router.post("/", (req, res) => {
    const { title, description } = req.body;
    console.log(req.body);
    res.send(title);
});

export default router;