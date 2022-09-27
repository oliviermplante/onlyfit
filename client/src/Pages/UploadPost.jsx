import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Top = styled.div`
  margin-top: 60px;
  `;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 100;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Wrapper = styled.div`
  width: 1000px;
  height: 750px;
  background-color: black;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: white 1px solid;
  margin-bottom: 20px;
`;

const Close = styled.div`
  position: relative;
  text-align: right;
  margin-top: -20px;
  margin-right: -15px;
  cursor: pointer;
`;

const Title = styled.h1`
  text-align: center;
`;

const FileInput = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: white;
  border-radius: 3px;
  padding: 5px 0px;
  background-color: transparent;
  `;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: white;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  z-index: 999;
`;
const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: white;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Button = styled.button`
  border-radius: 3px;
  border: white 1px solid;
  padding: 4px 100px;
  margin: 5px auto;
  font-weight: 500;
  cursor: pointer;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Label = styled.label`
  font-size: 14px;
`;
const UploadPost = ({ setOpenPost }) => {
  const [img, setImg] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [postPerc, setPostPerc] = useState(0);
  const [inputs, setInputs] = useState({});
  const [tags, setTags] = useState([]);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(","));
  };

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setPostPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);

  const handleUpload = async (e)=>{
    e.preventDefault();
    const res = await axios.post("/posts", {...inputs, tags})
    setOpenPost(false)
    res.status===200 && navigate(`/post/${res.data._id}`)
  }

  return (
    <>
    <Top />
    <Container>
     <Wrapper>
     <Close onClick={() => setOpenPost(false)}>X</Close>
        <Title>Upload a New Post</Title>
        <Label>Post:</Label>
        <Input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <Desc
          placeholder="Description"
          name="desc"
          rows={8}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Separate the tags with commas."
          onChance={handleTags}
        />
        <Label>Image:</Label>
        {imgPerc > 0 ? (
          "Uploading:" + imgPerc + "%"
        ) : (
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
          />
        )}
        <Button onClick={handleUpload}>Upload</Button>
      </Wrapper>
    </Container>
    </>
  );
};

export default UploadPost;
