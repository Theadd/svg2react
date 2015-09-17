import SVGO from 'svgo'
import configSVGO from './configsvgo'
import HTMLtoJSX from 'htmltojsx'
import generate from './codegen'

const REG_TAG = /<([^\/\s>]+?)\s([^>]+?)(\s*\/*>)/g
const REG_ATTRS = /(?:[\w:\-]*) *= *["\{](?:(?:(?:(?:(?:\\\W)*\\\W)*[^"\{]*)\\\W)*[^"\}]*["\}])/g
const REG_ATTR = /([^=]+?)=(.*)/
const validAttrs = [
  'clipPath', 'cx', 'cy', 'd', 'dx', 'dy', 'fill', 'fillOpacity', 'fontFamily', 'fontSize', 'fx', 'fy',
  'gradientTransform', 'gradientUnits', 'markerEnd', 'markerMid', 'markerStart', 'offset', 'opacity',
  'patternContentUnits', 'patternUnits', 'points', 'preserveAspectRatio', 'r', 'rx', 'ry', 'spreadMethod',
  'stopColor', 'stopOpacity', 'stroke', 'strokeDasharray', 'strokeLinecap', 'strokeOpacity', 'strokeWidth',
  'textAnchor', 'transform', 'version', 'viewBox', 'x1', 'x2', 'x', 'y1', 'y2', 'y', 'id', 'width', 'height',
  'xlinkActuate', 'xlinkArcrole', 'xlinkHref', 'xlinkRole', 'xlinkShow', 'xlinkTitle', 'xlinkType', 'xmlBase',
  'xmlLang', 'xmlSpace', 'xmlns'
]
const validAttrsLC = validAttrs.map(attr => attr.toLowerCase())
const indexOfId = validAttrs.indexOf('id')

let autoIncTagKey = 0,
  svgo = new SVGO(configSVGO),
  converter = new HTMLtoJSX({ createClass: false })

function svg2react (source, callback) {
  let res = '',
    asJSX = ''

  try {
    svgo.optimize(source, result => {
      if (result.error) {
        console.warn(result.error)
        return callback(String(result.error))
      }
      try {
        asJSX = converter.convert(result.data)
        autoIncTagKey = 0
        res = generate(asJSX.replace(REG_TAG, replacer))
      } catch (e) {
        console.error(e)
        res = String(e)
      } finally {
        callback(res)
      }

    })
  } catch (err) {
    console.error(err)
    return callback(String(err))
  }

}

export default svg2react

function replacer (match, tagName, attributes, closingCharacters) {
  let attrs = attributes.trim().match(REG_ATTRS),
    staticAttrs = [],
    dynamicAttrs = [],
    linkAs = false,
    dynamicTagRef = ''

  attrs.forEach(attr => {
    (([ , name, val]) => {
      const indexWithinValids = validAttrsLC.indexOf(name.replace(/\W/g, ''))
      if (indexWithinValids === -1) {
        val = val.replace(/^\{(.*?)}$/g, '$1')
        dynamicAttrs.push(`'${name}': ${val}`)
      } else {
        val = val.replace(/^\{(.*?)}$/g, '{ $1 }')
        indexOfId === indexWithinValids && (linkAs = val)
        staticAttrs.push(`${validAttrs[indexWithinValids]}=${val}`)
      }
    })(REG_ATTR.exec(attr))
  })

  if (dynamicAttrs.length || linkAs) {
    !linkAs && (linkAs = `'${tagName.substring(0, 5) + (autoIncTagKey++)}'`)
    dynamicTagRef = `ref={ this.linkAs(${linkAs}, { ${dynamicAttrs.join(', ')} }) } `
  }

  return `<${tagName} ${dynamicTagRef}${staticAttrs.join(' ')} ${closingCharacters}`
}
