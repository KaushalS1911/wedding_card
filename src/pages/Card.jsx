import React from 'react'
import CardMakerSection from '../components/card/CardMakerSection'
import CardSharingOptions from '../components/card/CardSharingOptions'
import OnlineCardMaker from '../components/card/OnlineCardMaker'
import Invitation from "./Invitation.jsx";
import Invitations from "./invitations.jsx";
import PerfectMatch from "../components/invitations/perfectMatch.jsx";

const Card = () => {
    return (
        <>
            <CardMakerSection />
            <PerfectMatch/>
            <CardSharingOptions />
            <OnlineCardMaker />
        </>
    )
}

export default Card
