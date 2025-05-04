import React, { useState } from 'react';
import { Form, Button, Modal, Checkbox, Radio, Select } from 'antd';
import './MoreFilters.css';
import { FormikProps } from 'formik';
import { SearchFormProps } from '../../../../types/types';

const MoreFilters: React.FC<{ formik: FormikProps<SearchFormProps> }> = ({
  formik,
}) => {
  const { errors } = formik;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const iconSrc = !isOpen ? 'gold-down-icon.svg' : 'black-down-icon.svg';
  const toggleDialog = () => setIsOpen(!isOpen);

  // Amenities options
  const amenitiesOptions = [
    'Central A/C',
    'Maids Room',
    'Balcony',
    'Shared Pool',
    'Shared Spa',
    'Shared Gym',
    'Concierge Service',
    'Covered Parking',
    'View of Water',
    'View of Landmark',
    'Pets Allowed',
    'Study',
    'Private Garden',
    'Air Conditioning',
  ];

  const minAreas = [
    { label: 'Below 50 ft²', value: '0' },
    { label: '50 ft²', value: '50' },
    { label: '100 ft²', value: '100' },
    { label: '200 ft²', value: '200' },
  ];

  const maxAreas = [
    { label: '100 ft²', value: '100' },
    { label: '200 ft²', value: '200' },
    { label: '500 ft²', value: '500' },
    { label: 'Above 500 ft²', value: '5000000' },
  ];

  // Completion status options
  const completionStatusOptions = ['Any', 'Off-plan', 'Ready'];

  return (
    <div className="more-filters">
      <Button className={isOpen ? 'active-btn' : ''} onClick={toggleDialog}>
        Others <img src={`/assets/icons/${iconSrc}`} />
      </Button>
      <Modal
        rootClassName="more-filters-modal"
        open={isOpen}
        onCancel={toggleDialog}
        footer={
          <div
            className="flex flex-row gap-6 py-4 px-10 justify-end font-alexandria"
            style={{
              boxShadow: '0px 0px 5px 2px #F2E26A4D',
            }}
          >
            <Button className="h-[50px] rounded-[24px] bg-transparent text-[#BE932A] border-[1px] border-[#BE932A] leading-[16.8px] text-center search-btn">
              Save Search
            </Button>
            <Button className="bg-[#BE932A] border-[1px] border-[#BE932A]  h-[50px] rounded-[24px] text-[#FFFFF5] leading-[16.8px] text-center view-btn">
              View Homes (500+)
            </Button>
          </div>
        }
      >
        <div className="flex flex-col gap-4 px-5 font-alexandria">
          <div>
            <h1 className="px-3 py-6 text-[16px] leading-[17.6px] font-normal text-black">
              More Filters
            </h1>
            <hr className="border-[#D1D1D6] mx-auto text-center w-full" />
          </div>
          <div className="flex flex-col gap-8 px-3 py-6">
            <Form.Item
              validateStatus={errors.others?.furnitures ? 'error' : ''}
              help={errors.others?.furnitures}
              label={
                <p className="flex flex-row items-center justify-center gap-[10px] font-alexandria font-normal text-[14px] leading-[16.8px] text-black">
                  <img src="/assets/icons/furniture.svg" />
                  Furniture's
                </p>
              }
            >
              <Radio.Group
                name="others.furnitures"
                value={formik.values.others.furnitures}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="more-filters-custom-group"
              >
                <Radio value="All Furnishings">All Furnishings</Radio>
                <Radio value="Furnished">Furnished</Radio>
                <Radio value="Unfurnished">Unfurnished</Radio>
                <Radio value="Party Furnished">Party Furnished</Radio>
              </Radio.Group>
            </Form.Item>

            {/* Completion Status (Radio button) */}
            <Form.Item
              validateStatus={errors.others?.completiobn_status ? 'error' : ''}
              help={errors.others?.completiobn_status}
              label={
                <p className="flex flex-row items-center justify-center gap-[10px] font-alexandria font-normal text-[14px] leading-[16.8px] text-black">
                  <img src="/assets/icons/status.svg" />
                  Completion Status
                </p>
              }
            >
              <Radio.Group
                name="others.completiobn_status"
                value={formik.values.others.completiobn_status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="more-filters-custom-group"
              >
                {completionStatusOptions.map((status) => (
                  <Radio key={status} value={status}>
                    {status}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>

            {/* Size (Min & Max Area) */}
            <Form.Item
              validateStatus={errors.others?.size?.min_area ? 'error' : ''}
              help={errors.others?.size?.min_area}
              label={
                <p className="flex flex-row items-center justify-center gap-[10px] font-alexandria font-normal text-[14px] leading-[16.8px] text-black">
                  <img src="/assets/icons/size.svg" />
                  Property Size(Sqft)
                </p>
              }
              className="status-container"
            >
              <div className="flex gap-2">
                <Form.Item
                  validateStatus={errors.others?.size?.min_area ? 'error' : ''}
                  help={errors.others?.size?.min_area}
                  name="others.size.min_area"
                >
                  <Select
                    placeholder="Min Area"
                    value={formik.values.others.size.min_area}
                    onChange={(value) =>
                      formik.setFieldValue('others.size.min_area', value)
                    }
                    onBlur={formik.handleBlur}
                  >
                    {minAreas.map((area) => (
                      <Select.Option key={area.value} value={area.value}>
                        {area.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <span className="text-[#292929] font-alexandria font-light">
                  -
                </span>
                <Form.Item
                  validateStatus={errors.others?.size?.max_area ? 'error' : ''}
                  help={errors.others?.size?.max_area}
                  name="others.size.max_area"
                >
                  <Select
                    placeholder="Max Area"
                    value={formik.values.others.size.max_area}
                    onChange={(value) =>
                      formik.setFieldValue('others.size.max_area', value)
                    }
                    onBlur={formik.handleBlur}
                  >
                    {maxAreas.map((area) => (
                      <Select.Option key={area.value} value={area.value}>
                        {area.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </Form.Item>

            {/* Amenities (Checkbox group) */}
            <Form.Item
              validateStatus={errors.others?.amenities ? 'error' : ''}
              help={errors.others?.amenities}
              label={
                <p className="flex flex-row items-center justify-center gap-[10px] font-alexandria font-normal text-[14px] leading-[16.8px] text-black">
                  <img src="/assets/icons/amenities.svg" />
                  Amenities
                </p>
              }
              className="amenities-container"
            >
              <Checkbox.Group
                name="others.amenities"
                value={formik.values.others.amenities}
                onChange={(checkedValues) =>
                  formik.setFieldValue('others.amenities', checkedValues)
                }
                className="grid grid-cols-3 gap-5"
              >
                {amenitiesOptions.map((amenity) => (
                  <Checkbox key={amenity} value={amenity}>
                    {amenity}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Form.Item>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MoreFilters;
