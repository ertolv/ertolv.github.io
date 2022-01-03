import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface AccountState {
  account: Account;
}

export interface Account {
  id: string;
  name: string;
  email: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.


interface GetAccountAction {
  type: 'GET_ACCOUNT';
  account: Account;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = GetAccountAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
  requestAccount: (): AppThunkAction<KnownAction> => async (dispatch, getState) => {
    // Only load data if it's something we don't already have (and are not already loading)
    const appState = getState();
    if (appState && appState.account) {
      try {
        console.log("At: store/account.ts")
        dispatch({ type: 'GET_ACCOUNT', account: { id: "1", name: "string", email: "string" } })
      } catch (err) {
        console.log('Bad request, please try loading again.')
      }
    }
  }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
const emptyAccount = {
  id: "",
  name: "",
  email: ""
}

const unloadedState: AccountState = { account: emptyAccount };

export const reducer: Reducer<AccountState> = (state: AccountState | undefined, incomingAction: Action): AccountState => {
  if (state === undefined) {
    return unloadedState;
  }

  const action = incomingAction as KnownAction;
  switch (action.type) {
    case 'GET_ACCOUNT':
      // Only accept the incoming data if it matches the most recent request. This ensures we correctly
      // handle out-of-order responses.
        return {
          ...state
        };
  }

  return state;
};