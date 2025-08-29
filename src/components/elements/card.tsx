export default function Card(props) {
  return (
    <div className="p-4 rounded-lg border w-3xl">
      <p>hello card</p>
      {props.children}
    </div>
  );
}
