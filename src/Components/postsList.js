import React from 'react';
//import service from '../Service/service';
//import { getActivePost } from '../Actions/postAction';
import { connect } from "react-redux";
//import {store} from '../index'
import { fetchPosts } from '../Actions/postAction' 


class PostsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }
    
    handleClick = (event) => {
        if (event.target.id) {
            const activePost = this.props.posts.find(post => post.id === parseInt(event.target.id));
            this.props.getActivePost(activePost);
            this.props.history.push(`/post-info`);
        }
    }
    
    async componentDidMount() {
        this.props.fetchData();
       /* let posts = await service.getAllPosts();
        this.props.getPosts(posts);*/
        this.setState({ isLoaded: true });
        console.log(this.props.posts)
    }

    render() {
        let { isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading..</div>;
        }
        else {
            return (<table className='posts'>
                <thead>
                    <tr>
                        <th>PostID</th>
                        <th>UserID</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.posts.map(post => {
                        const { id, userId, title } = post;
                        return (<tr key={id} id={id} onClick={this.handleClick}>
                            <td id={id}>{id}</td>
                            <td id={id}>{userId}</td>
                            <td className='post-title' id={id}>{title}</td>
                        </tr>);
                    })}
                </tbody>
            </table>);
        }
    }
}

const mapStateToProps = state => ({
    posts: state.postsRequestResults.posts
});
const mapDispatchToProps = dispatch => ({

    /*getActivePost: (activePost) => {
        dispatch(getActivePost(activePost))
    },*/
    fetchData: () => {
        dispatch(fetchPosts())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);


/* ~~~~~~ */