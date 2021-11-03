import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

import { Avatar } from './Avatar';
import { AvatarFont } from './AvatarFont';

import { useCustomState } from '../../utils/hooks';

const AvatarImage = (props) => {
    const [state, setState] = useCustomState({
        imgLoaded: false
    });

    const { src, placeholder, alt, className, ...avatarProps } = props;
    const parentClass = classNames('avatar-image', {
        'avatar-image--loaded': state.imgLoaded
    }, className);

    return (
        <div className={ parentClass }>
            <Avatar className="avatar-image__image" {...avatarProps}>
                <img
                    src={ src }
                    alt={ alt }
                    onLoad={ () => { setState({ imgLoaded: true }) } }
                />
            </Avatar>
            {
                !state.imgLoaded && (
                    <AvatarFont className="avatar-image__placeholder" {...avatarProps}>
                        { placeholder }
                    </AvatarFont>
                )
            }
        </div>
    );
}
AvatarImage.propTypes = {
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.node,
    alt: PropTypes.string,
    className: PropTypes.string,
    ..._.omit(Avatar.propTypes, ['children']),
};
AvatarImage.defaultProps = {
    placeholder: <i className="fa fa-user fa-fw"></i>,
}


export { AvatarImage };
