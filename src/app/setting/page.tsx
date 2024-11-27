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
            <Tab.List value={TABS.EDIT_PROFILE} />
            <Tab.List value={TABS.PREFERENCES} />
            <Tab.List value={TABS.SECURITY} />
          </Tab.TabHeader>
          <Tab.Body value={TABS.EDIT_PROFILE}>
            <EditProfile />
          </Tab.Body>
          <Tab.Body value={TABS.PREFERENCES}>
            <h1 className="text-center">
              Preferences page is under construction
            </h1>
          </Tab.Body>
          <Tab.Body value={TABS.SECURITY}>
            <h1 className="text-center">Security page is under construction</h1>
          </Tab.Body>
        </Tab>
      </div>
    </div>
  );
}
