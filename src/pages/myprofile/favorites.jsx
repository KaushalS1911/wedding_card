import React from 'react';
import Favorite from "../../components/favorite/favorite.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SavedDraft from "../../components/favorite/saved-draft.jsx";
import MyEvent from "../../components/favorite/my-event.jsx";
import Purchases from "../../components/favorite/purchases.jsx";
import Ffavorites from "../../components/favorite/ffavorites.jsx";
import Settings from "../../components/favorite/settings.jsx";

function Favorites() {
    return (
        <>
                <Favorite/>
                <Routes>
                    <Route path="/favorites" element={<Ffavorites />}/>
                    <Route path="/saved" element={<SavedDraft/>}/>
                    <Route path="/myevents" element={<MyEvent/>}/>
                    <Route path="/purchases" element={<Purchases/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
        </>
    );
}

export default Favorites;