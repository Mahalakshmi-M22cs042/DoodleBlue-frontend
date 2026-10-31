
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function load() {
      setLoader(true);
      setError("");

      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(res,"User Fetched")

        if (res.ok){
          const data=await res.json();
          console.log(data,"data");
          setUser(data)
      }else{
        throw new Error(`Status ${res.status}`)
      } 
    } catch (err) {
      console.log(err,"error")
        if (!ignore) {
          setError(err.message);
        }

      } finally {
        if (!ignore) {
          setLoader(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };

  }, []);

 
return (
  <>
    {loader ? (
      <>Page is loading...</>
    ) : (
      <>
        <header>
          <h1>User Details</h1>
        </header>
<div className="user-container">
  {user?.map((element) => (
    <div className="user-card" key={element.id}>

      <h2>{element.name}</h2>

      <p><b>User ID:</b> {element.id}</p>

      <p><b>Username:</b> {element.username}</p>

      <p><b>Email:</b> {element.email}</p>

      <p><b>Phone:</b> {element.phone}</p>

      <p><b>Website:</b> {element.website}</p>

      <h3>Address Details</h3>

      <p><b>Street:</b> {element.address.street}</p>

      <p><b>Suite:</b> {element.address.suite}</p>

      <p><b>City:</b> {element.address.city}</p>

      <p><b>Zipcode:</b> {element.address.zipcode}</p>

      <p><b>Latitude:</b> {element.address.geo.lat}</p>

      <p><b>Longitude:</b> {element.address.geo.lng}</p>

      <h3>Company Details</h3>

      <p><b>Company:</b> {element.company.name}</p>

      <p><b>Catch Phrase:</b> {element.company.catchPhrase}</p>

      <p><b>Business:</b> {element.company.bs}</p>

    </div>
  ))}
</div>

      </>
    )}
  </>
);
};

export default App;
