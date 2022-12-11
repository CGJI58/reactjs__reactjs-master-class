import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <RecoilRoot>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </RecoilRoot>
);
