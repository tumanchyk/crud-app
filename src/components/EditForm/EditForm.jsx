import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {useParams} from 'react-router';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CustomInput from "../FormComponents/CustomInput";
import FormBtn from "../FormComponents/FormButton";
import Textarea from "../FormComponents/Textarea";
import { Form } from "../AddItemForm/AddItemForm.styled";
import { Context } from '../App';

const EditForm = () => {
    const [data, setData] = useState({});
    const { list, setList } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const currentItem = list.find(item => item.id === id);
        setData(currentItem)
    }, [])

    const handleChange = (e) => {
        const { id, value } = e.currentTarget;
        setData(prevData => ({
            ...prevData,
            [id]: value,
        }));
    };

    const inputHandleChange = (value) => {
        setData(prevData => ({
            ...prevData,
            isVisited: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const index = list.findIndex(item => item.id === id);

        if (index !== -1) {
            const newList = [...list];
            newList[index] = data;
            setList(newList);
        }
        
        navigate('/');
    }
    return <Form autoComplete="off" onSubmit={handleSubmit}>
        <CustomInput
            label="Country"
            id="country"
            value={data.country}
            handleChange={handleChange}
            type="text"
            required={true}
        />
        <CustomInput
            label="Places"
            id="places"
            value={data.places}
            handleChange={handleChange}
            type="text"
            required={false}
        />
        <CustomInput
            label="Date"
            id="date"
            value={data.date}
            handleChange={handleChange}
            type="text"
            required={false}
        />  
        <Textarea
            label="Overview"
            id="overview"
            value={data.overview}
            handleChange={handleChange}
        />
        <FormControlLabel onChange={() => inputHandleChange(!data.isVisited)} checked={data.isVisited}
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 24 }, '&.Mui-checked.MuiCheckbox-colorPrimary': { color: "#202020" } }} />} label="Visited" />
        
        <FormBtn name="Save changes" type="submit" />
    </Form>
}
export default EditForm;