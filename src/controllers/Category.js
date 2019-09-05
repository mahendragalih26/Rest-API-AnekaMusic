const modelCategory = require("../models/Category");

module.exports = {
  getAll: (req, res) => {
    const queryParams = {
      sort: req.query.sort,
      type: req.query.type,
      field: req.query.field,
      search: req.query.search,
      page: req.query.page,
      limit: req.query.limit
    };
    modelCategory
      .getAll(queryParams)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  insertCategory: (req, res) => {
    const data = {
      name: req.body.name
    };
    modelMain
      .insertCategory(data)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  updateCategory: (req, res) => {
    const data = {
      name: req.body.name
    };

    const id = {
      id: req.params.id
    };

    modelCategory
      .updateCategory(data, id)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  deleteCategory: (req, res) => {
    const id = {
      id: req.params.id
    };
    modelCategory
      .deleteCategory(id)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  }
};
