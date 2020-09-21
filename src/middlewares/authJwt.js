'use strict';

export const verifyToken = async (req, res, next) => {
  let token = req.headers['x-access-token'];
  console.log(token);
  next();
};
