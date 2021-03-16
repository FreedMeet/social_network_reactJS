import React, {useState, useEffect} from 'react'
import {useDispatch} from "react-redux";
import {updateStatusTC} from "../../../redux/profileReducer";

const ProfileStatusWithHooks = ({status, updateStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [statusValue, setStatus] = useState(status);
    const dispatch = useDispatch();

    useEffect( () => {
        setStatus(status)
    }, [status])

    let activateEditMode = () => {
        setEditMode(true);
    };

    let deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(statusValue);
    };

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            { editMode
                ? <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={statusValue}/>
                : <span onDoubleClick={activateEditMode}>{status || '======'}</span>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;
