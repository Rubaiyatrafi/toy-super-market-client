import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvier from "./components/Providers/AuthProvier";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvier>
        <RouterProvider router={router} />
      </AuthProvier>
    </React.StrictMode>
  </div>
);
