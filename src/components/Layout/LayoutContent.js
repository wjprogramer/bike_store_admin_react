import React from 'react';
import PropTypes from 'prop-types';

import { LayoutContentFooter } from './LayoutContentFooter';

const LayoutContent = (props) => (
    <div className="layout__content">
        { props.children }

        <LayoutContentFooter />
    </div>
);

LayoutContent.propTypes = {
    children: PropTypes.node
};
LayoutContent.layoutPartName = "content";

export {
    LayoutContent
};
