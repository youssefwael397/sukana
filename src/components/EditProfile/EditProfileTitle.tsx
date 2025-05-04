import React from 'react';

interface EditProfileTitleProps {
  title: string;
}

const EditProfileTitle: React.FC<EditProfileTitleProps> = ({ title }) => {
  return (
    <div className="relative inline-block">
      <h3 className="bg-gold bg-clip-text text-transparent font-alexandria font-light text-[20px] leading-[20px]">
        {title}
      </h3>
      <div className="absolute bottom-[-4px] left-0 bg-gold h-[1px] w-[75%] rounded-full"></div>
    </div>
  );
};

export default EditProfileTitle;
