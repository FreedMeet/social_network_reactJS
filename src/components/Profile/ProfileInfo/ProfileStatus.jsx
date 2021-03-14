import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode = () => {

        this.setState({
            editMode: false
        });
        this.props.updateStatusTC(this.state.status)
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        };
    };

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        onChange={this.onStatusChange} />
                    : <p onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</p>}
            </div>
        );
    };
};

export default ProfileStatus;
