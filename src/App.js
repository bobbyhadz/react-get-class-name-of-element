import './App.css';

export default function App() {
  const handleClick = event => {
    console.log('className 👉️', event.currentTarget.className);

    if (event.currentTarget.classList.contains('my-class')) {
      console.log('Element contains class');
    } else {
      console.log('Element does NOT contain class');
    }
  };

  return (
    <div>
      <div
        className="my-class second-class"
        onClick={handleClick}
      >
        bobbyhadz.com
      </div>
    </div>
  );
}
