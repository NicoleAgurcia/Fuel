import React from  'react';
import TotalBitacora from './totalBitacora';

export default class FuelBitacora extends React.Component {
    constructor(props){
        super(props);
        this.updateLog = this.updateLog.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            log: [],
            value: '',
        }
    }

    updateLog() {
        let entry = { date: new Date(), amount: this.state.value};
        var log = [...this.state.log, entry ];
        this.setState({log})
    }

    handleChange(event) {
        let id  = event.target.value;
        this.setState({ value: id });
    }
    

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}  />

                <button onClick={this.updateLog} className="btn btn-primary"> ADD </button>

                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.log.map((p,i) => {
                        return ( 
                        <tr key={i}> 
                            <th>{p.date.toLocaleString()}</th> 
                            <th>{p.amount}</th> 
                        </tr> );
                    })}
                    </tbody>
                </table>
                <TotalBitacora total={this.state.log} />
            </div>
        )
    }
}
