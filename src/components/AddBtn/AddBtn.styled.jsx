import { Link } from "react-router-dom"
import styled from "@emotion/styled";

export const Button = styled(Link)`
position: relative;
    display: inline-block;
    width: 120px;
    padding: 12px 27px;
    text-align: center;
    font-size: 14px;
    text-decoration: none;
    margin-left: auto;
    margin-bottom: 50px;
    color: #202020;
    border: 1px solid #202020;
    background: transparent;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 400ms ease-out;
    &:hover{
        background: #202020;
        color: #fff;
    }
}
`
