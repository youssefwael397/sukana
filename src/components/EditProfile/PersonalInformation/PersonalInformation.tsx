import React from 'react';
import EditProfileTitle from '../EditProfileTitle';
import PersonalInformationForm from './PersonalInformationForm';

const PersonalInformation: React.FC = () => {
  return (
    <div>
      <EditProfileTitle title="Personal Information" />
      <PersonalInformationForm />
    </div>
  );
};

export default PersonalInformation;
