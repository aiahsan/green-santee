import React from 'react';
import Nav from '../components/navbar';
import SideBar from '../components/sidebar';
import Stepper from '../components/stepper/steper';
import { useHistory } from 'react-router-dom';
export default () => {
  const history = useHistory();
  const [stepcount, setstepcount] = React.useState(1);
  const [shownav, setshownav] = React.useState(false);

  const handleStep = (type) => {
    if (type == 1) {
      setstepcount(stepcount + 1);
    } else {
      setstepcount(stepcount - 1);
    }
  };

  React.useEffect(() => {
    if (stepcount == 6) {
      history.replace('done');
    }
  });
  return (
    <div className=''>
      <Nav shownav={shownav} setshownav={setshownav} />
      <div className='d-flex'>
        <SideBar
          shownav={shownav}
          setshownav={setshownav}
          stepcount={stepcount}
        />
        <Stepper stepcount={stepcount} handleStep={handleStep} />
      </div>
    </div>
  );
};
