import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

var parse5 = require('parse5');

var BLOCK_ELEMENTS = ["blockquote", "div", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "ol", "p", "pre", "ul", "li"]

var INLINE_ELEMENTS = ["font", "b", "i", "em", "strong", "br", "a", "q", "span", "sub", "sup"]

var DEFAULT_STYLES = StyleSheet.create({
  a: {

  },
  b: {
    fontWeight: 'bold'
  },
  blockquote: {
    paddingLeft: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#cccccc',
    marginBottom: 12
  },
  br: {

  },
  div: {

  },
  em: {
    fontStyle: 'italic'
  },
  h1: {
    fontWeight: 'bold',
  },
  h2: {
    fontWeight: 'bold',
  },
  h3: {
    fontWeight: 'bold',
  },
  h4: {
    fontWeight: 'bold',
  },
  h5: {
    fontWeight: 'bold',
  },
  h6: {
    fontWeight: 'bold',
  },
  i: {
    fontStyle: 'italic'
  },
  p: {
    marginBottom: 12,
  },
  pre: {

  },
  strong: {
    fontWeight: 'bold'
  },
  q: {

  },
  span: {

  },
  sub: {

  },
  sup: {

  },
  ol:{
    marginLeft: 24,
  },
  ul: {
    marginLeft: 24,
  },
  default: {

  }
});

function isText(tagName) : Boolean {
  return tagName === "#text"
}

function isEndLine(tagName) : Boolean {
  return tagName === "br"
}

function isFontTag(tagName) : Boolean {
  return tagName === "font"
}

function isBlockElement(tagName) : Boolean {
  return BLOCK_ELEMENTS.indexOf(tagName) != -1
}

function isInlineElement(tagName) : Boolean {
  return INLINE_ELEMENTS.indexOf(tagName) != -1
}

function styleForTag(tagName) {
  var style = DEFAULT_STYLES[tagName] ? DEFAULT_STYLES[tagName] : DEFAULT_STYLES["default"]
  return style
}

function processNode(node, parentKey) {
  var nodeName = node.nodeName

  if (isEndLine(nodeName)) {
    return "\r\n"
  }

  if (isText(nodeName)) {
    var key = `${parentKey}_text`
    return node.value
  }

  if (isFontTag(nodeName)) {
    var key = `${parentKey}_${nodeName}`
    var children = []
    node.childNodes.forEach((child, index) => {
      if (isText(child.nodeName)) {
        console.log(child.value);
        children.push((<Text key={key} style={{fontWeight: 'bold', color: `${node.attrs[0].value}`}}>{child.value.toUpperCase()}</Text>))
      }
    })
    return (<Text key={key} style={styleForTag(nodeName)}>{children}</Text>)
  }

  if (isInlineElement(nodeName)) {
    var key = `${parentKey}_${nodeName}`
    var children = []
    node.childNodes.forEach((child, index) => {
      if (isInlineElement(child.nodeName) || isText(child.nodeName)) {
        children.push(processNode(child, `${key}_${index}`))
      } else {
        console.error(`Inline element ${nodeName} can only have inline children, ${child} is invalid!`)
      }
    })
    return (<Text key={key} style={styleForTag(nodeName)}>{children}</Text>)
  }

  if (isBlockElement(nodeName)) {
    var key = `${parentKey}_${nodeName}`
    var children = []
    var lastInlineNodes = []

    node.childNodes.forEach((childNode, index) => {
      var child = processNode(childNode, `${key}_${index}`)
      if (isInlineElement(childNode.nodeName) || isText(childNode.nodeName)) {
        lastInlineNodes.push(child)

      } else if (isBlockElement(childNode.nodeName)) {
        if (lastInlineNodes.length > 0) {
          children.push(lastInlineNodes)
          //children.push(<Text key={`${key}_${index}_inline`}>{lastInlineNodes}</Text>)
          lastInlineNodes = []
        }
        children.push(child)
      }
    })

    if (lastInlineNodes.length > 0) {
      children.push(lastInlineNodes)
      //children.push((<Text key={`${key}_last_inline`}>{lastInlineNodes}</Text>))
    }
    return (
      <Text key={key}>{children}</Text>
    )
  }

  console.warn(`unsupported node: ${nodeName}`)
  return null;
}

class HtmlText extends React.Component {
  parse(html) {
    var parser = new parse5.Parser()
    var fragment = parser.parseFragment(html)
    return fragment
  }


  render() {
    var html = this.props.html
    var fragment = this.parse(html)
    var rootKey = "ht_"

    var children = []
    fragment.childNodes.forEach((node, index) => {
      children.push(processNode(node, `${rootKey}_${index}`))
    })
    return (
      <View style={this.props.style}>
        {children}
      </View>
    )
  }
}

module.exports = HtmlText
