import React from "react";
import { housesData } from "../data";
import { useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";
//caixa de mensagem
const PropertyDetails = () => {
  const { id } = useParams();
  console.log(id);

  const house = housesData.find((house) => house.id === parseInt(id));
  console.log(house);

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:center lg:justify-between">
          <div>
            <h2 className="text-2xl">{house.name}</h2>
            <h2 className="text-lg mb-4">{house.address}</h2>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2">
            <div className="bg-white-500 rounded-full text-green px-30">
              {house.type}
            </div>
            <div className="text-3xl font-semibold text-cyan-600">
              {house.country}
            </div>
          </div>
          <div>${house.price}</div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8"></div>
            <img src={house.imageLg} alt="" />
            <div className="flex gap -x-6 text-cyan-600 mb-6">
              <div className="flex gap-x-2 items-center ">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 p-2 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div className="font-bold text-lg">{house.agent.name}</div>
                <Link to="" className="text-violet-700 text-sm">
                  View Listings
                </Link>
              </div>
            </div>
            <form className=" flex flex-col  gap-y-4">
              <input
                className="border border-gray-300 focus:border-cyan-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Name"
              />
              <input
                className="border border-gray-300 focus:border-cyan-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Email"
              />
              <input
                className="border border-gray-300 focus:border-cyan-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Phone"
              />
              <textarea
                className=" border border-gray-300 focus:border-cyan-700 outline-none resize-none rounded w-full p-4 h-36 text-sm test-gray-400"
                placeholder="Message"
                defaultValue="Deixe sua opinião"
              ></textarea>
              <div className=" flex grap-x-2">
                <button className=" bg-cyan-700 hover:bg-cyan-800 text-white rounded-p-4 text-sm w-full transition">
                  Send message
                </button>
                <button className=" border border-bg-cyan-700 hover:bg-cyan-800 text-cyan-700rounded-p-4 text-sm w-full transition">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
