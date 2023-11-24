import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from "./ListItem/ListItem";
import { ListEl, HeadList, HeadItem, NoItems } from "./List.styled";
import { getAllPlaces } from '../../store/places/placesOperations';

const List = () => {
    const [currentList, setCurrentList] = useState([]);
    const dispatch = useDispatch();

    const list = useSelector(state => state.places.list);
    const typeList = useSelector(state => state.places.type);

    useEffect(() => {
      dispatch(getAllPlaces())  
    }, [dispatch, list])

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
            {currentList.map(item => <ListItem data={item} key={item._id} />)}
        </ListEl>
        </>}
    </>
}
export default List;