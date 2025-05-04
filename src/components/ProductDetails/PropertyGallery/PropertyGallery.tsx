import {  Carousel, Image, Modal } from 'antd';
import  { FC, useState } from 'react';
import '../../../styles/gallery.css'

interface PropertyGalleryPreps {
  images: { src: string; alt: string }[];
}

const PropertyGallery: FC<PropertyGalleryPreps> = ({ images }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-row rounded-[24px] overflow-hidden max-h-[441px] bg-[#F2E26A] relative">
      {/* Main Image */}
      <div className="flex-[3] pr-[3px]">
        <img
          src="/assets/property/image.png"
          alt="Main Property"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Side Images */}
      <div className="flex-[2] flex flex-col">
        <div className="flex-1 h-1/3">
          <img
            src="/assets/property/image1.png"
            alt="Property Interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 h-1/3">
          <img
            src="/assets/property/image2.png"
            alt="Property Kitchen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 h-1/3">
          <img
            src="/assets/property/image3.png"
            alt="Property Living Room"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* button to open the gallery */}
      <button
        className="absolute bottom-0 left-0 px-8 py-5 rounded-tr-[24px] bg-gold opacity-70 hover:opacity-100 duration-300 transition-all text-medium text-[18px] leading-[22px] text-black font-alexandria tracking-wider"
        onClick={() => setVisible(true)}
      >
        Open Gallery
      </button>
      {/* MODAL TO SLIDE IMAGES */}
      <Modal
        open={visible}
        footer={null}
        onCancel={() => setVisible(false)}
        className="gallery-modal"
        rootClassName="root-gallery-modal"
        width="80%"
      >
        <Carousel dots={false} arrows infinite={true}>
          {images.map((image, index) => (
            <div
              key={`img-${index}`}
              style={{ textAlign: 'center' }}
              id="gallery-inner-carousel"
              className="position-relative"
            >
              <Image
                src={image.src}
                alt={image.alt}
                preview={false}
                width={'100%'}
              />
              {/* <p className="m-0 d-flex justify-content-center">
                <span className="text-white bg-black bg-opacity-50 px-4 py-2 text-center">
                  {title}
                </span>
              </p> */}
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};

export default PropertyGallery;
