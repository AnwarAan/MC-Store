import { Fragment } from "react";

const EWalet = ({ balance }: { balance: number }) => {
  return (
    <Fragment>
      <div className="ml1">
        <h4 className="ma0">E-Wallet</h4>
        <p className="ma0">${balance}</p>
      </div>
    </Fragment>
  );
};

export default EWalet;
