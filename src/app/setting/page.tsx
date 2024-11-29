'use client';

import Tab from '@/components/Tab';
import { TABS } from './enums';
import EditProfile from './EditProfile';

export default function SettingPage() {
  return (
    <div className="wrapper">
      <div className="tile bg-white">
        <Tab activeTab={TABS.EDIT_PROFILE}>
          <Tab.TabHeader>
            <Tab.List
              id="edit-profile-tab"
              value={TABS.EDIT_PROFILE}
              ariaControls="edit-profile-panel"
            />
            <Tab.List
              id="preferences-tab"
              value={TABS.PREFERENCES}
              ariaControls="preferences-panel"
            />
            <Tab.List
              id="security-tab"
              value={TABS.SECURITY}
              ariaControls="security-panel"
            />
          </Tab.TabHeader>
          <Tab.Body
            id="edit-profile-panel"
            value={TABS.EDIT_PROFILE}
            ariaLabelledBy="edit-profile-tab"
          >
            <EditProfile />
          </Tab.Body>
          <Tab.Body
            id="preferences-panel"
            value={TABS.PREFERENCES}
            ariaLabelledBy="preferences-tab"
          >
            <h1 className="text-center">
              Preferences page is under construction
            </h1>
          </Tab.Body>
          <Tab.Body
            id="security-panel"
            value={TABS.SECURITY}
            ariaLabelledBy="security-tab"
          >
            <h1 className="text-center">Security page is under construction</h1>
          </Tab.Body>
        </Tab>
      </div>
    </div>
  );
}
