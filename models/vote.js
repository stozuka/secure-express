'use strict';

const _ = require('lodash');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const Model = sequelize.define('Vote', {
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
    defaultScope: {
      attributes: {exclude: ['created_at', 'updated_at']},
    },
  });

  // Class Methods
  // Model.associate = function (models) {
  //   ;
  // };

  // Instance Methods
  Model.prototype.toJSON = function () {
    return this.get();
  };

  return Model;
};
