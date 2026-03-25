import { useState } from "react";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNews = () => {
    alert("Haber eklendi: " + title);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Panel</h1>

      <input
        placeholder="Haber başlığı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <textarea
        placeholder="Haber içeriği"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <button onClick={addNews}>Haber Ekle</button>
    </div>
  );
}
// güncelleme
