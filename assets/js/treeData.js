'use strict';

/* Receive data and create tree */
function renderTree(data, select) {
    var main = document.querySelector(select);
    var treecanvas = document.createElement('div');
    treecanvas.className = 'tree';
    var treeCode = visit(data, Object.keys(data)[0]);
    treecanvas.innerHTML = treeCode;
    main.appendChild(treecanvas);
}

/* Recursive function to build tree structure :) */
function visit(obj, node) {
	var treeString = "<li><a href='#'>" + obj[node].value + "</a>";
    var sons = [];
    for (var i in obj) {
	    if (obj[i].parent == node) {
          sons.push(i);
	  }
    }
    if (sons.length > 0) {
        treeString += "<ul>";
        for (var i in sons) {
          treeString += visit(obj, sons[i]);
        }
        treeString += "</ul>";
    }
    return treeString;
}
