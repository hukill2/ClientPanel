import React from "react";
import Clients from "../clients/Clients";
import Sidebar from "../layout/Sidebar";

export default function Dashboard() {
  return (
    <div className="row">
      <div className="col-md-10">
        <Clients />
      </div>
      <div className="col-md2">
        <Sidebar />
      </div>
    </div>
  );
}