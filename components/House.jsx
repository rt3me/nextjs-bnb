import Link from 'next/link'

export default function House(props) {
  console.log("Propees:", props);

  return (
    <Link href="/houses/[id]" as={'/houses/' + props.id}>
      <a>
        <img src={props.picture} alt="props.title" width="100%" />

        <p>
          {props.type} - {props.town}
        </p>
        <p>{props.title}</p>
      </a>
    </Link>
  )
}