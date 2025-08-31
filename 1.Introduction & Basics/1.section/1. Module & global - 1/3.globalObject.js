console.log(window); // output = reference error on window is not defined because
//  Node.js does not have a window object since the creator has took out v8 engine but not the whole browser 
// that's why we can access some of the browser method with the `global` object.  like setTimeout, setInterval, etc.
// window is not defined in Node.js, it is a DOM or browser-specific global object. (window is a browser or DOM object);
//this some of window methods are available because of the global object in Node.js created by creators.
console.log(global);
// since global object also provide same methods like windows, so the creator has made up like we can have a method access like we console `window` object like setInternval, setTimeout, etc... through the `global` object in node.js environment.