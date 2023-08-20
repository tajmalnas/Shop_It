import './AccountCard.css'

const AccountCard = () => {
  return (
    <div className='acc-card'>
        <div className='acc-card-upper'>
            <div className='acc-card-upper-img'>
                <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80' className='img1'></img>
                <img src='https://www.freeiconspng.com/thumbs/edit-icon-png/edit-icon-png-24.png' className='img2'></img>
            </div>
        </div>
        <div className='acc-card-lower'>
            <div className='acc-card-lower-name'>
                <h3>Taj Malnas</h3>
            </div>
            <div className='acc-card-lower-email'>
                <h3>tajmalnas@pccoepune.org</h3>
            </div>
        </div>
    </div>
  )
}

export default AccountCard