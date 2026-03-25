import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Admin() {
  const router = useRouter();

  // Giriş kontrolü
  useEffect(() => {
    if (localStorage.getItem("auth") !== "ok") {
      router.push("/login");
    }
  }, []);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNews = () => {
    alert("Haber eklendi: " + title);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Panel</h1>

      <button onClick={logout}>Çıkış Yap</button>

      <br /><br />

      <input
        placeholder="Haber başlığı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Haber içeriği"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={addNews}>Haber Ekle</button>
    </div>
  );
}
// force deploy
// son test
