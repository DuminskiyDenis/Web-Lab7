export const GoodsCard = (props) => {
  return (
    <div>
      <img style = {{width:"280px"}}src={props.image} alt={props.name} />
      <h3>contract: {props.contract}</h3>
      <h2>{props.name}</h2>
    </div>
  )
}