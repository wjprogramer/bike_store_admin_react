import React from 'react';
import { chain, reduce } from 'lodash';
import _ from 'lodash';
import fetch from 'node-fetch';
import faker from 'faker/locale/en_US';


import {
    Container,
    Card,
    CardFooter,
    CardHeader,
    Input,
    InputGroup,
} from './../../../components';
import {
    AgGridReact,
    AgGridColumn,
} from './../../../components/agGrid';
import {
    HeaderMain,
} from './../../components/HeaderMain';
import colors from './../../../colors';

/*
    CONSTS
*/
// https://embed.plnkr.co/plunk/EINfsm
const DATA_URL = "https://api.myjson.com/bins/18oni9";

const FIRST_NAMES = ["Sophie", "Isabelle", "Emily", "Olivia", "Lily", "Chloe", "Isabella",
    "Amelia", "Jessica", "Sophia", "Ava", "Charlotte", "Mia", "Lucy", "Grace", "Ruby",
    "Ella", "Evie", "Freya", "Isla", "Poppy", "Daisy", "Layla"];
const LAST_NAMES = ["Beckham", "Black", "Braxton", "Brennan", "Brock", "Bryson", "Cadwell",
    "Cage", "Carson", "Chandler", "Cohen", "Cole", "Corbin", "Dallas", "Dalton", "Dane",
    "Donovan", "Easton", "Fisher", "Fletcher", "Grady", "Greyson", "Griffin", "Gunner",
    "Hayden", "Hudson", "Hunter", "Jacoby", "Jagger", "Jaxon", "Jett", "Kade", "Kane",
    "Keating", "Keegan", "Kingston", "Kobe"];

const COUNTRIES = [
    {country: "Ireland", continent: "Europe", language: "English"},
    {country: "Spain", continent: "Europe", language: "Spanish"},
    {country: "United Kingdom", continent: "Europe", language: "English"},
    {country: "France", continent: "Europe", language: "French"},
    {country: "Germany", continent: "Europe", language: "(other)"},
    {country: "Sweden", continent: "Europe", language: "(other)"},
    {country: "Norway", continent: "Europe", language: "(other)"},
    {country: "Italy", continent: "Europe", language: "(other)"},
    {country: "Greece", continent: "Europe", language: "(other)"},
    {country: "Iceland", continent: "Europe", language: "(other)"},
    {country: "Portugal", continent: "Europe", language: "Portuguese"},
    {country: "Malta", continent: "Europe", language: "(other)"},
    {country: "Brazil", continent: "South America", language: "Portuguese"},
    {country: "Argentina", continent: "South America", language: "Spanish"},
    {country: "Colombia", continent: "South America", language: "Spanish"},
    {country: "Peru", continent: "South America", language: "Spanish"},
    {country: "Venezuela", continent: "South America", language: "Spanish"},
    {country: "Uruguay", continent: "South America", language: "Spanish"}
];

