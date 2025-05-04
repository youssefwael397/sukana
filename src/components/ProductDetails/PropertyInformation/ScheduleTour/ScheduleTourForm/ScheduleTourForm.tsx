import React from 'react';
import { Radio, Form } from 'antd';
import { z } from 'zod';
import { useFormik } from 'formik';
import 'react-phone-input-2/lib/style.css';
import dayjs from 'dayjs';
import styles from './ScheduleTourForm.module.css';
import CustomInput from './CustomInput/CustomInput';
import CustomSelectInput from './CustomSelectInput/CustomSelectInput';
import CustomPhoneInput2 from '../../../../FormItems/CustomPhoneInput2/CustomPhoneInput2';
// import CustomPhoneInput from './CustomPhoneInput/CustomPhoneInput';

// Zod Schema Definition
const scheduleTourSchema = z.object({
  fullName: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email format'),
  date: z.string().nonempty('Please select a date'),
  time: z.string().nonempty('Please select a time'),
  phone: z.string().nonempty('Please enter a valid phone number'),
});

type ScheduleTourFormValues = z.infer<typeof scheduleTourSchema>;

const ScheduleTourForm: React.FC<{
  setIsModalOpen: (value: boolean) => void;
}> = ({ setIsModalOpen }) => {
  // Formik Setup
  const formik = useFormik<ScheduleTourFormValues>({
    initialValues: {
      fullName: '',
      email: '',
      date: '',
      time: '',
      phone: '',
    },
    validateOnBlur: false,
    validate: (values) => {
      const result = scheduleTourSchema.safeParse(values);
      if (!result.success) {
        return result.error.flatten().fieldErrors;
      }
      return {};
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      setIsModalOpen(false);
    },
  });

  const timeOptions = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ];

  const generateNext7Days = () => {
    return Array.from({ length: 7 }, (_, i) => {
      const day = dayjs().add(i, 'day');
      return {
        label: day.format('ddd D MMM'),
        value: day.format('YYYY-MM-DD'),
      };
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-8 pt-8">
        {/* Date Selection */}
        <Form.Item
          className="overflow-x-scroll hide-scrollbar"
          validateStatus={
            formik.errors.date && formik.touched.date ? 'error' : ''
          }
          help={
            formik.errors.date && formik.touched.date
              ? formik.errors.date
              : null
          }
        >
          <Radio.Group
            value={formik.values.date}
            onChange={(e) => {
              formik.setFieldValue('date', e.target.value);
            }}
            className="flex flex-row gap-5"
          >
            {generateNext7Days().map((date) => (
              <div key={date.value}>
                <Radio.Button
                  value={date.value}
                  className={`text-center px-10 py-[21.5px] h-full border-[2px] text-[16px] leading-[22.6px] font-normal font-alexandria 
                    ${styles.customRadioButton}
                    ${
                      formik.values.date === date.value
                        ? styles.activeDateCard
                        : 'bg-transparent text-[#606060B2] border-[#D1D1D6] hover:text-[#606060B2]'
                    }`}
                >
                  {date.label}
                </Radio.Button>
              </div>
            ))}
          </Radio.Group>
        </Form.Item>

        {/* Full Name and Email in the same row with gap of 24px */}
        <div className="flex gap-6">
          <div className="flex-1">
            <CustomInput
              label="Full Name"
              placeholder="Enter Full Name"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && formik.errors.fullName}
            />
          </div>
          <div className="flex-1">
            <CustomInput
              label="Email"
              placeholder="Enter Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />
          </div>
        </div>

        {/* Time selection (full row) */}
        <CustomSelectInput
          label="Select Time"
          value={formik.values.time}
          onChange={formik.setFieldValue}
          name="time"
          placeholder="Select a time"
          options={timeOptions.map((time) => {
            return { label: time, value: time };
          })}
          error={formik.errors.time && formik.touched.time}
          disabled={false}
        />

        {/* Phone input (full row) */}
        <CustomPhoneInput2
          label="Phone Number"
          value={formik.values.phone}
          onChange={formik.setFieldValue}
          name="phone"
          placeholder="Enter your phone number"
          error={formik.errors.phone && formik.touched.phone}
        />

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gold2 rounded-[24px] py-4 px-[142px] font-alexandria text-[16px] font-normal leading-[17.6px] text-center"
          >
            Schedule Tour
          </button>
        </div>
      </div>
    </form>
  );
};

export default ScheduleTourForm;
