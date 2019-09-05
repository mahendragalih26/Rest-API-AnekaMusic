const modelMain = require("../models/Main");

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
    modelMain
      .getAll(queryParams)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  insertMain: (req, res) => {
    const data = {
      id_product: req.body.id_product,
      id_branch: req.body.id_branch,
      qty: req.body.qty,
      price: req.body.price,
      img: req.body.img
    };
    modelMain
      .insertMain(data)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  updateMain: (req, res) => {
    const data = {
      name: req.body.name
    };

    const id = {
      id: req.params.id
    };

    modelMain
      .updateMain(data, id)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  deleteMain: (req, res) => {
    const id = {
      id: req.params.id
    };
    modelMain
      .deleteMain(id)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  }
};
