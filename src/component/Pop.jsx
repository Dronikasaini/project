import { useNavigate } from 'react-router-dom';

function SomeComponent() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/profile', { state: { userId: 123 } });
  };

  return <button onClick={handleNavigate}>Go to Profile</button>;
}
// React Router v6 mein, navigate('/profile', { state: { userId: 123 } }) ka istemal karke aap ek route par navigate karte hain aur saath hi kuch state data bhi pass karte hain. Yeh state data destination component mein useLocation() hook ke zariye accessible hota hai.