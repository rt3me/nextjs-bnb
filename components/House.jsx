export default function House(props) {
  console.log("Propees:", props);

  return (
    <div>
      <img src={props.picture} alt="props.title" width="100%" />

      <p>
        {props.type} - {props.town}
      </p>
      <p>{props.title}</p>
    </div>
  )
}