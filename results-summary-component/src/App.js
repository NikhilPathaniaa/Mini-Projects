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
        {items.length} items
      </div>
    </section>
  );
}