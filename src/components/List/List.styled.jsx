import styled from "@emotion/styled";

export const ListEl = styled.ul`
`
export const HeadList = styled.ul`
display: flex;
align-items: center;
padding: 0 110px 20px 20px;
border-bottom: 1px solid #000;
`
export const HeadItem = styled.li`
font-weight: 600;
font-size: 18px;
width : ${props => props.width};
padding-right: 30px;
`
export const NoItems = styled.p`
text-align: center;
font-weight: 600;
font-size: 24px;
margin-top: 70px;
`
