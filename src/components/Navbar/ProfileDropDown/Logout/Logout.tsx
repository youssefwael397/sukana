import { Modal } from 'antd';
import React, { useState } from 'react';
import './logout.css';
import { LogOut } from '../../../../api/features/authSlice';
import { useDispatch } from 'react-redux';

const Logout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const toggleDropDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    setIsOpen(false);
    dispatch(LogOut());
  };

  return (
    <>
      <a onClick={toggleDropDown}>Log Out</a>
      <Modal
        rootClassName="logout-modal"
        open={isOpen}
        onCancel={toggleDropDown}
        footer={null}
      >
        <div className="w-full flex flex-col gap-10 justify-center items-center font-alexandria">
          <div className="flex flex-col gap-3 justify-center items-center">
            <img
              src="/assets/black-sukana-logo.svg"
              className="w-[200px]"
              alt="logo with black text"
            />
            <p className="text-[#292929] text-[18px] leading-[28.8px] font-normal text-center ">
              Oh no! You’re leaving.....
              <br /> Are You Sure?
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <button
              onClick={toggleDropDown}
              className="bg-gold text-black text-[18px] leading-[28.8px] font-normal w-full py-3 rounded-[12px]"
            >
              Nahh , Just Keeping
            </button>
            <button
              onClick={handleLogout}
              className="bg-transparent border-[1px] border-[#B3261E] text-[#B3261E] text-[18px] leading-[28.8px] font-normal w-full py-3 rounded-[12px]"
            >
              Yes, Log Me Out
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Logout;
