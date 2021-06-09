import styled, {css} from 'styled-components';

const mi = (color, size = '8px') => css`  // 公共css 命名为 mi 
    content: "";
    display: block;
    position: absolute;
    width: ${size};
    height: ${size};
    border-radius: 50%;
    background-color: ${color};
`

const StyledAca = styled.div`
  position: relative;
  border: 1px solid red;
`;
const StatusIcon = styled.div`
  position: absolute;
  left:2px;
  top: 4px;
  
  &::before{
    ${({size}) => mi('white', size)};
    transform: scale(2);}
  
  &::after{
    ${({theme, status, size}) => {
    if (status === 'online') {
        return mi(theme.green, size);
    } else if (status === 'offline') {
        return mi(theme.gray, size)
    }
}}
}
`;// 头像蒙版上一层
const AvaClip = styled.div`
  width: ${({size}) => size};
  height: ${({size}) => size};
  border-radius: 50%;
  overflow: hidden;
`; // 头像蒙版
const AvaImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;// 自动整理和缩放整个clip
    object-position: center;// 在包裹的div中居中
`; // 头像

export default StyledAca;
export {StatusIcon, AvaClip, AvaImage};
