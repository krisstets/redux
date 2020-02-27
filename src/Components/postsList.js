import React from 'react';
import service from '../Service/service';
import { getAllPosts } from '../Actions/postAction';
import { connect } from "react-redux";


class PostsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    async componentDidMount() {
    
        let posts = null;
        posts = await service.getAllPosts();
        console.log(posts);
        this.props.getPosts(posts);
        this.setState({ isLoaded: true });
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
                        return (<tr key={id}>
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
