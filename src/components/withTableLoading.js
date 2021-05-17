import React from 'react';
import PuffLoader from "react-spinners/PuffLoader";


function WithTableLoading(Component) {
    return function WihLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <PuffLoader size="20" color="#7b2cbf"/>
        );
    };
}
export default WithTableLoading;