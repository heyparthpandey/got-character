import React from 'react'

const  CharacterItem = ({item}) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.imageUrl} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong> HOUSE:</strong> {item.family}
            </li>
            <li>
              <strong>FIRST NAME:</strong> {item.firstName}
            </li>
            <li>
              <strong>LAST NAME:</strong> {item.lastName}
            </li>
            <li>
              <strong>FULL NAME:</strong> {item.fullName}
            </li>
            <li>
              <strong>TITLE:</strong> {item.title}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default  CharacterItem