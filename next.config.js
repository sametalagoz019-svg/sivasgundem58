import { useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Sivas Gündem 58</h1>

      {news.length === 0 ? (
        <p>Henüz haber yok</p>
      ) : (
        news.map((item, i) => (
          <div key={i}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))
      )}
    </div>
  );
}
