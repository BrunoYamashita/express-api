const User = require('../schemas/users');

/**
 * Find users by name part
 * @param {String} param User name part
 * @returns user object less password field
 */
exports.findByNamePart = async function (param) {
  try {
    return await User.find({'fullName': {
      '$regex': param,
      '$options': 'i'
    }
  })

  } catch (err) {
    throw err;
  }
}

/**
 * Create one User
 * @param { User } user User object to be created 
 * @returns User object created
 */
exports.create = async function(user){
  try {
    user = new User(user);
    return await user.save();

  } catch (error) {
    throw error
  }
}

/**
 * Find users
 * @returns User list of objects
 */
exports.find = async function(){
  try {
    return await User.find();

  } catch (error) {
    throw err;
  }
}

/**
 * 
 * @param { ObjecyID } id User mongo ObjectID
 * @param { User } user User boject to be updated
 */
exports.update = async function(id, user){
  try {
    return await User.findByIdAndUpdate(id,user)

  } catch (error) {
    throw error;
  }
}

/**
 * Delete One user    
 * @param {ObjectID} id User objectId to be deleted
 */
exports.deleteOne = async function(id){
  try {
    return await User.deleteOne({'_id':id})

  } catch (error) {
    throw error
  }
}