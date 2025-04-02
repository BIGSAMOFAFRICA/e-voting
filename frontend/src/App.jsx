import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import web3 from "./components/Web3";
import contract from "./components/VotingContract"; // alaye not available until futher notive

function App() {

  const candidates = ["sam", "tobi", "AI"];

  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [inputCandidate, setInputCandidate] = useState("");

  const [account, setAccount] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadBlockchainData = async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error(" Error loading blockchain data:", error);
      }
    };

    loadBlockchainData();
  }, []);


  const handleCandidateChange = (e) => {
    const candidate = e.target.value;
    setSelectedCandidate(candidate);
    setInputCandidate(candidate);
    setMessage("");
  };

  
  const handleVerify = () => {
    if (inputCandidate === selectedCandidate && inputCandidate !== "") {
      setMessage("Matched");
    } else {
      setMessage("Not Matched");
    }
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">E-Voting System</h1>
      <p className="text-center">Connected Account: {account}</p>

      <div className="card mt-4">
        <div className="card-body">
          <h3>Vote for Your Favorite Candidate</h3>
          <select
            className="form-select"
            value={selectedCandidate}
            onChange={handleCandidateChange}
          >
            <option value="">Select a Candidate</option>
            {candidates.map((candidate, index) => (
              <option key={index} value={candidate}>
                {candidate}
              </option>
            ))}
          </select>

          <div className="mt-3">
            <label>Your Vote:</label>
            <input
              type="text"
              className="form-control"
              value={inputCandidate}
              onChange={(e) => setInputCandidate(e.target.value)}
            />
          </div>

          <button className="btn btn-primary mt-3" onClick={handleVerify}>
            Verify
          </button>
        </div>
      </div>

      {/* Bootstrap Modal */}
      {showModal && (
        <>
          <div
            className="modal fade show"
            style={{ display: "block" }}
            tabIndex="-1"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Verification Result</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <p className={message === "Matched" ? "text-success" : "text-danger"}>
                    {message}
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
}

export default App;
