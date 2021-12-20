import houses from '../../houses';

export default function House(props) {
  return (
    <div>
      <img src={props.house.picture} alt={props.house.title} width="100%" />

      <p>
        {props.house.type} - {props.house.town}
      </p>
      <p>{props.house.title}</p>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query;

  return {
    props: {
      house: houses.filter((house) => house.id === parseInt(id))[0],
    }
  };
}
