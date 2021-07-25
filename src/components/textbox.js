import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Icon from './icons';
import moment from 'moment';
export default ({ label, value, type }) => {
  const [clicked, setclicked] = React.useState(false);
  const [valuemain, setvaluemain] = React.useState(value);
  const lastThirtyDays = [...new Array(30)].map((i, idx) =>
    moment().startOf('day').add(idx, 'days')
  );

  React.useEffect(() => {
    console.log();
  }, []);
  return (
    <div
      className='green-textbox'
      style={{ borderColor: clicked == true ? '#6CA21F' : '' }}
    >
      <label>{label}</label>
      {type == 'date' ? (
        <>
          <Dropdown
            onBlur={() => setclicked(false)}
            onClick={() => setclicked(true)}
          >
            <Dropdown.Toggle>
              <span>Date d’effet du contrat</span> <Icon name='cal' />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {lastThirtyDays.map((x) => (
                <Dropdown.Item>{moment(x).format('DD MMM yyyy')}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </>
      ) : (
        <>
          <input
            onBlur={() => setclicked(false)}
            onClick={() => setclicked(true)}
            className='form-control'
            value={valuemain}
            onChange={(e) => setvaluemain(e.target.value)}
            type={type}
          />
        </>
      )}
    </div>
  );
};
