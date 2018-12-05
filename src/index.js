import React, { Component } from 'react' // eslint-disable-line
import wayfarer from 'wayfarer'

export default class Router extends Component {
  constructor(props) {
    super(props)
    this.router = wayfarer(props.defaultPath || '/')
    this.addRoutes(props.children)
  }

  addRoutes(children, parent) {
    React.Children.forEach(children, child => this.addRoute(child, parent))
  }

  addRoute(elem, parent) {
    const { path, children } = elem.props

    const render = (params) => {
      const children = React.cloneElement(elem, {
        params,
        path,
      })

      return parent ? parent.render(params, { children }) : children
    }

    const route = buildRoute(path, parent)

    this.router.on(route, render)

    if (children) {
      this.addRoutes(children, { route, render })
    }
  }

  render() {
    const { location = window.location.pathname } = this.props
    return this.router(location)
  }
}

function isAbsolutePath(path = '') {
  return path && path[0] === '/'
}

function buildRoute(path, parent) {
  if (!path) {
    return parent && parent.route ? parent.route : '/'
  }

  if (isAbsolutePath(path)) {
    return path
  }

  return parent ? `${parent.route}/${path}`.replace(/\/\//g, '/') : path
}
