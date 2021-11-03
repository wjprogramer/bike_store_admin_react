import React, { useState } from 'react';

import {
    Dropdown,
    DropdownToggle,
    ExtendedDropdown,
    ListGroup,
    ListGroupItem,
    Row,
} from '../../components';

import i18n from '../../i18n';

const americaIcon = require('../../images/flags/us.png').default;
const taiwanIcon = require('../../images/flags/tw.png').default;

const langIconStyle = {
    borderRadius: "4px",
    width: "100%",
    maxWidth: "100%",
};

const langStyle = {
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
};

export const LanguageSelector = (props) => {
    
    const [langCode, setLangCode] = useState(i18n.language);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownItems = [
        {
            icon: (
                <div className="mr-3" style={langStyle}>
                    <img src={americaIcon} style={langIconStyle} />
                </div>
            ),
            text: "English",
            langCode: 'en',
        },
        {
            icon: (
                <div className="mr-3" style={langStyle}>
                    <img src={taiwanIcon} style={langIconStyle} />
                </div>
            ),
            text: "繁體中文",
            langCode: 'zh-TW',
        }
    ];

    let currentLangIcon;
    let currentLang;
    if (langCode === 'en') {
        currentLang = 'English';
        currentLangIcon = americaIcon;
    } else if (langCode === 'zh-TW') {
        currentLang = '繁體中文';
        currentLangIcon = taiwanIcon;
    }

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setLangCode(code);
        setIsDropdownOpen(false);
    }

    return (
        <Dropdown 
            nav inNavbar isOpen={isDropdownOpen}
            toggle={(e) => setIsDropdownOpen(!isDropdownOpen)}
            {...props}
        >
            <DropdownToggle nav>
                { currentLang } 
                <i className="fa fa-wh fa-angle-down ml-2"
                    style={{
                        transition: "transform .3s ease-in-out",
                        transform: isDropdownOpen ? "rotate(180deg)" : ""
                    }}
                ></i>
            </DropdownToggle>
            <ExtendedDropdown 
                right={false} // 展開條目靠左對齊，向右展開
            >
                <ExtendedDropdown.Section list>
                    <ListGroup>
                    {
                        dropdownItems.map((item, index) => {
                            return (
                                <ListGroupItem 
                                    key={ index } action
                                    onClick={() => changeLanguage(item.langCode)}
                                >
                                    <Row
                                        className="px-3"
                                        style={{
                                            alignItems: "center"
                                        }}
                                    >
                                        <div>{ item.icon }</div>
                                        <div>{ item.text }</div>
                                    </Row>
                                </ListGroupItem>
                            );
                        })
                    }
                    </ListGroup>
                </ExtendedDropdown.Section>
            </ExtendedDropdown>
        </Dropdown>
    )
}