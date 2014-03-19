{
  "manifest_version": 2,
  "name"            : "Amazon url omitter",
  "version"         : "1.0",
  "description"     : "Omit Amazon.com product page's url.",
  "permissions"     : ["contextMenus", "tabs", "http://www.amazon.com/", "http://www.amazon.co.jp"],
  "background": {
    "scripts"       : ["background.js"]
  }
}
