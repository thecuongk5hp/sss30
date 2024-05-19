import React, { Component } from 'react';

interface Props {}

interface State {
    name: string;
    age: number;
    loading: boolean;
    count: number;
}

export default class ClassComponent extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // initialize state in the constructor
        this.state = {
            name: 'hoa',
            age: 25,
            loading: true,
            count: 0,
        };
    }

    componentDidMount(): void {
        console.log('chạy sau khi component được render lần đầu');
        /*
           The componentDidMount method runs after the component is rendered for the first time.
           This is an ideal place to perform tasks such as API calls to fetch data and display it.
         */
    }

    // use the default methods provided by React
    // Note: componentWillMount is deprecated and should not be used

    handleClick = () => {
        // update state
        this.setState({
            count: this.state.count + 1,
        });
    };

    /* 
       Methods provided in the updating phase
     */
    shouldComponentUpdate(): boolean {
        console.log('shouldComponentUpdate được gọi!');
        // must return true or false
        // if not called, the method defaults to returning true
        return true;
    }

    componentWillUpdate(): void {
        console.log('component willupdate được gọi!');
    }

    componentDidUpdate(): void {
        console.log('component Didupdate được gọi!');
    }

    render() {
        console.log('component được re-render: render lại');
        /*
        this.setState({
           name:"hồng" 
        }) 
        */
        console.log('component được render lần đầu');
        return (
            <div>
                <p>ClassComponent</p>
                <p>xin chao {this.state.name}</p>
                <p>giá trị count: {this.state.count}</p>
                <button onClick={this.handleClick}>thay đổi state</button>
            </div>
        );
    }
}
