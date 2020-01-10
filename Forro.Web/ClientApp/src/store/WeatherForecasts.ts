import { Action, Reducer } from 'redux';
import { AppThunkAction, ApplicationState } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface WeatherForecastsState {
    isLoading: boolean;
    startDateIndex?: number;
    forecasts: WeatherForecast[];
}

export interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestWeatherForecastsAction {
    type: 'REQUEST_WEATHER_FORECASTS';
    startDateIndex: number;
}

interface ReceiveWeatherForecastsAction {
    type: 'RECEIVE_WEATHER_FORECASTS';
    startDateIndex: number;
    forecasts: WeatherForecast[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestWeatherForecastsAction | ReceiveWeatherForecastsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    /*
        Fun Fact #1. There are 2 reasons why (dispatch, getState) are being inserted through Dependency Injection
        1 - mapDispatchToProps forwards requestWeatherForecasts to dispatcher
        2 - Once it reaches dispatcher, it notices requestWeatherForecasts returns a Thunk (A function that returns a function is a Thunk)
        because of that, it intercepts the call and inject (dispatch, getState) properties.
        It is important to notice once a redux-thunk is called, the dispatcher is no longer called
        one more reason why dispatch property is required to be injected as it must be called within your THUNK

        Fun Fact #2. This function has 2 parameters, which are also functions.
        But it is not any functions, these are strongly typed functions.
        In other words line below could also be writting as:
        requestWeatherForecasts: (startDateIndex: number):
        AppThunkAction<KnownAction> => (dispatch: (action: KnownAction) => void, getState: () => ApplicationState) => {
        We just don't do it because is redundant and loses programming flexibility 
        e.g.if dispatch is ever changed we would need to change this line as well, not ideal.

        Fun Fact #3. Even though you have getState() inside of your Action Creators,
        its usage should be limited: 
        Redux creator Dan Abramov feels that it should be limited: 
        "The few use cases where I think it’s acceptable is for:
            1 - Checking cached data before you make a request, 
            2 - Checking whether you are authenticated
        In other words, doing a conditional dispatch.
    
        Current Redux maintainer Mark Erikson says it's fine and even encouraged to use getState in thunks - that's why it exists
        Mark Erikson's quote due to Dan's comment above:
        Since then, I've seen several people get confused by that comment and asking (paraphrased), 
        "I see that getState is available in thunks, but apparently I can't use it, so how can I do $TASK now?". 
        Now, part of it is that people are interpreting "avoid this when possible" as "NEVER DO THIS", 
        but the fact that Dan said it on Stack Overflow definitely pushes people to take it as gospel.

        My, Marcos Soares comment: Man this thing is a RELIGION!!
        Reference: https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator/35674575#35674575

    */
    requestWeatherForecasts: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.weatherForecasts && startDateIndex !== appState.weatherForecasts.startDateIndex) {
            fetch(`weatherforecast`)
                .then(response => response.json() as Promise<WeatherForecast[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_WEATHER_FORECASTS', startDateIndex: startDateIndex, forecasts: data });
                });

            dispatch({ type: 'REQUEST_WEATHER_FORECASTS', startDateIndex: startDateIndex });
        }
    }
};
//const test = actionCreators.requestWeatherForecasts(1);

//const dispatchTest = (action: KnownAction): void => {
//    console.log('eita carai');
//}

//const getStateTest = (): ApplicationState => {
//    return {
//        counter: undefined,
//        weatherForecasts: undefined
//    }
//}

//const resultado =test(dispatchTest, getStateTest);

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: WeatherForecastsState = { forecasts: [], isLoading: false };

export const reducer: Reducer<WeatherForecastsState> = (state: WeatherForecastsState | undefined, incomingAction: Action): WeatherForecastsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_WEATHER_FORECASTS':
            return {
                startDateIndex: action.startDateIndex,
                forecasts: state.forecasts,
                isLoading: true
            };
        case 'RECEIVE_WEATHER_FORECASTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    forecasts: action.forecasts,
                    isLoading: false
                };
            }
            break;
    }

    return state;
};
