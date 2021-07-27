import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Icon from '../components/icons';
export default ({ label, value, type = 'date' }) => {
  const [clicked, setclicked] = React.useState(false);
  const [isHover, setisHover] = React.useState(false);

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
      <>
        <Dropdown
          onBlur={() => setclicked(false)}
          onClick={() => setclicked(true)}
        >
          <Dropdown.Toggle>
            <span>{value}</span>
            <div
              className='nfu-asjdi3e1'
              style={{
                backgroundColor: clicked == true ? 'white' : '',
              }}
            >
              <Icon name={clicked == true ? 'cehvda' : 'cehvd'} />
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu></Dropdown.Menu>
        </Dropdown>
      </>
    </div>
  );
};
