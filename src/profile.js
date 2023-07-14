import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

        return (
        isAuthenticated && (
            <div>
                <p>{user.name}</p>
            </div>
            )
            );
};

export default Profile;