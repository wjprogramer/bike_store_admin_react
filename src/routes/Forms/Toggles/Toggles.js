import React from 'react';

import {
    Row,
    Col,
    Table,
    Container,
    CustomInput
} from './../../../components';
import Toggle from 'react-toggle';

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

import classes from './Toggles.scss';
import { useCustomState } from '../../../utils/hooks';

export const Toggles = () => {
    const [state, setState] = useCustomState({
        baconIsReady: true,
        cheeseIsReady: false,
        biscuitIsReady: false,
        eggsAreReady: false,
        milkIsReady: false,
        toastIsReady: false,
        soupIsReady: true,
        tofuIsReady: false
    });

    return (
        <Container>
            <HeaderMain 
                title="Toggles"
                className="mb-5 mt-4"
            />
            <p className="mb-4">An elegant, accessible toggle component for React. Also a glorified checkbox.</p>
            <Row>
                <Col lg={ 6 }>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    Switch Name
                                </th>
                                <th className="text-right">
                                    Switch Example
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <CustomInput
                                        type="checkbox"
                                        id="controlled-component-check"
                                        checked={ state.milkIsReady }
                                        onChange={ () => { setState({ milkIsReady: !state.milkIsReady }) } }
                                        label="Controlled Component"
                                    />
                                </td>
                                <td className="text-right">
                                    <Toggle
                                        checked={ state.milkIsReady }
                                        name='milkIsReady'
                                        value='yes'
                                        onChange={ () => { setState({ milkIsReady: !state.milkIsReady }) } }/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <CustomInput
                                        type="checkbox"
                                        id="controlled-component-check-no-onchange"
                                        checked={ state.toastIsReady }
                                        onChange={ () => { setState({ toastIsReady: !state.toastIsReady }) } }
                                        label="Controlled Component without onChange"
                                    />
                                </td>
                                <td className="text-right">
                                    <Toggle
                                        checked={ state.toastIsReady }
                                        name='toastIsReady'
                                        value='yes' />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-inverse">
                                    Diabled, Unchecked
                                </td>
                                <td className="text-right">
                                    <Toggle
                                        defaultChecked={false}
                                        disabled={true} />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-inverse">
                                    Disabled, Checked
                                </td>
                                <td className="text-right">
                                    <Toggle
                                        defaultChecked={true}
                                        disabled={true} />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-inverse">
                                    Custom className
                                </td>
                                <td className="text-right">
                                    <Toggle
                                        defaultChecked={state.aubergineIsReady}
                                        className={ classes.switchCustomClass }
                                        onChange={() => { console.log('Hello'); }} />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-inverse">
                                    Custom Icons
                                </td>
                                <td className="text-right">
                                    <Toggle
                                        defaultChecked={state.soupIsReady}
                                        icons={{
                                            checked: <i className="fa fa-heart text-white" />,
                                            unchecked: null,
                                        }}
                                        onChange={ () => { setState({ soupIsReady: !state.soupIsReady }) } } />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-inverse">
                                    No Icons
                                </td>
                                <td className="text-right">
                                    <Toggle
                                        defaultChecked={state.tofuIsReady}
                                        icons={false}
                                        onChange={() => { setState({ tofuIsReady: !state.tofuIsReady }) }} />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>

                <Col lg={ 6 }>
                    <Table className={ classes.singleTable }>
                        <thead>
                            <tr>
                                <th>
                                    Switch Example
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label className="d-flex align-items-middle mb-0">
                                        <Toggle
                                            defaultChecked={state.baconIsReady}
                                            onChange={() => { setState({baconIsReady: !state.baconIsReady}) }} />
                                        <span className="ml-2 text-inverse">Wrapper label tag</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td className="d-flex align-items-middle">
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={state.cheeseIsReady}
                                        onChange={ () => { setState({cheeseIsReady: !state.cheeseIsReady}) } } />
                                    <label htmlFor='cheese-status' className="ml-2 mb-0 text-inverse">Adjacent label tag</label>
                                </td>
                            </tr>
                            <tr>
                                <td className="d-flex align-items-middle">
                                    <Toggle
                                        id='biscuit-status'
                                        defaultChecked={state.biscuitIsReady}
                                        aria-labelledby='biscuit-label'
                                        onChange={ () => { setState({biscuitIsReady: !state.biscuitIsReady}) } } />
                                    <span id='biscuit-label' className="ml-2 text-inverse">Adjacent label, but not standard tag</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="d-flex align-items-middle">
                                    <Toggle
                                        defaultChecked={state.eggsAreReady}
                                        aria-label='No label tag'
                                        onChange={ () => { setState({eggsAreReady: !state.eggsAreReady}) } } />
                                    <span className="ml-2 text-inverse">No label tag</span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
