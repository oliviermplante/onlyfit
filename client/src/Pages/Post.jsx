import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { fetchSuccess} from "../redux/postSlice";
import './post.css';

const PostInput = styled.input`
  border: none;
  color: #666;
  font-size: 18px;
  line-height: 25px;
`;

const singlePostInput = styled.input`
  outline: none;
  `;

const Top = styled.div`
  margin-top: 200px;
  `;
  
const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ImagePosition = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ChannelName = styled.p`
  font-weight: 500;
  text-align: center;
`;

const Description = styled.p`
  font-size: 14px;
  text-align: center;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 5px;
  cursor: pointer;
  border: 1px solid white;
`;

const postButton = styled.div`
  width: 100px;
  border: none;
  background-color: teal;
  padding: 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 20px;
`;

const EditDelete = styled.div`
  position: relative;
  foat: right;
  top: 100px;
`;


const Post = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentPost } = useSelector((state) => state.post);
  const [updateMode, setUpdateMode] = useState(false);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  const [channel, setChannel] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postRes = await axios.get(`/posts/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${postRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(postRes.data));
        setTitle(postRes.data.title);
        setDesc(postRes.data.desc);
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${currentPost._id}`, { data: { name: currentUser.name }, });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${currentPost._id}`, {
        name: currentUser.name,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <>
    <Top />
     <ImagePosition><Image src={channel.img} /></ImagePosition>
      <ChannelName>A Post By {channel.name}</ChannelName>
      <Title>
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {currentPost.title}
            
            
          </h1>
        )} </Title>
       <br /><br />
    <Container>
      <Content>
        <Description>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{currentPost.desc}</p>
        )} <Hr />
        {updateMode && (
          <i className="singlePostIcon far fa green" onClick={handleUpdate}>
            Update Post
          </i> )}
        </Description> 
      </Content>
    </Container>
    {currentPost.userId === currentUser?._id && (
              <div className="singlePostEdit">
               <i className="singlePostIconLast far fa-trash-alt red" onClick={handleDelete}>  Delete Post</i> 
    <i className="singlePostIconLast far fa-edit" onClick={() => setUpdateMode(true)}>  Edit Post</i>
              </div>)}
    </>
  );
};

export default Post;
