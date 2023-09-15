// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag,{
  // Use ProductTags as a join table on the product_id field
  through: 'ProductTags',
  // Use the tag_id field to match to the id field in the Tag model
  foreignKey: 'tag_id',
  // Use the product_id field to match to the id field in the Product model
  otherKey: 'product_id',
  // Use CASCADE on update and delete to propagate the changes to the junction table
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag,{
// Jse ProductTags as a join table on the tag_id field
  through: 'ProductTags',
  // Use the tag_id field to match to the id field in the Tag model
  foreignKey: 'product_id',
  // Use the product_id field to match to the id field in the Product model
  otherKey: 'tag_id',
  // Use CASCADE on update and delete to propagate the changes to the junction table
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',  
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
