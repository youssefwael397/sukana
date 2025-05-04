import React from 'react';
import EditProfileTitle from '../EditProfileTitle';
import styles from './NotificationPreferences.module.css';
import CustomSwitch from '../../FormItems/CustomSwitch/CustomSwitch';
import { NotificationItemProps } from '../../../types/types';
import NotificationItem from './NotificationItem';

const notificationItems: NotificationItemProps[] = [
  {
    label: 'New Home Alerts',
    description: 'New listings that match your',
    underlineDescription: 'Saved Searches',
    value: false,
  },
  {
    label: 'Home Status Updates',
    description:
      'Updates like price changes, open house schedules, and status changes on your',
    underlineDescription: 'Saved Homes',
    value: true,
  },
  {
    label: "Sukana's Recommendations",
    description:
      "Homes we think you'll like These recommendations may be slightly outside your home search criteria or in nearby areas",
    value: true,
  },
  {
    label: 'The Weekender',
    description:
      'A weekly email of new listings, open houses, and neighborhood trends',
    value: false,
  },
  {
    label: 'Saved Home Reminder',
    description: 'Periodic reminder of your',
    underlineDescription: 'Saved Homes',
    value: false,
  },
  {
    label: 'Sukana Extras',
    description:
      'Occasional notifications about new features and tools to make buying and selling easy',
    value: true,
  },
];

const NotificationPreferences: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <EditProfileTitle title="Notification Preferences" />
        </div>
        <p className={styles.headerDescription}>
          Get real-time updates on your favorite homes, neighborhoods, and more.
        </p>
        <CustomSwitch label="Select All Notifications" />
      </div>
      <div className="w-[724px]">
        <hr className={styles.hr} />
        <div className="flex flex-col gap-8">
          {notificationItems.map((notification: NotificationItemProps) => (
            <NotificationItem key={notification.label} {...notification} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferences;
