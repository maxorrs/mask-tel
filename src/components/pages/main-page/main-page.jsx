import React, { useState } from 'react';

import Form from '../../form/form';

import './main-page.scss';

const MainPage = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="page page--main">
      <main className="main-page">
        <h1 className="main-page__title">
          {isFormSubmitted ? 'Скоро перезвоним' : 'Заказать обратный звонок'}
        </h1>
        {isFormSubmitted ? (
          <button
            className="main-page__more-button button"
            type="button"
            name="more"
            onClick={() => setFormSubmitted(false)}>
            Заказать ещё
          </button>
        ) : (
          <Form onChangeFormStatus={setFormSubmitted} />
        )}
      </main>
    </div>
  );
};

export default MainPage;
