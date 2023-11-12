import {useContext} from 'react';
import ListItem from "./ListItem/ListItem";
import { ListEl, HeadList, HeadItem, NoItems } from "./List.styled";
import { Context } from "../App";

const List = () => {
    const { list } = useContext(Context);

    return <>
        <HeadList>
            <HeadItem width ={"245px"}>Country</HeadItem>
            <HeadItem width ={"245px"}>Places</HeadItem>
            <HeadItem width ={"245px"}>Date</HeadItem>
            <HeadItem width ={"255px"}>Overview</HeadItem>
            <HeadItem width ={"120px"}>Visited</HeadItem>
        </HeadList>
        {list.length <= 0 ? <NoItems>Any locations in your list</NoItems>
        : <ListEl>
                {list.map(item => <ListItem data={item} key={item.id} />)}
        </ListEl>}
    </>
}
export default List;