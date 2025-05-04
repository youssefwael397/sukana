import { Input, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';
import './SearchBar.css';

interface SearchBarProps<T> {
  formik: FormikProps<T>;
  name: string;
  placeholder: string;
}

const SearchBar = <T extends Record<string, any>>({
  formik,
  name,
  placeholder,
}: SearchBarProps<T>) => {
  const { errors, touched } = formik;

  const errorMessage =
    errors[name] && touched[name] ? String(errors[name]) : undefined;

  return (
    <Form.Item
      validateStatus={errorMessage ? 'error' : ''}
      help={errorMessage}
      className="custom-search-bar"
    >
      <Input
        name={name}
        placeholder={placeholder}
        prefix={<SearchOutlined />}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </Form.Item>
  );
};

export default SearchBar;
