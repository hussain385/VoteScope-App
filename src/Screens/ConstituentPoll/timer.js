import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

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
            <AnimatedCircularProgress
                size={50}
                width={5}
                fill={timeLeft * 10}
                tintColor="#00e0ff"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875">
                {
                    (fill) => (
                        <Text style={{ fontSize: 15, color: 'white', }}>
                            { timeLeft }
                        </Text>
                    )
                }
            </AnimatedCircularProgress>
            {/*<Text>Time Left: {timeLeft}</Text>*/}
        </View>;
    }
}

export default Timer;
