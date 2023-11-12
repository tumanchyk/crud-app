import { Link } from "react-router-dom";
import {useContext} from 'react';
import { Item, Desc, ButtonWrap, ModifyBtn } from "./ListItem.styled";
import editIcon from "../../../imgs/edit.svg";
import crossIcon from "../../../imgs/cross.png";
import doneIcon from "../../../imgs/done.svg";
import { Context } from "../../App";

const ListItem = ({ data: { id, country, places, date, overview, isVisited } }) => {
    const { list, setList } = useContext(Context);

    const handleRemove = (id) => {
        const newList = list.filter(item => item.id !== id);
        setList(newList)
    }

    return <Item>
        <Desc >{country}</Desc>
        <Desc>{ places}</Desc>
        <Desc>{date}</Desc>
        <Desc>{overview}</Desc>
        <div style={{ width: "100px" }}>
          {isVisited ? <img src={doneIcon} alt="visited" width={28}/> : <span>--</span>}  
        </div>
        <ButtonWrap>
            <Link to={`/edit/${id}`} style={{ width: "40px", height: "40px"}}><img src={editIcon} alt="edit button"/></Link>
            <ModifyBtn onClick={() => handleRemove(id)}><img src={crossIcon} alt="cross button"/></ModifyBtn>
        </ButtonWrap>
    </Item>
}
export default ListItem;