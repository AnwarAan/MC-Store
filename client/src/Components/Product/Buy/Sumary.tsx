import React from 'react';
import { Link } from 'react-router-dom';

interface Summary {
  shopping: number;
  insurance: number;
  shipment: number;
  bill: number;
}

const Summary: React.FunctionComponent<Summary> = ({ shopping, insurance, shipment, bill }) => {
  return (
    <div style={{ height: '360px' }} className="br3 shadow-2 ml4">
      <div className="mh4 pt2">
        <h2 className="">Summary</h2>
        <div className="flex flex-column tc mt4">
          <div className="flex justify-between mv2">
            <p className="ma0">Total Shopping</p>
            <h4 className="ma0">${shopping}</h4>
          </div>
          <div className="flex justify-between mv2">
            <p className="ma0">Insurance</p>
            <h4 className="ma0">${insurance}</h4>
          </div>
          <div className="flex justify-between mv2">
            <p className="ma0">Shipment</p>
            <h4 className="ma0">${shipment}</h4>
          </div>
        </div>
        <div className="flex justify-between mv4">
          <h4 className="ma0">Total Fee</h4>
          <h4 className="ma0">${bill}</h4>
        </div>
        <div>
          <Link to="">
            <button style={{ height: '40px' }} className="login br3 ba b--light-gray pointer white bg-green w-100">
              Buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Summary;
