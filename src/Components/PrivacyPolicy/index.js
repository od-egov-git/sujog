import React from 'react';
import { connect, useSelector } from "react-redux";
import usePageLocalization from '../../utils/usePageLocalization';

const PrivacyPolicy = ({language}) => {
  const translations = usePageLocalization(language, 'privacyPolicy');
  return (
    <div className='container'>
      <title>{translations.title}</title>
      <main style={{ paddingBottom: '2rem' }}>
        <div class='px-10 py-5 mt-4 card'>
          <h1 style={{ textAlign: 'left', padding: '1.5rem 0', color:"#F47216" }}>
          {translations.title}
          </h1>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content1}
          </p>
          <h2 style={{color:"#F47216"}}>1. {translations.title1}</h2>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content2}
          </p>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content3}
          </p>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content4}
          </p>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content5}
          </p>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content6}
          </p>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content7}
          </p>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content8}
          </p>
          <h2 style={{color:"#F47216"}}>2. {translations.title2}</h2>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content9}
          </p>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content10}
          </p>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content11}
          </p>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content12}
          </p>
          <ul>
            <li>
              {translations.list1}
            </li>
            <li>
              {translations.list2}
            </li>
            <li>
              {translations.list3}
            </li>
          </ul>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content13}
          </p>
          <h2 style={{color:"#F47216"}}>3. {translations.title3}</h2>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content14}
          </p>
          <h2 style={{color:"#F47216"}}>4. {translations.title4}</h2>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content15}
          </p>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content16}
          </p>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content17}
          </p>
          <h2 style={{color:"#F47216"}}>5. {translations.title5}</h2>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content18}
          </p>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content19}
          </p>
          <h2 style={{color:"#F47216"}}>6. {translations.title6}</h2>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content20}
          </p>
          <h2 style={{color:"#F47216"}}>7. {translations.title7}</h2>
          <p style={{ textAlign: 'justify' }}>
            &emsp; {translations.content21}
          </p>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
	language: state.localization.language,
});

export default connect(mapStateToProps)(PrivacyPolicy);
