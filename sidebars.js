const fs = require('fs')
const path = require('path')

module.exports = (() => {
  function getFileTree(dirPath) {
    const arr = []

    // eslint-disable-next-line no-shadow
    function getFiles(dirPath, arr) {
      const filesList = fs.readdirSync(dirPath)

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < filesList.length; i++) {
        const fileObj = {}

        const filePath = path.join(dirPath, filesList[i])
        const stats = fs.statSync(filePath)
        if (stats.isDirectory()) {
          fileObj.name = filesList[i]
          fileObj.type = 'dir'
          fileObj.child = []
          arr.push(fileObj)
          getFiles(filePath, arr[i].child)
        } else {
          fileObj.name = filesList[i].substring(
            0,
            filesList[i].lastIndexOf('.')
          )
          fileObj.type = path.extname(filesList[i]).substring(1)
          arr.push(fileObj)
        }
      }
    }

    getFiles(dirPath, arr)

    return arr
  }

  const fileTree = getFileTree('./docs')

  const sidebar = {}

  fileTree.forEach(({ name, type, child }) => {
    if (type !== 'dir') {
      sidebar[name] = [name]
      return
    }
    if (child && child.length) {
      // eslint-disable-next-line no-shadow
      sidebar[name] = child.map(({ name: childName, type, child }) =>
        type === 'dir'
          ? {
              [childName]: child.map(
                ({ name: childChildName }) =>
                  `${name}/${childName}/${childChildName}`
              ),
            }
          : `${name}/${childName}`
      )
    }
  })

  const home = sidebar['前言']
  delete sidebar['前言']

  return {
    someSidebar: {
      前言: home,
      ...sidebar,
    },
  }
})()
