import { Modal } from 'antd';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import styles from './ChangePassword.module.css';

const baseInputClass =
  'w-full border bg-transparent border-[#606060B2] px-5 py-2 h-[56px] focus:outline-none focus:ring-1 focus:ring-[#FBB13C] rounded-[24px] font-light';

const ChangePassword: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Toggle password visibility
  const togglePasswordVisibility = (field: keyof typeof showPassword) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Validation schema
  const validationSchema = Yup.object({
    currentPassword: Yup.string()
      .required('Current password is required')
      .min(6, 'Password must be at least 6 characters long'),
    newPassword: Yup.string()
      .required('New password is required')
      .min(8, 'Password must be at least 8 characters long'),
      // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      // .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      // .matches(/[0-9]/, 'Password must contain at least one number')
      // .matches(
      //   /[@$!%*?&#]/,
      //   'Password must contain at least one special character'
      // ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), undefined], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleSubmit = (values: any) => {
    console.log('Password change request:', values);
    toggleModal(); // Close the modal after successful submission
  };

  return (
    <>
      <button
        onClick={toggleModal}
        type="button"
        className="relative bg-gold bg-clip-text text-transparent text-[18px] leading-[25px] font-alexandria font-light"
      >
        Change Password
      </button>

      <Modal
        className={styles.changePasswordModal}
        open={isModalOpen}
        onCancel={toggleModal}
        footer={null}
      >
        <div className="p-6 bg-[#FFFFF5] rounded-[16px] font-alexandria">
          <h2 className="text-lg font-medium text-center mb-6">
            Change Password
          </h2>
          <Formik
            initialValues={{
              currentPassword: '',
              newPassword: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-6">
                {(
                  [
                    'currentPassword',
                    'newPassword',
                    'confirmPassword',
                  ] as Array<keyof typeof showPassword>
                ).map((field) => (
                  <div key={field} className="relative">
                    <Field
                      name={field}
                      type={showPassword[field] ? 'text' : 'password'}
                      className={`${baseInputClass}`}
                      placeholder={
                        field === 'currentPassword'
                          ? 'Current Password'
                          : field === 'newPassword'
                            ? 'New Password'
                            : 'Confirm Password'
                      }
                    />
                    <ErrorMessage
                      name={field}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility(field)}
                      className="absolute right-4 top-4"
                      aria-label={`Toggle ${field}`}
                    >
                      {showPassword[field] ? (
                        <EyeOutlined />
                      ) : (
                        <EyeInvisibleOutlined />
                      )}
                    </button>
                  </div>
                ))}

                <button
                  type="submit"
                  className="bg-gold2 text-white px-6 py-3 rounded-[24px] font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Updating...' : 'Change Password'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default ChangePassword;
