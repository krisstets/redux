import React from 'react';
import service from '../Service/service';
import { getAllPosts } from '../Actions/postAction';
import { connect } from "react-redux";
import {store} from '../index'



class PostsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    async componentDidMount() {
        let posts = await service.getAllPosts();
        this.props.getPosts(posts);
        this.setState({ isLoaded: true });
        console.log(store.getState())
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
                        return (<tr key={id} onClick={e => { this.props.history.push(`/post-info/${id}/${userId}`); }}>
                            <td>{id}</td>
                            <td>{userId}</td>
                            <td className='post-title'>{title}</td>
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
    getPosts: (posts) => {
        dispatch(getAllPosts(posts));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
