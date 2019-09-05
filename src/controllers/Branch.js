const modelBranch = require("../models/Branch");

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
    modelBranch
      .getAll(queryParams)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  insertBranch: (req, res) => {
    const data = {
      name: req.body.name
    };
    modelMain
      .insertBranch(data)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  updateBranch: (req, res) => {
    const data = {
      name: req.body.name
    };

    const id = {
      id: req.params.id
    };

    modelBranch
      .updateBranch(data, id)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  deleteBranch: (req, res) => {
    const id = {
      id: req.params.id
    };
    modelBranch
      .deleteBranch(id)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  }
};
