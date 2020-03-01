import React from 'react';
import './style.css';
import service from '../Service/service';
import {getAllUsers} from '../Actions/userAction';
import {connect} from 'react-redux';
//import {store} from '../index'


 class PostInfo extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null, 
            isLoaded: false
        }
    }

    async componentDidMount() {
        try {
            const users = await service.getAllUsers();
            const activeUser = users.find(user => parseInt(user.id) === parseInt(this.props.activePost.userId));
            this.props.getUsers(users);
            this.setState({
                userInfo: activeUser,
                isLoaded: true
            })
        } catch(error) {
            throw new Error(error); 
        }
        console.log(this.props.activePost)
    }
    render() {
        let { isLoaded } = this.state;
        if(!isLoaded) {
            return<div>Loading..</div>
        } else {
            return (
                <div>
                  <div className="card">
                        <h2>About Post:</h2> 
                        <p className='post-info'>
                        {this.props.activePost.body}
                        </p>
                    </div>
                    <div className="card">
                        <h2>About User</h2>
                        <ul className="user-info">
                            <li><p>ID</p>{this.state.userInfo.id}</li>
                            <li><p>Name</p>{this.state.userInfo.name}</li>
                            <li><p>Username</p>{this.state.userInfo.username}</li>
                            <li><p>Email</p>{this.state.userInfo.email}</li>
                        </ul>
                    </div>  
                </div>
             )
        }
    }
}


const mapStateToProps = state => ({
    users: state.usersRequestResults.users,
    activePost: state.postsRequestResults.activePost
});


const mapDispatchToProps = dispatch => ({
    getUsers: (users) => {
        dispatch(getAllUsers(users));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);