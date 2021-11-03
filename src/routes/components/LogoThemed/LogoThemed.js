import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ThemeConsumer } from '../../../components/Theme';

const logos = {
    'white': require('./../../../images/logos/logo-white.svg').default,
    'primary': require('./../../../images/logos/logo-primary.svg').default,
    'success': require('./../../../images/logos/logo-success.svg').default,
    'warning': require('./../../../images/logos/logo-warning.svg').default,
    'danger': require('./../../../images/logos/logo-danger.svg').default,
    'info': require('./../../../images/logos/logo-info.svg').default,
    'indigo': require('./../../../images/logos/logo-indigo.svg').default,
    'purple': require('./../../../images/logos/logo-purple.svg').default,
    'pink': require('./../../../images/logos/logo-pink.svg').default,
    'yellow': require('./../../../images/logos/logo-yellow.svg').default
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
