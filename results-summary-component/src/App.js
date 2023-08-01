import { useState } from "react";  
import data from "./data.json";

export default function App(){
  const [items] = useState(data);

  return (
    <section>
      <div>
        <h2>Your Result</h2>
        <p><span>76</span>of 100</p>

        <h2>Great</h2>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>

      <div>
        <h2>Summary</h2>

        <div>
          {items.map((item, index) => {
            <div key={index} style={{
              backgroundColor: item.color,
            }}>
              <h3>
                <img src={item.icon} alt={item.category} />
                {item.category}
              </h3>

              <p>
                <span>{item.score}</span> / 100
              </p>

            </div>
          })}
        </div>

        <button>Continue</button>
      </div>
    </section>
  );
}