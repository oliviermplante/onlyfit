import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../Components/Card";

const Top = styled.div`
  margin-top: 200px;
  `;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/search${query}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [query]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`/users/search${query}`);
      setUsers(res.data);
    };
    fetchUsers();
  }, [query]);

  return (
    <>
    <Top />
  <Container>
    {videos.map(video=>(
      <Card key={video._id} video={video}/>
    ))}
  </Container>
    <Container>
    {users.map(user=>(
      <Card key={user._id} user={user}/>
    ))}
  </Container>
  </>
  );
};

export default Search;
