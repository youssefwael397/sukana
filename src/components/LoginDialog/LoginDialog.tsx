import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../api/store';
import { closeModal as closeLoginModal } from '../../api/features/loginSlice';
import LoginForm from './LoginForm';
import Logo from '../Shared/Logo/Logo';
import { openModal as openSignUpModal } from '../../api/features/signupSlice';
import styles from './LoginDialog.module.css'

const LoginDialog: React.FC = () => {
  const { isModalOpen } = useSelector((state: RootState) => state.login);
  const dispatch: AppDispatch = useDispatch();

  const handleDontHaveAccountBtn = () => {
    dispatch(closeLoginModal());
    dispatch(openSignUpModal());
  };

  return (
    <Modal
      className={styles.loginModal}
      open={isModalOpen}
      onCancel={() => dispatch(closeLoginModal())}
      footer={null}
    >
      <div className="flex flex-row bg-[#FFFFF5] rounded-[16px] border-0 font-alexandria">
        <div className="flex-shrink-0 w-[326px] relative">
          <div className="absolute inset-0 bg-[#292929] opacity-80 rounded-tl-[16px] rounded-bl-[16px]"></div>
          <div className="absolute flex justify-center mt-10 w-full">
            <Logo
              imgWidth={100}
              className="text-center"
              showText
              showTextClassName="text-[22px] leading-[22px] tracking-[.25em]"
            />
          </div>
          <img
            src="/assets/login-bg.png"
            className="w-full h-full object-cover rounded-tl-[16px] rounded-bl-[16px]"
            alt="Login Background"
          />
        </div>
        <div className="flex-1 py-10 px-8">
          <div className="flex flex-row gap-4 justify-end items-center">
            <p className="text-[#33333399] text-[16px] leading-[18px] font-normal">
              Don’t have account ?
            </p>
            <button
              className="border-[#33333399] border-[1px] rounded-[12px] py-3 px-8 text-[14px] leading-[17px] font-normal text-[#33333399] hover:bg-[#33333399] hover:text-white transition-all duration-300"
              onClick={handleDontHaveAccountBtn}
            >
              Sign Up
            </button>
          </div>
          <h3 className="text-2xl font-medium">Welcome Back</h3>
          <p className="text-base text-[#33333399] mb-8">Login Your Account</p>
          <LoginForm />
        </div>
      </div>
    </Modal>
  );
};

export default LoginDialog;
