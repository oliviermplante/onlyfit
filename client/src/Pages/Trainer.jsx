import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Postcard from "../Components/Postcard";
import Card from "../Components/Card";
import { useDispatch } from "react-redux";
import "./profile.css"


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 80px 0px;
  gap: 50px;
  justify-content: center;

`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Top = styled.div`
  margin-top: 400px;
  `;

const P = styled.p`
  color :white;
`;

const H = styled.h5`
  color: var(--main);
`

const Trainer = () => {
  const [channel, setChannel] = useState({});
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [video, setVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const [user, setUser] = useState({});
  const location = useLocation();

   useEffect(() => {
    const fetchData = async () => {
      const userRes = await axios.get(`/users/find/${user._id}`);
      const channelRes = await axios.get(
        `/users/find/${userRes.data._id}`
      );
      setChannel(channelRes.data);
    };
    fetchData();
  }, [user._id]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/find/${path}`);
      setUser(res.data);
    };
    fetchUser();
  }, [path]);
  

    useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts/user/${user._id}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [user._id]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/user/${user._id}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [user._id]);


  return (
    <>
     <Top />
     <div className="about container">
      <div className="row">
          <div className="content">
          <h6>
            {channel.name}'s Posts
          </h6>
            <Container>
            {posts.map((post) => (
             <Postcard key={post._id} post={post}/>
             ))} </Container>     
            </div>
            <div className="content">
          <h6>
            {channel.name}'s Videos
          </h6> 
            <Container>
            {videos.map((video) => (
             <Card key={video._id} video={video}/>
             ))} </Container>     
            </div>
            </div>
       </div>

    </>
  );
}

export default Trainer;