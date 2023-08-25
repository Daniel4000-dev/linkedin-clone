import { React, useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import { Image, CalendarViewDay, EventNote, Subscriptions, SentimentSatisfiedOutlined } from '@mui/icons-material';
import Post from './Post';
import { db } from './firebase';
import { collection, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

 function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]); 

  // Fetch the data from the store
   useEffect(() => {
    const fetchMail = async () => {
      const 
      const colRef = await getDocs(collection(db, 'post'));
      setPosts(colRef.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      console.log(colRef)
    };
    fetchMail();
    }, []);

  const sendPost = (e) => {
    e.preventDefault();

    // Add data to the store
    try {
      await addDoc(collection(db, 'posts').add({
          name: 'Daniel Adekunle',
          description: 'this is a test',
          message: input,
          photoUrl: '',
          timestamp: serverTimestamp(),
      }))
  // onclose()
      } catch (err) {
        alert(err)
    }
  };
  //   db.collection('posts').add({
  //     name: 'Daniel Adekunle',
  //     description: 'this is a test',
  //     message: input,
  //     photoUrl: '',
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   })
  //   .then((docRef) => {
  //     alert('data successfully submitted');
  //   })
  //   .catch((error) => {
  //     console.error('erroe adding doc: ', error);
  //   });
  //  }

   return (
     <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form onSubmit={sendPost}>
                    <input value={input} onChange={e => setInput(e.target.value)}
                    type='text' />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={Image} title='photo'
                 color='#70B5F9' />
                <InputOption Icon={Subscriptions} title='video'
                 color='#E7A33E' />
                <InputOption Icon={EventNote} title='Event'
                 color='#C0C0CD' />
                <InputOption Icon={CalendarViewDay} title='Write article'
                 color='#7FC15E' />
            </div>
        </div>


         {/* Display the result on the page */}
        {posts && posts.map(({id, data: { name, description, message,
        photoUrl } }) => {
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
           />
        })}
     </div>
   )
 }
 
 export default Feed