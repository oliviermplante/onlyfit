import axios from "axios";
import { useState } from "react";
import styles from "./admin.css";

const Admin = ({ posts, videos }) => {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [video, setVideo] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/posts/${id}`);
      window.location.reload();
    } catch (err) {}
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/posts/${id}`, {
        title,
        desc,
      });
      window.location.reload();
    } catch (err) {}
  };

  const handleVideoDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/videos/${id}`);
      window.location.reload();
    } catch (err) {}
  };

  const handleVideoUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/videos/${id}`, {
        video,
      });
      window.location.reload();
    } catch (err) {}
  };

  const handleCreate = async () => {
    try {
      await axios.post("http://localhost:3000/api/posts", {
        title,
        desc,
      });
      window.location.reload();
    } catch (err) {}
  };

  const handleVideoCreate = async () => {
    try {
      await axios.post("http://localhost:3000/api/videos", {
        video,
      });
      window.location.reload();
    } catch (err) {}
  };

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      window.location.reload();
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.admin}>
      <div className={styles.login}>
        <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleClick}>Login</button>
        {error && <span>Something went wrong...</span>}
      </div>
      <div className={styles.create}>
        <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="desc" onChange={(e) => setDesc(e.target.value)} />
        <button onClick={handleCreate}>Create</button>
      </div>
      <div className={styles.create}>
        <input type="text" placeholder="video" onChange={(e) => setVideo(e.target.value)} />
        <button onClick={handleVideoCreate}>Create</button>
      </div>
      <div className={styles.posts}>
        {posts.map((p) => (
          <div className={styles.post}>
            <img src={p.img} alt="" />
            <div className={styles.postInfo}>
              <span className={styles.postTitle}>{p.title}</span>
              <span className={styles.postDesc}>{p.desc}</span>
            </div>
            <div className={styles.postButtons}>
              <button className={styles.postButton} onClick={() => handleDelete(p._id)}>
                Delete
              </button>
              <button className={styles.postButton} onClick={() => handleUpdate(p._id)}>
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.posts}>
        {videos.map((v) => (
          <div className={styles.post}>
            <video src={v.video} controls />
            <div className={styles.postButtons}>
              <button className={styles.postButton} onClick={() => handleVideoDelete(v._id)}>
                Delete
              </button>
              <button className={styles.postButton} onClick={() => handleVideoUpdate(v._id)}>
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
