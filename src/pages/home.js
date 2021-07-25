import React from 'react';
import Nav from '../components/navbar';
import SideBar from '../components/sidebar';
import Stepper from '../components/stepper/steper';
import { useHistory } from 'react-router-dom';
export default () => {
  const history = useHistory();
  const [stepcount, setstepcount] = React.useState(1);
  const [activePage, setactivePage] = React.useState(1);
  const [shownav, setshownav] = React.useState(false);
  const [completedPage, setCompletedPage] = React.useState([]);
  const handleStep = (type) => {
    if (type == 1) {
      if (!completedPage.includes(stepcount)) {
        const newArr = [...completedPage];
        newArr.push(stepcount);
        setCompletedPage([...newArr]);
      }
      setstepcount(stepcount + 1);
      setactivePage(activePage + 1);
    } else {
      setstepcount(stepcount - 1);
      setactivePage(activePage - 1);
    }
  };

  React.useEffect(() => {
    if (stepcount == 6) {
      history.replace('done');
    }
  });
  const handlePageChange = (page) => {
    if (completedPage.includes(page)) {
      setactivePage(page);
      setstepcount(page);
    }
  };
  return (
    <div className=''>
      <Nav shownav={shownav} setshownav={setshownav} />
      <div className='d-flex'>
        <SideBar
          shownav={shownav}
          setshownav={setshownav}
          stepcount={stepcount}
          handlePageChange={handlePageChange}
          activepage={activePage}
          completedPage={completedPage}
        />
        <Stepper stepcount={activePage} handleStep={handleStep} />
      </div>
    </div>
  );
};
