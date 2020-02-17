import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';


const Button = (props) => {
  const { text, testID } = props;
  return (
    <div>
      <button className={styles.Button} data-testid={testID} type="button">
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  testID: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default Button;
