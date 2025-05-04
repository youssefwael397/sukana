import React, { useState } from 'react';
import { Modal } from 'antd';
import styles from './ScheduleTour.module.css';
import ScheduleTourForm from './ScheduleTourForm/ScheduleTourForm';

const ScheduleTour: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  

  return (
    <>
      <div className={styles.container}>
        <p className="text-[#FFFFF5] text-[16px] leading-[17.6px] font-normal text-center">
          Request a tour as early as Today at 12:30PM
        </p>
        <a
          href="#contact-advertise"
          className="border-[#fbb13c] border-[1px] text-center rounded-[24px] w-full py-4 text-transparent bg-gold bg-clip-text text-[16px] leading-[17.6px] font-normal"
        >
          Contact The Advertiser
        </a>
        <button
          onClick={showModal}
          className="rounded-[24px] py-4 w-full text-black bg-gold text-[16px] leading-[17.6px] font-normal"
        >
          Schedule Tour
        </button>
      </div>

      <Modal
        rootClassName={styles.scheduleTourModal}
        title="Schedule Tour"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        width={600}
      >
        <ScheduleTourForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
};

export default ScheduleTour;
