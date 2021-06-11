import React from "react"
import Customer from './Customer'


class Tip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: '',
            service: '',
            totltip: '',
            pp: '',
            size: '',
            listItem: [],
            tempitem: ""

        }
    }
    handamount = (event) => {
        this.setState({ amount: event.target.value })
    }
    handservice = (event) => {
        this.setState({ service: event.target.value })
    }
    handsize = (event) => {
        this.setState({ size: event.target.value })
    }
    gentip = (event) => {
        event.preventDefault()
        let tip = parseFloat(this.state.amount * this.state.service)
        let totaltp = parseFloat(tip / this.state.size)
        this.setState({ totltip: tip, pp: totaltp })

    }

    additem = () => {
        this.setState({ listItem: [...this.state.listItem, this.state.tempitem + " " + "is offering a tip of" + " " + "RS" + " " + this.state.pp], tempitem: '' })
    }


    render() {
        return <div style={{ textAlign: "center", textSizeAdjust: "2rem", backgroundColor: "lightgreen" }}>
            <form onSubmit={this.gentip}>
                <label>ENTER BILL AMOUNT</label>
                <input type="text" style={{ width: '98%' }} placeholder = "Amount in Rs" value={this.state.amount} onChange={this.handamount} />
                <div style={{ marginTop: "40px" }}>
                    <label>HOW WAS FOOD</label><br></br>

                    <select type="text" value={this.state.service} onChange={this.handservice}>
                        <option value="disabled value = 0">CHOOSE option</option>
                        <option value='0.25'>25%  AWESOME</option>
                        <option value="0.15">15%  VERY GOOD</option>
                        <option value="0.10">10%  good</option>
                        <option value="0.5">5%  POOR</option>

                    </select>
                    <div>
                        <label style={{ marginRight: "300px" }}>CUSTOMER COUNT</label><br></br>
                        <input type='number' placeholder = "Count Here" value={this.state.size} onChange={this.handsize} />


                        <input type="text" name='tempitem'placeholder = "Enter Here" value={this.state.tempitem} onChange={(evt) => { this.setState({ tempitem: evt.target.value }) }} />
                        <button onClick={() => { this.additem() }}>ADD CUSTOMER</button>

                        <Customer mylist={this.state.listItem} updateList={this.additem, this.state.pp} />








                    </div>



                </div>






                <div style={{ marginLeft: "650px"}}>

                    <table style={{ border: '1px solid black', borderCollapse: 'collapse',width: "50%" }} >
                        <tr>
                            <th style={{ border: '1px solid black', borderCollapse: 'collapse' }}>CUSTOMERS</th>
                            <th style={{ border: '1px solid black', borderCollapse: 'collapse' }}>TOTAL TIP RS</th>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', borderCollapse: 'collapse' }}>{this.state.size}</td>
                            <td>{this.state.totltip}</td>
                        </tr>
                    </table>

                </div>



                <button type='submit' style={{ marginBottom: "1px",size: "1000px" }} onClick={this.gentip}>Calculate TIP</button>
            </form>

        </div>
    }

}




export default Tip