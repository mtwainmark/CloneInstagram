import React,{Component} from 'react';
import User from './User';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';

export default class Users extends Component{
    InstaService = new InstaService();
    state={
        posts: [],
        error: false
    }
    
    componentDidMount(){
        this.updatePosts();
    }

    updatePosts(){
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) =>{
        this.setState({
            posts,
            error: false
        });
    }

    onError = () =>{
        this.setState({
            error: true
        });
    }

    renderItems(arr){
        return arr.map(item =>{
            const {name, altname, photo} = item;
            return (
                <div className="right">
                    <div className="users__block">
                        <User src={photo} 
                        alt={altname} 
                        name={name}
                        min/>
                    </div>
                </div>
            )
        });
    }

    render(){
        const {error, posts} = this.state;
        const items = this.renderItems(posts);

        if(error){
            return <ErrorMessage/>
        }
        
        return(
            <div className="right">
                {items}
            </div>
        )
    }
}