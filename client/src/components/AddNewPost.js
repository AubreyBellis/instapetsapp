import React, {Component} from "react";
import $ from "jquery";
import {Link} from "react-router";



class AddNewPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            newTitle:"",
            newImage:"",
            newText:""
            // lengthDialog:false,
            // titleLengthDialog:false
        }
    }
    submitNewPost(){
        if(!this.state.newTitle || !this.state.newText ){
            return false;
        }
        let submitObject = {
            title:this.state.newTitle,
            image:this.state.newImage,
            text:this.state.newText
        };
        console.log("data I'm sending is", submitObject);
        $.ajax({
            url:"/api/posts",
            data:JSON.stringify(submitObject),
            type:"POST",
            contentType:"application/json",
            success:function(){
                
            this.setState({newTitle:"", newImage:"", newText:""});
            }.bind(this),
            error:function(error){
                console.error(error.toString());
            }
        });
    };
    render(){
        console.log("rendering AddNewPost component");
        return(
            <div>
                <h1>New Post</h1>
                </div>
        );
    }
}
export default AddNewPost;
        
    //         <form>
    //         (<Input text={this.state.newTitle} onChange={this.titleChange.bind(this)} placeholder="Post title"/>)<br/>
    //         (<Input value={this.state.newImage} onChange={this.imageChange.bind(this)} placeholder="Post image"/>)<br />
    //         <Link to ="/">Back Home</Link>
    //         </form>
    //         )
    //     }
    // }

