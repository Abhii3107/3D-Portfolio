
import React from "react";
import achievements from "../constants/achieve";

const Achieve = () => {
  return (
    <div className="mt-10 px-6">
      <h2 className="text-white text-3xl font-bold mb-6">Achievements</h2>
      <div className="flex flex-col gap-6">
        {achievements.map((item, index) => (
          <div key={index} className="bg-tertiary p-5 rounded-2xl shadow-md">
            <p className="text-secondary text-sm">{item.year}</p>
            <h3 className="text-white text-xl font-semibold">{item.title}</h3>
            <p className="text-pink-400 text-sm font-medium">{item.level}</p>
            <p className="text-white mt-2">{item.description}</p>

            {item.certificate_link && (
              <div className="mt-2">
                <a
                  href={item.certificate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mr-4"
                >
                  View Certificate
                </a>
              </div>
            )}

            {item.See_Winning_Moment && (
              <div className="mt-1">
                <a
                  href={item.See_Winning_Moment}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  See Winning Moment
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achieve;
