function UserProfile (props) {
    return(<>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>bio: {props.bio}</p>    
    </>
    );
}

export default UserProfile ;