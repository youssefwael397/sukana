import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../api/store';
import { closeModal as closeSignUpModal } from '../../api/features/signupSlice';
import SignUpForm from './SignUpForm';
import Logo from '../Shared/Logo/Logo';
import { openModal as openLoginModal } from '../../api/features/loginSlice';
import styles from './SignUpDialog.module.css';

const SignUpDialog: React.FC = () => {
  const { isModalOpen } = useSelector((state: RootState) => state.signup);
  const dispatch: AppDispatch = useDispatch();

  const handleDontHaveAccountBtn = () => {
    dispatch(closeSignUpModal());
    dispatch(openLoginModal());
  };
  return (
    <Modal
      className={styles.signupModal}
      open={isModalOpen}
      onCancel={() => dispatch(closeSignUpModal())}
      footer={null}
    >
      <div className="flex flex-row bg-[#FFFFF5] rounded-[16px] border-0 font-alexandria">
        <div className="flex-1 py-10 px-8">
          <h3 className="text-2xl font-bold">Create your account</h3>
          <p className="text-base text-[#33333399] mb-8">
            Sign up to enjoy the feature of Revolutie
          </p>

          <SignUpForm />

          <p className="mt-6 text-center">
            Already Have an account?{' '}
            <button
              className="text-[#BE932A]"
              onClick={handleDontHaveAccountBtn}
            >
              Login
            </button>
          </p>
        </div>
        <div className="flex-shrink-0 w-[326px] relative">
          <div className="absolute inset-0 bg-[#292929] opacity-80 rounded-tr-[16px] rounded-br-[16px]"></div>
          <div className="absolute flex justify-center mt-10 w-full">
            <Logo
              imgWidth={100}
              className="text-center"
              showText
              showTextClassName="text-[22px] leading-[22px] tracking-[.25em]"
            />
          </div>
          <img
            src="/assets/signup-bg.png"
            className="w-full h-full object-cover rounded-tr-[16px] rounded-br-[16px]"
            alt="Signup Background"
          />
        </div>
      </div>
    </Modal>
  );
};

export default SignUpDialog;
