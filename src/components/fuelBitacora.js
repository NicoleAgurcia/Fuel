import React from  'react'

export default class App extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="btn btn-primary"> ADD </button>
            </div>
        )
    }
}
