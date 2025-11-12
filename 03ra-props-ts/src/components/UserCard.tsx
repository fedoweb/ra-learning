export type GenderType = 'male' | 'female' | 'unknown';

export type UserCardProps = {
  name: string;
  age: number;
  gender?: GenderType;
  isActive: boolean;
  hobbies: string[];
  onClick: () => void;
}

function UserCard({ name, age, gender = 'unknown', isActive, hobbies, onClick }: UserCardProps) {
  return (
    <div className="user-card" onClick={onClick}>
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      <p>Пол: {gender}</p>
      <p>Статус: {isActive ? 'Активен' : 'Неактивен'}</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserCard;