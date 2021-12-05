import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ThemeConsumer } from '../../../components/Theme';

const logos = {
    'white': require('./../../../assets/images/logos/logo-white.svg').default,
    'primary': require('./../../../assets/images/logos/logo-primary.svg').default,
    'success': require('./../../../assets/images/logos/logo-success.svg').default,
    'warning': require('./../../../assets/images/logos/logo-warning.svg').default,
    'danger': require('./../../../assets/images/logos/logo-danger.svg').default,
    'info': require('./../../../assets/images/logos/logo-info.svg').default,
    'indigo': require('./../../../assets/images/logos/logo-indigo.svg').default,
    'purple': require('./../../../assets/images/logos/logo-purple.svg').default,
    'pink': require('./../../../assets/images/logos/logo-pink.svg').default,
    'yellow': require('./../../../assets/images/logos/logo-yellow.svg').default
}

const getLogoUrl = (style, color) => {
    return logos[color];
}

// Check for background
const getLogoUrlBackground = (style, color) => {
    if (style === 'color') {
        return logos['white'];
    } else {
        return getLogoUrl(style, color);
    }
}

const LogoThemed = ({ checkBackground, className, ...otherProps }) => (
    <ThemeConsumer>
    {
        ({ style, color }) => (
            <img
                src={
                    checkBackground ?
                        getLogoUrlBackground(style, color) :
                        getLogoUrl(style, color)
                }
                className={ classNames('d-block', className) }
                alt="Airframe Logo"
                { ...otherProps }
            />
        )
    }
    </ThemeConsumer>
);
LogoThemed.propTypes = {
    checkBackground: PropTypes.bool,
    className: PropTypes.string,
};

export { LogoThemed };
