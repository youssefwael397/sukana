import React from 'react';
import { Radio, Form } from 'antd';
import { FormikProps } from 'formik';
import './BedsAndBathsDropdown.css';
import CustomDropdown from '../../../FormItems/CustomDropdown/CustomDropdown';
import { SearchFormProps } from '../../../../types/types';

interface BedsAndBathsDropdownProps {
  formik: FormikProps<SearchFormProps>;
}

const BedsAndBathsDropdown: React.FC<BedsAndBathsDropdownProps> = ({
  formik,
}) => {
  const { errors } = formik;
  return (
    <CustomDropdown
      className="beds-and-baths-dropdown"
      label="Beds & Baths"
      error={errors.beds || errors.baths ? true : false}
      content={
        <>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="beds"
                className="font-alexandria text-[14px] leading-[14px] font-light text-black"
              >
                Bedrooms
              </label>
              <Form.Item
                validateStatus={errors.beds ? 'error' : ''}
                help={errors.beds}
              >
                <Radio.Group
                  name="beds"
                  value={formik.values.beds}
                  onChange={formik.handleChange}
                  className="flex gap-2 custom-radio-group"
                >
                  {['Studio', '1', '2', '3', '4', '5', '5+'].map((bed) => (
                    <Radio key={bed} value={bed}>
                      {bed}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="baths"
                className="font-alexandria text-[14px] leading-[14px] font-light text-black"
              >
                Bathrooms
              </label>
              <Form.Item
                validateStatus={errors.baths ? 'error' : ''}
                help={errors.baths}
              >
                <Radio.Group
                  name="baths"
                  value={formik.values.baths}
                  onChange={formik.handleChange}
                  className="flex gap-2 custom-radio-group"
                >
                  {['1', '2', '3', '4', '5', '5+'].map((bath) => (
                    <Radio key={bath} value={bath} className="custom-radio">
                      {bath}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </>
      }
    />
  );
};

export default BedsAndBathsDropdown;
