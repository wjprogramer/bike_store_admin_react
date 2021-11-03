import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './../../styles/components/wizard.scss';
import { useCustomState } from '../../utils/hooks';

export const Wizard = (props) => {
    const [state, setState] = useCustomState({});

    useEffect(() => {
        const { initialActiveStep, activeStep, onStepChanged } = props;

        if (activeStep && !onStepChanged) {
            // eslint-disable-next-line no-console
            console.warn(
                'Warning: You need to provide onStepChanged props if you want the ' +
                'component to be controlled. For uncontrolled type, use initialActiveStep.'
            );
        }

        if (!onStepChanged) {
            setState({
                activeStep: initialActiveStep || activeStep
            })
        }
    }, []);

    const stepClick = (id) => {
        setState({
            activeStep: id
        });

        props.onStepChanged(id);
    }

    const getActiveStep = () => {
        const { activeStep, onStepChanged } = props;
        if (_.isUndefined(activeStep) || _.isUndefined(onStepChanged)) {
            return state.activeStep;
        }
        return props.activeStep;
    }

    const { children } = props;
    const activeStep = getActiveStep();

    return (
        <div className='wizard'>
            {
                _.map(children, (child, index) => (
                    React.cloneElement(child, {
                        onClick: () => {stepClick(child.props.id || '')},
                        active: child.props.id === activeStep,
                        key: index
                    })
                ))
            }
        </div>
    );
}

Wizard.propTypes = {
    children: PropTypes.node,
    onStepChanged: PropTypes.func,
    activeStep: PropTypes.string,
    initialActiveStep: PropTypes.string
}