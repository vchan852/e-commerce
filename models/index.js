// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  onDelete: 'SET NULL',
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  onDelete: 'SET NULL',
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  onDelete: 'SET NULL',
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  onDelete: 'SET NULL',
  through: {
    model: ProductTag,
    unique: false
  },

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};