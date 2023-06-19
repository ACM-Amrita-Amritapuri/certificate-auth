import { useParams } from 'react-router-dom';

function Certificate() {
      let { id } = useParams();
      return (
        <div>
          Now showing post {id}
        </div>
      );
    }
  export default Certificate;
    

  