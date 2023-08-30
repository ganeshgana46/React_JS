import { ChangeProfile } from "../Components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
    const {username} = useContext(AppContext);
    return <div>Profile & USer is : {username}
    <ChangeProfile />
    </div>
}