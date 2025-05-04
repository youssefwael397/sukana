import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './SignUpForm.module.css'

const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Initial form values
  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    phone: '',
  };

  // Validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required('Full Name is required')
      .min(3, 'Full Name must be at least 3 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    phone: Yup.string().required('Phone number is required'),
  });

  // Submit handler
  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form Values:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className="space-y-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="text-[16px] leading-[18px] font-normal text-[#33333399]"
            >
              Full Name
            </label>
            <Field
              name="fullName"
              type="text"
              placeholder="Full Name"
              className="w-full border bg-transparent border-[#33333399] rounded-[12px] px-3 py-2 h-[56px] focus:outline-none focus:ring-1 focus:ring-[#FBB13C]"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

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

          {/* Phone number input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-[16px] leading-[18px] font-normal text-[#33333399]"
            >
              Phone Number
            </label>
            <PhoneInput
              country={'us'} // You can set the default country code here
              value={initialValues.phone}
              onChange={(phone) => setFieldValue('phone', phone)}
              inputClass="w-full border bg-transparent border-[#33333399] rounded-[12px] px-3 py-2 h-[56px] focus:outline-none focus:ring-1 focus:ring-[#FBB13C]"
            />
            <ErrorMessage
              name="phone"
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
                  <EyeOutlined
                    style={{ fontSize: '24px', color: '#33333399' }}
                  />
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

          <p className="text-[12px] leading-[12px] font-light text-[#33333399]">
            By submitting, I accept Sukana{' '}
            <a href="#" className="text-[#BE932A] underline">
              terms of use
            </a>
          </p>

          <div>
            <div className="mt-8 bg-gold rounded-[12px] group p-[1px] transition-colors">
              <Button
                htmlType="submit"
                type="primary"
                block
                className={styles.submitBtn}
              >
                Sign Up
              </Button>
            </div>
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
      )}
    </Formik>
  );
};

export default SignUpForm;
