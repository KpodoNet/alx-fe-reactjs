function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid #aaa',
        padding: '15px',
        margin: '15px auto',
        borderRadius: '10px',
        maxWidth: '400px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}
    >
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;

