import React from "react"
import styled from "styled-components"

import { LoadingSkeleton } from "../LoadingSkeleton"

const Profile = ({ profile, loading }) => {
  if (loading) {
    return (
      <Container>
        <Wrapper>
          <ImageWrap>
            <LoadingSkeleton />
          </ImageWrap>
        </Wrapper>
        <Wrapper>
          <Text>
            <LoadingSkeleton />
          </Text>
          <Text>
            <LoadingSkeleton />
          </Text>
          <Text>
            <LoadingSkeleton />
          </Text>
        </Wrapper>
      </Container>
    )
  }
  return (
    <Container>
      <Wrapper>
        <ImageWrap>
          <Image src={profile.picture} alt="blah" />
        </ImageWrap>
      </Wrapper>
      <Wrapper>
        <Text>{profile.name}</Text>
        <Text>{profile.username}</Text>
        <Text>{profile.email}</Text>
      </Wrapper>
    </Container>
  )
}

const Container = styled.section`
  width: 50%;
  min-width: 300px;
  max-width: 400px;
  margin: 1rem 2rem;
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  border: 3px solid #333;
  border-radius: 2rem;
  background-color: white;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
  width: 150px;
  height: 25px;
  color: black;
  overflow-x: auto;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

const ImageWrap = styled.div`
  border-radius: 20%;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  border-radius: 20%;
  height: 100px;
  width: 100px;
`

export default Profile
