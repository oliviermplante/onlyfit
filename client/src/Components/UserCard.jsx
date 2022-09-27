import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
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

const UserCard = ({ type, user }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${user.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [user.userId]);

  return (
<>
    <Link to={`/user/${user._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
    <div className="col-sm-12">
      <div className="box" type={type}>
      <h5>{user.name}</h5>
       <i className="fas fa-star"></i>
       <i className="fas fa-star"></i>
       <i className="fas fa-star"></i>
       <i className="fas fa-star"></i>
       <i className="fas fa-star"></i>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi, dolor ab sapiente voluptate labore provident harum fugit in est?</p>
       <button className="btn">Subscribe Now</button>
      </div>
    </div>
    </Container>
    </Link>
    
    </>
  );
};

export default UserCard;
