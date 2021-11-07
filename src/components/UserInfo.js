import './UserInfo.css';
import defaultProfilePic from '../i/default-profile-pic.png';
import { useEffect, useState } from 'react';
import app from '../firebase';
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from 'firebase/auth';

const UserInfo = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(getAuth(), setCurrentUser);
    }, []);

    function getUserName() {
        return getAuth().currentUser.displayName;
    }

    return (
        <div id="user-info">
            <UserProfilePicture currentUser={currentUser} />
            <div>
                {!!currentUser && <div>{getUserName()}</div>}
                {!!currentUser ? <SignOutButton /> : <SignInButton />}
            </div>
        </div>
    );
};

const UserProfilePicture = (props) => {
    const { currentUser } = props;

    function getProfilePicUrl() {
        return getAuth().currentUser.photoURL;
    }

    if (!!currentUser) {
        return <img src={getProfilePicUrl()} alt="User profile" />;
    } else {
        return <img src={defaultProfilePic} alt="User profile" />;
    }
};

const SignInButton = () => {
    async function signIn() {
        var provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider);
    }

    return <button onClick={signIn}>Sign In</button>;
};

const SignOutButton = () => {
    function signOutUser() {
        signOut(getAuth());
    }

    return <button onClick={signOutUser}>Sign Out</button>;
};

export default UserInfo;
