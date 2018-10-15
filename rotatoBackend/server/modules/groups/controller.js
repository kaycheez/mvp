import Group from './model.js';

const getAllGroups = async (req, res) => {
  try {
    return res.status(200).json({ groups: await Group.find({})});
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with getting'})
  }
}

const createGroup = async (req, res) => {
  const { name } = req.body;
  const newGroup = new Group({ name });

  try {
    return res.status(201).json({ groups: await newGroup.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with adding'})
  }

}

module.exports = { getAllGroups, createGroup };