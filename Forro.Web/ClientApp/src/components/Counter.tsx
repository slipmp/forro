import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as CounterStore from '../store/Counter';

type CounterProps =
    CounterStore.CounterState &
    typeof CounterStore.actionCreators &
    RouteComponentProps<{}>;

class Counter extends React.PureComponent<CounterProps> {
    public render() {
        return (
            <React.Fragment>

                <main role="main">
                    <article>
                        <header className="section-top-padding background-white">
                            <div className="line text-center">
                                <h1 className="text-dark text-s-size-30 text-m-size-40 text-l-size-headline text-thin text-line-height-1">
                                    Counter
                                </h1>
                                <p className="margin-bottom-0 text-size-16 text-dark">
                                    This is a simple example of a React component.
                                </p>
                            </div>
                        </header>
                        <section className="section-top-padding background-white">
                            <div className="line">
                                <div className="margin">
                                    <p aria-live="polite">Current count: <strong>{this.props.count}</strong></p>

                                    <button type="button"
                                        className="btn btn-primary btn-lg"
                                        onClick={() => { this.props.increment(); }}>
                                        Increment
                                    </button>
                                </div>
                            </div>
                            <br />
                        </section>
                    </article>
                </main>

            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.counter,
    CounterStore.actionCreators
)(Counter);
