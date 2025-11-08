export default function FormButton() {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log('Form sending');
  };

  return (
    <button onClick={handleClick}>Send</button>
  );
}