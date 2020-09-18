'use strict';
import Product from '../models/Product';

export const createProduct = async (req, res) => {
  const {name, category, price, imgURL} = req.body;
  const newProduct = new Product({name, category, price, imgURL});
  const productSave = await newProduct.save();

  res.status(201).json(productSave);
};

export const getProducts = async (req, res) => {
  const productList = await Product.find();
  res.json(productList);
};

export const getProductsById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
    new: true,
  });
  res.status(200).json(updatedProduct);
};

export const deleteeProductsById = async (req, res) => {};
