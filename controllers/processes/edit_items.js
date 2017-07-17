'use strict';

const models = require('../../models');

async function editItems(req, res, next) {
  const t = await models.sequelize.transaction();
  try {
    let promises = [];
    const items = req.body;
    for (let key in items) {
      const values = { item: items[key] };
      const options = { where: { id: Number(key) }, transaction: t};
      const promise = models.Vote.update(values, options);
      promises.push(promise);
    }
    await Promise.all(promises);
    await t.commit();
    res.status(200).json({ message: 'edit items' });
  } catch (e) {
    await t.rollback();
    next(e);
  }
}

module.exports = {
  editItems,
};
