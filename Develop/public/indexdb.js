window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}
let db;
const indexdb = window.indexedDB 

var request = indexdb.open("Transactions", 3);

request.onerror = function(event) {
    console.log("unable to connect to indexdb")
  };
  request.onsuccess = function(event) {
  db = event.target.results;
  };

  function savedTransactions (record) {
var transaction = db.transaction(["pending"], "readwrite")
var store = transaction.objectStore("pending")
store.add(record)
  }

  request.onupgradeneeded = function(event) {
    var db = event.target.result;

    var objectStore = db.createObjectStore("pending", { autoIncrement: true });
    return(objectStore)
  };