import React from "react";
import StoreContext from "./StoreContext";
const storeContext = React.createContext(null);

export const Provider = (props) => {
    return  <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}
export default storeContext;