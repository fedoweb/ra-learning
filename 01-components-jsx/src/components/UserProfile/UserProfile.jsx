import './UserProfile.css'

export function UserProfile({ data }) {
  return (
    <div className="user-profile">
      <img src={data.avatar} alt="" />
      <div className="user-profile__content">
        <h3 className="user-profile__name">{data.name}</h3>
        <div className="user-profile__status">{data.status}</div>
      </div>
    </div>
  )
}