import React from "react";

export default class totalBitacora extends React.Component {
    constructor(props){
        super(props);
       
        this.state = {}
    }
    handleTotal(event) {
        let id  = event.target.value;
        this.setState({ value: id });
    }
    
  

    render() {
        let data = this.props.total;

        const isNegative = n => n < 0;

        let positives = data.filter(i => !isNegative(i.amount));
        let negatives = data.filter(i => isNegative(i.amount));

         let totalNegative = negatives.reduce((p,c) => p += c.amount,0);
         let totalPositive = positives.reduce((p,c) => p += c.amount,0);

        return (
            <div>
                <div className="container">
                <div className="row">
                    <div className="col-sm">
                Total llenado : {totalPositive}
                    </div>
                    <div className="col-sm">
                    Total consumo : {totalNegative}
                    </div>
                    <div className="col-sm">
                    Combustible en el tanque: {totalPositive-totalNegative}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
