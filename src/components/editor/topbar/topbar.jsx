import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Navbar, Alignment, Popover, Button } from '@blueprintjs/core';
import { Import, FloppyDisk } from '@blueprintjs/icons';
import styled from 'polotno/utils/styled';
import MdcCloudAlert from '@meronex/icons/mdc/MdcCloudAlert';
import MdcCloudCheck from '@meronex/icons/mdc/MdcCloudCheck';
import MdcCloudSync from '@meronex/icons/mdc/MdcCloudSync';
import { CloudWarning } from '../cloud-warning';
import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import axiosInstance from "../../../Instance.jsx";
// import { useEditorData } from '../../../pages/editor/EditorDataContext';
// import { useSearchParams } from 'react-router-dom';


const SaveButton = observer(({ store, colorIndex, formData, setFormData }) => {
  const navigate = useNavigate();
  const { id: template_id } = useParams(); // ✅ get from route

  const handleSave = async () => {
    try {
      const dataUrl = await store.toDataURL(); // Generate image preview
      const editorData = store.toJSON();       // Get design JSON

      // Get user ID from API
      const userRes = await axiosInstance.get('/api/auth/me');
      const user_id = userRes.data?.data?._id;

      if (!user_id || !template_id) {
        alert('User ID or Template ID missing.');
        return;
      }

      // Save design to backend
      await axiosInstance.post('/api/user-template', {
        user_id,
        template_id,
        edited_object: {
          designJson: editorData,
          previewImage: dataUrl
        }
      });

      alert('Design saved successfully!');
      navigate('/profile/saved');

    } catch (error) {
      console.error('Save failed:', error);
      alert('Save failed');
    }
  };

  return (
      <Button
          icon={<FloppyDisk />}
          text="Save"
          intent="success"
          style={{ marginRight: '10px' }}
          onClick={handleSave}
      />
  );
});

const DownloadButton = observer(({ store }) => {
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
      icon={<Import />}
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

const Status = observer(({ project }) => {
  const Icon = !project.cloudEnabled
    ? MdcCloudAlert
    : project.status === 'saved'
      ? MdcCloudCheck
      : MdcCloudSync;

  return (
    <Popover
      content={
        <div style={{ padding: '10px', maxWidth: '300px' }}>
          {!project.cloudEnabled && (
            <CloudWarning style={{ padding: '10px' }} />
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
      <div style={{ padding: '0 5px' }}>
        <Icon className="bp5-icon" style={{ fontSize: '25px', opacity: 0.8 }} />
      </div>
    </Popover>
  );
});

const Topbar = observer(({ store, colorIndex, formData, setFormData }) => {
  const navigate = useNavigate();

  return (
    <NavbarContainer className="bp5-navbar">
      <NavInner>
        <Navbar.Group align={Alignment.LEFT}>
          <Button icon="arrow-left" text="Back" onClick={() => navigate(-1)} />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <SaveButton
            store={store}
            colorIndex={colorIndex}
            formData={formData}
            setFormData={setFormData}
          />
          <DownloadButton store={store} />
        </Navbar.Group>
      </NavInner>
    </NavbarContainer>
  );
});

export default Topbar;
