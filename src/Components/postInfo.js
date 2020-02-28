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
            isLoaded: false,
        }
    }

    async componentDidMount() {
        
        try {
           
            const users = await service.getAllUsers();
            this.props.getUsers(users);
            this.setState({
                isLoaded: true
            })
           
        } catch(error) {
            throw new Error(error); 
        }
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
                        
                        </p>
                    </div>
                    <div className="card">
                        <h2>About User</h2>
                        
                    </div>  
                </div>
             )
        }
    }
}


const mapStateToProps = state => ({
    users: state.usersRequestResults.users,
    posts: state.postsRequestResults.posts
});


const mapDispatchToProps = dispatch => ({
    getUsers: (users) => {
        dispatch(getAllUsers(users));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);