import Group from './model.js';

const getAllGroups = async (req, res) => {
  try {
    return res.status(200).json({ groups: await Group.find({})});
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with getting'})
  }
}

const createGroup = async (req, res) => {
  const { newGroup } = req.body;
  const newGroupModel = new Group(newGroup);

  try {
    return res.status(201).json({ groups: await newGroupModel.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with adding'})
  }
}

const updateGroup = async (req, res) => {
  const { _id } = req.body;

  try {
    return res.status(201).json({ groups: await Group.findOneAndUpdate({ _id: _id }, req.body)});
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with updating'})
  }
}

module.exports = { getAllGroups, createGroup, updateGroup }