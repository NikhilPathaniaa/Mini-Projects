import { useState } from "react";  
import data from "./data.json";

export default function App(){
  const [items] = useState(data);

  return (
    <section>
      <div className="bg-indigo-500 p-8 text-center text-white rounded-b-3xl">
        <p className="mb-6">Your Result</p>
        <div className="flex items-center justify-center">
          <p className="bg-indigo-600 w-24 h-24 flex flex-col items-center 
                        justify-center gap-1 rounded-full 
                        text-white text-3xl font-bold">
            76<p className="text-slate-200 text-base font-normal">of 100</p>
          </p>
        </div>

        <h2 className="my-6">Great</h2>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>

      <div className="p-8 ">
        <h2 className="text-slate-700 mb-6 text-lg font-bold">Summary</h2>

        <div className="flex flex-col gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: `${item.color}15`,
                }}
                className="flex items-center justify-between p-4 rounded-lg"
              >
                <h3
                  style={{
                    color: item.color,
                  }}
                  className="flex items-center gap-2"
                >
                  <img src={item.icon} alt={item.category} />
                  {item.category}
                </h3>

                <p className="flex items-center gap-2 text-slate-500">
                  <span className="text-slate-700 font-bold">{item.score}</span>{" "}
                  / 100
                </p>
              </div>
            ))}
          </div>

        <button>Continue</button>
      </div>
    </section>
  );
}
