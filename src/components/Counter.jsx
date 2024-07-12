import React, { useState } from "react";

const Counter = () => {
  //2.usestate'i tutulan değerin değişimi bileşen içeriisnde ki arayüzü de etkilesin isityorsak veriyi depolamak tercih ederiz.
  //usestate'i çağırdığımız zaman dizi içeirisnde  iki değer döndürür.
  //1.değer: tuttuğumuz veri
  //2.değer: tuttuğumuz veriyi değiştirmeye yarayan fonskiyon

  //   2.const deger = useState(10);

  //   console.log(deger);

  //!3.statede ki değer değiştiğinde react tekrardan render işlemini yapar bu sayede arayüz güncel kalmış olur.
  const [count, setCount] = useState(10);

  //1. let count = 10;

  //1.sayfa yüklendiği anda react render ismini verdiğimiz bir işlem gerçekleştirir.component return satırında yazdığımız jsx kodunu html koduna çevirir ve DOM'a gönderir(ekrana basar)

  return (
    <div className="d-flex justify-content-center align-items-center gap-5">
      <button
        disabled={count === 0}
        onClick={() => {
          setCount(count - 1);
        }}
        className="btn btn-danger"
      >
        Azalt
      </button>
      {/* <p className="lead fs-1">0</p> */}
      <p className="lead fs-1">{count}</p>

      <button
        onClick={() => {
          //   count++;
          //   console.log(count);
          // setCount(20);
          setCount(count + 1);
        }}
        className="btn btn-success"
      >
        Arttır
      </button>

      <button onClick={() => setCount(0)} className="btn btn-primary">
        SIFIRLA
      </button>
    </div>
  );
};

export default Counter;
