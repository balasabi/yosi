import React from "react";

class TestResultPdf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <iframe src={"https://www.chc4you.org/wp-content/uploads/2021/04/test-results.pdf"} height="650px" width="1050px" />
        )
    }
}

export default TestResultPdf;