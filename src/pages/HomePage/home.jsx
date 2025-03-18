import React from 'react';
import Herosesction from "../../components/homepage/herosesction.jsx";
import Trendings from '../../components/homepage/trending.jsx';
import Editing from '../../components/homepage/editing.jsx';
import Celebrate from '../../components/homepage/celebrate.jsx';
import ShareSection from '../../components/homepage/share.jsx';
import Inspiration from '../../components/homepage/inspiration.jsx';

function Home() {
    return (
        <>
            <Herosesction />
            <Trendings />
            <Editing />
            <Celebrate />
            <ShareSection />
            <Inspiration />
        </>
    );
}

export default Home;