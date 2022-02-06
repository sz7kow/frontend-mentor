import React from "react";
import { Routes, Route } from "react-router-dom";

import EditFeedbackTemplate from "components/edit-feedback-template";
import FeedbackDetailsTemplate from "components/feedback-details-template";
import NewFeedbackPage from "components/new-feedback-page";
import RoadmapPage from "components/roadmap-page";
import SuggestionsPage from "components/suggestions-page";

const GlobalRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="suggestions" element={<SuggestionsPage />} />
      <Route path="roadmap" element={<RoadmapPage />} />
      <Route path="feedback">
        <Route path="new" element={<NewFeedbackPage />} />
        <Route path=":id">
          <Route path="details" element={<FeedbackDetailsTemplate />} />
          <Route path="edit" element={<EditFeedbackTemplate />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default GlobalRouter;
