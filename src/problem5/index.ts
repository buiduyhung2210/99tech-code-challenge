import express from "express";
import cors from "cors";
import sequelize from "./config/database";
import Resource from "./models/Resource";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// CREATE Resource
app.post("/resources", async (req, res) => {
  try {
    const { name, description } = req.body;
    const resource = await Resource.create({ name, description });
    res.json(resource);
  } catch (error) {
    res.status(500).json({ error: "Failed to create resource" });
  }
});

// LIST Resources (with optional filters)
app.get("/resources", async (req, res) => {
  try {
    const { name } = req.query;
    const resources = await Resource.findAll({
      where: name ? { name: String(name) } : {},
    });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve resources" });
  }
});

// Get a single resource by ID
app.get("/resources/:id", async (req, res) => {
    try {
        const resource = await Resource.findByPk(req.params.id);
        resource ? res.json(resource) : res.status(404).json({ error: "Resource not found" });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch resource" });
    }
});

// // ✏️ UPDATE Resource
app.put("/resources/:id", async (req, res) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (resource) {
    const { name, description } = req.body;
      await resource.update({ name, description });
      res.json(resource);
    } else {
      res.status(404).json({ error: "Resource not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update resource" });
  }
});

//  DELETE Resource
app.delete("/resources/:id", async (req, res) => {
    try {
      const resource = await Resource.findByPk(req.params.id);
      if (resource) {
        await resource.destroy();
        res.status(200).json({ error: "Resource deleted" });
      } else {
        res.status(404).json({ error: "Resource not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete resource" });
    }
  });

// Sync database and start server
sequelize.sync().then(() => {
  console.log("Database synced successfully");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});