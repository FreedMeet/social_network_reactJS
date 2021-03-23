import React, {useState, useEffect, FC, ChangeEvent} from 'react'

type PropsType = {
    status: string
    updateStatus: (statusValue: string) => void
}

const ProfileStatusWithHooks: FC<PropsType> = ({status, updateStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [statusValue, setStatus] = useState(status);

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

    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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