const ADDRESSES = [
    '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
    '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
    '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
    '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
    '2722 Hazy Turnabout, Burnt Cabins, NY, 14120-5642, US, (917) 604-6597',
    '6686 Lazy Ledge, Two Rock, CA, 92639-3020, US, (619) 901-9911',
    '2000 Dewy Limits, Wacahoota, NF, A4L-2V9, CA, (709) 065-3959',
    '7710 Noble Pond Avenue, Bolivia, RI, 02931-1842, US, (401) 865-2160',
    '3452 Sunny Vale, Pyro, ON, M8V-4Z0, CA, (519) 072-8609',
    '4402 Dusty Cove, Many Farms, UT, 84853-8223, US, (435) 518-0673',
    '5198 Silent Parade, Round Bottom, MD, 21542-9798, US, (301) 060-7245',
    '8550 Shady Moor, Kitty Fork, CO, 80941-6207, US, (303) 502-3767',
    '2131 Old Dell, Merry Midnight, AK, 99906-8842, US, (907) 369-2206',
    '7390 Harvest Crest, Mosquito Crossing, RI, 02957-6116, US, (401) 463-6348',
    '874 Little Point, Hot Coffee, BC, V3U-2P6, CA, (250) 706-9207',
    '8834 Stony Pioneer Heights, Newlove, OR, 97419-8670, US, (541) 408-2213',
    '9829 Grand Beach, Flint, UT, 84965-9900, US, (435) 700-5161',
    '3799 Cozy Blossom Ramp, Ptarmigan, MS, 38715-0313, US, (769) 740-1526',
    '3254 Silver Island Loop, Maunaloa, DE, 19869-3169, US, (302) 667-7671',
    '1081 Middle Wood, Taylors Gut Landing, OR, 97266-2873, US, (541) 357-6310',
    '1137 Umber Trail, Shacktown, NW, X3U-5Y8, CA, (867) 702-6883',
    '9914 Hidden Bank, Wyoming, MO, 64635-9665, US, (636) 280-4192',
    '7080 Misty Nectar Townline, Coward, AB, T9U-3N4, CA, (403) 623-2838',
    '1184 Wishing Grounds, Vibank, NW, X7D-0V9, CA, (867) 531-2730',
    '126 Easy Pointe, Grandview Beach, KY, 40928-9539, US, (502) 548-0956',
    '6683 Colonial Street, Swan River, BC, V1A-9I8, CA, (778) 014-4257',
    '960 Gentle Oak Lane, Shakopee, ND, 58618-6277, US, (701) 327-1219',
    '6918 Cotton Pine Corner, Kenaston, IA, 52165-3975, US, (515) 906-7427',
    '2368 Burning Woods, Ernfold, NY, 11879-9186, US, (646) 819-0355',
    '5646 Quiet Shadow Chase, Tiger Tail, IA, 52283-5537, US, (712) 375-9225',
    '5466 Foggy Mountain Dale, Sweet Home, MT, 59738-0251, US, (406) 881-1706',
    '5313 Clear Willow Route, Amazon, BC, V0S-2S6, CA, (604) 340-7596',
    '7000 Pleasant Autoroute, Spaceport City, UT, 84749-2448, US, (435) 154-3360',
    '8359 Quaking Anchor Road, Gross, BC, V9O-0H5, CA, (250) 985-3859',
    '5143 Amber Deer Hollow, New Deal, ND, 58446-0853, US, (701) 927-0322',
    '6230 Jagged Bear Key, Young, AR, 72337-3811, US, (501) 805-7239',
    '7207 Heather Vista, Devon, WY, 82520-1771, US, (307) 358-7092',
    '9416 Red Rise Place, Spraytown, OK, 73809-4766, US, (580) 867-1973',
    '3770 Golden Horse Diversion, Yelland, IL, 60471-1487, US, (224) 717-9349',
    '4819 Honey Treasure Park, Alaska, NB, E1U-3I0, CA, (506) 656-9138',
    '6187 Round Front, Land O Lakes, AK, 99873-6403, US, (907) 853-9063',
    '9218 Crystal Highway, Pickelville, MT, 59847-9299, US, (406) 076-0024',
    '6737 Bright Quay, Lazy Mountain, KY, 42390-4772, US, (606) 256-7288',
    '237 Merry Campus, Twentysix, SC, 29330-4909, US, (864) 945-0157',
    '446 Fallen Gate Rise, Petrolia, SC, 29959-9527, US, (864) 826-0553',
    '2347 Indian Boulevard, Frisbee, VA, 23797-6458, US, (703) 656-8445',
    '365 Emerald Grove Line, Level, NC, 28381-1514, US, (919) 976-7958',
    '1207 Iron Extension, Klickitat, SC, 29197-8571, US, (803) 535-7888',
    '6770 Cinder Glen, Caronport, OH, 45053-5002, US, (440) 369-4018',
    '7619 Tawny Carrefour, Senlac, NV, 89529-9876, US, (775) 901-6433']

const COUNTRY_CODES = {
    Ireland: "ie",
    Spain: "es",
    "United Kingdom": "gb",
    France: "fr",
    Germany: "de",
    Sweden: "se",
    Italy: "it",
    Greece: "gr",
    Iceland: "is",
    Portugal: "pt",
    Malta: "mt",
    Norway: "no",
    Brazil: "br",
    Argentina: "ar",
    Colombia: "co",
    Peru: "pe",
    Venezuela: "ve",
    Uruguay: "uy"
};

