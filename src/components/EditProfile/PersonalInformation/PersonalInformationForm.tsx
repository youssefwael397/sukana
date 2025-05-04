import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import { Select, Form as AntdForm } from 'antd';
import 'react-phone-input-2/lib/style.css';
import './PersonalInformationForm.css';
import ChangePassword from '../ChangePassword/ChangePassword';

const { Option } = Select;

const FormItemLabel: React.FC<{ label: string }> = ({ label }) => (
  <label className="text-[#D1D1D6] font-normal text-[14px] leading-[16.8px] font-alexandria">
    {label}
  </label>
);

const baseInputClass =
  'w-full border bg-transparent border-[#606060B2] px-5 py-2 h-[56px] focus:outline-none focus:ring-1 focus:ring-[#FBB13C] rounded-[24px] font-light';

const baseSelectClass =
  'w-full bg-transparent h-[56px] focus:outline-none focus:ring-1 focus:ring-[#FBB13C] rounded-[24px] font-light';

const PersonalInformationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    country: 'Austria',
    state: 'Vienna',
    phoneNumber: '',
    password: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
  });

  const handleSubmit = (values: typeof initialValues) => {
    // This will print form values when the form is submitted
    console.log('Form Values:', values);
  };

  return (
    <div className="w-[724px] mt-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors, handleSubmit }) => (
          <Form
            id="personal-information-form"
            className="grid grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            {/* Full Name */}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center px-2 mb-3">
                <FormItemLabel label="Full Name" />
              </div>
              <Field
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className={`${baseInputClass}`}
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center px-2 mb-3">
                <FormItemLabel label="Email" />
              </div>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className={`${baseInputClass}`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center px-2 mb-3">
                <FormItemLabel label="Country" />
              </div>
              <AntdForm.Item
                validateStatus={errors.country ? 'error' : ''}
                help={errors.country}
                name="country"
              >
                <Select
                  value={values.country}
                  onChange={(value) => setFieldValue('country', value)}
                  className={baseSelectClass}
                  placeholder="Select country"
                >
                  <Option value="Austria">Austria</Option>
                  <Option value="Germany">Germany</Option>
                </Select>
              </AntdForm.Item>

              <ErrorMessage
                name="country"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* State */}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center px-2 mb-3">
                <FormItemLabel label="State" />
              </div>
              <Select
                value={values.state}
                onChange={(value) => setFieldValue('state', value)}
                className={baseSelectClass}
              >
                <Option value="Vienna">Vienna</Option>
                <Option value="Salzburg">Salzburg</Option>
              </Select>
              <ErrorMessage
                name="state"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center px-2 mb-3">
                <FormItemLabel label="Phone Number" />
              </div>
              <PhoneInput
                value={values.phoneNumber}
                onChange={(value) => setFieldValue('phoneNumber', value)}
                inputClass="text-white bg-transparent border-[#606060B2] rounded-[10px] px-4 py-2 w-full"
                country="at"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex flex-col"></div>

            {/* Password */}
            <div className="flex flex-col place-self-start">
              <ChangePassword />
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="bg-gold text-[16px] leading-[17.6px] text-black font-normal rounded-[24px] px-8 py-4"
              >
                Save Profile
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInformationForm;
