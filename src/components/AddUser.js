import React from "react";

class AddUser extends React.Component{
    userAdd = {}
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            photo: "",
            isHappy: true
        }
    }
    render() {
        return(
            <form ref={(el) => this.myForm = el}>
                <input placeholder={"First name"} onChange={(el) => this.setState({first_name: el.target.value})}/>
                <input placeholder={"Last name"} onChange={(el) => this.setState({last_name: el.target.value})}/>
                <input placeholder={"Email"} onChange={(el) => this.setState({email: el.target.value})}/>
                <input placeholder={"Photo"} onChange={(el) => this.setState({photo: el.target.value})}/>
                <lable htmlFor={"isHappy"}>Is happy?</lable>
                <input type={"checkbox"} id={"isHappy"} onChange={(el) => this.setState({isHappy: el.target.checked})}/>
                <button type={"button"} onClick={() => {
                    this.myForm.reset();
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        photo: this.state.photo,
                        isHappy: this.state.isHappy
                    }
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }
                }>Add</button>
            </form>
            )
    }


}

export default AddUser;