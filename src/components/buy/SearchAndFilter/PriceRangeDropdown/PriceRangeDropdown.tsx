import React from 'react';
import { Form, Select } from 'antd';
import CustomDropdown from '../../../FormItems/CustomDropdown/CustomDropdown';
import './PriceRangeDropdown.css';
import { useFormikContext } from 'formik';
import { SearchFormProps } from '../../../../types/types';

const { Option } = Select;

const PriceRangeDropdown: React.FC = () => {
  const { errors, values, setFieldValue, handleBlur } =
    useFormikContext<SearchFormProps>();

  const minPrices = [
    { label: 'Below $100,000', value: '0' },
    { label: '$100,000', value: '100000' },
    { label: '$300,000', value: '300000' },
    { label: '$500,000', value: '500000' },
  ];

  const maxPrices = [
    { label: '$300,000', value: '300000' },
    { label: '$500,000', value: '500000' },
    { label: '$1,000,000', value: '1000000' },
    { label: 'Above $1,000,000', value: '1000000000000' },
  ];

  return (
    <CustomDropdown
      className="price-range-dropdown"
      label="Any Price"
      error={errors.min_price || errors.max_price ? true : false}
      content={
        <div className="flex flex-col gap-3">
          <div className="text-[#292929] text-[14px] leading-[14px] font-alexandria font-light">
            Price Range
          </div>
          <div className="flex flex-row gap-2">
            <Form.Item
              // label="Min Price"
              name="min_price"
              validateStatus={errors.min_price ? 'error' : ''}
              help={errors.min_price}
            >
              <Select
                suffixIcon={<img src="/assets/icons/select-icon.svg" />}
                placeholder="No min"
                value={values.min_price}
                onChange={(value) => setFieldValue('min_price', value)}
                onBlur={handleBlur}
              >
                {minPrices.map((range) => (
                  <Option key={range.value} value={range.value}>
                    {range.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <span className="text-[#292929] font-alexandria font-light">-</span>

            <Form.Item
              className="bg-transparent"
              // label="Max Price"
              name="max_price"
              validateStatus={errors.max_price ? 'error' : ''}
              help={errors.max_price}
            >
              <Select
                className="bg-transparent"
                suffixIcon={<img src="/assets/icons/select-icon.svg" />}
                placeholder="No max"
                value={values.max_price}
                onChange={(value) => setFieldValue('max_price', value)}
                onBlur={handleBlur}
              >
                {maxPrices.map((range) => (
                  <Option key={range.value} value={range.value}>
                    {range.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>
      }
    />
  );
};

export default PriceRangeDropdown;
