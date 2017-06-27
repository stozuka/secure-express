'use strict';

const _ = require('lodash');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const Vote = sequelize.define('Vote', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    votes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      get() {
        return moment(this.getDataValue('createdAt')).format('Y-MM-DD HH:mm:ss');
      },
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at',
      get() {
        return moment(this.getDataValue('updatedAt')).format('Y-MM-DD HH:mm:ss');
      },
    }
  }, {
    tableName: 'votes',
    timestamps: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    instanceMethods: {
      toJSON: function () {
        return _.omit(this.get(), ['created_at', 'updated_at']);
      }
    },
  });
  return Vote;
};
