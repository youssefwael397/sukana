import React from 'react';
import { Button } from 'antd';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import ScreenWrapper from '../../Shared/ScreenWrapper/ScreenWrapper';
import PriceRangeDropdown from './PriceRangeDropdown/PriceRangeDropdown';
import HomeTypesDropdown from './HomeTypesDropdown/HomeTypesDropdown';
import BedsAndBathsDropdown from './BedsAndBathsDropdown/BedsAndBathsDropdown';
import MoreFilters from './MoreFilters/MoreFilters';
import SearchBar from '../../FormItems/SearchBar/SearchBar';
import './buy-search.css';
import { SearchFormProps } from '../../../types/types';

const SearchAndFilter: React.FC = () => {
  const initialValues: SearchFormProps = {
    location: '',
    min_price: '',
    max_price: '',
    home_types: [],
    beds: '',
    baths: '',
    others: {
      furnitures: '',
      completiobn_status: '',
      amenities: [],
      size: {
        min_area: '',
        max_area: '',
      },
    },
  };

  const validationSchema = Yup.object({
    location: Yup.string().required('Location is required'),
    min_price: Yup.number()
      .required('Minimum price is required')
      .min(0, 'Minimum price must be greater than 0'),
    max_price: Yup.number()
      .required('Maximum price is required')
      .min(Yup.ref('min_price'), 'Max price must be greater than min price'),
    home_types: Yup.array().min(1, 'At least one home type is required'),
    beds: Yup.string().required('Please select the number of beds'),
    baths: Yup.string().required('Please select the number of baths'),
    others: Yup.object({
      furnitures: Yup.string().nullable(),
      completiobn_status: Yup.string().nullable(),
      amenities: Yup.array().of(Yup.string()).nullable(),
      size: Yup.object({
        min_area: Yup.number()
          .min(0, 'Minimum area must be greater than 0')
          .nullable(),
        max_area: Yup.number()
          .nullable()
          .min(Yup.ref('min_area'), 'Max area must be greater than min area'),
      }),
    }).nullable(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik: FormikProps<SearchFormProps>) => (
        <form
          onSubmit={formik.handleSubmit}
          id="buy-search"
          className="pt-8 pb-4"
          style={{ boxShadow: '0px 0px 5px 2px #F2E26A4D' }}
        >
          <ScreenWrapper screenWidth="6xl">
            <div className="flex gap-4">
              <SearchBar
                name="location"
                placeholder="City, Community or Building"
                formik={formik}
              />
              <PriceRangeDropdown />
              <HomeTypesDropdown formik={formik} />
              <BedsAndBathsDropdown formik={formik} />
              <MoreFilters formik={formik} />
              <Button htmlType="submit">Save Search</Button>
            </div>
          </ScreenWrapper>
        </form>
      )}
    </Formik>
  );
};

export default SearchAndFilter;
