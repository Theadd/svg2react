
let configSVGO = {
  'plugins': [
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    // 'convertStyleToAttrs',
    // 'cleanupIDs',
    'removeRasterImages',
    'removeUselessDefs',
    'cleanupNumericValues',
    'cleanupListOfValues',
    // 'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    // 'removeViewBox',
    'cleanupEnableBackground',
    'removeHiddenElems',
    'removeEmptyText',
    'convertShapeToPath',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'convertPathData',
    'convertTransform',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'mergePaths',
    'removeUnusedNS',
    // 'transformsWithOnePath',
    // 'removeTitle',
    // 'removeDesc',
    // 'removeDimensions',
    // 'removeAttrs',
    // 'addClassesToSVGElement',
    'sortAttrs'
  ],
  'js2svg': {
    'pretty': true
  },
  'full': true
}

export default configSVGO
