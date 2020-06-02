const Exercise = require('../models/exercise');


async function createEx(req, res) {
    console.log(req.body);
    const user = new Exercise(req.body);
    try {
        await user.save();
        return res.json({user})
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deleteEx(req, res) {
    Exercise.findByIdAndDelete(req.body.id, err => {
        if (err) console.log(err);
        console.log('Successful deletion');
    });
}

module.exports = {
//   getEx,
  createEx,
  deleteEx
};
