import React from 'react'

export class Button extends React.Component {
  handleClick() {
    this.props.onClick()
  }

  render() {
    const styles = this.props.styles || ['cta']
    let classNames = ''
    styles.forEach((style) => {
      classNames += `btn-${style} `
    }, [])

    return (
      <button 
        className={`btn ${classNames}`}
        type="button"
        onClick={this.handleClick.bind(this)}>
        {this.props.children}
      </button>
    )
  }
}

export default Button
