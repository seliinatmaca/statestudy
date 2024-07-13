import React, { useState } from "react";

const Accordion = ({ title, description }) => {
  // let isOpen = false;

  const cevap = useState(false);
  console.log(cevap);

  //camelcase isimlendirme tercih ediyoruz
  const [isOpen, setIsOpen] = useState(false);

  //   console.log(props.title);
  //   console.log(props.description);

  console.log(title);
  console.log(description);

  return (
    <div className="bg-white rounded-3 p-3 text-dark">
      <div className="d-flex justify-content-between align-items-center ">
        {/* <h2>Neden Biz?</h2> */}
        <h2>Soul - Fragman & Vizyon Tarihi</h2>
        <h2>{title}</h2>

        <button
          onClick={() => {
            // isOpen = true;
            // console.log(isOpen);

            // isopen değerini trueya çekiyoruz
            // setIsOpen(true);
            // setIsOpen(isOpen === true ? false : true)
            setIsOpen(!isOpen);
          }}
          className="btn btn-primary"
        >
          {/* + */}
          {isOpen ? "-" : "+"}
        </button>
      </div>

      {isOpen && (
        // <p className="mt-3 lead">
        //   Soul, Pixar Animation Studios tarafından üretilen ve Walt Disney
        //   Pictures tarafından yayınlanan 2020 Amerikan bilgisayar animasyonlu
        //   fantastik komedi-drama filmidir.

        // </p>
        <p className="mt-3 lead">{description}</p>
      )}
    </div>
  );
};

export default Accordion;
