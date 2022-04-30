import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UsersPage } from "./UsersPage";
import { NotFoundPage } from "./NotFoundPage";
import { HomePage } from "./HomePage";
import { UserPage } from "./UserPage";
import { Header } from "./Header";
import { RedirectPage } from "./RedirectPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/redirect" element={<RedirectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
