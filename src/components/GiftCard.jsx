export const GiftCard = ({url, title }) => {
  return (
    <div className='card'>
        <img src={ url } alt={ title } />
        <p> { title }</p>
    </div>
  )
}
