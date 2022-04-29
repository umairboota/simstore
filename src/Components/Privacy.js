import React from 'react';
import Cards from './Cards';

export default function Privacy() {
  return (
    <div className=" mt-28 text-center">
    <h2 className=" text-4xl">Privacy Policy</h2>
    <p className="mt-8 text-base ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque natus <br />
      nesciunt dolores quas ipsum ducimus maxime veritatis inventore impedit <br />
      repellat accusamus explicabo quis, molestiae earum ab laudantium
      assumenda. Quia, odio.
    </p>
    <div className="mt-28 inline-flex">

    <Cards/>
    <Cards/>
    <Cards/>
    </div>
  </div>
  );
}
