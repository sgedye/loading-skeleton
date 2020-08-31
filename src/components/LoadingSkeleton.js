import React from 'react';
import styled from 'styled-components';

const SkeletonPulse = styled.div`
  display: inline-block;
  width: 100%;
  height: 80%;
  border-radius: 1rem;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400%;
  animation: pulse 1200ms ease-in infinite;

  @keyframes pulse {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -150% 0;
    }
  }
`;

export const LoadingSkeleton = () => <SkeletonPulse />;
