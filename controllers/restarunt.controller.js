const { restaruntService } = require("../services");

const addrestarunt = async (req, res) => {
  try {
    const body = req.body;

    console.log(body);

    const restarunt = await restaruntService.addrestarunt(body);
    if (!restarunt) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "restaruntaurant add success",
      data: restarunt,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

const getrestarunt = async (req, res) => {
  const restarunt = await restaruntService.getrestarunt();
  console.log(restarunt, "get");

  res.status(200).json({
    message: "restaruntaurant get success",
    data: restarunt,
  });
};

const updaterestarunt = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);

    if (!restarunt) {
      throw new Error("something went wrong");
    }
    const restarunt = await restaruntService.updaterestarunt(id, body);

    res.status(200).json({
      message: "restaruntaurnt updated success",
      data: restarunt,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const deleterestarunt = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const restarunt = await restaruntService.deleterestarunt(id);
    if (!restarunt) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "restarunt delete success",
      data: restarunt,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  addrestarunt,
  getrestarunt,
  updaterestarunt,
  deleterestarunt,
};
