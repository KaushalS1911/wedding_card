import React from "react";
import { Routes, Route } from "react-router-dom";
import Favorite from "../../components/favorite/favorite.jsx";
import SavedDraft from "../../components/favorite/saved-draft.jsx";
import MyEvent from "../../components/favorite/my-event.jsx";
import Purchases from "../../components/favorite/purchases.jsx";
import Ffavorites from "../../components/favorite/ffavorites.jsx";
import Settings from "../../components/favorite/settings.jsx";

function Favorites() {
  return (
    <>
      <Favorite />
      <Routes>
        <Route path="favorites" element={<Ffavorites />} />
        <Route path="saved" element={<SavedDraft />} />
        <Route path="myevents" element={<MyEvent />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="settings" element={<Settings />} />
        {/* <Route path="/" element={<Ffavorites />} /> */}
      </Routes>
    </>
  );
}

export default Favorites;
