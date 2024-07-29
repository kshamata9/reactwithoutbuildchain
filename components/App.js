'use strict';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {title: 'App.js page '}
    }
    render(){
        return React.createElement('h1', null, 'Hello'+this.state.title)
    }
}

const container = document.querySelector('root');
ReactDOM.render(React.createElement(App), container);