const IT_SKILLS = ["android", "css", "html5", "mac", "windows"];
const IT_SKILLS_NAMES = ["Android", "CSS", "HTML 5", "Mac", "Windows"];

const PROFICIENCY_NONE = "none";
const PROFICIENCY_ABOVE40 = "above40";
const PROFICIENCY_ABOVE60 = "above60";
const PROFICIENCY_ABOVE80 = "above80";

const PROFICIENCY_NAMES = ["No Filter", "Above 40%", "Above 60%", "Above 80%"];
const PROFICIENCY_VALUES = [
    PROFICIENCY_NONE,
    PROFICIENCY_ABOVE40,
    PROFICIENCY_ABOVE60,
    PROFICIENCY_ABOVE80
];

/*
    Custom Renderers
*/
const nameRenderer = ({ data }) => `
        <span class="text-inverse">
            ${ data.name }
        </span>
    `;
const skillsCellRenderer = ({ data }) =>
    chain(IT_SKILLS)
        .map((skill) => data && data.skills[skill] ?
            `<img src="//www.ag-grid.com/images/skills/${skill}.png" width="16px" title="${ skill }" />` : ''
        )
        .compact()
        .join(' ')
        .value();
const countryCellRenderer = ({ value }) => `
        <img width="15" height="10" style="margin-bottom: 2px" src="https://flags.fmcdn.net/data/flags/mini/${COUNTRY_CODES[value]}.png" /> ${ value }
    `;
const percentCellRenderer = ({ value }) => {
    const eDivPercentBar = document.createElement('div');
    eDivPercentBar.className = 'div-percent-bar';
    eDivPercentBar.style.width = `${value}%`;
    if (value < 20) {
        eDivPercentBar.style.backgroundColor = colors['danger'];
    } else if (value < 60) {
        eDivPercentBar.style.backgroundColor = colors['warning'];
    } else {
        eDivPercentBar.style.backgroundColor = colors['success'];
    }

    const eValue = document.createElement('div');
    eValue.className = 'div-percent-value';
    eValue.innerHTML = `${value}%`;

    const eOuterDiv = document.createElement('div');
    eOuterDiv.className = 'div-outer-div';
    eOuterDiv.appendChild(eDivPercentBar);
    eOuterDiv.appendChild(eValue);

    return eOuterDiv;
}

/*
    Custom Filters
*/
class SkillFilter {
    init({ filterChangedCallback }) {
        this.filterChangedCallback = filterChangedCallback;

        // Initial State
        this.model = {
            android: false,
            css: false,
            html5: false,
            mac: false,
            windows: false
        }
    }
    getModel() { }
    setModel() { }
    getGui() {
        const eGui = document.createElement("div");

        const eInstructions = document.createElement("div");
        eInstructions.className = "h6 dropdown-header";
        eInstructions.innerText = "Custom Skills Filter";
        eGui.appendChild(eInstructions);

        const createCheckMarkElement = () => {
            var eCheckMark = document.createElement('i');
            eCheckMark.className = "fa fa-check fa-fw ml-auto text-success";

            return eCheckMark;
        }

        IT_SKILLS.forEach((skill, index) => {
            const skillName = IT_SKILLS_NAMES[index];

            const eFilter = document.createElement("a");
            eFilter.className = "dropdown-item d-flex align-items-center"
            //eFilter.classList.toggle("active", this.model[skill]);
            eFilter.href="#!";

            const eImg = document.createElement("img");
            eImg.src = '//www.ag-grid.com/images/skills/' + skill + '.png';
            eImg.height = 20;
            eImg.className = "mr-2";

            const eName = document.createElement('span');
            eName.innerText = skillName;

            eFilter.appendChild(eImg);
            eFilter.appendChild(eName);
            if (this.model[skill]) {
                eFilter.appendChild(
                    createCheckMarkElement()
                );
            }
            eGui.appendChild(eFilter);

            eFilter.addEventListener("click", (e) => {
                const element = e.currentTarget;
                this.model[skill] = !this.model[skill];
                this.filterChangedCallback();

                // Toggle check marks
                if (this.model[skill]) {
                    element.appendChild(
                        createCheckMarkElement()
                    );
                } else {
                    const eCheckMark = element.querySelector('i');

                    if (eCheckMark) { eCheckMark.remove() }
                }

                return false;
            });
        });

        return eGui;
    }
    doesFilterPass({ data }) {
        const rowSkills = data.skills;
        const { model } = this;

        const passed = reduce(
            IT_SKILLS,
            (acc, skill) => acc || (rowSkills[skill] && model[skill]),
            false
        );

        return passed;
    }
    isFilterActive() {
        return (
            this.model.android ||
            this.model.css ||
            this.model.html5 ||
            this.model.mac ||
            this.model.windows
        );
    }
}

