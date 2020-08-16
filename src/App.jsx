import React from 'react';
import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";
import { State } from "react-powerplug";
import firebase from 'firebase'
import { config } from './config'
import './App.css';
import Protected from './Protected';

const IDontCareAboutFirebaseAuth = () => {
  return <div>This part won't react to firebase auth changes</div>;
};

function App() {
  return (
    <div className="App">
      <IDontCareAboutFirebaseAuth />
      <FirebaseAuthProvider {...config} firebase={firebase}>
        <State initial={{ isLoading: false }}>
          {({ state, setState }) => (
            <React.Fragment>
              <div>isLoading : {JSON.stringify(state.isLoading)}</div>
              <IfFirebaseAuthed>
                <div>
                  <Protected />
                  <button
                    onClick={async () => {
                      setState({ isLoading: true });
                      await firebase
                        .app()
                        .auth()
                        .signOut();
                      setState({ isLoading: false });
                    }}
                  >
                    Sign out
                  </button>
                </div>
              </IfFirebaseAuthed>
              <IfFirebaseUnAuthed>
                <div>
                  <h2>You're not signed in </h2>
                  {/* <button
                    onClick={async () => {
                      setState({ isLoading: true });
                      await firebase
                        .app()
                        .auth()
                        .signInAnonymously();
                      setState({ isLoading: false });
                    }}
                  >
                    Sign in anonymously
                  </button> */}
                  <button
                    onClick={() => {
                      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                      firebase.auth().signInWithPopup(googleAuthProvider);
                    }}
                  >
                    Sign in with Google
                  </button>
                </div>
              </IfFirebaseUnAuthed>
            </React.Fragment>
          )}
        </State>
      </FirebaseAuthProvider>
    </div>
  );
}

export default App;
