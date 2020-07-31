import styled from 'styled-components';
import { Button as AntBtn } from 'antd';

export const Button = styled(AntBtn)`
  border-radius: 18px;
  font-weight: 700;
  font-size: 1.15rem;
  height: 48px;
  background-color: #1DB954;
  color: #fff;
  &:active,
  &:focus,
  &:hover {
    background-color: #16bd50;
    color: #fff;
    border-color: #fff;
  }
`;