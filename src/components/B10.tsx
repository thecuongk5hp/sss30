import { Component } from 'react';

type Prop = {};

type State = {
    count: number;
    timerId: NodeJS.Timeout | null;
};

export default class Count extends Component<Prop, State> {
    constructor(props: Prop){
        super(props);
        this.state = {
            count: 0,
            timerId: null,
        };
    }

    componentDidMount(): void {
        const timerId = setInterval(() => {
            this.setState((prevState) => ({
                count: prevState.count === 9 ? 0 : prevState.count + 1,
            }));
        }, 1000);

        this.setState({ timerId });
    }

    componentWillUnmount(): void {
        if (this.state.timerId) {
            clearInterval(this.state.timerId);
        }
    }

    render() {
        return (
            <div>Count: {this.state.count}</div>
        );
    }
}
