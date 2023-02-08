import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

class DefaultLayout extends React.Component {
    constructor() {
        super()
        this.state = {
            open: true,
            setOpen: false,
            isOpen: false
        }
    }

    render() {
        const { children } = this.props;

        return (
            <>
                <main className="relative w-full h-full py-40 min-h-screen"
                    style={{ padding: "0px 25px", paddingTop:"100px" }}>
                    {children}
                </main>
            </>
        );
    }
}




const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps)(DefaultLayout);