class ProficiencyFilter {
    init({ filterChangedCallback, valueGetter }) {
        this.filterChangedCallback = filterChangedCallback;
        this.valueGetter = valueGetter;

        this.selected = PROFICIENCY_NONE;
    }
    getModel() { }
    setModel() { }
    getGui() {
        const eGui = document.createElement("div");

        const eInstructions = document.createElement("div");
        eInstructions.className = "h6 dropdown-header";
        eInstructions.innerText = "Custom Proficiency Filter";
        eGui.appendChild(eInstructions);

        PROFICIENCY_NAMES.forEach((name, index) => {
            const eFilter = document.createElement("a");
            eFilter.className = "dropdown-item"
            eFilter.classList.toggle("active", PROFICIENCY_VALUES[index] === this.selected);
            eFilter.href="#!";
            eFilter.innerText = name;
            
            eGui.appendChild(eFilter);

            eFilter.addEventListener("click", (e) => {
                const element = e.currentTarget;
                element.parentElement.childNodes.forEach(function(node) {
                    node.classList.toggle('active', false);
                });
                element.classList.toggle("active");

                this.selected = PROFICIENCY_VALUES[index];
                this.filterChangedCallback();

                return false;
            });
        });

        return eGui;
    }
    doesFilterPass(params) {
        const value = this.valueGetter(params);
        const valueAsNumber = parseFloat(value);

        switch (this.selected) {
            case PROFICIENCY_ABOVE40:
                return valueAsNumber >= 40;
            case PROFICIENCY_ABOVE60:
                return valueAsNumber >= 60;
            case PROFICIENCY_ABOVE80:
                return valueAsNumber >= 80;
            default:
                return true;
        }
    }
    isFilterActive() {
        return this.selected !== PROFICIENCY_NONE;
    }
}

