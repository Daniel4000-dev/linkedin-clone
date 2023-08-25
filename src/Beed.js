import { React, useEffect, useState } from 'react';
 import './Feed.css';
 import InputOption from './InputOption';
 import CreateIcon from '@mui/icons-material/Create';
 import { Image, CalendarViewDay, EventNote, Subscriptions, SentimentSatisfiedOutlined } from '@mui/icons-material';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';


const Beed = () => {
 
    const [posts , setPosts] = useState([]);
 
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
 
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("data").get().then((querySnapshot) => {
            
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setPosts(arr => [...arr , data]);
                 
            });
        })
    }
     
    // Display the result on the page
    return (
        <div>
         
        {
            posts.map((data)  => (
                  <Post
                    key={data.id}
                    name={data.name}
                    description={data.description}
                    message={data.message}
                    photoUrl={data.photoUrl}
                   />
            ))
        }
        </div>
 
    );
} 
export default Beed;