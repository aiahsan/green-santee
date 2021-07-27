import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Icon from './icons';
import moment from 'moment';
export default ({ label, value, type }) => {
  const [clicked, setclicked] = React.useState(false);
  const [isHover, setisHover] = React.useState(false);
  const [valuemain, setvaluemain] = React.useState('');
  const lastThirtyDays = [...new Array(30)].map((i, idx) =>
    moment().startOf('day').add(idx, 'days')
  );

  React.useEffect(() => {}, []);
  return (
    <div
      className={`green-textbox ${type == 'date' ? 'p-0' : ''}`}
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
      style={{
        borderColor: clicked || isHover == true ? '#6CA21F' : '',
        cursor: 'pointer',
        backgroundColor: (clicked == true) & (type == 'date') ? '#c4c4c4' : '',
      }}
    >
      {type != 'date' ? <label>{label}</label> : <></>}
      {type == 'date' ? (
        <>
          <Dropdown
            onBlur={() => setclicked(false)}
            onClick={() => setclicked(true)}
          >
            <Dropdown.Toggle>
              <span>Date d’effet du contrat</span>
              <div
                className='nfu-asjdi3e'
                style={{
                  backgroundColor: clicked == true ? 'white' : '',
                }}
              >
                <Icon name={clicked == true ? 'cala' : 'cal'} />
              </div>
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
            placeholder={value}
            value={valuemain}
            onChange={(e) => setvaluemain(e.target.value)}
            type={type}
          />
        </>
      )}
    </div>
  );
};
