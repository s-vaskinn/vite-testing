import { Component } from "react";

class LifecycleLogger extends Component {
    constructor(props){
        super(props);
        //console.log('Component initializing...');

        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        console.log('Component mounted to the DOM');
    }

    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count) {
            console.log(`Count updated: ${this.state.count}`);
        }
    }

    componentWillUnmount(){
        console.log('Component will unmount from the DOM');
    }

    render() {
        return (
            <div className='logger-container'>  
                <h2>Lifecycle Logger (class component)</h2>
                <p> {this.props.message} </p>
                <p> Count: {this.state.count} </p>
                <button 
                    className='secondary-btn'
                    onClick={() => this.setState({ count: this.state.count + 1})}
                >
                    Update
                </button>
            </div>
        )
    }
};

export default LifecycleLogger;