export default class AgGridExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rowData: [],
            visibleCount: 0,
            quickFilterValue: ''
        };

        this.gridApi = null;

        this.onGridReady = this.onGridReady.bind(this);
        this.onModelUpdated = this.onModelUpdated.bind(this);
        this.onQuickFilterChange = this.onQuickFilterChange.bind(this);
    }

    componentDidMount() {
        // fetch(DATA_URL)
        //     .then(res => res.json())
        //     .then(fetchedData => {
        //         this.setState({ rowData: fetchedData });
        //     });

        // 0 ~ (x-1)
        const getRandom = (x) => {
            return Math.floor(Math.random() * x);
        }

        const rowData = _.times(50, (index) => {
            return {
                name: FIRST_NAMES[getRandom(FIRST_NAMES.length)] + " " + LAST_NAMES[getRandom(LAST_NAMES.length)],
                country: COUNTRIES[getRandom(COUNTRIES.length)].country,
                skills: {
                    android: Math.random() < 0.5,
                    css: Math.random() < 0.5,
                    html5: Math.random() < 0.5,
                    mac: Math.random() < 0.5,
                    windows: Math.random() < 0.5,
                },
                proficiency: getRandom(101),
                mobile: faker.phone.phoneNumberFormat(),
                landline: "#" + (getRandom(999) + 1),
                address: ADDRESSES[getRandom(ADDRESSES.length)],
            };
        });

        this.setState({ rowData, });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.gridApi) {
            if (this.state.quickFilterValue !== prevState.quickFilterValue) {
                this.gridApi.setQuickFilter(this.state.quickFilterValue);
            }
        }
    }

    onModelUpdated() {
        if (this.gridApi) {
            const model = this.gridApi.getModel();
            const visibleCount = model.getRowCount();

            this.setState({ visibleCount });
        }
    }

    onGridReady({ api }) {
        this.gridApi = api;
    }

    onQuickFilterChange(e) {
        this.setState({ quickFilterValue: e.target.value });
    }

    render() {
        const { rowData, visibleCount, quickFilterValue } = this.state;

        return (
            <Container>
                <HeaderMain 
                    title="AgGrid"
                    className="mb-5 mt-4"
                />
                <p className="pb-3">
                    <strong>Over 2,500 Companies use ag-Grid.</strong> The &quot;ag&quot; part of ag-Grid stands for &quot;agnostic&quot;. The internal ag-Grid engine is implemented in TypeScript with zero dependencies. ag-Grid supports Angular through a wrapper component. 
                    The wrapper lets you use ag-Grid in your application like any other Angular component – you pass configuration through property bindings and handle events through event bindings. 
                    You can even use Angular components to customize the grid UI and cell contents / behavior.
                </p>

                <Card>
                    <CardHeader tag="h6" className="d-flex justify-content-between align-items-center bg-white bb-0">
                        <span>AgGrid Example</span>
                        <div className="d-flex align-items-center">
                            <span className="mr-3 text-nowrap small">
                                { visibleCount } / { rowData.length }
                            </span>

                            <InputGroup size="sm">
                                <Input
                                    type="text"
                                    placeholder="Type text to filter..."
                                    value={ quickFilterValue }
                                    onChange={ this.onQuickFilterChange }
                                />
                            </InputGroup>
                        </div>
                    </CardHeader>
                    <div className="ag-theme-bootstrap" style={{ height: '600px' }}>
                        <AgGridReact
                            rowData={ rowData }
                            rowSelection="multiple"
                            onGridReady={ this.onGridReady }
                            onModelUpdated={ this.onModelUpdated }
                            defaultColDef={{
                                sortable: true,
                                resizable: true,
                                filter: true,
                            }}
                        >
                            <AgGridColumn
                                headerName=""
                                width={ 70 }
                                checkboxSelection
                                suppressMenu
                            />

                            <AgGridColumn headerName="Employee">
                                <AgGridColumn
                                    headerName="Name"
                                    field="name"
                                    width={ 150 }
                                    cellRenderer={ nameRenderer }
                                />
                                <AgGridColumn
                                    headerName="Country"
                                    field="country"
                                    width={ 150 }
                                    cellRenderer={ countryCellRenderer }
                                    filterParams={{
                                        cellRenderer: countryCellRenderer,
                                        cellHeight: 20
                                    }}
                                />
                            </AgGridColumn>

                            <AgGridColumn headerName="IT Skills">
                                <AgGridColumn
                                    headerName="Skills"
                                    width={ 125 }
                                    sortable={ false }
                                    cellRenderer={ skillsCellRenderer }
                                    filter={ SkillFilter }
                                />
                                <AgGridColumn
                                    headerName="Proficiency"
                                    field="proficiency"
                                    width={ 150 }
                                    cellRenderer={ percentCellRenderer }
                                    filter={ ProficiencyFilter }
                                />
                            </AgGridColumn>

                            <AgGridColumn headerName="Contact">
                                <AgGridColumn
                                    headerName="Mobile"
                                    field="mobile"
                                    width={ 180 }
                                    filter="agTextColumnFilter"
                                />
                                <AgGridColumn
                                    headerName="Land-line"
                                    field="landline"
                                    width={ 180 }
                                    filter="agTextColumnFilter"
                                />
                                <AgGridColumn
                                    headerName="Address"
                                    field="address"
                                    width={ 180 }
                                    filter="agTextColumnFilter"
                                />
                            </AgGridColumn>
                        </AgGridReact>
                    </div>
                    <CardFooter className="bg-white text-center">
                        More examples of this table can be found <a href="https://www.ag-grid.com" target="_blank" rel="noopener noreferrer">Here</a>
                    </CardFooter>
                </Card>
            </Container>
        );
    }
}
