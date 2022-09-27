import styled from "styled-components";
import { useEffect, useState } from "react";
import Upload from "./Upload";
import UploadPost from "./UploadPost";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Postcard from "../Components/Postcard";
import Card from "../Components/Card";
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

const ProfilePage = () => {
  const [channel, setChannel] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  const [open, setOpenVideo] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [video, setVideo] = useState({});
  const [videos, setVideos] = useState([]);

   useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${post.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [post.userId]);

    useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts/user/${currentUser._id}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [post.userId]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/user/${currentUser._id}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [video.userId]);


  return (
    <>
     <Top />
      <div className="about container">
      <div className="row">
          <h6>
            <span>U</span>pload Content
          </h6>
              <div className="col">
                <div className="box" onClick={() => setOpenVideo(true)}>
                <H>Upload Video</H>
                 <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi, dolor ab sapiente voluptate labore provident harum fugit in est?</P>
                </div>
              </div>

              <div className="col">
              <div className="box" onClick={() => setOpenPost(true)}>
              <H>Upload Post</H>
                 <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi, dolor ab sapiente voluptate labore provident harum fugit in est?</P>
                </div> 
              </div>
            </div> 
          </div>
          {open && <Upload setOpen={setOpenVideo} />}
          {openPost && <UploadPost setOpenPost={setOpenPost} />}
          <div className="content">
          <h6>
            <span>Y</span>our Posts
          </h6> 
         
            <Container>
            {posts.map((post) => (
             <Postcard key={post._id} post={post}/>
             ))} </Container>     
            </div>
            <div className="content">
          <h6>
            <span>Y</span>our Videos
          </h6> 
         
            <Container>
            {videos.map((video) => (
             <Card key={video._id} video={video}/>
             ))} </Container>     
            </div>

    </>
  );
}

export default ProfilePage;