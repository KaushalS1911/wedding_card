import React from 'react';
import {observer} from 'mobx-react-lite';
import {Navbar, Alignment, Popover, Button} from '@blueprintjs/core';
import {Import, FloppyDisk} from '@blueprintjs/icons';
import styled from 'polotno/utils/styled';
import MdcCloudAlert from '@meronex/icons/mdc/MdcCloudAlert';
import MdcCloudCheck from '@meronex/icons/mdc/MdcCloudCheck';
import MdcCloudSync from '@meronex/icons/mdc/MdcCloudSync';
import {CloudWarning} from '../cloud-warning';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import axiosInstance from '../../../Instance.jsx';

const SaveButton = observer(({store}) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {pathname} = useLocation();

    const handleSave = async () => {
        try {
            const dataUrl = await store.toDataURL();
            const editorData = store.toJSON();

            // Fetch user info
            const userRes = await axiosInstance.get('/api/auth/me');
            const user_id = userRes.data?.data?._id;

            if (!user_id) {
                alert('User not found.');
                return;
            }

            if (id && pathname.includes('draft')) {
                // Update existing draft
                await axiosInstance.put(`/api/user-template/${id}`, {
                    edited_object: {
                        designJson: editorData,
                        previewImage: dataUrl
                    }
                });
                alert('Draft updated successfully!');
            } else {
                await axiosInstance.post('/api/user-template', {
                    user_id,
                    template_id: id,
                    edited_object: {
                        designJson: editorData,
                        previewImage: dataUrl
                    }
                });
                alert('Draft created successfully!');
            }
            navigate('/profile/saved');
        } catch (error) {
            console.error('Save failed:', error);
            alert('Failed to save the design.');
        }
    };

    return (
        <Button
            icon={<FloppyDisk/>}
            text="Save"
            intent="success"
            style={{marginRight: '10px'}}
            onClick={handleSave}
        />
    );
});

const DownloadButton = observer(({store}) => {
    const handleDownload = async () => {
        try {
            const dataUrl = await store.toDataURL();
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'design.png';
            link.click();
        } catch (err) {
            console.error('Download failed:', err);
        }
    };

    return (
        <Button
            icon={<Import/>}
            text="Download"
            intent="primary"
            onClick={handleDownload}
        />
    );
});

const NavbarContainer = styled('div')`
    white-space: nowrap;
    @media screen and (max-width: 500px) {
        overflow-x: auto;
        overflow-y: hidden;
        max-width: 100vw;
    }
`;

const NavInner = styled('div')`
    @media screen and (max-width: 500px) {
        display: flex;
    }
`;

const Status = observer(({project}) => {
    const Icon = !project.cloudEnabled
        ? MdcCloudAlert
        : project.status === 'saved'
            ? MdcCloudCheck
            : MdcCloudSync;

    return (
        <Popover
            content={
                <div style={{padding: '10px', maxWidth: '300px'}}>
                    {!project.cloudEnabled && (
                        <CloudWarning style={{padding: '10px'}}/>
                    )}
                    {project.cloudEnabled && project.status === 'saved' && (
                        <>
                            Your data is saved with{' '}
                            <a href="https://puter.com" target="_blank" rel="noopener noreferrer">
                                Puter.com
                            </a>
                        </>
                    )}
                    {project.cloudEnabled &&
                        (project.status === 'saving' || project.status === 'has-changes') &&
                        'Saving...'}
                </div>
            }
            interactionKind="hover"
        >
            <div style={{padding: '0 5px'}}>
                <Icon className="bp5-icon" style={{fontSize: '25px', opacity: 0.8}}/>
            </div>
        </Popover>
    );
});

const Topbar = observer(({store}) => {
    const navigate = useNavigate();

    return (
        <NavbarContainer className="bp5-navbar">
            <NavInner>
                <Navbar.Group align={Alignment.LEFT}>
                    <Button icon="arrow-left" text="Back" onClick={() => navigate(-1)}/>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <SaveButton store={store}/>
                    <DownloadButton store={store}/>
                </Navbar.Group>
            </NavInner>
        </NavbarContainer>
    );
});

export default Topbar;
