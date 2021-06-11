import React from 'react'

export default class Customer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <div style={{ marginTop: "50px", marginRight: "510px", marginLeft: "500px", backgroundColor: "greenyellow" }}>
                <h1>CUSTOMER LIST</h1>
            </div>
            {this.props.mylist.map((item) => <li>{item}</li>)}
            <div style = {{marginRight: "1200px", backgroundColor: 'lightgrey',
  width: '300px',
  border: '15px solid green',
  margin: '20px',textAlign: "justify"}}>
                <h2>NOTE : HOW TO USE</h2>
                <ul>
                    <li> ENTER BILL AMOUNT</li>
                    <li>CHOOSE SERVICE</li>
                    <li>HOW MANY CUSTOMERS ARE THERE</li>
                    <li>THEN CLICK ON CALCULATE TIP BUTTON TO GENRATE TOTAL TIP OF YOUR BILL</li>
                    <li>AFTER THAT ENTER YOUR NAMES FOR SHARING Tip</li>
                </ul>
            </div>
        </div>
    }
}