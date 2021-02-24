const database = require('../database/dbConfig');

// Create a flagged post
const createFlaggedPost = (postId, userId) => {
  // Justin
};

// Create a flagged comment
const createFlaggedComment = (commentId, userId) => {
  // Yvette / Tyler
};

// Fetch Flagged Posts
const getFlaggedPosts = () => {
  // Only flagged posts that reviewed = false
  // Jake
};

// Fetch Flagged comments
const getFlaggedComments = () => {
  return database('flagged_comments').where({reviewed: false});
};

// Archive a flagged post
const archivePost = (postId) => {
  // set visible to false on post
  // set reviewed to true in flagged_posts table
  // Sal
};

// Archive a flagged comment
const archiveComment = (commentId) => {
  // set visible to false on comment
  // set reviewed to true in flagged_comments table
  // Gerardo
};

// Resolve flagged post without archiving

module.exports = {
  createFlaggedPost,
  createFlaggedComment,
  getFlaggedPosts,
  getFlaggedComments,
  archivePost,
  archiveComment,
};