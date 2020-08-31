import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import Profile from "./Profile"
import styled from "styled-components"

const Profiles = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://json-placeholder-api.now.sh/api/profiles"
        )
        console.log(data)
        setProfiles(data.default)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    const loadingProfiles = []
    for (let i = 0; i < 10; i++) {
      loadingProfiles.push(
        <Profile key={i} profile={profiles} loading={true} />
      )
    }
    return (
      <>
        <Title>Fake Contact List</Title>
        <List>{loadingProfiles}</List>
      </>
    )
  }

  return (
    <>
      <Title>Fake Contact List</Title>
      <List>
        {profiles.profiles.map((profile) => (
          <Profile key={profile.id} profile={profile} loading={false} />
        ))}
      </List>
    </>
  )
}

const Title = styled.h1`
  text-align: center;
  font-size: 3em;
  text-shadow: 2px 2px 2px white;
  margin: 0;
  padding: 2rem 0;
  color: #222;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
`;

const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`

export default Profiles
