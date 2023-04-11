import { React, createContext } from "react";

const MyContextData = createContext();

const MyContextDataProvider = ({Children}) => {
    const data = 'This my context data';

    return (
        <MyContextData.Provider value={data}>
            {Children}
        </MyContextData.Provider>
    )
}
export default MyContextData;
export {MyContextDataProvider};