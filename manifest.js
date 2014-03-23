{
  "manifest_version": 2,
  "name"            : "Amazon url omitter",
  "version"         : "1.0",
  "description"     : "Omit Amazon.com product page's url.",
  "permissions"     : ["tabs", "http://www.amazon.co.jp/", "https://www.amazon.co.jp/"],
  "browser_action": {
    "default_popup" : ["background.js"]
  }
}
