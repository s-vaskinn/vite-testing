const Rating = () => {
  return (
  <div style={styles.container}>
    <h2 style={styles.heading}>Rate your expirience</h2>
  </div>

  );
}

const styles = {    
    container: {
        textAlign: 'center',
        fontFamily: 'Arial',
        padding: '20px',
    },
    heading: {color: 'red'},
}

// export default makes the component available for import in other files without using curly braces
export default Rating;