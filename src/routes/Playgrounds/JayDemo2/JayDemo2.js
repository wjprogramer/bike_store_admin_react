import React, { useState, useEffect } from 'react';
import { withTranslation, useTranslation, Translation } from 'react-i18next';
import {
  Container,
  Button,
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

// react-i18next demo
const JayDemo2 = (props) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  let { t } = props;

  useEffect(() => {
    if (lang !== null) {
      console.log(`lang: ${lang}`);
      i18n.changeLanguage(lang);
    };
  }, [lang]);

  const changeLang = () => {
    if (lang === 'zh-TW') {
      setLang('en');
    } else {
      setLang('zh-TW');
    }
  }

  return (
    <React.Fragment>
      <Container fluid={ false }>
        <div className="d-flex mt-3 mb-5">
          <HeaderMain 
            title="I18N"
            className="mt-0"
          />
        </div>
        <p>
          i18n-next demo
        </p>
        <p>
          Current Lang: {lang} 
        </p>
        <p>
          <code>t('app.sample')</code>: {t('app.sample')}
        </p>
        <Translation>
          {tr => (
            <p><code>t('app.sample')</code>: {tr('app.sample')}</p>
          )}
        </Translation>
        <Button onClick={changeLang}>
          切換語言
        </Button>
      </Container>
    </React.Fragment>
  )};

export default withTranslation()(JayDemo2);
