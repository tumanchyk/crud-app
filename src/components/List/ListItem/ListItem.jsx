import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import editIcon from "../../../imgs/edit.svg";
import crossIcon from "../../../imgs/cross.png";
import doneIcon from "../../../imgs/done.svg";
import { Item, Desc, ButtonWrap, ModifyBtn } from "./ListItem.styled";
import { deletePlaces } from "../../../store/places/placesOperations";

const ListItem = ({ data: { _id, country, places, date, overview, isVisited } }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch(deletePlaces(id))
        navigate('/');
    }
    return <Item>
        <Desc >{country}</Desc>
        <Desc>{places ? places : "—"}</Desc>
        <Desc>{date ? date : "—"}</Desc>
        <Desc>{overview ? overview : "—"}</Desc>
        <div style={{ width: "120px", paddingLeft: "20px", boxSizing: "border-box"}}>
          {isVisited ? <img src={doneIcon} alt="visited" width={28}/> : <span>—</span>}  
        </div>
        <ButtonWrap>
            <Link to={`/edit/${_id}`} style={{ width: "40px", height: "40px"}}><img src={editIcon} alt="edit button"/></Link>
            <ModifyBtn onClick={() => handleDelete(_id)}><img src={crossIcon} alt="cross button"/></ModifyBtn>
        </ButtonWrap>
    </Item>
}
export default ListItem;