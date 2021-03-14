import React, {useState, useEffect} from 'react'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true);
    };

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatusTC(status);
    };

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            { editMode
                ? <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
                : <span onDoubleClick={activateEditMode}>{props.status || '======'}</span>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;
