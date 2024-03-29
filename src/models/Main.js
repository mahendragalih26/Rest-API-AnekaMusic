const conn = require("../config/db");

module.exports = {
  getAll: queryParams => {
    return new Promise((resolve, reject) => {
      const sortBy = queryParams.sort || "id";
      const typeSort = queryParams.type || "asc";

      //Search
      const searching = queryParams.search || "";
      const field = queryParams.field || "name";
      // const field2 = queryParams.field2 || "branch";
      const searchDefined = queryParams.search != undefined;
      const fieldDefined = queryParams.field != undefined;
      // const fieldDefined2 = queryParams.field2 != undefined;

      //pagination
      const paging = parseInt(queryParams.page) || 1;
      const limitation = queryParams.limit || 5;
      const startLimit = paging > 1 ? paging * limitation - limitation : 0;
      let totalData = 0;
      let totalPage = 0;

      //query untuk menghitung total data
      let query = `SELECT COUNT (id) AS total FROM main `;

      conn.query(query, (err, rows) => {
        if (!err) {
          totalData = rows[0].total;
          totalPage = Math.ceil(totalData / limitation);
        } else {
          reject(err);
        }

        //query show all outlet
        // let query = `SELECT * FROM outlet `
        let query = `SELECT main.id, products.name, categorys.name AS category, branches.name AS branch , main.qty, main.price, main.img, products.description, main.time_create FROM main, products, categorys, branches WHERE categorys.id = products.id_category AND products.id = main.id_product AND branches.id = main.id_branch `;

        if (searchDefined || fieldDefined) {
          // query += `WHERE ${field} LIKE '%${searching}%' `;
          // if (field2 != null) {
          //   query += `AND outlet.${field1} LIKE '%${searching}% AND outlet.${$field2} LIKE '%${searching}%'`;
          // }
          query += `AND main.${field} LIKE '%${searching}%' `;
        }

        query += `ORDER BY ${sortBy} ${typeSort} `;

        conn.query(
          query + `LIMIT ${limitation} OFFSET ${startLimit}`,
          (err, result) => {
            if (!err) {
              if (result.length > 0) {
                const response = {
                  totalData: totalData,
                  page: paging,
                  totalPage: totalPage,
                  limit: parseInt(limitation),
                  values: result
                };
                resolve(response);
              } else {
                const msg = {
                  status: 404,
                  msg: "Data not found"
                };
                console.log(err);
                resolve(msg);
              }
            } else {
              reject(err);
            }
          }
        );
      });
    });
  },

  //////////////////////////////////////////////////////////////// Insert Menu

  insertMain: data => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT main SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  ///////////////////////////////////////////////////////// END Line Insert mamank

  updateMain: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query("UPDATE main SET ? WHERE ?", [data, id], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  deleteMain: id => {
    return new Promise((resolve, reject) => {
      conn.query("DELETE FROM main WHERE ?", [id], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  }
};
