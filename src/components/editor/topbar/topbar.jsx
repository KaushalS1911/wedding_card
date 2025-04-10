import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import {
  Navbar,
  Alignment,
  Popover,
  Button
} from '@blueprintjs/core';
import { Import, FloppyDisk } from '@blueprintjs/icons';
import styled from 'polotno/utils/styled';

import MdcCloudAlert from '@meronex/icons/mdc/MdcCloudAlert';
import MdcCloudCheck from '@meronex/icons/mdc/MdcCloudCheck';
import MdcCloudSync from '@meronex/icons/mdc/MdcCloudSync';

// import { useProject } from '../project';
import { CloudWarning } from '../cloud-warning';

const jsonob ={
  "width": 360,
  "height": 504.00000000000006,
  "fonts": [],
  "pages": [
      {
          "id": "7Kw3U3jVWC",
          "children": [
              {
                  "id": "GyNdJBM67H",
                  "type": "image",
                  "name": "",
                  "opacity": 1,
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": -7.838058224751497e-13,
                  "y": 9.378207152119789e-15,
                  "width": 360.00000000000085,
                  "height": 504,
                  "rotation": 0,
                  "animations": [],
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "filters": {},
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "https://images.unsplash.com/photo-1738189669835-61808a9d5981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTY5OTZ8MHwxfGFsbHwzM3x8fHx8fHx8MTc0Mzk5ODQ0N3w&ixlib=rb-4.0.3&q=80&w=1080",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "cornerRadius": 0,
                  "flipX": false,
                  "flipY": false,
                  "clipSrc": "",
                  "borderColor": "black",
                  "borderSize": 0,
                  "keepRatio": false
              },
              {
                  "id": "JKN8bTTMh5",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 202.16781466912397,
                  "y": 105.51627892506383,
                  "width": 140.70825817955827,
                  "height": 47,
                  "rotation": -7.167485229901506,
                  "animations": [],
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "filters": {},
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "Awesome!",
                  "placeholder": "",
                  "fontSize": 37.810224458688936,
                  "fontFamily": "Norican",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "center",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "M2-1DVYsVB",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 205.6522805446492,
                  "y": 357.1721625080255,
                  "width": 94.37037037037037,
                  "height": 13,
                  "rotation": 0,
                  "animations": [],
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "filters": {},
                  "shadowEnabled": false,
                  "shadowBlur": 4.999999999999997,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "These Great Memories",
                  "placeholder": "",
                  "fontSize": 9.56902356902357,
                  "fontFamily": "Alegreya",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "center",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "Bop0E4w16q",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 179.99999999999997,
                  "y": 371.2351082061557,
                  "width": 147.16498316498317,
                  "height": 39,
                  "rotation": 0,
                  "animations": [],
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "filters": {},
                  "shadowEnabled": false,
                  "shadowBlur": 4.999999999999997,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "Last Forever ",
                  "placeholder": "",
                  "fontSize": 31.34680134680135,
                  "fontFamily": "Great Vibes",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "center",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "y9qfKZpBKc",
                  "type": "image",
                  "name": "",
                  "opacity": 1,
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 1.818181818181813,
                  "y": 73.81818181818184,
                  "width": 131.986531986532,
                  "height": 131.986531986532,
                  "rotation": 0,
                  "animations": [],
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "filters": {},
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "https://res.cloudinary.com/damw499ud/image/upload/v1744004420/wedding_card/ebt4uvjl2sblhv6rtltt.png",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "cornerRadius": 0,
                  "flipX": false,
                  "flipY": false,
                  "clipSrc": "",
                  "borderColor": "black",
                  "borderSize": 0,
                  "keepRatio": false
              }
          ],
          "width": "auto",
          "height": "auto",
          "background": "white",
          "bleed": 0,
          "duration": 5000
      }
  ],
  "audios": [],
  "unit": "cm",
  "dpi": 72
}

// ✅ Save Button

const SaveButton = observer(({ store }) => {
  const handleSave = async () => {
    try {
      const json = await store.toJSON();
      console.log(json,'jjjjjjjjjjjjjjjjj');
      
      localStorage.setItem('polotno-design', JSON.stringify(json));
      alert('Design saved to localStorage!');
    } catch (err) {
      console.error('Save failed:', err);
    }
  };

  return (
    <Button
      icon={<FloppyDisk />}
      text="Save"
      intent="success"
      onClick={handleSave}
      style={{marginRight:'10px'}}
    />
  );
});

// ✅ Download Button
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

// ✅ Styled Containers
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

// ✅ Project Status Icon
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

// ✅ Main Topbar Component
const Topbar = observer(({ store }) => {
  // const project = useProject();
  const navigate = useNavigate();

  useEffect(() => {
    // Load the design from your JSON object
    store.loadJSON(jsonob);
  }, []);

  return (
    <NavbarContainer className="bp5-navbar">
      <NavInner>
        <Navbar.Group align={Alignment.LEFT}>
          <Button icon="arrow-left" text="Back" onClick={() => navigate(-1)} />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <SaveButton store={store} />
          <DownloadButton store={store} />
        </Navbar.Group>
      </NavInner>
    </NavbarContainer>
  );
});

export default Topbar;
