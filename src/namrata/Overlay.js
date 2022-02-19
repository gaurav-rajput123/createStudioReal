import React, { Component } from 'react'
import Overlay from 'react-image-overlay'
import bg1 from '../images/bg1'
import ImgBg1 from '../images/ImgBg1'

class Foo extends Component {
    render() {
        return (
            <Overlay
                url={bg1} // required
                overlayUrl={ImgBg1} // required
                imageHeight={100}
                position={'bottomRight'}
                overlayWidth={50}
                overlayHeight={50}
                overlayPadding={10}
                watermark={false}
            />
        );
    }
};