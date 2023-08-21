import React,{createContext,useState} from 'react';

export const DataContext = createContext(null);

//The provider(parent) is responsible for creating and managing the context, which holds the data to be shared between components.
const DataProvider = ({children}) => {

    const [formData,setFormData] = useState({url:'',type:'POST'});
    const [paramData,setParamData] = useState([]);
    const [headerData,setHeaderData] = useState([]);
    const [jsonText, setJsonText] = useState('');

    return(
        <DataContext.Provider value={{
            formData,
            setFormData,
            paramData,
            setParamData,
            headerData,
            setHeaderData,
            jsonText,
            setJsonText
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;