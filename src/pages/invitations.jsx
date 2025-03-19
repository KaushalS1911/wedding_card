import React from 'react';
import {Paper} from "@mui/material";
import PerfectMatch from "../components/invitations/perfectMatch.jsx";
import InvitationMakerSection from "../components/invitations/invitationMakerSection.jsx";
import OnlineInvitationMaker from "../components/invitations/onlineInvitationMaker.jsx";
import Share from "../components/homepage/share.jsx";

function Invitations() {
    return (
        <>
            <InvitationMakerSection/>
            <PerfectMatch />
            <Share/>
            <OnlineInvitationMaker/>
        </>
    );
}

export default Invitations;