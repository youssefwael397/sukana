import React, { useState } from 'react';
import { MenuProps, Dropdown, Button } from 'antd';
import './CustomDropdown.css';

const CustomDropdown: React.FC<{
  content: JSX.Element;
  label: string;
  className?: string;
  error?: boolean;
}> = ({ content, className, label, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const iconSrc = !isOpen ? 'gold-down-icon.svg' : 'black-down-icon.svg';

  const handleClickInside = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className="flex flex-row gap-4" onClick={handleClickInside}>
          {content}
        </div>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`custom-dropdown ${error ? 'error' : ''}`}
      rootClassName={className}
    >
      <Button>
        {label} <img src={`/assets/icons/${iconSrc}`} />
      </Button>
    </Dropdown>
  );
};

export default CustomDropdown;
