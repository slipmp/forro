import * as WeatherForecasts from './WeatherForecasts';
import * as Counter from './Counter';

// The top-level state object
export interface ApplicationState {
    counter: Counter.CounterState | undefined;
    weatherForecasts: WeatherForecasts.WeatherForecastsState | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer
};


//My notes in regards the interface below.
//...In addition to describing an object with properties, interfaces are also capable of describing function types.
//To describe a function type with an interface, we give the interface a call signature.
//This is like a function declaration with only the parameter list and return type given.
//Each parameter in the parameter list requires both name and type.
//Reference: https://www.typescriptlang.org/docs/handbook/interfaces.html

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
