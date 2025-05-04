import { Switch, SwitchProps } from 'antd';
import React from 'react';
import styles from './CustomSwitch.module.css';

interface CustomSwitchProps extends SwitchProps {
  label?: string;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ label, ...props }) => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="flex flex-row gap-2 items-center">
      <Switch onChange={onChange} {...props} className={styles.switch} />
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

export default CustomSwitch;
