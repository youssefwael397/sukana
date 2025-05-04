import React from 'react';
import { Form, Select } from 'antd';
import CustomDropdown from '../../../FormItems/CustomDropdown/CustomDropdown';
import { FormikProps } from 'formik';
import { SearchFormProps } from '../../../../types/types';

const { Option } = Select;

const HomeTypesDropdown: React.FC<{
  formik: FormikProps<SearchFormProps>;
}> = ({ formik }) => {
  const { errors } = formik;

  return (
    <CustomDropdown
      className="home-types-dropdown"
      label="Home Types"
      error={errors.home_types ? true : false}
      content={
        <>
          <Form.Item
            className="w-[250px]"
            validateStatus={errors.home_types ? 'error' : ''}
            help={errors.home_types}
          >
            <Select
              mode="multiple"
              placeholder="Home Types"
              value={formik.values.home_types}
              onChange={(value) => formik.setFieldValue('home_types', value)}
              onBlur={() => formik.setFieldTouched('home_types', true)}
            >
              {['House', 'Condo', 'Townhome', 'Multi-family', 'Land'].map(
                (type) => (
                  <Option key={type} value={type}>
                    {type}
                  </Option>
                )
              )}
            </Select>
          </Form.Item>
        </>
      }
    />
  );
};

export default HomeTypesDropdown;
