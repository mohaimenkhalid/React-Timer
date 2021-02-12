import React, {Component} from 'react';
import './App.css';
import Title from "./Title/Title";
import CountDown from "./countDown/CountDown";
import Controller from "./Controller/Controller";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time: {
                min: 0,
                sec: 0,
                milisec: 0
            },
            laps: []
        }
    }

    getStart() {
        this.intervalId = setInterval(() => {
            let min = this.state.time.min
            let sec = this.state.time.sec
            let milisec = this.state.time.milisec

            if(milisec >= 10) {
                sec = sec + 1
                milisec = 0
            }

            if(sec >= 60) {
                min = min + 1
                sec = 0
            }

            this.setState({
                ...this.state,
                time: {
                    min,
                    sec,
                    milisec: milisec + 1
                }
            })
        }, 100)
    }

    getPause() {
        clearInterval(this.intervalId)
    }

    getLap() {
        let time = {
            ...this.state.time
        }

        this.setState({
            ...this.state,
            laps: [time, ...this.state.laps]
        })
    }

    getReset() {
        this.setState({
            time: {
                min: 0,
                sec: 0,
                milisec: 0
            }
        })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <Title />
                            <CountDown time={ this.state.time } />
                            { /*<Controller start={ this.getStart.bind(this) } /> Another way to send props */}
                            <Controller
                                start={ ()=> { this.getStart() }}
                                pause={ ()=> { this.getPause() }}
                                reset={ ()=> { this.getReset() }}
                                lap={ ()=> { this.getLap() }}
                            />
                            <ul className="list-group list-group-flush">
                                {
                                    this.state.laps.map(lap => {
                                       return (
                                           <li className="list-group-item">
                                               <span>Minutes:</span>
                                               <span className="mr-2">{lap.min}</span>
                                               <span>Second:</span>
                                               <span className="mr-2">{lap.sec}</span>
                                               <span>MiliSecond:</span>
                                               <span>{lap.milisec}</span>
                                           </li>
                                       )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
