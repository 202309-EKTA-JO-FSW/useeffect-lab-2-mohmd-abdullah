import Form from '../Components/Form/Form'
import UserCard from '../Components/UserCard/UserCard'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUserName] = useState(null);
  const url = `https://api.github.com/users/${username}`;
  console.log(url);

  useEffect(() => {
    fetch(url) //https://api.github.com/users/${username}
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [username])
  console.log(data)

  function handleFormInput(i){
    setUserName(i)
  }
  //console.log("Parent: ", handleFormInput)
  console.log("username: ", username);

  return (
    <div className="card">
      <Form userNameInput={handleFormInput}/>
      <UserCard fullName={data['name']} userName={data['login']} avatar={data['avatar_url']}/>
    </div>
  );
}
