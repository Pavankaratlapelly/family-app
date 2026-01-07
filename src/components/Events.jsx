import React from "react";

function Events() {
  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "Arial, sans-serif" }}>
      {/* Internal CSS */}
      <style>
        {`
          .spinner {
            border: 6px solid #f3f3f3;
            border-top: 6px solid #3498db;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .message {
            font-size: 18px;
            color: #444;
            margin-top: 20px;
            font-weight: 500;
          }
        `}
      </style>

      {/* Spinner */}
      <div className="spinner"></div>

      {/* Message */}
      <p className="message">
        We’re currently working on updates. Thank you for your patience — new events will be available soon!
      </p>
    </div>
  );
}

export default Events;