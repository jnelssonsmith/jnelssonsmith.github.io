"use strict";

exports.registerServiceWorker = function () {
  return true;
};

var prefetchedPathnames = [];
var whitelistedPathnames = [];

exports.onServiceWorkerActive = function (_ref) {
  var getResourceURLsForPathname = _ref.getResourceURLsForPathname,
      serviceWorker = _ref.serviceWorker;
  // grab nodes from head of document
  var nodes = document.querySelectorAll("\n    head > script[src],\n    head > link[href],\n    head > style[data-href]\n  "); // get all resource URLs

  var headerResources = [].slice.call(nodes).map(function (node) {
    return node.src || node.href || node.getAttribute("data-href");
  }); // Loop over all resources and fetch the page component and JSON
  // to add it to the sw cache.

  var prefetchedResources = [];
  prefetchedPathnames.forEach(function (path) {
    return getResourceURLsForPathname(path).forEach(function (resource) {
      return prefetchedResources.push(resource);
    });
  });
  var resources = headerResources.concat(prefetchedResources);
  resources.forEach(function (resource) {
    // Create a prefetch link for each resource, so Workbox runtime-caches them
    var link = document.createElement("link");
    link.rel = "prefetch";
    link.href = resource;
    link.onload = link.remove;
    link.onerror = link.remove;
    document.head.appendChild(link);
  });
  serviceWorker.active.postMessage({
    gatsbyApi: "whitelistPathnames",
    pathnames: whitelistedPathnames
  });
};

function whitelistPathname(pathname, includesPrefix) {
  if ("serviceWorker" in navigator) {
    var _navigator = navigator,
        serviceWorker = _navigator.serviceWorker;

    if (serviceWorker.controller !== null) {
      serviceWorker.controller.postMessage({
        gatsbyApi: "whitelistPathnames",
        pathnames: [{
          pathname: pathname,
          includesPrefix: includesPrefix
        }]
      });
    } else {
      whitelistedPathnames.push({
        pathname: pathname,
        includesPrefix: includesPrefix
      });
    }
  }
}

exports.onPostPrefetchPathname = function (_ref2) {
  var pathname = _ref2.pathname;
  whitelistPathname(pathname, false); // if SW is not installed, we need to record any prefetches
  // that happen so we can then add them to SW cache once installed

  if ("serviceWorker" in navigator && !(navigator.serviceWorker.controller !== null && navigator.serviceWorker.controller.state === "activated")) {
    prefetchedPathnames.push(pathname);
  }
};