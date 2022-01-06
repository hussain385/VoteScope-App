import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
    }

    tick() {
        const { duration, timeoutFn } = this.props;
        if (this.state.seconds === duration) {
            timeoutFn();
        } else {
            this.setState((prevState) => ({
                seconds: prevState.seconds + 1
            }));
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { duration } = this.props;
        let timeLeft = duration - this.state.seconds;
        return <View>
            <Text>Time Left: {timeLeft}</Text>
        </View>;
    }
}

export default Timer;
