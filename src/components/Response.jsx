import {Box,Typography,TextareaAutosize} from '@mui/material';

const textareaStyle = {
    width:'100%',
    padding:10,
    background: `url(http://i.imgur.com/2cOaJ.png)`,
    backgroundAttachment:'local',
    backgroundRepeat:'no-repeat',
    paddingLeft:35,
    paddingTop:12,
    borderColor:'#ccc',
    lineHeight:1.2,
}


const Response = ({data}) => {

    let obj = data;

    let readableObj = '{\n';

    for(let key in obj){
        readableObj += '\t'
        readableObj += (typeof obj[key] === 'string') ? `${key}: "${obj[key]}"`: `${key} : ${obj[key]}`;
        if(Object.keys(obj).pop() != key.toString()){
            readableObj += '\n';
        }
    }

    readableObj += '\n}'

    return (
        <Box>
            <Typography mt={2} mb={2}>Response</Typography>
            <TextareaAutosize
            style={textareaStyle}
            minRows={3}
            maxRows={5}
            disabled="disabled"
            value={readableObj}
            />
        </Box>
    )
}

export default Response;