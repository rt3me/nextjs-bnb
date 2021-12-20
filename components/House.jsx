export default function House(props) {
  console.log("Propees:", props);

  return (
    <div>
      <img src={props.picture} alt="props.title" width="100%" />

      <p>
        {props.type} - {props.town}
      </p>
      <p>{props.title}</p>

      <style jsx>{`
        .houses {
          display: grid;
          grid-template-columns: 49% 49%;
          grid-template-rows: 300px 300px;
          grid-gap: 2%;
        }
      `}</style>
    </div>
  )
}