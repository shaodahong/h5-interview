const fs = require('fs');
const path = require('path');

module.exports = (() => {
  function getFileTree(dirPath) {
    const arr = [];

    function getFiles(dirPath, arr) {
      const filesList = fs.readdirSync(dirPath);

      for (let i = 0; i < filesList.length; i++) {
        const fileObj = {};
        fileObj.name = filesList[i].split('.')[0];
        const filePath = path.join(dirPath, filesList[i]);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          fileObj.type = 'dir';
          fileObj.child = [];
          arr.push(fileObj);
          getFiles(filePath, arr[i].child);
        } else {
          fileObj.type = path.extname(filesList[i]).substring(1);
          arr.push(fileObj);
        }
      }
    }

    getFiles(dirPath, arr);

    return arr;
  }

  const fileTree = getFileTree('./docs');

  const sidebar = {};

  fileTree.forEach(({ name, type, child }) => {
    if (type !== 'dir') {
      sidebar[name] = [name];
      return;
    } else if (child && child.length) {
      sidebar[name] = child.map(
        ({ name: childName }) => `${name}/${childName}`,
      );
    }
  });

  const home = sidebar['前言'];
  delete sidebar['前言'];

  return {
    someSidebar: {
      前言: home,
      ...sidebar,
    },
  };
})();
