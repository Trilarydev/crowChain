'use client';

import React, { Component } from 'react';
import ModelViewer from '@metamask/logo';

class MetamaskLogo extends Component {
  constructor(props) {
    super(props);
    this.el = React.createRef(); 
  }

  componentDidMount() {
    console.log('Mounting MetamaskLogo');
    if (this.el.current && !this.viewer) {
      this.viewer = ModelViewer({
        pxNotRatio: true,
        width: 200,
        height: 200,
        followMouse: true,
      });
  
      this.el.current.appendChild(this.viewer.container);
    }
  }

  componentWillUnmount() {
    // Detenemos la animación cuando el componente se desmonta
    if (this.viewer) {
      this.viewer.stopAnimation();
    }
  }

  render() {
    console.log('Rendering MetamaskLogo');
    return (
      <div
        ref={this.el}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '200px',
          height: '200px',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      />
    );
  }
}

export default MetamaskLogo;
