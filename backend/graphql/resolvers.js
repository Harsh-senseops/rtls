const jwt = require("jsonwebtoken");
const funOne = require("./planners/functionOne");
const funTwo = require("./planners/functionTwo");
const utils = require("./planners/utils");

let timerArray = {};

const Mutation = {
 
};

const Query = {

  getMaxAnchorValues: async(parent ,args,{pgClient},info) => {
    const query = `SELECT
    GREATEST(
      (SELECT MAX(x_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 1'),
      (SELECT MAX(x_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 2'),
      (SELECT MAX(x_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 3'),
      (SELECT MAX(x_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 4')
    ) AS max_x_axis,
    GREATEST(
      (SELECT MAX(y_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 1'),
      (SELECT MAX(y_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 2'),
      (SELECT MAX(y_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 3'),
      (SELECT MAX(y_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 4')
    ) AS max_y_axis;`;
    let res = await pgClient.query(query).then((result) => {
      if (result.rows.length === 0) {
        throw new Error("No new location");
      }
      return result
    });
    return JSON.stringify(res.rows)
  }
};

const Subscription = {};

module.exports = { Mutation, Query, Subscription };
