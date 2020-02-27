import './style.css';
import React from 'react';
import service from '../Service/service';
import {store} from '../Store/ConfigureStore';
import {getAllPosts} from '../Service'



export default class PostsList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

   async componentDidMount() {
       /* if (this.state.posts.length === 0 && this.context.posts.length) {
            this.setState({
                posts: this.context.posts,
                isLoaded: true
            });
        } else if(!this.context.posts.length){ 
            let posts = null;
            posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            
        }*/

        let posts = null;
        posts = await service.getAllPosts();
        store.dispatch(getAllPosts(posts));
        this.setState({ isLoaded: true});
        console.log(store.getState().data);
    }

    


/*    render() {
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
                    {this.state.posts.map(post => {
                        const { id, userId, title, activePost} = post;
                        return (<tr key={id} onClick={e => { this.context.updatePost(activePost); this.props.history.push(`/post-info/${id}/${userId}`); }}>
                            <td>{id}</td>
                            <td>{userId}</td>
                            <td className='post-title'>{title}</td>
                        </tr>);
                    })}
                </tbody>
            </table>);
        
        }
    }*/
}
