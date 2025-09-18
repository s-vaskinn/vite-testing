// components has to be uppser case to be recognized as a component
import Rating from './components/Rating';

const App = () => {
  return (
    <div>
      <div><Rating heading="How do you feel about react?" feedbackMessages={["Hate it", "Dislike it", "Meh", "Like it", "Love it"]}/></div>
      <div><Rating color="red"/></div>
      
    </div>
  );
};

export default App;