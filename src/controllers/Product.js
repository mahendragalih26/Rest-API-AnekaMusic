const modelProduct = require("../models/Product");

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
    modelProduct
      .getAll(queryParams)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },
    
     getMax: (req,res) => {
        modelProduct.getMax()
        .then((result) => {
            res.status(200).json({
                data: result
            });
        })
        .catch((error) => {
            res.json(error);
        });
    },

  insertProduct: (req, res) => {
    const data = {
      name: req.body.name,
      description: req.body.description,
      id_category: req.body.id_category
    };
    modelProduct
      .insertProduct(data)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  updateProduct: (req, res) => {
    const data = {
      name: req.body.name,
      description: req.body.description,
      id_category: req.body.id_category
    };

    const id = {
      id: req.params.id
    };

    modelProduct
      .updateProduct(data, id)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  deleteProduct: (req, res) => {
    const id = {
      id: req.params.id
    };
    modelProduct
      .deleteProduct(id)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  }
};
