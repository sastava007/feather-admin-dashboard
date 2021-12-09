import React from "react";
import Card from "./common/Card/Card";
import CardBody from "./common/Card/CardBody";
import Table from "./Table/Table";

const Dashboard: React.FC = () => {
  return (
    <div className="px-14 py-8">
      <Card>
        <CardBody>
          <h1 className="text-3xl mb-8">Dashboard</h1>
          <div className="mt-4">
            <Table />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Dashboard;
