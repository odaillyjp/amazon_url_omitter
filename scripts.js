(function(){
  var currentPath = location.pathname;
  var omitedPath = omitAmazonPath(currentPath);

  function omitAmazonPath(path) {
    path = omitProductNameFromPath(path);
    path = omitParameterFromPath(path);
    return path;
  }

  function omitProductNameFromPath(path) {
    return path.replace(/(?:\/.*)?(\/dp\/[a-zA-Z0-9]+\/)/, "$1");
  }

  function omitParameterFromPath(path) {
    return path.replace(/(dp\/[a-zA-Z0-9]+\/).*?$/, "$1");
  }

  history.pushState("", "", omitedPath);
})();
