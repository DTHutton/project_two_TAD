// authentication verifier

module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};

// module.exports = {
//   ensureAuthenticated: function(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     }
//     req.flash("error_msg", "Please log in to view this resource");
//     res.redirect("/");
//   }
// };
