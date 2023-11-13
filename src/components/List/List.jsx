import {useContext, useEffect, useState} from 'react';
import ListItem from "./ListItem/ListItem";
import { ListEl, HeadList, HeadItem, NoItems } from "./List.styled";
import { Context } from "../App";

const List = () => {
    const [currentList, setCurrentList] = useState([]);
    const { list, typeList } = useContext(Context);

    useEffect(() => {
        if (typeList === "visited") {
            const newList = list.filter(item => item.isVisited)
            setCurrentList(newList)
        } else if (typeList === "not visited") {
            const newList = list.filter(item => !item.isVisited)
            setCurrentList(newList)
        } else {
            setCurrentList(list)
        }
    }, [typeList, list])

    return <>
        { currentList.length <= 0 ? <NoItems>Any {typeList === "all" ? "" : typeList} locations in your list</NoItems>
        : <>
        <HeadList>
            <HeadItem width ={"245px"}>Country</HeadItem>
            <HeadItem width ={"245px"}>Places</HeadItem>
            <HeadItem width ={"245px"}>Date</HeadItem>
            <HeadItem width ={"255px"}>Overview</HeadItem>
            <HeadItem width ={"120px"}>Visited</HeadItem>
        </HeadList>
        <ListEl>
            {currentList.map(item => <ListItem data={item} key={item.id} />)}
        </ListEl>
        </>}
    </>
}
export default List;