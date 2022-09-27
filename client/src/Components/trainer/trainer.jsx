import './trainer.css'
import axios from 'axios';
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import UserCard from "../../Components/UserCard";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
gap: 50px;
justify-content: center;
`;

const Trainer = ({type}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const res = await axios.get("/users/random");
        setUsers(res.data);
      };
      fetchUsers();
    }, [type]);

      
    return (
      <>
        <div className="trainer container">
          <div className="row">           
            <div className="content">
                <h6>
                  <span>O</span>ur Trainers
                </h6>
            </div>
          <Container>{users.map((user) => (
        <UserCard key={user._id} user={user}/>
      ))}</Container>   
            </div>
            </div>
      </>
    );
}

export default Trainer

