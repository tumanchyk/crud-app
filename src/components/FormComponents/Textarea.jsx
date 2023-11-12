import TextField from '@mui/material/TextField';

const Textarea = ({ label, id, value, handleChange }) => {
    return <TextField
            label={label}
            id={id}
            value={value}
            onChange={handleChange}
            multiline
            maxRows={4}
            variant="standard"
            fullWidth
        />
}
export default Textarea;