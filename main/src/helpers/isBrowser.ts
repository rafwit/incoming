// this function checks if code is run in the browser to make sure that error thrown in node is colorful
// and in the browser doesn't have the color tags, that are not translated inside browser and affects readability

const isBrowser: Function = new Function("try {return this===window;}catch(e){ return false;}");

export default isBrowser;

