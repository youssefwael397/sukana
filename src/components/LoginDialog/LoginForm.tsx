import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { setLoggedIn } from '../../api/features/authSlice';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../api/features/loginSlice';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useDispatch();
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Initial form values
  const initialValues = {
    email: '',
    password: '',
  };

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  // Submit handler
  const handleSubmit = async (values: typeof initialValues) => {
    console.log('🚀 ~ handleSubmit ~ values:', values);
    try {
      // await login(values).unwrap();
      dispatch(setLoggedIn());
      dispatch(closeModal());
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[16px] leading-[18px] font-normal text-[#33333399]"
          >
            Email
          </label>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border bg-transparent border-[#33333399] rounded-[12px] px-3 py-2 h-[56px] focus:outline-none focus:ring-1 focus:ring-[#FBB13C]"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-[16px] leading-[18px] font-normal text-[#33333399]"
          >
            Password
          </label>
          <div className="relative">
            <Field
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full border bg-transparent border-[#33333399] rounded-[12px] px-3 py-2 h-[56px] focus:outline-none focus:ring-1 focus:ring-[#FBB13C]"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <EyeOutlined style={{ fontSize: '24px', color: '#33333399' }} />
              ) : (
                <EyeInvisibleOutlined
                  style={{ fontSize: '24px', color: '#33333399' }}
                />
              )}
            </div>
          </div>
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="w-full flex justify-end">
          <a
            href="#"
            className="text-[16px] leading-[20px] font-normal text-transparent bg-clip-text bg-gradient-to-l from-[#926F34] to-[#DFBD69]"
          >
            Forgot Password
          </a>
        </div>
        <div className="mt-4 bg-gold rounded-[12px] group p-[1px] transition-colors">
          <Button
            htmlType="submit"
            type="primary"
            block
            className={`${styles.submitBtn}`}
          >
            Login
          </Button>
        </div>

        <div className="flex items-center justify-center my-4">
          <hr className="border-gray-300 w-[30%]" />
          <span className="px-4 text-gray-500">or</span>
          <hr className="border-gray-300 w-[30%]" />
        </div>
        <div className="flex justify-center gap-4">
          <button>
            <img
              src="/assets/social-media/google.svg"
              alt="Google"
              width={32}
            />
          </button>
          <button>
            <img
              src="/assets/social-media/facebook.svg"
              alt="Facebook"
              width={32}
            />
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
