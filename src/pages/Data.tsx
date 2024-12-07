import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout.tsx";
import "./Data.css";
import tradeData from '../assets/data.json';

interface TradeDataItem {
  "Reporting Date": string;
  "Total Number of Trade Events": number;
  "Total Number of Trade Events without Fingerprint": number;
  "Total Number of New Trades": number;
  "Total Number of Trades in Amended Status": number;
  "Total Number of Trades in Cancelled Status": number;
  "Total Number of Eligible Trades": number;
  "Total Number of TRN": number;
  "Total Number of TRN Accepted": number;
  "Total Number of TRN in Submitted Status": number;
  "Total Number of TRN Rejected": number;
  "Total Number of Late Submission": number;
}

const tradeDataTyped = tradeData as TradeDataItem[];

const Data: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout collapsed={false}>
      <h1>Data Dashboard</h1>
      <br />
      <div className="data-header">
        <div className="tabs">
          <button className="tab" onClick={() => navigate("/summary")}>Summary</button>
          <button className="tab" onClick={() => navigate("/report")}>Report</button>
          <button className="tab active" onClick={() => navigate("/data")}>Data</button>
        </div>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Reporting Date</th>
            <th>Total Number of Trade Events</th>
            <th>Total Number of Trade Events without Fingerprint</th>
            <th>Total Number of New Trades</th>
            <th>Total Number of Trades in Amended Status</th>
            <th>Total Number of Trades in Cancelled Status</th>
            <th>Total Number of Eligible Trades</th>
            <th>Total Number of TRN</th>
            <th>Total Number of TRN Accepted</th>
            <th>Total Number of TRN in Submitted Status</th>
            <th>Total Number of TRN Rejected</th>
            <th>Total Number of Late Submission</th>
          </tr>
        </thead>
        <tbody>
          {tradeDataTyped.map((item, index) => (
            <tr key={index}>
              <td>{item["Reporting Date"]}</td>
              <td>{item["Total Number of Trade Events"]}</td>
              <td>{item["Total Number of Trade Events without Fingerprint"]}</td>
              <td>{item["Total Number of New Trades"]}</td>
              <td>{item["Total Number of Trades in Amended Status"]}</td>
              <td>{item["Total Number of Trades in Cancelled Status"]}</td>
              <td>{item["Total Number of Eligible Trades"]}</td>
              <td>{item["Total Number of TRN"]}</td>
              <td>{item["Total Number of TRN Accepted"]}</td>
              <td>{item["Total Number of TRN in Submitted Status"]}</td>
              <td>{item["Total Number of TRN Rejected"]}</td>
              <td>{item["Total Number of Late Submission"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Data;
